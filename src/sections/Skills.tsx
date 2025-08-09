import { memo } from "react";
import { Section } from "@/components/common/Section";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "TypeScript", "Tailwind", "Framer Motion", "Zod", "React Query", "Vite", "Accessibility", "Shadcn UI"
];

export const Skills = memo(function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Core technologies and practices I use daily.">
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <Badge key={s} className="hover-scale">{s}</Badge>
        ))}
      </div>
    </Section>
  );
});
