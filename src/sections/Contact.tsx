import { memo } from "react";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Youtube, Instagram, Twitter } from "lucide-react";

export const Contact = memo(function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Multiple ways to get in touch—responses within 24 hours.">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <a href="mailto:hello@example.com" className="inline-flex"><Button variant="hero"><Mail className="mr-2" /> Email Me</Button></a>
          <div className="flex flex-wrap gap-2 mt-3">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-muted"><Linkedin /></a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-muted"><Github /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-muted"><Twitter /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-muted"><Instagram /></a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-muted"><Youtube /></a>
          </div>
        </div>
        <div className="rounded-xl border p-6 bg-card">
          <h3 className="font-semibold mb-2">Availability</h3>
          <p className="text-muted-foreground">Open to full-time roles, freelance engagements, and collaborations. Prefer product-focused teams with strong design culture.</p>
        </div>
      </div>
    </Section>
  );
});
