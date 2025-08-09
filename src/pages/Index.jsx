import { lazy, Suspense, memo } from "react";
import { Navbar } from "@/components/layout/Navbar";

const Hero = lazy(() => import("@/sections/Hero").then(m => ({ default: m.Hero })));
const About = lazy(() => import("@/sections/About").then(m => ({ default: m.About })));
const Projects = lazy(() => import("@/sections/Projects").then(m => ({ default: m.Projects })));
const Skills = lazy(() => import("@/sections/Skills").then(m => ({ default: m.Skills })));
const Education = lazy(() => import("@/sections/Education").then(m => ({ default: m.Education })));
const CodingProfiles = lazy(() => import("@/sections/CodingProfiles").then(m => ({ default: m.CodingProfiles })));
const Contact = lazy(() => import("@/sections/Contact").then(m => ({ default: m.Contact })));
const Particles = lazy(() => import("@/components/visual/Particles").then(m => ({ default: m.Particles })));

const Index = memo(function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <Suspense fallback={null}><Particles /></Suspense>
      <main>
        <Suspense fallback={<div className="container mx-auto px-4 py-20">Loading...</div>}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <CodingProfiles />
          <Contact />
        </Suspense>
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</footer>
    </div>
  );
});

export default Index;
