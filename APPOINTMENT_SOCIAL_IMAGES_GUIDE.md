# 🎨 Appointment Scheduling & Social Media Management - Sub-Service Images

## 📋 Overview
This document contains prompts and instructions for creating images for 12 sub-services (6 for each service category).

---

## 📅 **APPOINTMENT SCHEDULING - 6 Sub-Services**

### 1. Calendar Management
**Save as:** `public/service-icons/appointment-scheduling/calendar-management.png`
**Subpage:** `app/services/appointment-scheduling/calendar-management/page.tsx`

**Prompt:**
```
Modern flat illustration for Calendar Management service. Central element: organized multi-calendar view interface showing different color-coded calendars synced together. Surrounding elements: Google Calendar icon, Outlook icon, sync arrows, recurring event symbol, shared calendar icon. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### 2. Booking Systems
**Save as:** `public/service-icons/appointment-scheduling/booking-systems.png`
**Subpage:** `app/services/appointment-scheduling/booking-systems/page.tsx`

**Prompt:**
```
Modern flat illustration for Booking Systems service. Central element: online booking interface with available time slots grid. Surrounding elements: calendar picker, time zone selector, confirmation checkmark, payment integration icon, automated booking confirmation. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### 3. Meeting Coordination
**Save as:** `public/service-icons/appointment-scheduling/meeting-coordination.png`
**Subpage:** `app/services/appointment-scheduling/meeting-coordination/page.tsx`

**Prompt:**
```
Modern flat illustration for Meeting Coordination service. Central element: meeting room setup with multiple participants connected virtually. Surrounding elements: video conference icon, agenda checklist, location pin, attendee list, meeting invite envelope. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### 4. Reminder Services
**Save as:** `public/service-icons/appointment-scheduling/reminder-services.png`
**Subpage:** `app/services/appointment-scheduling/reminder-services/page.tsx`

**Prompt:**
```
Modern flat illustration for Reminder Services. Central element: notification bell with multiple reminder alerts. Surrounding elements: smartphone with push notification, email reminder, SMS icon, countdown timer, calendar with highlighted dates. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### 5. Rescheduling Management
**Save as:** `public/service-icons/appointment-scheduling/rescheduling-management.png`
**Subpage:** `app/services/appointment-scheduling/rescheduling-management/page.tsx`

**Prompt:**
```
Modern flat illustration for Rescheduling Management service. Central element: calendar with events being moved and rearranged with drag arrows. Surrounding elements: refresh/sync icon, conflict resolution symbol, alternative time suggestions, cancellation option, rebook confirmation. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### 6. Time Zone Coordination
**Save as:** `public/service-icons/appointment-scheduling/time-zone-coordination.png`
**Subpage:** `app/services/appointment-scheduling/time-zone-coordination/page.tsx`

**Prompt:**
```
Modern flat illustration for Time Zone Coordination service. Central element: world map with multiple time zone clocks showing different times. Surrounding elements: globe icon, UTC/GMT indicator, time zone converter, multiple clock faces, international meeting symbol. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

## 📱 **SOCIAL MEDIA MANAGEMENT - 6 Sub-Services**

### 1. Content Creation
**Save as:** `public/service-icons/social-media-management/content-creation.png`
**Subpage:** `app/services/social-media-management/content-creation/page.tsx`

**Prompt:**
```
Modern flat illustration for Social Media Content Creation. Central element: creative workspace with design tools creating social media posts. Surrounding elements: photo/video camera, text editor, color palette, template library, content calendar. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### 2. Post Scheduling
**Save as:** `public/service-icons/social-media-management/post-scheduling.png`
**Subpage:** `app/services/social-media-management/post-scheduling/page.tsx`

**Prompt:**
```
Modern flat illustration for Social Media Post Scheduling. Central element: scheduling dashboard with posts queued in timeline view. Surrounding elements: calendar grid, clock showing optimal posting times, auto-publish icon, queue management, multi-platform icons. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### 3. Community Management
**Save as:** `public/service-icons/social-media-management/community-management.png`
**Subpage:** `app/services/social-media-management/community-management/page.tsx`

**Prompt:**
```
Modern flat illustration for Community Management service. Central element: engaged community with chat bubbles and interactions. Surrounding elements: comment replies, message inbox, user profile icons, engagement hearts and likes, moderation tools. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### 4. Analytics & Reporting
**Save as:** `public/service-icons/social-media-management/analytics.png`
**Subpage:** `app/services/social-media-management/analytics/page.tsx`

**Prompt:**
```
Modern flat illustration for Social Media Analytics & Reporting. Central element: analytics dashboard with growth charts and engagement metrics. Surrounding elements: upward trending graph, follower count counter, engagement rate pie chart, reach statistics, export report icon. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### 5. Hashtag Optimization
**Save as:** `public/service-icons/social-media-management/hashtag-optimization.png`
**Subpage:** `app/services/social-media-management/hashtag-optimization/page.tsx`

**Prompt:**
```
Modern flat illustration for Hashtag Optimization service. Central element: hashtag symbol (#) with trending tags and search magnifying glass. Surrounding elements: trending tag list, performance analytics, reach indicator, hashtag set library, competitor hashtag analysis. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

### 6. Influencer Outreach
**Save as:** `public/service-icons/social-media-management/influencer-outreach.png`
**Subpage:** `app/services/social-media-management/influencer-outreach/page.tsx`

**Prompt:**
```
Modern flat illustration for Influencer Outreach service. Central element: network of influencer profiles connected together. Surrounding elements: collaboration handshake, outreach message template, follower count metrics, partnership agreement, campaign collaboration icon. Color scheme: blue (#215ACD), light blue, yellow accents, white background. Professional business style, clean vectors, no text
```

---

## 📝 **IMPLEMENTATION STEPS**

### Step 1: Generate Images (When Quota Resets)
1. Use the prompts above to generate all 12 images
2. Save each with the exact filename specified
3. Place in the correct directory

### Step 2: Update Main Pages

#### Appointment Scheduling - Add Image Property
Edit `app/services/appointment-scheduling/page.tsx` lines 25-62:

```tsx
const SERVICES = [
  {
    title: "Calendar Management",
    description: "Comprehensive calendar management across multiple platforms to keep your schedule organized",
    icon: Calendar,
    image: "/service-icons/appointment-scheduling/calendar-management.png",  // ADD THIS
    href: "/services/appointment-scheduling/calendar-management",
  },
  {
    title: "Booking Systems",
    description: "Professional online booking systems that make scheduling effortless for your clients",
    icon: Users,
    image: "/service-icons/appointment-scheduling/booking-systems.png",  // ADD THIS
    href: "/services/appointment-scheduling/booking-systems",
  },
  {
    title: "Meeting Coordination",
    description: "Complete meeting coordination and logistics management for seamless operations",
    icon: Settings,
    image: "/service-icons/appointment-scheduling/meeting-coordination.png",  // ADD THIS
    href: "/services/appointment-scheduling/meeting-coordination",
  },
  {
    title: "Reminder Services",
    description: "Automated reminder systems to reduce no-shows and keep everyone on schedule",
    icon: Bell,
    image: "/service-icons/appointment-scheduling/reminder-services.png",  // ADD THIS
    href: "/services/appointment-scheduling/reminder-services",
  },
  {
    title: "Rescheduling Management",
    description: "Efficient rescheduling and cancellation handling to maintain schedule flexibility",
    icon: RefreshCw,
    image: "/service-icons/appointment-scheduling/rescheduling-management.png",  // ADD THIS
    href: "/services/appointment-scheduling/rescheduling-management",
  },
  {
    title: "Time Zone Coordination",
    description: "Global time zone coordination for international clients and remote meetings",
    icon: Globe,
    image: "/service-icons/appointment-scheduling/time-zone-coordination.png",  // ADD THIS
    href: "/services/appointment-scheduling/time-zone-coordination",
  },
];
```

#### Social Media Management - Add Image Property
Edit `app/services/social-media-management/page.tsx` lines 26-63:

```tsx
const SERVICES = [
  {
    icon: FileText,
    title: "Content Creation",
    description: "High-quality content creation and curation that resonates with your target audience across all platforms.",
    image: "/service-icons/social-media-management/content-creation.png",  // ADD THIS
    link: "/services/social-media-management/content-creation"
  },
  {
    icon: Calendar,
    title: "Post Scheduling",
    description: "Strategic post scheduling across all major social media platforms for optimal reach and engagement.",
    image: "/service-icons/social-media-management/post-scheduling.png",  // ADD THIS
    link: "/services/social-media-management/post-scheduling"
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description: "Active community management and engagement to build strong relationships with your followers.",
    image: "/service-icons/social-media-management/community-management.png",  // ADD THIS
    link: "/services/social-media-management/community-management"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive social media analytics and reporting to track performance and drive growth.",
    image: "/service-icons/social-media-management/analytics.png",  // ADD THIS
    link: "/services/social-media-management/analytics"
  },
  {
    icon: Hash,
    title: "Hashtag Optimization",
    description: "Strategic hashtag research and optimization to increase visibility and reach your target audience.",
    image: "/service-icons/social-media-management/hashtag-optimization.png",  // ADD THIS
    link: "/services/social-media-management/hashtag-optimization"
  },
  {
    icon: UserPlus,
    title: "Influencer Outreach",
    description: "Influencer outreach coordination and partnership management for expanded brand reach.",
    image: "/service-icons/social-media-management/influencer-outreach.png",  // ADD THIS
    link: "/services/social-media-management/influencer-outreach"
  }
];
```

### Step 3: Update Service Card Display

Find the service cards section (around line 200-250) and add image display:

```tsx
{/* Card Image/Illustration Area */}
<div className="relative h-[200px] bg-gradient-to-b from-white to-[#F8F8F8] overflow-hidden">
  <Image
    src={service.image}  // ADD THIS
    alt={service.title}
    fill
    className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    loading="lazy"
  />
</div>
```

### Step 4: Update All 12 Subpage Hero Sections

For each subpage file, add the image to the hero section (~line 160-170):

```tsx
{/* Right Column - Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="relative h-[500px] hidden lg:block"
>
  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-transparent rounded-2xl" />
  <Image
    src="/service-icons/appointment-scheduling/[service-name].png"  // UPDATE THIS
    alt="[Service Name]"  // UPDATE THIS
    fill
    className="object-contain drop-shadow-2xl"
    priority
  />
</motion.div>
```

---

## 📂 **File Structure Required**

Create these directories if they don't exist:
```
public/
└── service-icons/
    ├── appointment-scheduling/
    │   ├── calendar-management.png
    │   ├── booking-systems.png
    │   ├── meeting-coordination.png
    │   ├── reminder-services.png
    │   ├── rescheduling-management.png
    │   └── time-zone-coordination.png
    └── social-media-management/
        ├── content-creation.png
        ├── post-scheduling.png
        ├── community-management.png
        ├── analytics.png
        ├── hashtag-optimization.png
        └── influencer-outreach.png
```

---

## ✅ **Checklist**

### Appointment Scheduling:
- [ ] Generate 6 images
- [ ] Create directory structure
- [ ] Update main page SERVICES array
- [ ] Update service cards to display images
- [ ] Update calendar-management subpage
- [ ] Update booking-systems subpage
- [ ] Update meeting-coordination subpage
- [ ] Update reminder-services subpage
- [ ] Update rescheduling-management subpage
- [ ] Update time-zone-coordination subpage

### Social Media Management:
- [ ] Generate 6 images
- [ ] Create directory structure
- [ ] Update main page SERVICES array
- [ ] Update service cards to display images
- [ ] Update content-creation subpage
- [ ] Update post-scheduling subpage
- [ ] Update community-management subpage
- [ ] Update analytics subpage
- [ ] Update hashtag-optimization subpage
- [ ] Update influencer-outreach subpage

---

## ⏰ **Timeline**

**When quota resets (~7:22 PM):**
1. Generate all 12 images (15-20 minutes)
2. Update main pages with image properties (5 minutes)
3. Update card display sections (5 minutes)
4. Update all 12 subpage hero sections (20-30 minutes)

**Total estimated time: 45-60 minutes**

---

**Ready to implement once images are generated! 🚀**
