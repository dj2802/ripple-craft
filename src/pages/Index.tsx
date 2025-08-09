import { lazy, Suspense, memo } from "react";
import { Navbar } from "@/components/layout/Navbar";

const Hero = lazy(() => import("@/sections/Hero").then(m => ({ default: m.Hero })));
const About = lazy(() => import("@/sections/About").then(m => ({ default: m.About })));
const Projects = lazy(() => import("@/sections/Projects").then(m => ({ default: m.Projects })));
const Skills = lazy(() => import("@/sections/Skills").then(m => ({ default: m.Skills })));
const Articles = lazy(() => import("@/sections/Articles").then(m => ({ default: m.Articles })));
const CodingProfiles = lazy(() => import("@/sections/CodingProfiles").then(m => ({ default: m.CodingProfiles })));
const Contact = lazy(() => import("@/sections/Contact").then(m => ({ default: m.Contact })));

const Index = memo(function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Suspense fallback={<div className="container mx-auto px-4 py-20">Loading...</div>}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Articles />
          <CodingProfiles />
          <Contact />
        </Suspense>
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</footer>
    </div>
  );
});

export default Index;
