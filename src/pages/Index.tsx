import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LanguagesSection from "@/components/LanguagesSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import PrimeSection from "@/components/PrimeSection";
import InternationalSection from "@/components/InternationalSection";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LanguagesSection />
      <PracticeAreasSection />
      <PrimeSection />
      <InternationalSection />
      <PhilosophySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
