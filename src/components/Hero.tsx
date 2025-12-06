"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-radial py-8 px-4 sm:px-6"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.3),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center">
        {/* Left content */}
        <motion.div
          className="max-w-xl space-y-6 text-center lg:text-left  px-4"
          initial="hidden"
          animate="visible"

        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.25em] text-slate-300"
          >
            MERN STACK DEVELOPER · 3+ YEARS
          </motion.p>

          {/* ✅ Updated headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-4xl  font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Turning{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-brand-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent animate-gradient">
                ideas into production-ready products
              </span>
              <span className="absolute inset-x-0 -bottom-2 h-[6px] bg-brand-400/20 blur-md" />
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-sm sm:text-base text-slate-300"
          >
            I&apos;m K. Lakshmi Sai Sumanth, a MERN stack engineer turning complex
            product ideas into fast, maintainable applications using{" "}
            <span className="font-semibold text-brand-400">
              React, Next.js, React Native, Node.js, Express & MongoDB
            </span>
            .
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="rounded-full bg-brand-500 px-6 py-2 text-sm font-medium text-slate-50 shadow-lg shadow-sky-500/30 hover:bg-brand-600 transition"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-500/70 px-6 py-2 text-sm font-medium text-slate-200 hover:border-brand-500 hover:text-brand-300 transition"
            >
              Let&apos;s collaborate
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-400 lg:justify-start"
          >
            <span className="glass rounded-full px-3 py-1">
              ⚡ End-to-end MERN applications
            </span>
            <span className="glass rounded-full px-3 py-1">
              🚀 Performance-focused builds
            </span>
            <span className="glass rounded-full px-3 py-1">
              💬 Product & UX mindset
            </span>
          </motion.div>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand-500/60 via-sky-400/40 to-emerald-400/40 blur-2xl opacity-70" />
          <div className="relative glass flex h-64 w-64 flex-col justify-between rounded-3xl p-6 sm:h-80 sm:w-80">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="rounded-full bg-slate-800/80 px-3 py-1">
                Currently: SDE - II
              </span>
              <span>Vijayawada, India</span>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Profile
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-50">
                MERN Stack Specialist
              </p>
              <p className="text-xs text-slate-400">
                Building dashboards, web applications, mobile apps, e-commerce
                and SaaS products with clean, testable code.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div>
                <p className="text-[0.65rem] uppercase tracking-wide text-slate-500">
                  Experience
                </p>
                <p className="text-base font-semibold text-brand-300">
                  3+ yrs
                </p>
              </div>
              <div className="text-right">
                <p className="text-[0.65rem] uppercase tracking-wide text-slate-500">
                  Core Stack
                </p>
                <p>React · Next.js · Node · MongoDB</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
