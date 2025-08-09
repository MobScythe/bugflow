import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { ReactNode, CSSProperties } from "react";

interface ScrollAnimationProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  initialY?: number; // px
  finalY?: number; // px
  initialScale?: number;
  finalScale?: number;
}

/**
 * Animates its children as you scroll: moves and scales between initial/final values.
 * @param initialY - starting y offset in px (default: 0)
 * @param finalY - ending y offset in px (default: -60)
 * @param initialScale - starting scale (default: 1)
 * @param finalScale - ending scale (default: 1.08)
 */
export default function ScrollAnimation({
  children,
  className,
  style,
  initialY = 0,
  finalY = -60,
  initialScale = 1,
  finalScale = 1.08,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [initialY, finalY]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [initialScale, finalScale]
  );

  return (
    <motion.div ref={ref} className={className} style={{ ...style, y, scale }}>
      {children}
    </motion.div>
  );
}
