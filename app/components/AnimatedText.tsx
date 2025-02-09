"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className={className}>
      {text}
    </motion.h1>
  );
}
