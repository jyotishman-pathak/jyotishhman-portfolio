"use client";

import React from "react";

import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,

  FaJsSquare,
  FaImage,
  FaCoins,
  FaAnchor,
  FaSun,
  FaCandyCane,
  FaBook,
  FaLeaf,
  FaFileContract,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiRedis,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiSocketdotio,
  SiApachekafka,
  SiPrisma,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiNewrelic,
  SiRust,
} from "react-icons/si";

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
    title: "Languages & Databases",
    data: [
      { title: "TypeScript", logoComponent: SiTypescript, color: "#3178C6" },
      { title: "JavaScript", logoComponent: SiJavascript, color: "#F7DF1E" },
      { title: "PostgreSQL", logoComponent: SiPostgresql, color: "#4169E1" },
      { title: "Redis", logoComponent: SiRedis, color: "#DC382D" },
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#000000" },
      { title: "React", logoComponent: FaReact, color: "#61DAFB" },
      { title: "HTML5", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS3", logoComponent: FaCss3, color: "#1572B6" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & Infrastructure",
    data: [
      { title: "Node.js", logoComponent: FaNodeJs, color: "#339933" },
      { title: "Express.js", logoComponent: SiExpress, color: "#000000" },
      { title: "Socket.io", logoComponent: SiSocketdotio, color: "#010101" },
      { title: "Kafka", logoComponent: SiApachekafka, color: "#231F20" },
      { title: "Prisma", logoComponent: SiPrisma, color: "#2D3748" },
    ],
  },
  {
  title: "Blockchain / Web3",
  data: [
    { title: "Solana", logoComponent: FaSun, color: "#9945FF" },
    { title: "Anchor Framework", logoComponent: FaAnchor, color: "#00E0FF" },
    { title: "Rust", logoComponent: SiRust, color: "#000000" }, // use a rust icon
    { title: "SPL Tokens", logoComponent: FaCoins, color: "#FFD700" },
    { title: "Metaplex", logoComponent: FaImage, color: "#FF69B4" },
    { title: "Web3.js", logoComponent: FaJsSquare, color: "#F7DF1E" },
    { title: "Candy Machine", logoComponent: FaCandyCane, color: "#FFA500" },
    { title: "On‑Chain Orderbooks", logoComponent: FaBook, color: "#00FF00" },
    { title: "Carbon Credits", logoComponent: FaLeaf, color: "#228B22" },
    { title: "Smart Contracts", logoComponent: FaFileContract, color: "#FFFFFF" },
  ]
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
