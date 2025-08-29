import Particles from "react-tsparticles";

export default function StarBackground() {
  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: "#000000" },
        fpsLimit: 60,
        particles: {
          number: { value: 120 },
          size: { value: { min: 1, max: 2 } },
          move: { enable: true, speed: 0.3 },
          color: { value: "#ffffff" },
          opacity: { value: 0.8 },
        },
        detectRetina: true,
      }}
    />
  );
}
