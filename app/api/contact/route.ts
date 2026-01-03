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
    const { name, email, company, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, and message are required.' },
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

    // Validate field lengths
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 2000 characters' },
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

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (error) {
      console.error('SMTP connection error:', error);
      return NextResponse.json(
        { error: 'Email service configuration error. Please check your SMTP settings.' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || `"ProTech Planner" <${process.env.SMTP_USER}>`,
      to: 'protechplanner@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
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
              background: #3b82f6; 
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
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
              border-left: 4px solid #3b82f6;
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
            .ip-info {
              font-size: 12px;
              color: #9ca3af;
              margin-top: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>ProTech Planner Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${phone}</span>
              </div>
              <div class="field">
                <span class="label">Company:</span>
                <span class="value">${company || 'Not provided'}</span>
              </div>
              <div class="field">
                <span class="label">Service Interested In:</span>
                <span class="value">${service || 'Not specified'}</span>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-content">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <div class="ip-info">
                Submitted from IP: ${ip} | ${new Date().toLocaleString()}
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the ProTech Planner contact form.</p>
              <p>Please respond to the customer within 24 hours.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
NEW CONTACT FORM SUBMISSION - ProTech Planner
============================================

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || 'Not provided'}
Service: ${service || 'Not specified'}

Message:
${message}

---
Submitted from IP: ${ip}
Received: ${new Date().toLocaleString()}
      `.trim()
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        messageId: result.messageId 
      },
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email configuration error. Please check SMTP credentials.';
      } else if (error.message.includes('ENOTFOUND')) {
        errorMessage = 'Unable to connect to email server.';
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// Handle GET requests
export async function GET(request: NextRequest) {
  return NextResponse.json(
    { 
      message: 'Contact API is working',
      timestamp: new Date().toISOString(),
      method: 'GET'
    },
    { status: 200 }
  );
}

// Handle other methods
export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PATCH() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}