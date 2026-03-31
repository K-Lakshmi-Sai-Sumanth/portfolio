"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Phenome Cloud (formerly Pixentia)",
    role: "Software Design Engineer - II",
    period: "Oct 2025 — 2nd, Apr 2026",
    location: "Vijayawada, India",
    points: [
      "Designed and developed scalable, reusable UI components using React.js, Next.js, and TypeScript, improving development efficiency by 25%.",
      "Implemented performance optimization strategies, including query tuning, caching, load balancing, pagination, and lazy loading to reduce response times and enhance application scalability",
      "Collaborated with business analysts to gather and translate requirements into UI solutions. Ensured cross-browser compatibility and responsive design across multiple devices",
      "Wrote unit tests using Jest, improving code reliability and reducing production bugs.",
      "Conducted code reviews and mentored junior developers, ensuring adherence to best practices."
    ]
  },
  {
    company: "Phenome Cloud (formerly Pixentia)",
    role: "Software Design Engineer - I",
    period: "Aug 2024 — Sep 2025",
    location: "Vijayawada, India",
    points: [
      "Designed and developed scalable, high-performance, responsive web applications using the MongoDB, Express.js, React.js, Node.js.",
      "Built RESTful APIs with Node.js and Express to handle complex business logic and Integrated REST APIs with optimized frontend performance for faster load times.",
      "Developed front-end components using React.js, ensuring a responsive, interactive, and user-friendly interface.",
      "Managed database schemas and optimized queries for performance in MongoDB, handling large datasets effectively."
    ]
  },
  {
    company: "Phenome Cloud (formerly Pixentia)",
    role: "Software Trainee",
    period: "Nov 2022 — Jul 2024",
    location: "Vijayawada, India",
    points: [
      "Developed dashboards and web applications with a focus on responsive design.",
      "Implemented responsive design principles to ensure the application worked seamlessly across devices and platforms. ",
      "Improved application performance by optimizing MongoDB queries, React component rendering, and Node.js server-side logic.",
      "Collaborated with UI/UX designers to ensure a consistent look and feel across platforms."
    ]
  },
  {
    company: "Internship Projects",
    role: "MERN Stack Intern",
    period: "Sep 2022 — Nov 2022",
    location: "Remote",
    points: [
      "Created admin dashboards and a YouTube-like app using React, Next.js, Tailwind CSS, and Node.js.",
      "Integrated REST APIs, authentication, and responsive UI components for real-world use cases.",
      "Collaborated in an agile environment and consistently delivered features under tight deadlines."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950/60 px-4 sm:px-6 py-16 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <SectionHeader
          eyebrow="Experience"
          title="Recent roles & responsibilities"
          subtitle="A quick snapshot of where I've been focused recently."
        />
        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-brand-500/60 via-slate-700 to-transparent sm:left-4" />
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.article
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-10 sm:pl-12"
              >
                <div className="absolute left-0 top-2 h-5 w-5 rounded-full border border-brand-400 bg-slate-950 sm:left-1" />
                <div className="glass rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-slate-400 sm:text-sm">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400">{exp.period}</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
