import { memo } from "react";
import { Section } from "@/components/common/Section";

export const About = memo(function About() {
  return (
    <Section id="about" title="About Me" subtitle="A quick overview of who I am and how I work.">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <p className="text-muted-foreground leading-relaxed">
          I'm a frontend engineer focused on building fast, accessible, and aesthetically refined products. My work blends robust engineering with thoughtful design and motion—always prioritizing clarity and performance.
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden /> Strong foundation in React, TypeScript, and modern tooling.</li>
          <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden /> Love for micro-interactions, accessibility, and clean architecture.</li>
          <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden /> Performance-first mindset with code-splitting and caching strategies.</li>
        </ul>
      </div>
    </Section>
  );
});
