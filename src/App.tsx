import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Media = lazy(() => import("./pages/Media"));
const MediaFolder = lazy(() => import("./pages/MediaFolder"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="py-32 flex items-center justify-center">
    <span className="font-cinzel text-[11px] tracking-[0.4em] text-primary/60 uppercase animate-pulse">
      ✦ Loading ✦
    </span>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/media" element={<Media />} />
                <Route path="/media/:slug" element={<MediaFolder />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
