import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import { AdminProvider, useAdmin } from "./context/AdminContext";
import AppLayout from "./components/AppLayout";
import LoadingSpinner from "./components/LoadingSpinner";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AdminLogin from "./admin/AdminLogin";
import AdminPanel from "./admin/AdminPanel";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const AiAccounts = lazy(() => import("./pages/AiAccounts"));
const AiAccount = lazy(() => import("./pages/AiAccount"));
const Support = lazy(() => import("./pages/Support"));
const PremiumTelegram = lazy(() => import("./pages/PremiumTelegram"));

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const { products, aiProducts, telegramProducts } = useAdmin();

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="home" replace />} />

        <Route
          path="/home"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home products={products} aiProducts={aiProducts} />
            </Suspense>
          }
        />

        <Route
          path="about-us"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <AboutUs />
            </Suspense>
          }
        />

        <Route
          path="ai-accounts"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <AiAccounts products={aiProducts} />
            </Suspense>
          }
        />

        <Route
          path="checkout/:accountName"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <AiAccount products={products} />
            </Suspense>
          }
        />

        <Route
          path="premium-telegram"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PremiumTelegram products={telegramProducts} />
            </Suspense>
          }
        />

        <Route
          path="support"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Support />
            </Suspense>
          }
        />
      </Route>

      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminPanel />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <DarkModeProvider>
      <AdminProvider>
        <BrowserRouter basename="/account-land">
          <ScrollToTopOnNavigate />
          <AppRoutes />
          <ScrollToTopButton />
        </BrowserRouter>
      </AdminProvider>
    </DarkModeProvider>
  );
}
