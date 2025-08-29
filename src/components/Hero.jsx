import { useState } from "react";
import { motion } from "framer-motion";
import StarBackground from "./StarBackground";
import { Link } from "react-scroll";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <StarBackground />
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight neon"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Intergalactic Gaming.
            <span className="block text-neonPink">On-Chain Collectibles.</span>
          </motion.h1>

          <motion.p
            className="mt-5 text-white/80 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore the 11th dimension—race across cosmic lanes, defeat asteroids,
            and collect limited-edition NFTs minted on the Abstract blockchain.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <button
              className="px-6 py-3 rounded-full bg-neonPink/20 border border-neonPink hover:bg-neonPink/30 shadow-glow"
              onClick={() => setShowModal(true)}
            >
              Play Game
            </button>
            <Link to="about" smooth duration={700} offset={-70}>
              <button className="px-6 py-3 rounded-full bg-neonCyan/20 border border-neonCyan hover:bg-neonCyan/30 shadow-glow">
                About the Game
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          {/* Spaceship-ish glowing orb */}
          <div className="aspect-square w-full max-w-md mx-auto rounded-full bg-gradient-to-br from-neonCyan/30 to-neonPink/30 blur-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Spaceship image */}
            <img
              src="/images/spaceship.png"
              alt="Spaceship"
              className="w-80 h-80 object-contain z-10"
              style={{ position: "absolute" }}
            />
            <div className="w-64 h-64 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border border-white/30 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-neonCyan/30 to-neonPink/30 rounded-2xl p-10 shadow-2xl text-center border border-white/10"
          >
            <h3 className="text-3xl font-extrabold mb-4 text-neonPink drop-shadow-glow">
              Hold on explorer,
            </h3>
            <p className="text-lg text-white/90 mb-6">
              The game is on the way!
            </p>
            <button
              className="px-6 py-2 rounded-full bg-neonCyan/30 border border-neonCyan text-white font-bold hover:bg-neonCyan/50 shadow-glow"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
