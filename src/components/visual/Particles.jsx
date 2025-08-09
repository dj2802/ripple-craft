import { memo, useCallback } from "react";
import ParticlesLib from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particles = memo(function Particles() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <ParticlesLib
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={init}
      options={{
        fpsLimit: 60,
        detectRetina: true,
        background: { color: { value: "transparent" } },
        fullScreen: { enable: false },
        interactivity: {
          detectsOn: "window",
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: ["hsl(var(--brand))", "hsl(var(--brand-2))"] },
          shape: { type: "circle" },
          opacity: { value: 0.25 },
          size: { value: { min: 1, max: 3 } },
          links: { enable: false },
          move: { enable: true, speed: 0.6, outModes: { default: "out" } }
        }
      }}
    />
  );
});
