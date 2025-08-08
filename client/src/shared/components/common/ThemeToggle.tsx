import { Moon, Sun } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useTheme } from "@/shared/context/ThemeContext";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "scale-0 rotate-90 absolute" : "scale-100 rotate-0"
        } text-foreground`}
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90 absolute"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
