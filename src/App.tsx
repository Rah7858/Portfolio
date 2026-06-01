import { motion } from "motion/react";
import { Background } from "@/components/portfolio/Background";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Skills } from "@/components/portfolio/Skills";
import { AvailableBanner } from "@/components/portfolio/AvailableBanner";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative text-white"
    >
      <Background />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Skills />
        <AvailableBanner />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
