import { memo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Section } from "@/components/common/Section";
import { ExternalLink } from "lucide-react";

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);
  const rX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const rY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const onMouseMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const px = (e.clientX - bounds.left) / bounds.width;
    const py = (e.clientY - bounds.top) / bounds.height;
    x.set(px);
    y.set(py);
  };

  return { ref, rX, rY, onMouseMove };
}

const ProjectCard = ({ title, desc, link }: { title: string; desc: string; link: string }) => {
  const { ref, rX, rY, onMouseMove } = useTilt();
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      onMouseMove={onMouseMove}
      onMouseLeave={() => {}}
    >
      <motion.div
        ref={ref}
        style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
        className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
      >
        <div style={{ transform: "translateZ(30px)" }} className="space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
            {title}
            <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-muted-foreground">{desc}</p>
        </div>
      </motion.div>
    </motion.a>
  );
};

export const Projects = memo(function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work with tasteful 3D hovers and live links.">
      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard title="Motion Landing"
          desc="Premium landing page built with React, framer-motion, and fine-grained performance."
          link="https://example.com" />
        <ProjectCard title="Data Viz Suite"
          desc="Interactive dashboards with Recharts and custom animations for real-time insights."
          link="https://example.com" />
        <ProjectCard title="Design System"
          desc="A token-driven component library using Tailwind and shadcn—consistent, accessible, beautiful."
          link="https://example.com" />
      </div>
    </Section>
  );
});
