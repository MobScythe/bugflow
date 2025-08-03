import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
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

export default Home;
