import { motion } from "framer-motion";
import StarBackground from "./StarBackground";

const phases = [
  { title: "Phase 1", desc: "Core runner prototype + internal playtests." },
  { title: "Phase 2", desc: "NFT art finalization + whitelist events." },
  { title: "Phase 3", desc: "Public NFT mint & seasonal leaderboard." },
  { title: "Phase 4", desc: "PVP modes, tokenized rewards, tournaments." },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative min-h-screen py-24 bg-gradient-to-b from-black via-deepSpace to-black">
      <StarBackground />
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold neon">Roadmap</h2>

        <div className="relative mt-12">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 md:translate-x-0" />
          <div className="space-y-12">
            {phases.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <div key={i} className={`relative md:flex ${left ? "md:justify-start" : "md:justify-end"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`w-full md:w-1/2 p-6 rounded-2xl border border-white/10 bg-white/[0.02] card-hover ${
                      left ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-neonCyan shadow-glow" />
                      <h3 className="text-xl font-bold">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-white/75">{p.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
