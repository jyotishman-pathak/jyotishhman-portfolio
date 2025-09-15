import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

import { keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  "applicationName": "Jyotishman Pathak",
"title": "Jyotishman Pathak | Full-Stack Engineer & Systems Architect",
"description": "Full-Stack Engineer specializing in distributed systems, real-time applications, and scalable infrastructure. Expertise in Next.js, Node.js, Kubernetes, and event-driven architecture.",
"authors": [
{
"name": "Jyotishman Pathak",
"url": "https://yourwebsite.com"
}
],
"creator": "Jyotishman Pathak",
"referrer": "origin-when-cross-origin",
"keywords": [
"full-stack developer",
"distributed systems",
"real-time applications",
"Kubernetes",
"microservices",
"system architecture",
"Node.js",
"Next.js",
"TypeScript",
"Kafka",
"Redis",
"PostgreSQL",
"DevOps",
"SRE"
],
"metadataBase": new URL("https://yourwebsite.com"),
"alternates": {
"canonical": "https://yourwebsite.com"
},
"openGraph": {
"title": "Jyotishman Pathak | Full-Stack Engineer",
"description": "Building scalable, distributed systems with modern technologies. Expertise in full-stack development, real-time applications, and cloud infrastructure.",
"url": "https://yourwebsite.com",
"siteName": "Jyotishman Pathak Portfolio",
"images": [
{
"url": "/og-image.png",
"width": 1200,
"height": 630,
"alt": "Jyotishman Pathak - Full-Stack Engineer Portfolio"
}
],
"locale": "en_US",
"type": "website"
},
"twitter": {
"card": "summary_large_image",
"title": "Jyotishman Pathak | Full-Stack Engineer",
"description": "Building scalable, distributed systems with modern tech stack including Next.js, Node.js, Kubernetes, and Kafka",
"images": ["/og-image.png"],
"creator": "@jyotishman1368"
}
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
