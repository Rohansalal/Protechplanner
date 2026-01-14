import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Log the form data (for development/testing)
    console.log("=== New Consultation Request ===")
    console.log("Name:", formData.fullName)
    console.log("Email:", formData.email)
    console.log("Phone:", formData.phone)
    console.log("Company:", formData.companyName)
    console.log("Website:", formData.website)
    console.log("Employee Count:", formData.employeeCount)
    console.log("Turnover:", formData.turnover)
    console.log("Services:", formData.services)
    console.log("Other Service:", formData.otherService)
    console.log("================================")

    // Check if SMTP is configured
    const isSmtpConfigured = process.env.SMTP_USER && process.env.SMTP_PASSWORD

    if (isSmtpConfigured) {
      // Only try to send emails if SMTP is configured
      try {
        const nodemailer = require("nodemailer")

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        })

        // Email to admin
        const adminMailOptions = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
          subject: `New Consultation Request from ${formData.fullName}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #215ACD 0%, #1a4aa8 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
                .content { background: #f8f9fc; padding: 30px; border-radius: 0 0 10px 10px; }
                .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #215ACD; }
                .field-label { font-weight: bold; color: #215ACD; margin-bottom: 5px; }
                .field-value { color: #333; }
                .services-list { list-style: none; padding: 0; }
                .services-list li { padding: 8px 0; border-bottom: 1px solid #e0e0e0; }
                .services-list li:last-child { border-bottom: none; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🎉 New Consultation Request</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="field-label">Full Name</div>
                    <div class="field-value">${formData.fullName}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Email</div>
                    <div class="field-value">${formData.email}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Phone Number</div>
                    <div class="field-value">${formData.phone}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Company/Startup Name</div>
                    <div class="field-value">${formData.companyName}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Company Website</div>
                    <div class="field-value"><a href="${formData.website}" target="_blank">${formData.website}</a></div>
                  </div>
                  <div class="field">
                    <div class="field-label">Employee Count</div>
                    <div class="field-value">${formData.employeeCount}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Turnover</div>
                    <div class="field-value">${formData.turnover}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Services Requested</div>
                    <div class="field-value">
                      <ul class="services-list">
                        ${formData.services.map((service: string) => `<li>✓ ${service}</li>`).join("")}
                      </ul>
                      ${formData.otherService ? `<p><strong>Other Service:</strong> ${formData.otherService}</p>` : ""}
                    </div>
                  </div>
                </div>
              </div>
            </body>
            </html>
          `,
        }

        // Email to client
        const clientMailOptions = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: formData.email,
          subject: "Thank You for Your Consultation Request - ProTech Planner",
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #215ACD 0%, #1a4aa8 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
                .content { background: #f8f9fc; padding: 30px; border-radius: 0 0 10px 10px; }
                .highlight { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #15D137; }
                .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>✅ Consultation Request Received</h1>
                </div>
                <div class="content">
                  <p>Dear ${formData.fullName},</p>
                  <p>Thank you for scheduling a consultation with <strong>ProTech Planner</strong>!</p>
                  <div class="highlight">
                    <p><strong>We have received your request and our team will review your information.</strong></p>
                    <p>One of our expert consultants will reach out to you within <strong>24-48 hours</strong> to discuss your requirements and schedule a meeting at your convenience.</p>
                  </div>
                  <p><strong>Your Submission Summary:</strong></p>
                  <ul>
                    <li><strong>Company:</strong> ${formData.companyName}</li>
                    <li><strong>Services:</strong> ${formData.services.join(", ")}</li>
                    <li><strong>Employee Count:</strong> ${formData.employeeCount}</li>
                    <li><strong>Turnover:</strong> ${formData.turnover}</li>
                  </ul>
                  <p>If you have any immediate questions, please don't hesitate to contact us.</p>
                  <p>Best regards,<br><strong>ProTech Planner Team</strong></p>
                  <div class="footer">
                    <p>This is an automated confirmation email. Please do not reply to this message.</p>
                  </div>
                </div>
              </div>
            </body>
            </html>
          `,
        }

        await transporter.sendMail(adminMailOptions)
        await transporter.sendMail(clientMailOptions)

        console.log("✅ Emails sent successfully")
      } catch (emailError) {
        console.error("⚠️ Email sending failed (but form was saved):", emailError)
        // Don't fail the request if email fails
      }
    } else {
      console.log("ℹ️ SMTP not configured - skipping email sending")
    }

    return NextResponse.json(
      {
        message: "Consultation request submitted successfully",
        emailSent: isSmtpConfigured
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("❌ Error processing consultation request:", error)
    return NextResponse.json(
      { error: "Failed to submit consultation request", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
