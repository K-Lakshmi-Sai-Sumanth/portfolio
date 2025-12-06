import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  children
}: SectionHeaderProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-2 ${alignment}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
        {eyebrow}
      </span>
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">{title}</h2>
      {subtitle && (
        <p className="max-w-xl text-sm sm:text-base text-slate-400">{subtitle}</p>
      )}
      {children}
    </motion.div>
  );
}
