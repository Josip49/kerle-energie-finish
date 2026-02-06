import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

// Service Pages
import Energieberatung from "./pages/services/Energieberatung";
import Heizlastberechnung from "./pages/services/Heizlastberechnung";
import Sanierungsfahrplan from "./pages/services/Sanierungsfahrplan";
import Luftdichtheitspruefung from "./pages/services/Luftdichtheitspruefung";
import Lueftungskonzept from "./pages/services/Lueftungskonzept";
import Energieausweis from "./pages/services/Energieausweis";
import Waermepumpenberatung from "./pages/services/Waermepumpenberatung";
import PhotovoltaikBeratung from "./pages/services/PhotovoltaikBeratung";
import BzABestaetigung from "./pages/services/BzABestaetigung";

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
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />

          {/* Service Routes */}
          <Route path="/leistungen/energieberatung" element={<Energieberatung />} />
          <Route path="/leistungen/heizlastberechnung" element={<Heizlastberechnung />} />
          <Route path="/leistungen/sanierungsfahrplan" element={<Sanierungsfahrplan />} />
          <Route path="/leistungen/luftdichtheitspruefung" element={<Luftdichtheitspruefung />} />
          <Route path="/leistungen/lueftungskonzept" element={<Lueftungskonzept />} />
          <Route path="/leistungen/energieausweis" element={<Energieausweis />} />
          <Route path="/leistungen/waermepumpenberatung" element={<Waermepumpenberatung />} />
          <Route path="/leistungen/photovoltaik-beratung" element={<PhotovoltaikBeratung />} />
          <Route path="/leistungen/bza-bestaetigung" element={<BzABestaetigung />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;