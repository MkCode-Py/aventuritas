import Header from "@/components/aventuritas/Header";
import Hero from "@/components/aventuritas/Hero";
import TrustStrip from "@/components/aventuritas/TrustStrip";
import PlansSection from "@/components/aventuritas/PlansSection";
import HowItWorks from "@/components/aventuritas/HowItWorks";
import Benefits from "@/components/aventuritas/Benefits";
import GiftSection from "@/components/aventuritas/GiftSection";
import FAQ from "@/components/aventuritas/FAQ";
import FinalCTA from "@/components/aventuritas/FinalCTA";
import Footer from "@/components/aventuritas/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <TrustStrip />
    <PlansSection />
    <HowItWorks />
    <Benefits />
    <GiftSection />
    <FAQ />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
