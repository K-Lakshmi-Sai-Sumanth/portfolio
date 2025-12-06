import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-16 sm:pt-0">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <footer className="border-t border-slate-800/60 px-4 sm:px-6 py-4 sm:py-6 text-center text-[0.7rem] text-slate-500">
        © {new Date().getFullYear()} K. Lakshmi Sai Sumanth. Built with Passion & ❤️
      </footer>
    </main>
  );
}
