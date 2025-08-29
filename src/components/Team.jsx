import { motion } from "framer-motion";
import StarBackground from "./StarBackground";

const team = [
  { name: "Nova", role: "Game Director", emoji: "🧠" },
  { name: "Quark", role: "Lead Artist", emoji: "🎨" },
  { name: "Ion", role: "Blockchain Eng.", emoji: "🧪" },
  { name: "Vela", role: "Community", emoji: "💬" },
];

export default function Team() {
  return (
    <section id="team" className="relative min-h-screen py-24">
      <StarBackground />
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold neon">Crew</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center card-hover"
            >
              <div className="text-5xl">{m.emoji}</div>
              <p className="mt-3 font-bold">{m.name}</p>
              <p className="text-white/60 text-sm">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
