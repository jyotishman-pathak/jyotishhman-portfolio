export const projectsData = [
  {
    name: "Ecochain – DMRV Carbon Credit Portal (Solana)",
    description:
      "Government‑integrated platform for digital measurement, reporting, and verification of carbon credits built on Solana. Uses Anchor for smart contracts to track, mint, and retire carbon credits immutably. Implements a dashboard for auditors and registrants, with off‑chain Kafka pipelines for real‑time data ingestion.",
    tech: ["Anchor", "Rust", "Solana CLI", "Next.js", "TypeScript", "Kafka", "PostgreSQL", "Docker"],
    status: "In Development",
    link: "https://github.com/yourusername/ecochain" // When available
  },
  {
    name: "On‑Chain Orderbook Prediction Market (Solana)",
    description:
      "Decentralized prediction market platform similar to Kalshi, built with an on‑chain orderbook on Solana. Utilizes Anchor for program logic, matching engine partially on‑chain, and a React frontend for placing bets. Implements event‑based resolution oracles and USDC settlement. Designed to handle high‑frequency order placements with low latency.",
    tech: ["Anchor", "Rust", "Solana", "TypeScript", "React", "WebSockets", "Redis"],
    status: "Ongoing",
    link: "https://github.com/yourusername/solana-prediction-market"
  }
];