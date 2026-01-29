# Google Tag Manager & Analytics Setup Guide

Great! Your website now has **Google Tag Manager (GTM)** installed.
This means you can manage Google Analytics, Facebook Pixel, and other marketing tags directly from the GTM dashboard without touching the code.

## 1. Configure Google Tag Manager
1. Go to [Google Tag Manager](https://tagmanager.google.com/).
2. Create an account/container if you haven't already.
3. **Copy your Container ID** (it looks like `GTM-XXXXXX`).
4. Open your project code:
   - File: `app/layout.tsx`
   - Find: `<GoogleTagManager gtmId="GTM-XYZ" />`
   - Replace `"GTM-XYZ"` with your actual ID (e.g., `"GTM-A1B2C3"`).
5. Deploy your website changes.

## 2. Add Google Analytics 4 (GA4)
**You do NOT need to add more code.** Do this inside GTM:
1. In GTM, click **Tags** > **New**.
2. **Tag Configuration**: Select **Google Analytics: GA4 Configuration**.
3. Enter your **Measurement ID** from Google Analytics (starts with `G-`).
4. **Trigger**: Select **All Pages**.
5. Save and Publish.

## 3. Add Facebook Pixel (Meta Ads)
**You do NOT need to add more code.** Do this inside GTM:
1. In GTM, click **Templates** > **Search Gallery**.
2. Search for "Facebook Pixel" (by Facebook Archive) and add it.
   - *Alternatively, use a Custom HTML tag and paste the Facebook Pixel code manually.*
3. Go to **Tags** > **New**.
4. **Tag Configuration**: Select the **Facebook Pixel** template (or Custom HTML).
5. Enter your **Facebook Pixel ID**.
6. **Trigger**: Select **All Pages**.
7. Save and Publish.

## Summary
- **GTM** is the central hub.
- **Next.js** only needs the GTM ID.
- **Analytics & Ads** are managed on the GTM website.

Your code is ready! Just update the ID in `app/layout.tsx`.
