import { styles, responsiveCss } from "./styles";
import { runSmokeTests } from "./theme";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { StorySection } from "./components/StorySection";
import { AboutSection } from "./components/AboutSection";
import { MotifsSection } from "./components/MotifsSection";
import { PricingSection } from "./components/PricingSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

if (typeof window !== "undefined") {
  runSmokeTests();
}

export default function KouzelneTvareWebDesign() {
  return (
    <main style={styles.page}>
      <style>{responsiveCss}</style>

      <div style={styles.blobPink} />
      <div style={styles.blobTeal} />
      <div style={styles.blobLavender} />

      <Header />
      <HeroSection />
      <ServicesSection />
      <StorySection />
      <AboutSection />
      <MotifsSection />
      <PricingSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
