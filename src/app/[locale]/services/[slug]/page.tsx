import type { Metadata } from "next";
import { t, isLocale, localizedPath } from "@/lib/i18n";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { getServices } from "@/lib/services";
import { createPageMetadata, SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getServices("en").map(({ slug }) => ({ slug }));
}

async function getService(params: Props["params"]) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const services = getServices(locale);
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return { service, services, locale };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service, locale } = await getService(params);
  return createPageMetadata(
    locale,
    `/services/${service.slug}`,
    service.title,
    service.description,
  );
}

export default async function ServicePage({ params }: Props) {
  const { service, services, locale } = await getService(params);
  const url = `${SITE_URL}${localizedPath(locale, `/services/${service.slug}`)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        description: service.description,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: `${SITE_URL}/${locale}`,
          },
          { "@type": "ListItem", position: 2, name: service.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Nav locale={locale} />
      <main id="main-content" className="px-[5vw] pt-36 sm:pt-44">
        <article className="mx-auto max-w-[1100px]">
          <nav
            aria-label={t(locale, "Breadcrumbs")}
            className="mb-10 text-sm text-ink/65"
          >
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link
                  href={localizedPath(locale)}
                  className="underline underline-offset-4"
                >
                  brewStudio
                </Link>
              </li>
              <li>
                <span aria-hidden="true">/ </span>
                <span aria-current="page">{service.name}</span>
              </li>
            </ol>
          </nav>
          <header className="max-w-[900px] pb-16 sm:pb-24">
            <p className="mb-5 font-mono text-xs tracking-[0.12em] text-accent">
              {t(locale, "DESIGN \u00b7 BUILD \u00b7 GROW")}
            </p>
            <h1 className="text-[clamp(36px,6vw,80px)] leading-[1.05] font-extrabold tracking-[-0.03em]">
              {service.title}
            </h1>
            <p className="mt-8 max-w-[760px] text-xl leading-relaxed text-ink/70">
              {service.intro}
            </p>
            <a
              href="#contact"
              className="mt-9 inline-block rounded-full bg-ink px-7 py-4 font-bold text-bg"
            >
              {t(locale, "Let's discuss your project")}
            </a>
          </header>
          <section className="border-t border-ink/12 py-12 sm:py-16">
            <h2 className="mb-6 text-3xl font-bold">
              {t(locale, "When is this the right solution?")}
            </h2>
            <p className="max-w-[760px] text-lg leading-relaxed text-ink/70">
              {service.audience}
            </p>
          </section>
          <section className="border-t border-ink/12 py-12 sm:py-16">
            <h2 className="mb-9 text-3xl font-bold">
              {t(locale, "How we can help")}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {service.scope.map((item) => (
                <div key={item.title}>
                  <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-ink/70">{item.body}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="border-t border-ink/12 py-12 sm:py-16">
            <h2 className="mb-6 text-3xl font-bold">
              {t(locale, "From a conversation to a working solution")}
            </h2>
            <p className="max-w-[760px] text-lg leading-relaxed text-ink/70">
              {service.process}
            </p>
            <Link
              href={localizedPath(locale, "#approach")}
              className="mt-6 inline-block font-semibold underline underline-offset-4"
            >
              {t(locale, "Explore our process")}
            </Link>
          </section>
          <section className="border-t border-ink/12 py-12 sm:py-16">
            <h2 className="mb-9 text-3xl font-bold">
              {t(locale, "Questions before getting started")}
            </h2>
            <div className="max-w-[760px] space-y-8">
              {service.questions.map((item) => (
                <div key={item.question}>
                  <h3 className="mb-3 text-xl font-bold">{item.question}</h3>
                  <p className="leading-relaxed text-ink/70">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
        <nav
          aria-label={t(locale, "Other services")}
          className="mx-auto max-w-[1100px] border-t border-ink/12 py-12"
        >
          <h2 className="mb-6 text-2xl font-bold">
            {t(locale, "Other ways we can help")}
          </h2>
          <ul className="flex flex-wrap gap-6">
            {services
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link
                    href={localizedPath(locale, `/services/${item.slug}`)}
                    className="font-semibold underline underline-offset-4"
                  >
                    {item.name} →
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
