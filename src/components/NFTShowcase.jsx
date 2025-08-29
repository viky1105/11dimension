import { useState } from "react";
import { motion } from "framer-motion";
import useCountdown from "../hooks/useCountdown";
import StarBackground from "./StarBackground";

const dummyNFTs = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: `Starship #${1000 + i}`,
  trait: ["Nebula", "Quasar", "Supernova", "Wormhole"][i % 4],
  image: `/images/nft${i + 1}.png`,
}));

export default function NFTShowcase() {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [thankYouModal, setThankYouModal] = useState(false);

  const { d, h, m, s } = useCountdown("2025-09-15T18:00:00Z");

  return (
    <section id="nft" className="relative min-h-screen py-24">
      <StarBackground />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold neon">NFT Drop</h2>
            <p className="mt-2 text-white/80">Collect limited ships to unlock perks & seasonal bonuses.</p>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-sm">Mint starts in</p>
            <p className="text-2xl font-extrabold text-neonCyan">
              {d}d : {h}h : {m}m : {s}s
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyNFTs.map((nft, i) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 card-hover"
            >
              <div className="h-40 rounded-xl mb-4 bg-gradient-to-br from-neonCyan/30 to-neonPink/30 flex items-center justify-center overflow-hidden">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">{nft.name}</p>
                  <p className="text-white/60 text-sm">Trait: {nft.trait}</p>
                </div>
                <button
                  className="px-4 py-2 rounded-full bg-neonPink/20 border border-neonPink hover:bg-neonPink/30"
                  onClick={() => setShowModal(true)}
                >
                  Preview
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex gap-4">
          <button
            className="px-6 py-3 rounded-full bg-neonCyan/20 border border-neonCyan hover:bg-neonCyan/30"
            onClick={() => setShowForm((v) => !v)}
          >
            SUBMIT WALLET
          </button>
          <button className="px-6 py-3 rounded-full bg-neonPink/20 border border-neonPink hover:bg-neonPink/30">
            Mint (Soon)
          </button>
        </div>

        {/* Wallet Submission Form */}
        {showForm && (
          <>
            <div className="mt-6 max-w-md mx-auto text-center">
              <p className="text-lg text-white/90 mb-4">
                Thank you but follow&nbsp;
                <a
                  href="https://twitter.com/11dimensiongame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neonCyan underline font-bold"
                >
                  @11dimensiongame
                </a>
                &nbsp; and repost pinned post or your submission is invalid.
              </p>
            </div>
            <form
              action="https://fieldgoal.io/f/fUOdFO" // Replace with your Formspree form ID
              method="POST"
              className="bg-white/5 border border-neonCyan/30 rounded-xl p-6 max-w-md mx-auto flex flex-col gap-4 shadow-lg"
            >
              <label className="text-white font-semibold">
                X Username
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="@yourusername"
                  className="mt-2 w-full px-4 py-2 rounded bg-black/30 border border-neonCyan/40 text-white"
                />
              </label>
              <label className="text-white font-semibold">
                Wallet Address
                <input
                  type="text"
                  name="wallet"
                  required
                  placeholder="0x..."
                  className="mt-2 w-full px-4 py-2 rounded bg-black/30 border border-neonCyan/40 text-white"
                />
              </label>
              <button
                type="submit"
                className="mt-4 px-6 py-2 rounded-full bg-neonCyan/30 border border-neonCyan text-white font-bold hover:bg-neonCyan/50 shadow-glow"
              >
                Enter
              </button>
            </form>
          </>
        )}
      </div>

      {/* Preview Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl p-8 shadow-xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-neonPink">Coming Soon</h3>
            <button
              className="mt-4 px-4 py-2 rounded-full bg-neonCyan/20 border border-neonCyan hover:bg-neonCyan/30"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {thankYouModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-neonCyan/30 to-neonPink/30 rounded-2xl p-10 shadow-2xl text-center border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-neonPink drop-shadow-glow">
              Thank you!
            </h3>
            <p className="text-lg text-white/90 mb-6">
              But follow&nbsp;
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neonCyan underline font-bold"
              >
                @yourhandle
              </a>
              &nbsp;or your submission is invalid.
            </p>
            <button
              className="px-6 py-2 rounded-full bg-neonCyan/30 border border-neonCyan text-white font-bold hover:bg-neonCyan/50 shadow-glow"
              onClick={() => setThankYouModal(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
