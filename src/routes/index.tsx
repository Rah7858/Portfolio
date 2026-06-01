import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahul Kumar | Full Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Rahul Kumar — Full Stack Developer and AI Engineer building AI-powered applications with React, Node.js, Python and PostgreSQL.",
      },
      { name: "keywords", content: "Rahul Kumar, Full Stack Developer, AI Engineer, React, Node.js, Python, PostgreSQL, Portfolio" },
      { property: "og:title", content: "Rahul Kumar | Full Stack Developer & AI Engineer" },
      { property: "og:description", content: "AI-powered full stack applications. React • Node.js • Python • PostgreSQL." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rkdev.online" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
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
