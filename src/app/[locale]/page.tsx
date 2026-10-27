import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/site";
import ScrollProgress from "@/components/ScrollProgress";
import CursorSpotlight from "@/components/CursorSpotlight";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutStudio from "@/components/AboutStudio";
import Philosophy from "@/components/Philosophy";
import Principles from "@/components/Principles";
import Capabilities from "@/components/Capabilities";
import Approach from "@/components/Approach";
import Work from "@/components/Work";
import Quote from "@/components/Quote";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return createPageMetadata(locale);
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <div className="relative w-full overflow-hidden bg-bg text-ink">
      <ScrollProgress />
      <CursorSpotlight />
      <Nav locale={locale} />
      <main id="main-content">
        <Hero locale={locale} />
        <Marquee locale={locale} />
        <AboutStudio locale={locale} />
        <Philosophy locale={locale} />
        <Principles locale={locale} />
        <Capabilities locale={locale} />
        <Approach locale={locale} />
        <Work locale={locale} />
        <Quote locale={locale} />
        <Team locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
