import { motion } from "framer-motion";
import StarBackground from "./StarBackground";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-gradient-to-b from-black via-galaxy to-black">
      <StarBackground />
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold neon">The Game</h2>
          <p className="mt-4 text-white/80">
            11 Dimension Runner is a high-speed obstacle runner set in deep space.
            Collect power cores, evade asteroids, and unlock ships. Top performers
            earn whitelist spots and exclusive NFT airdrops.
          </p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>• Double-jump & shield mechanics</li>
            <li>• Daily & seasonal leaderboards</li>
            <li>• On-chain rewards powered by Abstract</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Gameplay image replaces animated spaceship path */}
          <div className="w-full h-64 md:h-80 rounded-2xl border border-white/10 bg-black/40 overflow-hidden flex items-center justify-center">
            <img
              src="/images/gameplay.jpg" // Place your gameplay image in public/images/gameplay.png
              alt="Gameplay"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-white/60 mt-3 text-sm">Gameplay preview</p>
        </motion.div>
      </div>
    </section>
  );
}
