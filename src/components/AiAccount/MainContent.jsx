import { useDarkModeShadow } from "../../context/DarkModeShadow";
import ProductHeader from "./ProductHeader";
import ProductImage from "./ProductImage";
import FeaturesSection from "./FeaturesSection";
import GuaranteeSection from "./GuaranteeSection";

const MainContent = ({
  product,
  isGemini,
  isChatGPT,
  isTelegram,
  currentFeatures,
}) => {
  const { darkModeShadow } = useDarkModeShadow();

  return (
    <div className="lg:col-span-2">
      <div
        className="rounded-2xl p-6 backdrop-blur-sm bg-card border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300 h-full"
        style={{ boxShadow: darkModeShadow }}
      >
        <ProductHeader product={product} />
        <ProductImage product={product} />
        <FeaturesSection
          isGemini={isGemini}
          isChatGPT={isChatGPT}
          isTelegram={isTelegram}
          currentFeatures={currentFeatures}
        />
        <GuaranteeSection />
      </div>
    </div>
  );
};

export default MainContent;
