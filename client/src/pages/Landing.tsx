import Footer from "@/shared/components/common/Footer";
import Header from "@/shared/components/common/Header";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-black flex justify-center items-center">
        <Link to="/login">
          <Button>Go to Login</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
