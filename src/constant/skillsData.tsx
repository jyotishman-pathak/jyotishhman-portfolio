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
  FaDocker,
  FaAws,
  FaDatabase,
  FaShieldAlt,
  FaProjectDiagram,
  FaBroadcastTower,
  FaListAlt,
  FaExpandArrowsAlt,
  FaChartLine,
  FaMicrochip,
  FaExchangeAlt,
  FaTachometerAlt,
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
    title: "DevOps & Cloud",
    data: [
      { title: "Docker", logoComponent: FaDocker, color: "#2496ED" },
      { title: "Kubernetes", logoComponent: SiKubernetes, color: "#326CE5" },
      { title: "AWS", logoComponent: FaAws, color: "#FF9900" },
      { title: "Prometheus", logoComponent: SiPrometheus, color: "#E6522C" },
      { title: "Grafana", logoComponent: SiGrafana, color: "#F46800" },
      { title: "New Relic", logoComponent: SiNewrelic, color: "#008C99" },
    ],
  },
  {
    title: "Concepts & Technologies",
    data: [
      { title: "Microservices", logoComponent: FaMicrochip, color: "#1890FF" },
      {
        title: "Event-Driven Architecture",
        logoComponent: FaExchangeAlt,
        color: "#722ED1",
      },
      {
        title: "Rate Limiting",
        logoComponent: FaTachometerAlt,
        color: "#FA541C",
      },
      {
        title: "DDOS Protection",
        logoComponent: FaShieldAlt,
        color: "#52C41A",
      },
      {
        title: "Database Indexing",
        logoComponent: FaDatabase,
        color: "#FAAD14",
      },
      {
        title: "Database Normalization",
        logoComponent: FaProjectDiagram,
        color: "#13C2C2",
      },
      {
        title: "Pub/Sub Patterns",
        logoComponent: FaBroadcastTower,
        color: "#EB2F96",
      },
      {
        title: "Message Queues",
        logoComponent: FaListAlt,
        color: "#F5222D",
      },
      {
        title: "Auto Scaling",
        logoComponent: FaExpandArrowsAlt,
        color: "#722ED1",
      },
      {
        title: "Monitoring & Observability",
        logoComponent: FaChartLine,
        color: "#1890FF",
      },
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
