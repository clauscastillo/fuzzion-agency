"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      className=""
    >
      {children}
    </motion.main>
  );
}
