import { Outlet } from "react-router-dom";
import Header from "@/shared/components/common/Header";
import Footer from "@/shared/components/common/Footer";

const StaticLayout = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default StaticLayout;
