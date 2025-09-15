import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Jyotishman Pathak",
  description:
    "View and download Jyotishman Pathak's professional resume. Student developer with expertise in React, Next.js, and full-stack development.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Jyotishman Pathak",
    description:
      "View and download Jyotishman Pathak's professional resume featuring his experience and skills as a student developer.",
    url: "https://Jyotishman.vercel.app/resume",
    siteName: "Jyotishman Pathak",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Jyotishman Pathak Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Jyotishman Pathak",
    description:
      "View Jyotishman Pathak's professional resume and experience as a Full Stack developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      {/* Preload the PDF for better performance */}
      <link
        rel="preload"
        href="/docs/jyotishman.pdf"
        as="document"
        type="application/pdf"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
