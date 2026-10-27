import assert from "node:assert/strict";
import { test } from "node:test";
import {
  detectLocale,
  isLocale,
  languageAlternates,
  legacyServicePaths,
  localizedPath,
} from "../src/lib/routing.ts";

test("Polish browser language selects Polish, including regional variants", () => {
  for (const header of [
    "pl",
    "pl-PL,pl;q=0.9,en;q=0.8",
    "PL-pl",
    "en;q=0.5,pl;q=0.9",
  ]) {
    assert.equal(detectLocale(header), "pl", header);
  }
});

test("English, missing and unsupported primary languages select English", () => {
  for (const header of [
    null,
    "",
    "en-US,en;q=0.9",
    "de-DE,de;q=0.9,pl;q=0.5",
    "fr",
    "*",
    "pl;q=0,en;q=1",
  ]) {
    assert.equal(detectLocale(header), "en", header);
  }
});

test("invalid language priorities cannot select Polish", () => {
  for (const header of ["pl;q=invalid", "pl;q=-1", "pl;q=2", "pl;q=0"]) {
    assert.equal(detectLocale(header), "en", header);
  }
});

test("only the two explicitly supported locale paths are valid", () => {
  assert.equal(isLocale("en"), true);
  assert.equal(isLocale("pl"), true);
  for (const value of ["de", "en-US", "PL", "services", ""])
    assert.equal(isLocale(value), false);
});

test("each page advertises both languages and English as the default", () => {
  const path = "/services/web-applications";
  assert.deepEqual(languageAlternates(path), {
    en: "/en/services/web-applications",
    pl: "/pl/services/web-applications",
    "x-default": "/en/services/web-applications",
  });
  assert.equal(localizedPath("pl", "#team"), "/pl#team");
  assert.equal(localizedPath("en"), "/en");
});

test("existing service URLs retain their Polish content after migration", () => {
  assert.deepEqual(Object.values(legacyServicePaths), [
    "/pl/services/web-applications",
    "/pl/services/saas-platforms",
    "/pl/services/process-automation",
  ]);
});
