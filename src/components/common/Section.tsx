import { memo, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
}

export const Section = memo(function Section({ id, title, subtitle, children }: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className="container mx-auto px-4 py-16 md:py-24">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-10 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">{title}</h2>
        {subtitle && <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>}
      </motion.header>
      {children}
    </section>
  );
});
