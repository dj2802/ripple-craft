import { memo } from "react";
import { Section } from "@/components/common/Section";

const posts = [
  { title: "Animating with Intent in React", url: "#" },
  { title: "Design Systems with Tailwind Tokens", url: "#" },
  { title: "Performance Budgeting for UI", url: "#" },
];

export const Articles = memo(function Articles() {
  return (
    <Section id="articles" title="Featured Articles" subtitle="Writing on engineering, design, and motion.">
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.title}>
            <a href={p.url} className="story-link">{p.title}</a>
          </li>
        ))}
      </ul>
    </Section>
  );
});
