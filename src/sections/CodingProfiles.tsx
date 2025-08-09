import { memo } from "react";
import { Section } from "@/components/common/Section";
import { Code2, Codepen, Trophy } from "lucide-react";

const profiles = [
  { name: "LeetCode", url: "https://leetcode.com/", icon: Trophy },
  { name: "HackerRank", url: "https://www.hackerrank.com/", icon: Code2 },
  { name: "CodePen", url: "https://codepen.io/", icon: Codepen },
];

export const CodingProfiles = memo(function CodingProfiles() {
  return (
    <Section id="profiles" title="Coding Profiles" subtitle="Connect on platforms where I practice and share code.">
      <div className="grid sm:grid-cols-3 gap-4">
        {profiles.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
             className="rounded-lg border p-4 hover:bg-muted/60 transition-colors flex items-center gap-3">
            <p.icon className="h-5 w-5" />
            <span>{p.name}</span>
          </a>
        ))}
      </div>
    </Section>
  );
});
