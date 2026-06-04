import { useDarkModeShadow } from "../context/DarkModeShadow";
import PageHeader from "../components/aiAccounts/PageHeader";
import ProductsGrid from "../components/aiAccounts/ProductsGrid";
import ComingSoon from "../components/aiAccounts/ComingSoon";
import TrustBadges from "../components/aiAccounts/TrustBadges";
import GlobalStyles from "../components/aiAccounts/GlobalStyles";
import Background from "../components/Background";

export default function AiAccounts({ products }) {
  const { darkModeShadow, isDarkMode } = useDarkModeShadow();

  return (
    <div className="min-h-screen pt-4" dir="rtl">
      <Background isDarkMode={isDarkMode} />

      <div className="container max-w-5xl px-4 mx-auto">
        <PageHeader />
        <ProductsGrid
          products={products}
          darkModeShadow={darkModeShadow}
          isDarkMode={isDarkMode}
        />
        <ComingSoon />
        <TrustBadges />
      </div>

      <GlobalStyles />
    </div>
  );
}
