import { localize, type Locale } from "./i18n";

const services = [
  {
    slug: "web-applications",
    title: "Web application development for business",
    name: "Web applications",
    description:
      "We design and build web applications for businesses: customer portals, internal systems and B2B tools. From needs analysis to launch and ongoing development.",
    intro:
      "We build browser-based applications that support your daily operations and customer service. We start with the business problem: who will use the system, what they need to do and what gets in their way today.",
    audience:
      "A web application is a good fit when off-the-shelf tools don't match how your business works, data is scattered and your team repeats the same tasks across multiple systems. It can also form the foundation of a new service for your customers.",
    scope: [
      {
        title: "Customer portals and dashboards",
        body: "Access to documents, case statuses and services in one place, with permissions tailored to each user's role.",
      },
      {
        title: "Internal systems and B2B tools",
        body: "Support for business processes, information flow and team collaboration without having to rely on spreadsheets for everything.",
      },
      {
        title: "Integrations and application development",
        body: "Connecting applications to existing tools and extending features in line with user and business needs.",
      },
    ],
    process:
      "Together, we define the key user journeys and the scope of the first release. We then design the interface and solution structure, implement features and test them before launch. After release, we plan further changes around real needs.",
    questions: [
      {
        question: "Will the web application work on a phone?",
        answer:
          "We design interfaces for different screen sizes. We agree on specific mobile requirements at the start, especially if the application will be used in the field or outside the office.",
      },
      {
        question: "Can you extend an existing system?",
        answer:
          "Yes. We first review the existing application, its limitations and how it is maintained. We then identify which parts should be extended, integrated or rebuilt.",
      },
      {
        question: "What determines the cost of a web application?",
        answer:
          "The number and complexity of features, integrations, user roles and requirements for data and maintenance. We agree on the scope and delivery approach after discussing your product.",
      },
    ],
  },
  {
    slug: "saas-platforms",
    title: "SaaS platform design and development",
    name: "SaaS platforms",
    description:
      "We build SaaS platforms: from defining the MVP and designing the product to customer accounts, integrations, launch and ongoing feature development.",
    intro:
      "We help turn an idea for a digital service into a product customers can use in their browser. We combine user experience design with application development and planning for future growth.",
    audience:
      "SaaS suits businesses that want to offer a solution to multiple customers and develop it as a shared product. Before building, it is worth defining your audience, the problem they will pay to solve and how you will validate those assumptions.",
    scope: [
      {
        title: "The first product version - MVP",
        body: "Choosing the features needed to test the product's core use case without adding every possible future idea.",
      },
      {
        title: "Accounts, organisations and permissions",
        body: "Designing service access, user collaboration and customer data separation around the product's requirements.",
      },
      {
        title: "Integrations and access models",
        body: "Planning integrations, payments and subscription tiers when the chosen business model needs them.",
      },
    ],
    process:
      "We start with the audience and value proposition. We define the MVP, design the key journeys and build the first release. After launch, we review user needs and plan product development rather than implementing every possible feature upfront.",
    questions: [
      {
        question: "Do we need to build the full platform straight away?",
        answer:
          "No. The first version should let users complete the core task and help validate business assumptions. We plan further development after gathering feedback from users.",
      },
      {
        question: "Can the platform serve multiple businesses?",
        answer:
          "Yes. We design organisations, accounts, permissions and data isolation around the requirements of the specific product.",
      },
      {
        question: "What should I prepare before discussing a SaaS product?",
        answer:
          "A description of your audience, their problem and the product's main use case. Information about existing alternatives and your sales approach is also useful. A finished technical specification is not required.",
      },
    ],
  },
  {
    slug: "process-automation",
    title: "Business process automation",
    name: "Process automation",
    description:
      "We automate repetitive business processes and connect company systems. Integrations, data flows and reporting tailored to how your team works.",
    intro:
      "We help reduce manual data transfers, repetitive tasks and work across disconnected tools. We design automation around the real process, its exceptions and the team's responsibilities.",
    audience:
      "Consider automation when your team regularly copies information, prepares similar reports or tracks handovers between systems. We start by identifying repetitive tasks with clearly defined rules.",
    scope: [
      {
        title: "Business system integrations",
        body: "Sharing information between existing applications, taking available APIs, data sources and tool limitations into account.",
      },
      {
        title: "Data flows and reporting",
        body: "Organising data collection, report preparation and notifications for the people responsible for the next step in a process.",
      },
      {
        title: "AI-assisted analysis",
        body: "Assessing whether AI can help analyse or organise content. Defining how results will be checked and which cases require a human decision.",
      },
    ],
    process:
      "We first map the current workflow and identify where delays or errors occur. We choose a specific process, agree on the expected outcome and build the solution. Before launch, we also test exceptions: missing data, unavailable integrations and cases that need manual handling.",
    questions: [
      {
        question: "Does automation mean replacing our existing tools?",
        answer:
          "Not always. We first check whether your existing systems can be connected. What is possible depends on their APIs, permissions and data export capabilities.",
      },
      {
        question: "Does every process need AI?",
        answer:
          "No. Integrations and conventional automation are often enough for tasks governed by clear rules. We consider AI when a task involves unstructured content and the quality of its output can be assessed.",
      },
      {
        question: "How can we measure the impact of automation?",
        answer:
          "Before implementation, establish a baseline: task duration, the number of manual steps or errors. After launch, compare the same process and check whether the solution meets the agreed goal.",
      },
    ],
  },
];

export function getServices(locale: Locale) {
  return localize(services, locale);
}
