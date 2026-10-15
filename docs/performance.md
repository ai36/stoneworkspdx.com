# Performance optimization

Measured on 2026-10-15 using Lighthouse 13.5.0, the local production server and default mobile simulated throttling. Individual lab runs; production hosting and run-to-run variation affect scores.

| Metric | Before | After |
| --- | ---: | ---: |
| Performance | 66 | 87 |
| Accessibility | 86 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 3.3 s | 2.5 s |
| Largest Contentful Paint | 6.4 s | 3.6 s |
| Total Blocking Time | 190 ms | 40 ms |
| Cumulative Layout Shift | 0 | 0 |

## Changes

- Responsive WebP variants, explicit image dimensions and high hero fetch priority. Original JPEGs retained.
- Portrait hero for phones: 94.7 kB versus the original 192.8 kB JPEG.
- Local Source Sans 3 and Source Serif 4 Latin variable fonts with swap and preload; external Google Fonts stylesheet removed.
- Unused React Query and notification roots removed from the global tree. Root JS chunk reduced from 118 to 46 kB before gzip (39 to about 17 kB after gzip).
- Portfolio carousel and CSS loaded on project opening; unused Thumbs module removed.
- Map lazy loading and accessible title.
- Page zoom enabled, logo links named, developer link accessible name corrected, service area and footer contrast improved.

## Image maintenance

After changing source JPEGs, run npm run images:generate. Commit src/assets/optimized and src/assets/responsive-images.ts. Sharp is a development dependency; conversion does not run in the browser or during page requests. New portfolio photos must also be referenced in src/data/portfolio.ts.

## Validation

- Production build and TypeScript check passed (tsc -p tsconfig.app.json --noEmit).
- ESLint passed for all changed TypeScript files. Full npm run lint has existing errors in generated .react-router types and untouched command.tsx / textarea.tsx.
- Browser checks at 390 x 844 and 1440 x 900: no horizontal overflow; local fonts loaded; mobile menu, portfolio navigation, carousel opening/closing, category filtering and contact page worked without page errors.
- Carousel chunk was not requested until a project was opened.
- Session reports and screenshots: ignored _/perf/before.report.html and _/perf/final.report.html.

Re-run Lighthouse on the deployed site after publishing. LCP remains above the 2.5 s target. No deployment was performed.
