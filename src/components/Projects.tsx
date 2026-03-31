"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Reproductive Health Tracking Application",
    description:
      "Healthcare platform that allows patients to fill forms, track reproductive health metrics, and visualize their data using graphs and charts. Includes role-based access for doctors to manage patient profiles, monitor progress and generate comprehensive reports.",
    tech: ["React", "Typescript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Jest"],
    highlight: "Lead developer for a secure reproductive health tracking platform.",
    links: {
      live: "https://repli-dev.azurewebsites.net",
      repo: "#"
    }
  },
  {
    name: "Cancer Tracking Application",
    description:
      "Cancer tracking system where patients can monitor health and treatment progress through interactive charts and clinical data views. Providers can access records, update treatment plans, manage patient profiles and bulk-import data via Excel for efficient onboarding.",
    tech: ["React", "Typescript", "Node.js", "Express.js", "MongoDB", "Jest"],
    highlight: "Lead developer for a cancer treatment & monitoring platform.",
    links: {
      live: "https://paptrack-dev.azurewebsites.net",
      repo: "#"
    }
  },
  {
    name: "Skill Before Chill (Job Board)",
    description:
      "SEO-optimized job listing website with dynamic slugs, filters and redirects to original job sources. Designed for easy job discovery while centralizing curated roles for candidates.",
    tech: ["Next.js", "Mongoose", "MongoDB", "Vercel"],
    highlight: "Custom job platform aggregating opportunities.",
    links: {
      live: "https://skillbeforechill.in",
      repo: "#"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="A few highlights from the healthcare and product platforms I've built."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/10 via-sky-400/5 to-emerald-400/10 opacity-0 blur-xl transition group-hover:opacity-100" />
              <div className="relative glass flex h-full flex-col rounded-3xl p-5 sm:p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs text-brand-300">
                      {project.highlight}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-800/70 px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 text-xs">
                  {project.links.live && project.links.live !== "#" && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-300 hover:text-brand-200 underline-offset-2 hover:underline"
                    >
                      Live 🟢
                    </a>
                  )}
                  {project.links.repo && project.links.repo !== "#" && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 hover:text-slate-100 underline-offset-2 hover:underline"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
