import type { LinksFunction, MetaFunction } from "react-router";

import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigationType,
  useLocation,
} from "react-router";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import { store } from "@/../app/store";

import tailwindStylesHref from "./tailwind.css?url";

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

/**
 * Базовые мета по умолчанию.
 * Page-level meta (из app/routes/*.tsx) будет дополнять/переопределять title/description.
 */
export const meta: MetaFunction = () => {
  return [
    { title: "Stoneworks PDX" },
    {
      name: "description",
      content:
        "Stone veneer and brick masonry contractor serving Portland, OR and Vancouver, WA.",
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

/**
 * (Опционально) fallback пока идут loader-данные / гидрация.
 * Можно удалить, если не нужен.
 */
export function HydrateFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <p className="text-muted-foreground">Loading…</p>
    </div>
  );
}

function Document({ children }: { children: ReactNode }) {
  const navigationType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <Meta />
        <Links />
      </head>
      <body>
        {children}

        <ScrollRestoration
          getKey={(loc) => {
            // Ключ для сохранения позиций:
            // - для POP (back/forward) используем полноценный ключ, чтобы восстановить точно
            // - для PUSH/REPLACE возвращаем уникальный ключ на каждый переход, чтобы "не подхватывать" прошлый скролл
            if (navigationType === "REPLACE") return loc.key;
            return `${loc.pathname}${loc.search}${Date.now()}`;
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}
