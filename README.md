# brewStudio

A bilingual digital product studio website built with Next.js App Router.

## Development

```bash
npm install
npm run dev
```

The repository also includes a pnpm lockfile. To install its exact dependency versions, use `pnpm install --frozen-lockfile`.

```bash
npm run lint
npm test
npm run build
npm run start
```

Production builds download the configured Google fonts and require network access.

## Languages and URLs

- `/en` and `/pl` are independent, statically rendered home pages.
- Services use English route names in both languages: `/{locale}/services/web-applications`, `/{locale}/services/saas-platforms`, and `/{locale}/services/process-automation`.
- Only `/` negotiates language from the highest-priority `Accept-Language` preference. Polish selects `/pl`; every other language, an absent preference, or a wildcard selects `/en`.
- Explicit language URLs are never redirected based on browser preferences. The header language selector keeps the current service page when switching languages.
- Existing `/uslugi/...` URLs permanently redirect to their corresponding Polish pages. Query parameters are preserved.

Component and function names, route segments and source copy are English. Polish translations are maintained in `src/lib/translations/pl.json`; `src/lib/i18n.ts` translates English source copy and shared content. Business contact details and the studio name are shared between languages.

Each page has a self-referencing canonical, reciprocal `en`/`pl` hreflang links, an English `x-default`, translated metadata and structured data. The sitemap includes all eight localized pages. Search engines choose which language version to display; an incoming request does not reliably expose the language of a search query.

For HTTP and generated SEO checks, start a production server on port 3011 and run `npm run test:integration`. Override the server URL with `SITE_TEST_URL` if needed.
