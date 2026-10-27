import { localize, type Locale } from "./i18n";

const navLinks = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#principles", label: "Why us" },
  { href: "#capabilities", label: "Services" },
  { href: "#approach", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#team", label: "Team" },
];

const pillars = [
  {
    n: "01",
    title: "Product Thinking",
    body: "We take a whole-product view. We go beyond implementing features to consider users, the business and opportunities for future development.",
  },
  {
    n: "02",
    title: "Technology that supports business",
    body: "We don't recommend technology just because it is popular. We choose solutions to match the problem that needs solving.",
  },
  {
    n: "03",
    title: "A collaborative approach",
    body: "We are more than a contractor. We become a partner in building your product.",
  },
  {
    n: "04",
    title: "A tailored approach",
    body: "We don't rely on a fixed formula. Every project starts with the client's goals and is built around them.",
  },
];

const capabilities = [
  {
    title: "Web applications",
    description:
      "Customer portals, internal systems and B2B tools tailored to the way your business works.",
    href: "/services/web-applications",
  },
  {
    title: "SaaS platforms",
    description:
      "From the first product version to a growing service that multiple customers can access in their browser.",
    href: "/services/saas-platforms",
  },
  {
    title: "Process automation",
    description:
      "System integrations, data flows and reporting that reduce repetitive work for your team.",
    href: "/services/process-automation",
  },
  {
    title: "Digital products",
    description:
      "Needs analysis, user experience design and solutions built around a specific business challenge.",
  },
  {
    title: "AI solutions",
    description:
      "AI-assisted analysis and information organisation where the quality of results can be verified.",
  },
  {
    title: "Technology consulting",
    description:
      "Technology selection, existing system reviews and planning the next stages of product development.",
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We get to know the business and find the key ingredients of the problem.",
  },
  {
    n: "02",
    title: "Design",
    body: "We develop the right recipe: a plan and a user experience.",
  },
  {
    n: "03",
    title: "Build",
    body: "We brew the product, from implementation to its first launch.",
  },
  {
    n: "04",
    title: "Growth",
    body: "We improve and develop the product after launch.",
  },
];

const workItems = [
  {
    tag: "SaaS · FINTECH",
    title: "Payment management platform",
    problem: "Manual settlement processes were slowing the team's growth.",
    effect: "Automation cut processing time in half.",
  },
  {
    tag: "HEALTHTECH",
    title: "Appointment management application",
    problem:
      "Disconnected tools made work harder for reception staff and doctors.",
    effect: "One integrated system for the entire clinic.",
  },
  {
    tag: "AI · B2B",
    title: "An internal AI-powered tool",
    problem: "The team was spending hours on repetitive manual data analysis.",
    effect: "Automated reports available in real time.",
  },
];

const marqueeText =
  "PRODUCT THINKING  ·  TECHNOLOGY PARTNER  ·  COLLABORATIVE APPROACH  ·  TAILORED SOLUTIONS  ·  ";

export function getContent(locale: Locale) {
  return localize(
    { navLinks, pillars, capabilities, steps, workItems, marqueeText },
    locale,
  );
}
