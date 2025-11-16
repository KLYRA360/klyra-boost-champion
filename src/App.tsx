import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Parcours from "./pages/Parcours";
import Urgence from "./pages/Urgence";
import UrgenceMerci from "./pages/UrgenceMerci";
import NousRejoindre from "./pages/NousRejoindre";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import MentoringDirigeant from "./pages/MentoringDirigeant";
import DiagnosticStrategique360 from "./pages/DiagnosticStrategique360";
import TransformationInterne from "./pages/TransformationInterne";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mon-parcours" element={<Parcours />} />
          <Route path="/urgence" element={<Urgence />} />
          <Route path="/urgence/merci" element={<UrgenceMerci />} />
          <Route path="/nous-rejoindre" element={<NousRejoindre />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/mentoring-dirigeant-montpellier" element={<MentoringDirigeant />} />
          <Route path="/diagnostic-strategique-360" element={<DiagnosticStrategique360 />} />
          <Route path="/transformation-interne-organisation" element={<TransformationInterne />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
