# Contact Form Email Configuration Guide

## Overview
The contact form requires SMTP email configuration to send emails. Follow this guide to set up email functionality.

## Environment Variables Required

Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Server Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

# SMTP Authentication
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here

# Email From Address
SMTP_FROM="ProTech Planner <your-email@gmail.com>"
```

## Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Create an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "ProTech Planner Contact Form"
   - Copy the 16-character password
3. **Configure .env.local**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=protechplanner@gmail.com
   SMTP_PASSWORD=your-16-char-app-password
   SMTP_FROM="ProTech Planner <protechplanner@gmail.com>"
   ```

## Alternative SMTP Providers

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
SMTP_FROM="ProTech Planner <noreply@yourdomain.com>"
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASSWORD=your-mailgun-smtp-password
SMTP_FROM="ProTech Planner <noreply@yourdomain.com>"
```

### Outlook/Office365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_FROM="ProTech Planner <your-email@outlook.com>"
```

## Testing the Configuration

1. **Restart your development server** after adding environment variables:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

2. **Test the contact form**:
   - Fill out all required fields
   - Submit the form
   - Check for success message
   - Verify email received at protechplanner@gmail.com

## Troubleshooting

### Error: "Email service is not configured"
- **Cause**: Environment variables are missing
- **Solution**: Create `.env.local` file with SMTP credentials

### Error: "Invalid login"
- **Cause**: Incorrect SMTP credentials
- **Solution**: 
  - For Gmail: Use App Password, not regular password
  - Verify SMTP_USER and SMTP_PASSWORD are correct

### Error: "Unable to connect to email server"
- **Cause**: Incorrect SMTP host or port
- **Solution**: Verify SMTP_HOST and SMTP_PORT settings

### Error: "Too many requests"
- **Cause**: Rate limiting (5 requests per minute)
- **Solution**: Wait 1 minute before trying again

## Security Notes

- **Never commit `.env.local`** to version control
- `.env.local` is already in `.gitignore`
- Use App Passwords for Gmail (never use your main password)
- Consider using a dedicated email service for production

## Production Deployment

For production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard
2. Use a professional email service (SendGrid, Mailgun, AWS SES)
3. Configure SPF and DKIM records for better deliverability
4. Monitor email sending logs

## Current Status

✅ Contact form UI - Working
✅ Form validation - Working  
✅ API endpoint - Working
❌ Email sending - **Requires SMTP configuration**

Once you configure the SMTP settings, the contact form will be fully functional!
