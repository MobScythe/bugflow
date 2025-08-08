import Footer from "@/shared/components/common/Footer";
import Header from "@/shared/components/common/Header";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/shared/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/shared/components/ui/avatar";
import { Skeleton } from "@/shared/components/ui/skeleton";
import MotionWrapper from "@/shared/animations/MotionWrapper";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Demo screenshot placeholder
const BoardMockup = () => (
  <div className="relative mx-auto w-full max-w-xl aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/30 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border border-border">
    <Skeleton className="absolute inset-0 w-full h-full" />
    {/* Replace with real screenshot later */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <span className="text-2xl font-bold text-primary">
        [Board Screenshot]
      </span>
      <span className="text-muted-foreground text-sm mt-2">(Demo UI here)</span>
    </div>
  </div>
);

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="var(--primary)" />
        <path
          d="M10 16h12M16 10v12"
          stroke="var(--primary-foreground)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Simple Kanban Board",
    desc: "Drag tasks between statuses.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="var(--primary)" />
        <path
          d="M10 16h12"
          stroke="var(--primary-foreground)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="16"
          cy="16"
          r="6"
          stroke="var(--primary-foreground)"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Client-Friendly Sharing",
    desc: "Let clients see progress without logging in.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="var(--primary)" />
        <path
          d="M10 22l6-12 6 12"
          stroke="var(--primary-foreground)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "File & Screenshot Attachments",
    desc: "Fix faster with clear visuals.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="var(--primary)" />
        <path
          d="M10 16h12"
          stroke="var(--primary-foreground)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 10v12"
          stroke="var(--primary-foreground)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Tags & Filters",
    desc: "Organize work without overcomplication.",
  },
];

const testimonials = [
  {
    name: "Alex R.",
    role: "Agency Owner",
    quote:
      "BugFlow helped us deliver WordPress sites 30% faster — no more lost tasks.",
    avatar: null,
  },
  {
    name: "Jamie L.",
    role: "Web Project Manager",
    quote: "Clients love the simple dashboard. We love not chasing emails.",
    avatar: null,
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Create a Project",
    desc: "Add tags/statuses.",
    mock: <Skeleton className="w-24 h-12 rounded-lg" />,
  },
  {
    step: 2,
    title: "Add Tasks/Bugs",
    desc: "Attach screenshots, assign if needed.",
    mock: <Skeleton className="w-24 h-12 rounded-lg" />,
  },
  {
    step: 3,
    title: "Track & Share Progress",
    desc: "Use board view or public client link.",
    mock: <Skeleton className="w-24 h-12 rounded-lg" />,
  },
];

const scrollToFeatures = () => {
  const el = document.getElementById("features");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Landing = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-primary/5 to-background min-h-screen">
        <MotionWrapper className="w-full max-w-3xl text-center flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
            Simple Project & Bug Tracking for Agencies —{" "}
            <span className="text-primary">No Tech Skills Needed</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage website bugs, track progress, and share updates with clients
            — all in one clean, easy dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <Button asChild size="lg">
              <Link to="/register">Start Free</Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              type="button"
              onClick={scrollToFeatures}
            >
              See How It Works
            </Button>
          </div>
        </MotionWrapper>
        <div className="mt-12">
          <MotionWrapper>
            <BoardMockup />
          </MotionWrapper>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 px-4 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <MotionWrapper className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-2">The Problem</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full w-8 h-8">
                <ChevronRight />
              </span>
              Too many emails & screenshots to track bugs.
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full w-8 h-8">
                <ChevronRight />
              </span>
              Tools like Jira are overkill & confusing.
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full w-8 h-8">
                <ChevronRight />
              </span>
              Clients keep asking for updates.
            </li>
          </ul>
        </MotionWrapper>
        <MotionWrapper className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-2">The Solution</h2>
          <p className="text-lg text-muted-foreground mb-4">
            BugFlow keeps everything in one place with drag-and-drop simplicity,
            built for small teams.
          </p>
          <BoardMockup />
        </MotionWrapper>
      </section>

      {/* Feature Highlights */}
      <section
        id="features"
        className="py-20 px-4 bg-gradient-to-b from-background to-primary/5"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Feature Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <Card
                key={i}
                className="items-center text-center p-6 rounded-2xl shadow-md bg-card/80"
              >
                <CardHeader className="flex flex-col items-center gap-2">
                  <div className="mb-2">{f.icon}</div>
                  <CardTitle className="text-lg font-semibold">
                    {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{f.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {howItWorks.map((step) => (
            <MotionWrapper
              key={step.step}
              className="flex flex-col items-center gap-4"
            >
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">
                {step.step}
              </div>
              <div className="font-semibold text-lg">{step.title}</div>
              <div className="text-muted-foreground text-sm mb-2">
                {step.desc}
              </div>
              <div>{step.mock}</div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            What Agencies Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6 rounded-2xl shadow-md bg-card/80">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    {t.avatar ? (
                      <AvatarImage src={t.avatar} alt={t.name} />
                    ) : (
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-semibold">
                      {t.name}
                    </CardTitle>
                    <CardDescription>{t.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic text-muted-foreground">
                    “{t.quote}”
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <Card className="flex-1 p-6 rounded-2xl shadow bg-card/80 border-primary/30">
            <CardHeader>
              <CardTitle>Free Plan</CardTitle>
              <CardDescription>For 1 project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">$0</div>
              <div className="text-muted-foreground mb-4">
                Get started with all core features.
              </div>
              <Button asChild size="lg" className="w-full mt-2">
                <Link to="/register">Start for Free</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="flex-1 p-6 rounded-2xl shadow bg-card/80 border-primary">
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
              <CardDescription>
                Unlimited projects, client sharing, file uploads
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">
                $12<span className="text-base font-normal">/mo</span>
              </div>
              <div className="text-muted-foreground mb-4">
                Best for agencies & teams.
              </div>
              <Button
                asChild
                size="lg"
                variant="default"
                className="w-full mt-2"
              >
                <Link to="/register">
                  Start for Free — No Credit Card Needed
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 flex flex-col items-center justify-center">
        <MotionWrapper className="w-full max-w-2xl text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-balance mb-4">
            Track Website Bugs the Easy Way
          </h2>
          <Button asChild size="lg" className="text-lg px-8 py-4 rounded-full">
            <Link to="/register">Create Your First Project</Link>
          </Button>
        </MotionWrapper>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
