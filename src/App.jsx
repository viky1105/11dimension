import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import NFTShowcase from "./components/NFTShowcase";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white font-orbitron overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <NFTShowcase />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}
