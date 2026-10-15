import type { LinksFunction, MetaFunction } from "react-router";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { Links, Meta, Outlet, Scripts } from "react-router";
import { Developer, ScrollToTop } from "@/components/ui";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import { store } from "@/../app/store";
import tailwindStylesHref from "./tailwind.css?url";
import { usePageView } from "./analytics";
import bodyFont from "@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2?url";
import displayFont from "@fontsource-variable/source-serif-4/files/source-serif-4-latin-wght-normal.woff2?url";

// eslint-disable-next-line react-refresh/only-export-components
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesHref },
    { rel: "preload", href: bodyFont, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    { rel: "preload", href: displayFont, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ];
};

// eslint-disable-next-line react-refresh/only-export-components
export const meta: MetaFunction = () => {
  return [
    { title: "Stoneworks PDX" },
    {
      name: "description",
      content:
        "Stone veneer and brick masonry contractor serving Portland, OR and Vancouver, WA",
    },
    { property: "og:type", content: "website" },
  ];
};

export default function Root() {
  return (
    <Document>
      <Provider store={store}>
        <TooltipProvider>
          <Layout>
            <Outlet />
          </Layout>
        </TooltipProvider>
      </Provider>
    </Document>
  );
}

export function HydrateFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <p className="text-muted-foreground">Loading…</p>
    </div>
  );
}

function Document({ children }: { children: ReactNode }) {
  usePageView();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <Meta />
        <Links />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TND1YYTS9B"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TND1YYTS9B');
      `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSCPD4XB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}

        <Developer />
        <ScrollToTop />
        <Scripts />
      </body>
    </html>
  );
}
