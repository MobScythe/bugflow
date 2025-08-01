import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-black flex justify-center items-center">
        <Button>Go to Login</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
