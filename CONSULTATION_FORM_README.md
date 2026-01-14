# Consultation Form Setup Guide

## Overview
The consultation form is a 4-step multi-page form that collects client information and sends email notifications via SMTP.

## Features
- ✅ 4-step form with progress indicator
- ✅ Form validation at each step
- ✅ Responsive design matching the ProTech Planner theme
- ✅ SMTP email integration
- ✅ Sends confirmation emails to both admin and client
- ✅ Reusable component for use on multiple pages

## Files Created

### 1. Components
- `components/consultation-form.tsx` - Reusable form component

### 2. Pages
- `app/consultation/page.tsx` - Dedicated consultation page

### 3. API Routes
- `app/api/consultation/route.ts` - Handles form submission and email sending

## Setup Instructions

### Step 1: Configure Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
ADMIN_EMAIL=admin@protechplanner.com
```

### Step 2: Gmail Setup (if using Gmail)

1. Enable 2-factor authentication on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an App Password
4. Use the App Password as `SMTP_PASSWORD` in your `.env.local`

### Step 3: Other SMTP Providers

**Outlook:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

## Usage

### On a Dedicated Page
The form is already set up at `/consultation` route.

### As a Component on Other Pages
```tsx
import { ConsultationForm } from "@/components/consultation-form"

export default function YourPage() {
  return (
    <div>
      <ConsultationForm />
    </div>
  )
}
```

### With Custom Submit Handler
```tsx
import { ConsultationForm } from "@/components/consultation-form"

export default function YourPage() {
  const handleSubmit = async (data) => {
    // Your custom logic
    console.log(data)
  }

  return (
    <div>
      <ConsultationForm onSubmit={handleSubmit} />
    </div>
  )
}
```

## Form Steps

### Step 1: Personal & Company Details
- Full Name
- Email
- Phone Number
- Company/Startup Name

### Step 2: Company Information
- Company Website/Reference Link
- Employee Count (8 range options)
- Turnover (8 range options)

### Step 3: Services Selection
- Multiple service selection
- Custom "Other Service" option with text input

### Step 4: Review & Confirm
- Summary of all entered information
- Final submission

## Email Templates

The API sends two emails:

1. **Admin Notification** - Detailed form submission with all client information
2. **Client Confirmation** - Thank you email with submission summary

Both emails are beautifully formatted with HTML templates matching the brand colors.

## Testing

1. Navigate to `/consultation`
2. Fill out all 4 steps
3. Click "Confirm" on the final step
4. Check both admin and client email inboxes

## Customization

### Change Colors
Edit the color values in `components/consultation-form.tsx`:
- Primary: `#215ACD` (Navy Blue)
- Success: `#15D137` (Green)
- Background: `#F8F9FC` (Light Gray)

### Modify Services List
Edit the `services` array in `components/consultation-form.tsx`

### Update Email Templates
Edit the HTML templates in `app/api/consultation/route.ts`

## Troubleshooting

### Emails not sending
- Verify SMTP credentials in `.env.local`
- Check if 2FA is enabled and App Password is used (for Gmail)
- Ensure firewall allows outbound connections on port 587

### Form validation issues
- Check browser console for errors
- Verify all required fields are filled

## Support
For issues or questions, contact the development team.
