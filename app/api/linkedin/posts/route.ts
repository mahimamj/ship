import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface LinkedInApiPost {
  id: string;
  commentary?: string;
  content?: {
    media?: {
      id?: string;
      title?: string;
      altText?: string;
    };
    multiImage?: {
      images?: Array<{
        id?: string;
        altText?: string;
      }>;
    };
    article?: {
      source?: string;
      thumbnail?: string;
      title?: string;
      description?: string;
    };
  };
  publishedAt?: number;
  createdAt?: number;
  lastModifiedAt?: number;
}

interface LinkedInImageAsset {
  id: string;
  downloadUrl?: string;
  status?: string;
}

interface NormalizedLinkedInPost {
  id: string;
  title: string;
  caption: string;
  image?: string;
  publishedAt?: string;
  linkedinUrl: string;
  companyName: string;
  badge: string;
}

const LINKEDIN_API_BASE = "https://api.linkedin.com/rest";
const DEFAULT_COMPANY_URL = "https://www.linkedin.com/company/oceanic-star-shipping-private-limited/";

function getOrganizationUrn() {
  if (process.env.LINKEDIN_ORGANIZATION_URN) {
    return process.env.LINKEDIN_ORGANIZATION_URN;
  }

  if (process.env.LINKEDIN_ORGANIZATION_ID) {
    return `urn:li:organization:${process.env.LINKEDIN_ORGANIZATION_ID}`;
  }

  return null;
}

function getPostUrl(postId: string) {
  return `https://www.linkedin.com/feed/update/${postId}/`;
}

function getLinkedInHeaders(accessToken: string) {
  return {
    Authorization: `Bearer ${accessToken}`,
    "Linkedin-Version": process.env.LINKEDIN_API_VERSION || "202609",
    "X-Restli-Protocol-Version": "2.0.0",
  };
}

function extractImageUrns(post: LinkedInApiPost) {
  const imageUrns = new Set<string>();

  if (post.content?.media?.id?.startsWith("urn:li:image:")) {
    imageUrns.add(post.content.media.id);
  }

  post.content?.multiImage?.images?.forEach((image) => {
    if (image.id?.startsWith("urn:li:image:")) {
      imageUrns.add(image.id);
    }
  });

  if (post.content?.article?.thumbnail?.startsWith("urn:li:image:")) {
    imageUrns.add(post.content.article.thumbnail);
  }

  return Array.from(imageUrns);
}

function firstImageUrn(post: LinkedInApiPost) {
  return extractImageUrns(post)[0];
}

function getTitle(post: LinkedInApiPost) {
  const articleTitle = post.content?.article?.title?.trim();
  if (articleTitle) return articleTitle;

  const commentary = post.commentary?.trim() || "LinkedIn update";
  const firstLine = commentary.split(/\r?\n/).find(Boolean) || commentary;
  return firstLine.length > 96 ? `${firstLine.slice(0, 93)}...` : firstLine;
}

function getBadge(post: LinkedInApiPost) {
  if (post.content?.multiImage?.images?.length) return "PHOTO UPDATE";
  if (post.content?.media?.id?.startsWith("urn:li:image:")) return "LINKEDIN POST";
  if (post.content?.article) return "ARTICLE";
  return "COMPANY UPDATE";
}

function normalizePost(post: LinkedInApiPost, imageByUrn: Map<string, string>): NormalizedLinkedInPost {
  const imageUrn = firstImageUrn(post);
  const timestamp = post.publishedAt || post.createdAt || post.lastModifiedAt;
  const caption = post.commentary?.trim() || post.content?.article?.description?.trim() || "";

  return {
    id: post.id,
    title: getTitle(post),
    caption,
    image: imageUrn ? imageByUrn.get(imageUrn) : undefined,
    publishedAt: timestamp ? new Date(timestamp).toISOString() : undefined,
    linkedinUrl: getPostUrl(post.id),
    companyName: process.env.LINKEDIN_COMPANY_NAME || "OCEANIC STAR SHIPPING PVT LTD",
    badge: getBadge(post),
  };
}

async function fetchImageDownloads(imageUrns: string[], accessToken: string) {
  const imageByUrn = new Map<string, string>();
  if (!imageUrns.length) return imageByUrn;

  const encodedList = imageUrns.map((urn) => encodeURIComponent(urn)).join(",");
  const response = await fetch(`${LINKEDIN_API_BASE}/images?ids=List(${encodedList})`, {
    cache: "no-store",
    headers: getLinkedInHeaders(accessToken),
  });

  if (!response.ok) return imageByUrn;

  const payload = (await response.json()) as {
    results?: Record<string, LinkedInImageAsset>;
  };

  Object.entries(payload.results || {}).forEach(([urn, asset]) => {
    if (asset.downloadUrl && asset.status !== "WAITING_UPLOAD") {
      imageByUrn.set(urn, asset.downloadUrl);
    }
  });

  return imageByUrn;
}

export async function GET(request: Request) {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const organizationUrn = getOrganizationUrn();
  const companyUrl = process.env.NEXT_PUBLIC_LINKEDIN_COMPANY_URL || DEFAULT_COMPANY_URL;

  if (!accessToken || !organizationUrn) {
    return NextResponse.json(
      {
        configured: false,
        companyUrl,
        posts: [],
        message: "LinkedIn access is not configured on the server.",
      },
      { status: 200 }
    );
  }

  const requestUrl = new URL(request.url);
  const count = Math.min(Number(requestUrl.searchParams.get("count") || 5), 20);
  const postsUrl = new URL(`${LINKEDIN_API_BASE}/posts`);
  postsUrl.searchParams.set("author", organizationUrn);
  postsUrl.searchParams.set("q", "author");
  postsUrl.searchParams.set("count", String(count));
  postsUrl.searchParams.set("sortBy", "CREATED");

  try {
    const response = await fetch(postsUrl, {
      cache: "no-store",
      headers: getLinkedInHeaders(accessToken),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          configured: true,
          companyUrl,
          posts: [],
          message: `LinkedIn returned ${response.status}. Check API access, OAuth scopes, page role, and token expiry.`,
        },
        { status: 200 }
      );
    }

    const payload = (await response.json()) as { elements?: LinkedInApiPost[] };
    const elements = payload.elements || [];
    const imageUrns = Array.from(new Set(elements.flatMap(extractImageUrns)));
    const imageByUrn = await fetchImageDownloads(imageUrns, accessToken);

    return NextResponse.json({
      configured: true,
      companyUrl,
      posts: elements.map((post) => normalizePost(post, imageByUrn)),
    });
  } catch {
    return NextResponse.json(
      {
        configured: true,
        companyUrl,
        posts: [],
        message: "Unable to reach LinkedIn right now.",
      },
      { status: 200 }
    );
  }
}
