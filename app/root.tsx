import type { LinksFunction, MetaFunction } from "react-router";
import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Links, Meta, Outlet, Scripts } from "react-router";
import { ScrollToTop } from "@/components/ui";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import { store } from "@/../app/store";
import tailwindStylesHref from "./tailwind.css?url";
import { usePageView } from "./analytics";

// eslint-disable-next-line react-refresh/only-export-components
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesHref },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&family=Source+Serif+4:wght@200..900&display=swap",
    },
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
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Document>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Layout>
              <Outlet />
            </Layout>
          </TooltipProvider>
        </QueryClientProvider>
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
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TSCPD4XB');
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

        <ScrollToTop />
        <Scripts />
      </body>
    </html>
  );
}
