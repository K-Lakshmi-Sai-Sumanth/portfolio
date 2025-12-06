"use client";

import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something"
          subtitle="Open to full-time roles, freelancer-friendly work, and interesting side projects."
        />
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-5 sm:p-6 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1 text-sm">
                <label className="text-xs font-medium text-slate-300">
                  Name
                </label>
                <input
                  required
                  name="name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brand-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="text-xs font-medium text-slate-300">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brand-400"
                />
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <label className="text-xs font-medium text-slate-300">
                Project / Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brand-400"
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 rounded-full bg-brand-500 px-6 py-2 text-sm font-medium text-slate-50 shadow-lg shadow-sky-500/30 hover:bg-brand-600 transition disabled:opacity-60"
            >
              {status === "submitting"
                ? "Sending..."
                : status === "success"
                ? "Sent! Thanks, I'll get back to you"
                : status === "error"
                ? "Try again"
                : "Send message"}
            </button>

            {error && (
              <p className="text-xs text-red-400">
                {error}
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4 flex flex-col justify-between text-sm text-slate-300"
          >
            <div className="glass rounded-2xl p-5 py-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Reach out directly
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:lakshmisaisumanth9@gmail.com"
                    className="text-brand-300 hover:text-brand-200"
                  >
                    lakshmisaisumanth9@gmail.com
                  </a>
                </p>
                <p>
                  Location:{" "}
                  <span className="text-slate-200">Vijayawada, India</span>
                </p>
              </div>
            </div>
            <div className="glass rounded-2xl p-5 py-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Socials
              </p>
              <div className="mt-3  text-sm">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/lakshmi-sai-sumanth-105119238"
                  className="rounded-full bg-slate-900/80 px-3 py-1 block text-slate-200 hover:text-brand-300"
                >
                  LinkedIn
                </a>
                {/* <a
                  href="#"
                  className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 hover:text-brand-300"
                >
                  GitHub
                </a> */}
                <a
                  href="#"
                  className="rounded-full bg-slate-900/80 mt-2 px-3 py-1 block text-slate-200 hover:text-brand-300"
                >
                  Portfolio (this site)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
