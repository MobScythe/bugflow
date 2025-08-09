import { motion } from "motion/react";
import type { ReactNode } from "react";

interface UniversalMotionProps {
  children: ReactNode;
  className?: string;
  initialOpacity?: number;
  finalOpacity?: number;
  initialY?: number;
  finalY?: number;
  initialScale?: number;
  finalScale?: number;
  delay?: number; // seconds
  duration?: number; // seconds
  ease?: any; // cubic-bezier or keyword
}

/**
 * UniversalMotion animates its children with customizable opacity, y, scale, delay, and duration.
 * All props have sensible defaults for a fade+slide effect.
 */
export default function UniversalMotion({
  children,
  className,
  initialOpacity = 0,
  finalOpacity = 1,
  initialY = 10,
  finalY = 0,
  initialScale = 1,
  finalScale = 1,
  delay = 0,
  duration = 0.5,
  ease = "easeInOut",
}: UniversalMotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: initialOpacity, y: initialY, scale: initialScale }}
      animate={{ opacity: finalOpacity, y: finalY, scale: finalScale }}
      transition={{
        delay: delay,
        duration: duration,
        ease: ease,
      }}
    >
      {children}
    </motion.div>
  );
}
