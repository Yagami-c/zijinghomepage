import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Media = lazy(() => import("./pages/Media"));
const MediaFolder = lazy(() => import("./pages/MediaFolder"));
const Works = lazy(() => import("./pages/Works"));
const WorkDetail = lazy(() => import("./pages/WorkDetail"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/media" element={<Media />} />
                <Route path="/media/:slug" element={<MediaFolder />} />
                <Route path="/works" element={<Works />} />
                <Route path="/works/:slug" element={<WorkDetail />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
