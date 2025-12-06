"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const sections = ["home", "about", "experience", "projects", "tech", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <>
      {/* Mobile navbar (<= sm) */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur sm:hidden"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[0.6rem] font-semibold tracking-[0.25em] text-brand-400 uppercase">
            LAKSHMI SAI SUMANTH
          </span>
          <button
            onClick={toggle}
            aria-label="Toggle navigation"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70"
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span
                className={`h-0.5 w-4 rounded-full bg-slate-200 transition-transform ${
                  open ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 rounded-full bg-slate-200 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-4 rounded-full bg-slate-200 transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="border-t border-slate-800/60 bg-slate-950/95 px-4 pb-3 pt-2"
            >
              <nav className="flex flex-col gap-1 text-[0.7rem]">
                {sections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={close}
                    className="rounded-full px-3 py-2 uppercase tracking-[0.2em] text-slate-200 hover:bg-slate-900 hover:text-brand-300 transition"
                  >
                    {id}
                  </a>
                ))}
                <Link
                  href="#contact"
                  onClick={close}
                  className="mt-2 rounded-full bg-brand-500 px-3 py-2 text-center text-[0.7rem] font-semibold text-slate-50 shadow-md hover:bg-brand-600 transition"
                >
                  Let&apos;s talk
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Desktop navbar (>= sm) */}
      <motion.nav
        initial={{ y: -40, opacity: 0, x: "50%" }}
        animate={{ y: 0, opacity: 1, x: "50%"  }}
        transition={{  duration: 0.6 }}
        
        className="fixed top-4  right-1/2  z-40 hidden w-full max-w-4xl px-3 sm:block sm:px-0"
      >
        <div className="glass flex items-center justify-between gap-4 rounded-full px-6 py-3 shadow-lg shadow-sky-500/10">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-400 uppercase whitespace-nowrap">
            LAKSHMI SAI SUMANTH
          </span>
          <div className="flex items-center gap-5 text-[0.7rem]">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="uppercase tracking-wide text-slate-300 hover:text-brand-400 transition"
              >
                {id}
              </a>
            ))}
            <Link
              href="#contact"
              className="rounded-full bg-brand-500 px-4 py-1.5 text-[0.75rem] font-semibold shadow-md hover:bg-brand-600 transition"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
