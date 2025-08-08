// import { Link } from "react-router-dom";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ThemeToggle from "./ThemeToggle";
import { Bug, MenuIcon, XIcon } from "lucide-react";

import NavMenu from "./NavMenu";

const menuItems: {
  title: string;
  href: string;
  subItems?: { subTitle: string; subDescription: string }[];
}[] = [
  {
    title: "Features",
    href: "/docs/primitives/alert-dialog",
    subItems: [
      {
        subTitle: "Sub Feature 1",
        subDescription: "Description for sub feature 1",
      },
      {
        subTitle: "Sub Feature 2",
        subDescription: "Description for sub feature 2",
      },
      {
        subTitle: "Sub Feature 3",
        subDescription: "Description for sub feature 3",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/docs/primitives/hover-card",
    subItems: [
      {
        subTitle: "Sub Feature 1",
        subDescription: "Description for sub feature 1",
      },
      {
        subTitle: "Sub Feature 2",
        subDescription: "Description for sub feature 2",
      },
      {
        subTitle: "Sub Feature 3",
        subDescription: "Description for sub feature 3",
      },
    ],
  },
  {
    title: "Resources",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Pricing",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Contact",
    href: "/docs/primitives/hover-card",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-30 p-5 w-full flex justify-center">
      <div className="bg-card/10 backdrop-blur-lg text-card-foreground w-full p-4 flex items-center justify-between gap-5 rounded-xl border container">
        <div className="flex lg:w-1/5 pl-1">
          <Link to="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Bug className="size-4" />
            </div>
            BugFlow
          </Link>
        </div>
        <div className="w-full hidden lg:flex justify-center items-center gap-6">
          <NavMenu menu={menuItems} />
        </div>
        <div className="gap-2 flex lg:w-1/5 justify-end">
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="outline">Get Started</Button>
            </Link>
            <ThemeToggle />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon
              className={`h-[1.2rem] w-[1.2rem] transition-all ${
                !isMenuOpen
                  ? "scale-100 rotate-0"
                  : "scale-0 rotate-90 absolute"
              }`}
            />
            <XIcon
              className={`h-[1.2rem] w-[1.2rem] transition-all ${
                isMenuOpen ? "scale-100 rotate-0" : "scale-0 rotate-90 absolute"
              }`}
            />
          </Button>
        </div>
      </div>
      {/* Mobile Menu dropdown */}
      <div className="absolute top-24 px-5 w-full lg:hidden">
        {isMenuOpen && (
          <div className="bg-card text-card-foreground w-full p-4 flex flex-col items-center gap-5 rounded-xl border container mx-auto">
            <Link
              to="#"
              className="hover:underline text-base w-full text-center"
            >
              hello
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
