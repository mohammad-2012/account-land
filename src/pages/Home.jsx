import { useEffect, useState } from "react";
import BackgroundAnimations from "../components/home/BackgroundAnimations";
import GeminiIcon from "../components/home/GeminiIcon";
import MainImage from "../components/home/MainImage";
import OpenAIIcon from "../components/home/OpenAIIcon.";
import ActionButtons from "../components/home/ActionButtons";
import { HomeStyles } from "../components/home/HomeStyles";
import AboutUs from "./AboutUs";
import AiAccounts from "./AiAccounts";
import PremiumTelegram from "./PremiumTelegram";

export default function Home({ products, aiProducts }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">
        <BackgroundAnimations />

        <div className="relative z-10 flex flex-col items-center justify-center gap-4 md:gap-6 px-4 py-4 md:py-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-16">
            {!isMobile && <GeminiIcon />}

            <MainImage isMobile={isMobile} />

            {!isMobile && <OpenAIIcon />}
          </div>

          <ActionButtons isMobile={isMobile} />
        </div>

        <HomeStyles />
      </div>

      <div className="flex flex-col gap-12">
        <AboutUs />
        <AiAccounts products={aiProducts} />
        <PremiumTelegram products={products} />
      </div>
    </>
  );
}
