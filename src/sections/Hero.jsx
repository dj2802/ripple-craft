import { lazy, Suspense, memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/SEO";


const ThreeIcon = lazy(() => import("@/components/visual/ThreeIcon").then(m => ({ default: m.ThreeIcon })));

export const Hero = memo(function Hero() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    jobTitle: "Frontend Developer",
    url: "/",
    sameAs: [
      "https://github.com/",
      "https://www.linkedin.com/",
      "https://twitter.com/"
    ]
  };

  return (
    <>
      <SEO
        title="Portfolio — Frontend Developer & UI Engineer"
        description="Interactive React portfolio showcasing projects, skills, articles, and contact options with advanced animations and performance."
        canonical="/"
        structuredData={personLd}
      />
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-gradient -z-10" aria-hidden />
        <div className="container mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Available for opportunities</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
                Building delightful, performant interfaces
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-prose">
                I craft modern web experiences with React, TypeScript, and motion. Explore my projects, articles, and get in touch.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact"><Button variant="hero" size="lg">Let’s collaborate</Button></a>
                <a href="/resume.txt" download>
                  <Button variant="soft" size="lg">Download Resume</Button>
                </a>
              </div>
            </motion.div>
            <motion.div className="flex md:justify-end justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Suspense fallback={<div className="h-40 w-40 rounded-xl bg-muted animate-pulse" />}>
                <ThreeIcon />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
});
