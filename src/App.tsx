import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Careers from "./pages/Careers";
import ProjectsPage from "./pages/ProjectsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminVerify from "./pages/AdminVerify";
import SecureDashboard from "./pages/SecureDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import TFAScreen from "./pages/TFAScreen";
import CertificateList from "./pages/CertificateList";
import VerifyCertificate from "./pages/VerifyCertificate";
import CertificateGenerator from "./pages/CertificateGenerator";
import PublicVerify from "./pages/PublicVerify";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-verify" element={<AdminVerify />} />
          <Route path="/setup-tfa" element={<TFAScreen />} />
          <Route
            path="/secure-dashboard"
            element={
              <ProtectedRoute>
                <SecureDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/certificates"
            element={
              <ProtectedRoute>
                <CertificateGenerator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/certificate-list"
            element={
              <ProtectedRoute>
                <CertificateList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/verify"
            element={
              <ProtectedRoute>
                <VerifyCertificate />
              </ProtectedRoute>
            }
          />
          <Route path="/verify/:certId" element={<PublicVerify />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
