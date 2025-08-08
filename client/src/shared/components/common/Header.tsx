// import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-neutral-900 flex items-center justify-between text-white w-full py-4 px-7">
      <div>BugFlow</div>
      <div>Home</div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
