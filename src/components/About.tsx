"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-16 sm:py-24"> 
      <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row">
        <div className="flex-1">
          <SectionHeader
            eyebrow="About"
            title="Engineer with a product mindset"
            subtitle="I care about more than just shipping features. I aim to ship the right features with clean architecture, strong Developer experience, and a great UX. I approach software engineering with the mindset that good products are built at the intersection of clean code, thoughtful design, and real user needs. For me, writing code isn’t just about making things work—it’s about making systems that are reliable, scalable, and easy for teams to evolve over time.

Throughout my experience as a MERN stack developer, I’ve learned the importance of balancing speed with quality. I value well-structured components, predictable state management, and backend APIs that are easy to reason about. Whether it’s optimizing a slow UI, refactoring an API, or simplifying a complex flow, I enjoy improving systems incrementally and intentionally.

I’m especially driven by ownership and clarity. I like understanding why a feature is needed, who it’s for, and how it fits into the bigger product vision. This helps me make better technical decisions, reduce rework, and deliver solutions that age well as products scale."
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}  
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-4 text-sm sm:text-base text-slate-300"
        >
          <p>
            Over the past 3.4+ years, I&apos;ve worked as a MERN stack developer,
            building production-grade web apps including dashboards, web applications, SaaS products, and internal tools. I frequently work across the stack from
            designing MongoDB schemas and Express APIs to crafting pixel-perfect
            interfaces in React / Next.js.
          </p>
          <p>
            I enjoy taking vague requirements, breaking them into clear tasks,
            and delivering performant features that are easy for teams to
            maintain. I&apos;m comfortable collaborating with designers,
            backend engineers, and stakeholders and I love improving developer
            experience through better tooling and architecture.
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="glass rounded-2xl p-4">
              <p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                Years of experience
              </p>
              <p className="mt-1 text-2xl font-semibold text-brand-300">3.4+</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                Projects shipped
              </p>
              <p className="mt-1 text-2xl font-semibold text-brand-300">5+</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                Primary stack
              </p>
              <p className="mt-1 text-sm">
                React, Typescript, Next.js, Node.js, Express, MongoDB, React Native, Jest
              </p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                Focus areas
              </p>
              <p className="mt-1 text-sm">
                Performance, clean architecture, reusable UI.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
