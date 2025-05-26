"use client";
import "../../i18n";
import Hero from "./Hero";
import FeaturesDiscovery from "./FeaturesDiscovery";
import ValueProps from "./ValueProps";
import ResearchProof from "./ResearchProof";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header";
import ActivitiesDiscovery from "./ActivitiesDiscovery";

export default function LandingClient() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesDiscovery />
      <ActivitiesDiscovery />
      <ValueProps />
      <ResearchProof />
      <FAQ />
      <Footer />
    </>
  );
} 