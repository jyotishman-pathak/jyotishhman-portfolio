export const projectsData = [
  {
    name: "GhostMesh – Zero‑Knowledge P2P Collaboration Platform",
    description:
      "Browser‑based peer‑to‑peer video/chat/file‑transfer app with ephemeral Redis signaling, WebRTC NAT traversal, and privacy‑first auth. Implements perfect negotiation, ICE/STUN/TURN fallback, Lua‑based rate limiting, and Dockerized deployment. Built with Feature‑Sliced Design for enterprise‑grade maintainability.",
    tech: ["WebRTC", "Redis (Upstash)", "Next.js", "Node.js", "TypeScript", "Prisma", "Docker", "Lua"],
    status: "In Development",
    github_link: "https://github.com/jyotishman-pathak",
    demo: "#" // Deploy to Vercel + Render when ready
  },

  {
    name: "TicketForge – High‑Concurrency Event Ticketing Backend",
    description:
      "Production‑grade ticketing API handling cache‑aside, distributed locks, Lua rate limiting, and Stream‑based order queues. Prevents overselling via WATCH/MULTI transactions, implements sliding‑window rate limits, and uses HyperLogLog for analytics. Benchmarked with k6, containerized with Docker.",
    tech: ["Redis", "Node.js", "TypeScript", "Fastify", "ioredis", "Docker", "k6", "Lua"],
    status: "Planned",
    github_link: "https://github.com/jyotishman-pathak",
    demo: "#"
  },

  {
    name: "RelayChat – Serverless P2P Chat & File Transfer",
    description:
      "Minimalist WebRTC‑only chat app using DataChannels for ordered/unordered messaging, binary file transfer with backpressure handling, and insertable streams for real‑time video filters. Includes connection state machine with ICE restart, stats dashboard via getStats(), and TURN fallback testing.",
    tech: ["WebRTC", "TypeScript", "Node.js", "coturn", "Vite", "Docker"],
    status: "Planned",
    github_link: "https://github.com/jyotishman-pathak",
    demo: "#"
  }
];