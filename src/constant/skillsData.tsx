"use client";

import React from "react";
import {
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiSocketdotio,
  SiApachekafka,
  SiPrisma,
  SiDocker,
  SiAmazon,
  SiWebrtc, // Add this if available, or use a generic icon
} from "react-icons/si";
import { FaNodeJs, FaGitAlt, FaLinux } from "react-icons/fa";

interface LogoProps {
  title: string;
  logoComponent: React.FC<{ size?: number; color?: string }>;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Core Languages",
    data: [
      { title: "TypeScript", logoComponent: SiTypescript, color: "#3178C6" },
      // JS implied by TS + Node
    ],
  },
  {
    title: "Frontend (Next.js Stack)",
    data: [
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#000000" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
      // React, HTML, CSS implied by Next.js
    ],
  },
  {
    title: "Backend & Real-Time",
    data: [
      { title: "Node.js", logoComponent: FaNodeJs, color: "#339933" },
      { title: "Express", logoComponent: SiExpress, color: "#000000" },
      { title: "Socket.io", logoComponent: SiSocketdotio, color: "#010101" },
      { title: "WebRTC", logoComponent: SiWebrtc, color: "#333333" }, // P2P/Video
      { title: "Redis", logoComponent: SiRedis, color: "#DC382D" },
      { title: "PostgreSQL", logoComponent: SiPostgresql, color: "#4169E1" },
      { title: "Prisma", logoComponent: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    data: [
      { title: "Docker", logoComponent: SiDocker, color: "#2496ED" },
      { title: "AWS Basics", logoComponent: SiAmazon, color: "#FF9900" },
      { title: "Kafka", logoComponent: SiApachekafka, color: "#231F20" }, // optional
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "Linux", logoComponent: FaLinux, color: "#000000" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">⚡ Skills</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {skillsData.map((section) => (
          <div key={section.title}>
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <div className="flex flex-wrap gap-6">
              {section.data.map(({ title, logoComponent: Icon, color }) => (
                <div
                  key={title}
                  className="flex flex-col items-center w-20 text-center"
                >
                  <Icon size={32} color={color} />
                  <span className="mt-2 text-sm">{title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}