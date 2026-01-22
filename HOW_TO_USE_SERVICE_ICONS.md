# How to Use Service Icons in Your Pages

## 📍 Icon Locations

All service icons are located in: `public/service-icons/[service-name]/service-icon.png`

## 🎯 Usage in Service Pages

### Example 1: Main Service Page Hero Section

```tsx
import Image from 'next/image';

export default function AdministrativeSupportPage() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-white to-[#F0F4FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Administrative Support Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional administrative assistance to streamline your business operations
            </p>
          </div>
          
          {/* Right Side - Service Icon */}
          <div className="flex justify-center">
            <Image 
              src="/service-icons/administrtive-support/service-icon.png"
              alt="Administrative Support Services"
              width={500}
              height={500}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Example 2: Service Cards Grid

```tsx
import Image from 'next/image';

const services = [
  {
    title: "Administrative Support",
    icon: "/service-icons/administrtive-support/service-icon.png",
    description: "Comprehensive admin services",
    link: "/services/administrative-support"
  },
  {
    title: "Customer Service",
    icon: "/service-icons/customer services/service-icon.png",
    description: "Professional customer support",
    link: "/services/customer-service"
  },
  // ... more services
];

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.title} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
          <div className="w-24 h-24 mx-auto mb-4">
            <Image 
              src={service.icon}
              alt={service.title}
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
          <p className="text-gray-600 text-center">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Example 3: Feature Section with Icon

```tsx
import Image from 'next/image';

export default function ServiceFeature() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <Image 
              src="/service-icons/business-analytics/service-icon.png"
              alt="Business Analytics"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Business Analytics</h2>
            <p className="text-gray-600 mb-4">
              Data-driven insights and reporting to help you make informed business decisions.
            </p>
            <ul className="space-y-2">
              <li>✓ Data collection and analysis</li>
              <li>✓ Custom report creation</li>
              <li>✓ Market research</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 📝 Service Icon Mapping

| Service Name | Icon Path | Status |
|--------------|-----------|--------|
| Administrative Support | `/service-icons/administrtive-support/service-icon.png` | ✅ Ready |
| Customer Service | `/service-icons/customer services/service-icon.png` | ✅ Ready |
| Appointment Scheduling | `/service-icons/appointment-scheduling/service-icon.png` | ✅ Ready |
| Social Media Management | `/service-icons/social-media-management/service-icon.png` | ✅ Ready |
| Business Analytics | `/service-icons/business-analytics/service-icon.png` | ✅ Ready |
| Digital Marketing | `/service-icons/digital-marketing/service-icon.png` | ✅ Ready |
| Content Writing | `/service-icons/content-writing/service-icon.png` | ✅ Ready |
| Hire Developers | `/service-icons/hire-developers/service-icon.png` | ⏳ Pending |
| Graphic and Web Designing | `/service-icons/graphic-web-designing/service-icon.png` | ✅ Ready |
| Finance and Accounts | `/service-icons/finance-accounts/service-icon.png` | ✅ Ready |
| Outsource to India | `/service-icons/outsource-india/service-icon.png` | ✅ Ready |
| Legal Process Outsourcing | `/service-icons/legal-process-outsourcing/service-icon.png` | ✅ Ready |
| Mobile App Development | `/service-icons/mobile-app-development/service-icon.png` | ✅ Ready |
| Hire Virtual Assistance | `/service-icons/hire-virtual-assistance/service-icon.png` | ✅ Ready |
| Contact Centre Outsourcing | `/service-icons/contact-centre-outsourcing/service-icon.png` | ✅ Ready |
| Offshore Business Registration | `/service-icons/offshore-business-registration/service-icon.png` | ✅ Ready |

## 🎨 Styling Tips

### Responsive Icon Sizes
```tsx
// Small icon (for cards)
<Image src="..." width={80} height={80} className="w-20 h-20" />

// Medium icon (for features)
<Image src="..." width={200} height={200} className="w-48 h-auto" />

// Large icon (for hero sections)
<Image src="..." width={500} height={500} className="w-full max-w-lg h-auto" />
```

### Adding Animations
```tsx
<Image 
  src="/service-icons/customer services/service-icon.png"
  alt="Customer Service"
  width={300}
  height={300}
  className="w-full h-auto transform hover:scale-110 transition-transform duration-300"
/>
```

### Background Variations
```tsx
{/* On colored background */}
<div className="bg-[#F8FAFF] p-8 rounded-lg">
  <Image src="..." width={200} height={200} />
</div>

{/* With shadow */}
<div className="bg-white p-6 rounded-lg shadow-lg">
  <Image src="..." width={150} height={150} />
</div>
```

## ⚡ Best Practices

1. **Always use Next.js Image component** for automatic optimization
2. **Set appropriate width and height** to prevent layout shift
3. **Use descriptive alt text** for accessibility
4. **Add `priority` prop** for above-the-fold images
5. **Use responsive classes** for different screen sizes

## 🔄 Updating Service Pages

You can now update all your service pages with these professional icons. Here are the pages that should be updated:

- `/services/administrative-support/page.tsx`
- `/services/customer-service/page.tsx`
- `/services/appointment-scheduling/page.tsx`
- `/services/social-media-management/page.tsx`
- `/services/business-analytics/page.tsx`
- `/services/digital-marketing/page.tsx`
- `/services/content-writing/page.tsx`
- `/services/hire-developers/page.tsx` (icon pending)
- `/services/graphic-web-designing/page.tsx`
- `/services/finance-accounts/page.tsx`
- `/services/outsource-india/page.tsx`
- `/services/legal-process-outsourcing/page.tsx`
- `/services/mobile-app-development/page.tsx`
- `/services/hire-virtual-assistance/page.tsx`
- `/services/contact-centre-outsourcing/page.tsx`
- `/services/offshore-business-registration/page.tsx`

Would you like me to update any of these pages with the new icons?
