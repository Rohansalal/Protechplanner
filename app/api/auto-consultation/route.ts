import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Rate limiting setup
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            request.headers.get('x-client-ip') ||
            'unknown';

        // Rate limiting check
        const now = Date.now();
        const windowStart = rateLimit.get(ip) || 0;

        if (now - windowStart < RATE_LIMIT_WINDOW) {
            const requestCount = rateLimit.get(`${ip}_count`) || 0;
            if (requestCount >= MAX_REQUESTS) {
                return NextResponse.json(
                    { error: 'Too many requests. Please try again later.' },
                    { status: 429 }
                );
            }
            rateLimit.set(`${ip}_count`, requestCount + 1);
        } else {
            rateLimit.set(ip, now);
            rateLimit.set(`${ip}_count`, 1);
        }

        // Parse request body
        const { name, email, company, service, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Check if SMTP credentials are configured
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
            console.error('SMTP environment variables are not configured');
            return NextResponse.json(
                { error: 'Email service is not configured. Please try again later.' },
                { status: 500 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content for Auto Consultation
        const mailOptions = {
            from: process.env.SMTP_FROM || `"ProTech Planner" <${process.env.SMTP_USER}>`,
            to: 'protechplanner@gmail.com', // Explicitly requested destination
            replyTo: email,
            subject: `OFFER CLAIM: Free Consultation + 20% Off Request - ${name}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: 'Arial', sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0; 
              padding: 0; 
              background-color: #f9fafb;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: white;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header { 
              background: #8b5cf6; /* Different color for Offer (Purple/Violet) */
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .subtitle {
              font-size: 16px;
              margin-top: 5px;
              opacity: 0.9;
              font-weight: bold;
              background: rgba(255,255,255,0.2);
              display: inline-block;
              padding: 4px 12px;
              border-radius: 20px;
            }
            .content { 
              padding: 30px; 
            }
            .field { 
              margin-bottom: 20px; 
              padding-bottom: 20px;
              border-bottom: 1px solid #e5e7eb;
            }
            .field:last-child {
              border-bottom: none;
            }
            .label { 
              font-weight: bold; 
              color: #374151; 
              display: block;
              margin-bottom: 5px;
            }
            .value { 
              color: #6b7280; 
            }
            .message-content {
              margin-top: 10px; 
              padding: 15px; 
              background: #f9fafb; 
              border-left: 4px solid #8b5cf6;
              border-radius: 4px;
            }
            .footer { 
              margin-top: 30px; 
              padding: 20px; 
              background: #f3f4f6; 
              text-align: center; 
              font-size: 14px; 
              color: #6b7280;
            }
            .badge {
              background: #ef4444;
              color: white;
              padding: 2px 8px;
              border-radius: 4px;
              font-size: 12px;
              display: inline-block;
              vertical-align: middle;
              margin-left: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Offer Claim</h1>
              <div class="subtitle">FREE Consultation + 20% OFF</div>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Client Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">Company:</span>
                <span class="value">${company || 'Not provided'}</span>
              </div>
              <div class="field">
                <span class="label">Service Interest:</span>
                <span class="value">${service || 'General Inquiry'}</span>
              </div>
              <div class="field">
                <span class="label">Requirements / Message:</span>
                <div class="message-content">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>User claimed the "Limited Time Offer" from the auto-popup modal.</p>
              <p>Please respond promptly to secure this lead.</p>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
NEW OFFER CLAIM - FREE CONSULTATION + 20% OFF
=============================================

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Service: ${service || 'General Inquiry'}

Message:
${message}

---
Submitted from IP: ${ip}
Received: ${new Date().toLocaleString()}
      `.trim()
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Request sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send request' },
            { status: 500 }
        );
    }
}
