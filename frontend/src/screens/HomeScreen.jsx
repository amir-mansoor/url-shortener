import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Girl from "../assets/home.png";
import UrlShortener from "@/webcomponents/UrlShortener";
const HomeScreen = () => {
  return (
    <>
      <div className="container mt-10">
        <div className="flex items-center">
          <div>
            <h1 className="font-bold  text-5xl">
              Build Stronger Degital Connections
            </h1>
            <p className="mt-2 text-xl">
              Use our URL shortener, QR Codes, and landing pages to engage your
              audience and connect them to the right information. Build, edit,
              and track everything inside the Bitly Connections Platform.
            </p>
            <Button className="bg-blue-600 font-bold text-2xl mt-2">
              <Link to="/register"> Get Started For Free </Link> <ArrowRight />
            </Button>
          </div>
          <img src={Girl} />
        </div>
      </div>
      <div className="bg-[#031f39] mt-6 px-2 py-5">
        <UrlShortener />
      </div>
    </>
  );
};

export default HomeScreen;
