import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Navbar = memo(function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto flex h-14 items-center justify-between px-4">
        <a href="#home" className="font-semibold text-lg tracking-tight">
          <span className="text-gradient">Portfolio</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
          <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
          <li><a href="#articles" className="hover:text-primary transition-colors">Articles</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>

        <div className="flex items-center gap-2">
          <a href="https://github.com/" aria-label="GitHub" className="p-2 rounded-md hover:bg-muted">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-muted">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/" aria-label="Twitter" className="p-2 rounded-md hover:bg-muted">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#contact" className="ml-2">
            <Button variant="hero" size="sm">Get in touch</Button>
          </a>
        </div>
      </nav>
    </header>
  );
});
