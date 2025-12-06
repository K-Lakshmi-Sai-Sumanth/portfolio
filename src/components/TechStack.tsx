"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Material UI"]
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT"]
  },
  {
    label: "Database & Infra",
    items: ["MongoDB", "Mongoose", "MERN deployments", "Vercel", "Netlify"]
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "Agile / Scrum", "Postman", "Azure CI/CD", "ESLint / Prettier"]
  }
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_55%)] px-4 sm:px-6 py-16 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <SectionHeader
          eyebrow="Tech"
          title="My toolbox"
          subtitle="What I use most of the time to take a feature from idea to production."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-300">
                {cat.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm text-slate-200">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800/70 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
