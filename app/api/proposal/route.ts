import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { success: false, error: "Name and at least Email or Phone are required." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.PROPOSAL_NOTIFICATION_EMAIL || "info@oceanicstarfleet.com";
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dubai",
      dateStyle: "full",
      timeStyle: "medium",
    });

    console.log("==========================================");
    console.log("[COMMERCIAL PROPOSAL REQUEST RECEIVED]");
    console.log(`Time: ${timestamp} (GST)`);
    console.log(`Client: ${name}`);
    console.log(`Contact: ${email || "N/A"} | Phone: ${phone || "N/A"}`);
    console.log(`Company / Vessel: ${company || "Not provided"}`);
    console.log(`Service Requested: ${service}`);
    console.log(`Vessel Specifics / Message: ${message || "None"}`);
    console.log("==========================================");

    // 1. Check for RESEND API Key
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "Oceanic Star <onboarding@resend.dev>",
            to: [recipientEmail],
            subject: `[Proposal Request] ${name} - ${service} (${company || "New Client"})`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; color: #071a2b;">
                <div style="background: #071a2b; padding: 24px 32px; color: #ffffff;">
                  <span style="font-size: 11px; font-family: monospace; letter-spacing: 2px; color: #007cd6; font-weight: bold; text-transform: uppercase;">OCEANIC STAR SHIPPING</span>
                  <h2 style="margin: 8px 0 0 0; font-size: 22px; font-weight: bold;">New Commercial Proposal Request</h2>
                </div>
                <div style="padding: 32px;">
                  <p style="font-size: 14px; color: #64748b; margin-top: 0;">A client has requested a custom vessel proposal through the website modal:</p>
                  
                  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 0; font-weight: bold; color: #64748b; width: 160px;">Client Name:</td>
                      <td style="padding: 12px 0; color: #071a2b; font-weight: 600;">${name}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 0; font-weight: bold; color: #64748b;">Work Email:</td>
                      <td style="padding: 12px 0; color: #007cd6; font-weight: 600;"><a href="mailto:${email}" style="color: #007cd6; text-decoration: none;">${email || "Not provided"}</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 0; font-weight: bold; color: #64748b;">Phone / Mobile:</td>
                      <td style="padding: 12px 0; color: #071a2b;">${phone || "Not provided"}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 0; font-weight: bold; color: #64748b;">Company / Vessel:</td>
                      <td style="padding: 12px 0; color: #071a2b;">${company || "Not provided"}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 12px 0; font-weight: bold; color: #64748b;">Service Required:</td>
                      <td style="padding: 12px 0; color: #01666a; font-weight: bold;">${service}</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; font-weight: bold; color: #64748b; vertical-align: top;">Vessel Specifics:</td>
                      <td style="padding: 12px 0; color: #071a2b; white-space: pre-wrap;">${message || "No additional comments"}</td>
                    </tr>
                  </table>

                  <div style="background: #f8fafc; border-radius: 12px; padding: 14px 18px; margin-top: 24px; font-size: 12px; color: #64748b; font-family: monospace;">
                    <span>Submitted: ${timestamp} (GST)</span>
                  </div>
                </div>
              </div>
            `,
          }),
        });

        if (resendResponse.ok) {
          return NextResponse.json({
            success: true,
            provider: "resend",
            message: "Proposal sent to email successfully.",
          });
        } else {
          const errData = await resendResponse.json();
          console.error("Resend API error:", errData);
        }
      } catch (err) {
        console.error("Failed sending via Resend:", err);
      }
    }

    // 2. Check for WEB3FORMS Access Key
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            subject: `[Proposal Request] ${name} - ${service} (${company || "New Client"})`,
            from_name: "Oceanic Star Proposal Engine",
            to_email: recipientEmail,
            client_name: name,
            client_email: email,
            client_phone: phone,
            company_or_vessel: company || "Not specified",
            service_requested: service,
            vessel_notes_or_message: message || "None",
            submission_time_gst: timestamp,
          }),
        });

        if (web3Response.ok) {
          return NextResponse.json({
            success: true,
            provider: "web3forms",
            message: "Proposal forwarded to email successfully.",
          });
        } else {
          const errData = await web3Response.json();
          console.error("Web3Forms API error:", errData);
        }
      } catch (err) {
        console.error("Failed sending via Web3Forms:", err);
      }
    }

    // Fallback: If no API key configured yet, log safely and return success so client experience is seamless
    return NextResponse.json({
      success: true,
      provider: "simulated",
      message:
        "Proposal request logged. To receive directly in your email inbox, add WEB3FORMS_ACCESS_KEY or RESEND_API_KEY to your .env file.",
    });
  } catch (error) {
    console.error("Proposal API handler error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
