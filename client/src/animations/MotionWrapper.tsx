import { motion, AnimatePresence } from "motion/react";

import type { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function MotionWrapper({
  children,
  className,
}: MotionWrapperProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
