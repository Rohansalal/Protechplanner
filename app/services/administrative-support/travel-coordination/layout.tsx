import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Coordination Services | Professional Travel Planning | ProTech Planner",
  description: "Professional travel coordination services. Our virtual assistants book flights, hotels, arrange itineraries, and manage travel details. Expert planning. Free consultation.",
  keywords: [
    "travel coordination",
    "travel coordination services",
    "travel planning",
    "virtual assistant travel",
    "professional travel planning",
    "business travel services",
    "itinerary planning",
  ],
  openGraph: {
    title: "Travel Coordination Services | ProTech Planner",
    description: "Professional travel coordination from expert virtual assistants.",
    type: "website",
    url: "https://www.protechplanner.com/services/administrative-support/travel-coordination",
  },
  alternates: {
    canonical: "https://www.protechplanner.com/services/administrative-support/travel-coordination",
  },
};

export default function TravelCoordinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
