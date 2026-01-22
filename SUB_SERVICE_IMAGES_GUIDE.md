# Sub-Service Images - Generation Guide

## 🎯 Overview
This guide contains prompts to generate professional service icons for all sub-services. These images will be used:
1. In the service card boxes on main service pages
2. In the hero sections of individual sub-service pages

---

## 📊 Status Summary

### ✅ **Already Have Images**

#### Administrative Support (6/6)
- ✅ Email Management
- ✅ Document Creation  
- ✅ Data Entry & Management
- ✅ File Organization
- ✅ Travel Coordination
- ✅ Expense Management

#### Customer Service (3/6 - Need 3 More)
- ✅ Live Chat Support (`Live-chat.png`)
- ✅ Help Desk Support (`Help_Desk.png`)
- ✅ Customer Feedback (`Customer-Feedback.png`)
- ❌ Phone Support (MISSING)
- ❌ Email Support (MISSING)
- ❌ Order Processing (MISSING)

---

## 🎨 **MISSING IMAGES TO GENERATE**

### Customer Service - Phone Support
**Save as:** `public/service-icons/customer services/phone-support.png`

**Prompt:**
```
Modern flat illustration for Phone Support service. Central element: professional customer service representative wearing headset speaking on phone with friendly expression. Surrounding elements: ringing phone icon, call quality indicator, timer for call duration, satisfied customer icon, call notes. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### Customer Service - Email Support
**Save as:** `public/service-icons/customer services/email-support.png`

**Prompt:**
```
Modern flat illustration for Email Support service. Central element: email inbox interface with support tickets and quick reply templates. Surrounding elements: @ symbol, sent/received arrows, priority star, response time clock, email template icons. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### Customer Service - Order Processing
**Save as:** `public/service-icons/customer services/order-processing.png`

**Prompt:**
```
Modern flat illustration for Order Processing service. Central element: order fulfillment workflow showing stages from order to delivery. Surrounding elements: shopping cart, package box, checkmark for completed, delivery truck, order confirmation document. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

## 📋 **CUSTOMER SERVICE SUBPAGE HERO SECTIONS**

Once you have all the images, update these subpage files to include the images in their hero sections:

### 1. Live Chat Support
**File:** `app/services/customer-service/live-chat-support/page.tsx`
**Image:** `/service-icons/customer services/Live-chat.png` ✅

### 2. Phone Support  
**File:** `app/services/customer-service/phone-support/page.tsx`
**Image:** `/service-icons/customer services/phone-support.png` ⏳

### 3. Email Support
**File:** `app/services/customer-service/email-support/page.tsx`
**Image:** `/service-icons/customer services/email-support.png` ⏳

### 4. Help Desk Support
**File:** `app/services/customer-service/help-desk/page.tsx`
**Image:** `/service-icons/customer services/Help_Desk.png` ✅

### 5. Order Processing
**File:** `app/services/customer-service/order-processing/page.tsx`
**Image:** `/service-icons/customer services/order-processing.png` ⏳

### 6. Customer Feedback
**File:** `app/services/customer-service/customer-feedback/page.tsx`
**Image:** `/service-icons/customer services/Customer-Feedback.png` ✅

---

## 📋 **ADMINISTRATIVE SUPPORT SUBPAGE HERO SECTIONS**

Update these subpage files to include the images in their hero sections:

### 1. Email Management
**File:** `app/services/administrative-support/email-management/page.tsx`
**Image:** `/service-icons/administrtive-support/email management (1).png` ✅

### 2. Document Creation
**File:** `app/services/administrative-support/document-creation/page.tsx`
**Image:** `/service-icons/administrtive-support/document creation (1).png` ✅

### 3. Data Entry
**File:** `app/services/administrative-support/data-entry/page.tsx`
**Image:** `/service-icons/administrtive-support/data entry management.png` ✅

### 4. File Organization
**File:** `app/services/administrative-support/file-organization/page.tsx`
**Image:** `/service-icons/administrtive-support/file organization.png` ✅

### 5. Travel Coordination
**File:** `app/services/administrative-support/travel-coordination/page.tsx`
**Image:** `/service-icons/administrtive-support/travel coordination.png` ✅

### 6. Expense Management
**File:** `app/services/administrative-support/expense-management/page.tsx`
**Image:** `/service-icons/administrtive-support/expense management.png` ✅

---

## 🛠️ **HOW TO UPDATE SUBPAGE HERO SECTIONS**

For each subpage, find the hero section and add the image. Here's the pattern:

```tsx
{/* Hero Section */}
<section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-white pt-5 pb-20 md:pt-7 md:pb-28 px-2">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Column - Text Content */}
      <div>
        {/* Title, description, CTAs */}
      </div>

      {/* Right Column - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative h-[500px] hidden lg:block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent rounded-2xl" />
        <Image
          src="/service-icons/administrtive-support/email management (1).png"
          alt="Email Management Service"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>
    </div>
  </div>
</section>
```

---

## ⏰ **WHEN QUOTA RESETS**

The image generation quota will reset at approximately **7:22 PM** (19:22) your time today.

### After Quota Resets:
1. Generate the 3 missing customer service images
2. Save them with the exact file names specified above
3. Update all subpage hero sections with their respective images

---

## 🎨 **IMAGE SPECIFICATIONS**

All images should follow these specs:
- **Style**: Modern flat illustration
- **Colors**: Blue (#215ACD), Light Blue, Yellow accents
- **Background**: White or transparent
- **Elements**: 1 central element + 4-6 supporting elements
- **Format**: PNG
- **No Text**: Clean vectors only, no text overlays

---

## ✅ **CHECKLIST**

### Main Service Pages:
- [x] Administrative Support - All 6 images working ✅
- [ ] Customer Service - 3/6 images (need Phone, Email, Order Processing)

### Subpages to Update:
#### Administrative Support:
- [ ] Email Management hero section
- [ ] Document Creation hero section  
- [ ] Data Entry hero section
- [ ] File Organization hero section
- [ ] Travel Coordination hero section
- [ ] Expense Management hero section

#### Customer Service:
- [ ] Live Chat Support hero section
- [ ] Phone Support hero section (after image generated)
- [ ] Email Support hero section (after image generated)
- [ ] Help Desk Support hero section
- [ ] Order Processing hero section (after image generated)
- [ ] Customer Feedback hero section

---

## 📌 **PRIORITY ORDER**

1. **IMMEDIATE** (Now): Main service page cards are using existing images ✅
2. **WHEN QUOTA RESETS** (After 7:22 PM):
   - Generate 3 missing customer service images
3. **NEXT**: Update all 12 subpage hero sections with images

---

**Note:** The main service pages (administrative-support and customer-service) are now displaying images correctly in their service cards. The next step is to add these same images to each individual subpage's hero section.
