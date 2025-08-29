import { Link } from "react-scroll";

export default function Navbar() {
  const items = [
    { to: "hero", label: "HOME" },
    { to: "about", label: "GAME" },
    { to: "nft", label: "NFT" },
    { to: "roadmap", label: "ROADMAP" },
    { to: "team", label: "TEAM" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <div className="text-neonCyan font-extrabold tracking-widest neon">11 DIMENSION GAMES</div>
        <div className="flex gap-6">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={700}
              offset={-70}
              className="cursor-pointer text-sm tracking-wide hover:text-neonPink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
