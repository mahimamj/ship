import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const possiblePaths = [
      path.join(process.cwd(), "public", "Oceanic_Star_Shipping_INDIA.pdf"),
      path.join(process.cwd(), "public", "Oceanic Star Shipping INDIA.pdf"),
      path.join(process.cwd(), "Oceanic Star Shipping INDIA.pdf"),
    ];

    let filePath = "";
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        filePath = p;
        break;
      }
    }

    if (!filePath) {
      return new NextResponse("Brochure file not found on server", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Oceanic Star Shipping INDIA.pdf"',
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("Error serving brochure:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function HEAD() {
  return GET();
}
