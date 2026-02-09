import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import ProblemsSection from "@/components/ProblemsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 relative">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <VisionSection />
      <ProblemsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
