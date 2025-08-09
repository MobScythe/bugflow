import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import type { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function FadeinScroll({
  children,
  className,
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // If children is an array, stagger them
  const isArray = Array.isArray(children);
  const childArray = isArray ? (children as React.ReactNode[]) : [children];

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, i) => (
        <motion.div
          key={i}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: isArray ? i * 0.15 : 0,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
