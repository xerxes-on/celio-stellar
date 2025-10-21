import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const validLangs = ["en", "ru", "uz"] as const;
type SupportedLang = (typeof validLangs)[number];

const isSupportedLang = (value: string): value is SupportedLang =>
  validLangs.includes(value as SupportedLang);

const LanguageWrapper = () => {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();
  const currentLang = lang && isSupportedLang(lang) ? lang : "en";

  useEffect(() => {
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [currentLang, i18n]);

  if (lang && !isSupportedLang(lang)) {
    return <Navigate to="/" replace />;
  }

  return <Index />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LanguageWrapper />} />
          <Route path="/:lang" element={<LanguageWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
