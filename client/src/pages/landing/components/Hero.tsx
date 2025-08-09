import FadeinScroll from "@/shared/animations/FadeinScroll";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/shared/animations/ScrollAnimation";
import UniversalMotion from "@/shared/animations/UniversalMotion";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center w-full gap-16">
      <FadeinScroll className="w-full max-w-3xl text-center flex flex-col items-center gap-8">
        <div className="flex flex-row items-center gap-2">
          <div className="flex items-center">
            <div className="w-14 h-[1px] bg-gradient-to-r from-transparent to-muted-foreground"></div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
          </div>
          <div className="border border-border px-4 py-2 text-sm font-light rounded-full text-muted-foreground">
            Simplify your workflow
          </div>
          <div className="flex items-center">
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="w-14 h-[1px] bg-gradient-to-r from-muted-foreground to-transparent"></div>
          </div>
        </div>
        <h1 className="text-2xl md:text-6xl font-normal tracking-tight text-balance">
          Simple Project & Bug Tracking for Agencies
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Manage website bugs, track progress, and share updates with clients —
          all in one clean, easy dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline">See How It Works</Button>
          <Button>
            <Link to="/register">Start Free</Link>
          </Button>
        </div>
      </FadeinScroll>
      <UniversalMotion
        className="w-full flex justify-center items-center"
        delay={0.7}
        duration={0.8}
      >
        <ScrollAnimation
          className="w-4/5 h-[70vh] bg-white/5 backdrop-blur-sm rounded-3xl p-3"
          initialY={80}
          finalY={0}
          initialScale={0.75}
          finalScale={1}
        >
          <div className="w-full h-full bg-black rounded-2xl"></div>
        </ScrollAnimation>
      </UniversalMotion>
      <div className="w-full h-screen">da</div>
    </div>
  );
};

export default Hero;
