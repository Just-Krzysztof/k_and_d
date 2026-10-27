import assert from "node:assert/strict";
import { test } from "node:test";

const base = process.env.SITE_TEST_URL ?? "http://127.0.0.1:3011";
const paths = ["", "/services/web-applications", "/services/saas-platforms", "/services/process-automation"];
const origin = "https://brewstudio.pl";

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1].toLowerCase(), match[2]]));
}

for (const locale of ["en", "pl"]) {
  for (const path of paths) {
    test(`localized HTML and SEO: /${locale}${path}`, async () => {
      const response = await fetch(`${base}/${locale}${path}`, { headers: { "Accept-Language": locale === "en" ? "pl" : "en" } });
      assert.equal(response.status, 200);
      const html = await response.text();
      assert.ok(html.includes(`<html lang="${locale}"`));
      assert.equal([...html.matchAll(/<h1[\s>]/g)].length, 1);
      assert.equal([...html.matchAll(/<main[\s>]/g)].length, 1);
      const links = [...html.matchAll(/<link\s[^>]*>/g)].map((match) => attributes(match[0]));
      assert.equal(links.find((link) => link.rel === "canonical")?.href, `${origin}/${locale}${path}`);
      for (const language of ["en", "pl", "x-default"]) {
        assert.equal(links.find((link) => link.hreflang === language)?.href, `${origin}/${language === "x-default" ? "en" : language}${path}`);
      }
      const meta = [...html.matchAll(/<meta\s[^>]*>/g)].map((match) => attributes(match[0]));
      assert.equal(meta.find((tag) => tag.property === "og:url")?.content, `${origin}/${locale}${path}`);
      assert.equal(meta.find((tag) => tag.property === "og:locale")?.content, locale === "pl" ? "pl_PL" : "en_US");
      assert.equal(meta.find((tag) => tag.name === "twitter:image")?.content, `${origin}/opengraph-image`);
      assert.ok(meta.find((tag) => tag.name === "description")?.content);
      assert.ok(html.includes(`href="/en${path}"`) && html.includes(`href="/pl${path}"`));
      assert.ok(!html.includes("opacity:0"));
      if (path === "") assert.ok(html.includes(locale === "pl" ? "Jeden zespół. Wspólna wizja." : "One team. A shared vision."));
      else assert.ok(html.includes(locale === "pl" ? "Zakres współpracy" : "How we can help"));
    });
  }
}

for (const [header, expected] of [["pl-PL,pl;q=0.9,en;q=0.8", "pl"], ["en-US", "en"], ["de-DE,pl;q=0.5", "en"], [null, "en"]]) {
  test(`initial redirect: ${header ?? "no preference"}`, async () => {
    const response = await fetch(`${base}/?source=test`, { redirect: "manual", headers: header ? { "Accept-Language": header } : {} });
    assert.equal(response.status, 307);
    assert.equal(new URL(response.headers.get("location"), base).pathname, `/${expected}`);
    assert.equal(new URL(response.headers.get("location"), base).search, "?source=test");
    assert.ok(response.headers.get("vary").toLowerCase().includes("accept-language"));
    assert.ok(response.headers.get("cache-control").includes("no-store"));
  });
}

for (const [oldSlug, slug] of [["aplikacje-webowe", "web-applications"], ["platformy-saas", "saas-platforms"], ["automatyzacja-procesow", "process-automation"]]) {
  test(`legacy redirect: ${oldSlug}`, async () => {
    const response = await fetch(`${base}/uslugi/${oldSlug}?source=test`, { redirect: "manual" });
    assert.equal(response.status, 308);
    const target = new URL(response.headers.get("location"), base);
    assert.equal(target.pathname, `/pl/services/${slug}`);
    assert.equal(target.search, "?source=test");
  });
}

test("sitemap lists all eight language versions; robots and image stay accessible", async () => {
  const sitemap = await fetch(`${base}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert.equal([...xml.matchAll(/<loc>/g)].length, 8);
  for (const path of paths) for (const locale of ["en", "pl"]) assert.ok(xml.includes(`<loc>${origin}/${locale}${path}</loc>`));
  assert.ok(xml.includes('hreflang="x-default"'));
  const robots = await fetch(`${base}/robots.txt`);
  assert.equal(robots.status, 200);
  assert.ok((await robots.text()).includes(`Sitemap: ${origin}/sitemap.xml`));
  const image = await fetch(`${base}/opengraph-image`);
  assert.equal(image.status, 200);
  assert.ok(image.headers.get("content-type").includes("image/png"));
});

test("unknown locale and service URLs return 404", async () => {
  for (const path of ["/de", "/en/services/missing", "/pl/services/missing"]) {
    assert.equal((await fetch(`${base}${path}`)).status, 404, path);
  }
});
