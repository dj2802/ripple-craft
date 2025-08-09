import { memo } from "react";
import { Section } from "@/components/common/Section";

export const Education = memo(function Education() {
  const schools = [
    {
      school: "Bachelor of Technology in Computer Science",
      org: "ABC Institute of Technology",
      period: "2019 — 2023",
      details: [
        "CGPA: 8.7/10",
        "Coursework: Data Structures, Algorithms, Web Engineering, Computer Networks",
      ],
    },
    {
      school: "Higher Secondary (Science)",
      org: "XYZ Senior Secondary School",
      period: "2017 — 2019",
      details: [
        "Percentage: 92%",
        "Activities: Coding club, Robotics team",
      ],
    },
  ];

  return (
    <Section id="education" title="Education" subtitle="Academic background and relevant coursework.">
      <ul className="space-y-6">
        {schools.map((s) => (
          <li key={s.school} className="p-5 rounded-xl bg-card/50 border hover-scale">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{s.school}</h3>
                <p className="text-muted-foreground">{s.org}</p>
              </div>
              <span className="text-sm text-muted-foreground">{s.period}</span>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
              {s.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
});
