import type { Metadata } from "next";
import ScrollProgress from "@/components/ScrollProgress";
import CursorSpotlight from "@/components/CursorSpotlight";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import KimJestesmy from "@/components/KimJestesmy";
import Filozofia from "@/components/Filozofia";
import Wyroznia from "@/components/Wyroznia";
import Capabilities from "@/components/Capabilities";
import Approach from "@/components/Approach";
import Work from "@/components/Work";
import Quote from "@/components/Quote";
import Onas from "@/components/Onas";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-bg text-ink">
      <ScrollProgress />
      <CursorSpotlight />
      <Nav />
      <main id="main-content">
        <Hero />
        <Marquee />
        <KimJestesmy />
        <Filozofia />
        <Wyroznia />
        <Capabilities />
        <Approach />
        <Work />
        <Quote />
        <Onas />
        <Kontakt />
      </main>
      <Footer />
    </div>
  );
}
