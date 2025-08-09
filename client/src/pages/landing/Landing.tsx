import Hero from "@/pages/landing/components/Hero";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <div className="relative">
      {/* Gradient Effects */}
      <motion.div
        className="absolute -left-20 -top-20 -rotate-30 flex gap-15 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "linear" }}
      >
        <div className="w-[150px] h-[400px] bg-gradient-to-b from-primary/30 to-transparent pointer-events-none blur-2xl mr-10"></div>
        <div className="w-[150px] h-[600px] bg-gradient-to-b from-primary/30 to-transparent pointer-events-none blur-2xl"></div>
        <div className="w-[150px] h-[350px] bg-gradient-to-b from-primary/30 to-transparent pointer-events-none blur-2xl"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/10 to-background h-screen z-10"
      ></motion.div>

      <div className="w-full relative z-30 pt-44 px-6 pb-20">
        <Hero />
      </div>
    </div>
  );
};

export default Landing;
