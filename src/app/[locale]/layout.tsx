import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { isLocale, locales, t } from "@/lib/i18n";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, HOME_TITLE } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: HOME_TITLE, template: `%s | ${SITE_NAME}` },
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-lockup.png`,
    email: "hello@brewstudio.pl",
    description: t(locale, SITE_DESCRIPTION),
  };
  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-ink font-sans antialiased">
        <a href="#main-content" className="skip-link">
          {t(locale, "Skip to content")}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
