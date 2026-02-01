import type { MetaFunction } from "react-router";

import {
  Hero,
  ServicesPreview,
  Process,
  PortfolioTeaser,
  Testimonials,
  FAQ,
  ServiceAreaSnippet,
} from "@/components/sections";

export const meta: MetaFunction = () => {
  const title = "Stone Veneer & Brick Masonry Contractor";
  const description =
    "Expert stone veneer, brick masonry, and repairs in Portland OR and Vancouver WA. Licensed & insured. Free estimates. Quality craftsmanship since day one.";

  // Canonical лучше задавать абсолютным URL, но базовый origin зависит от окружения.
  // Пока оставляем относительный canonical; позже (когда появится ENV/host) сделаем абсолютным.
  const canonical = "/";

  return [
    { title },
    { name: "description", content: description },

    // canonical
    { tagName: "link", rel: "canonical", href: canonical },

    // OpenGraph (минимум для шаринга)
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
};

export default function HomeRoute() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Process />
      <PortfolioTeaser />
      <Testimonials />
      <FAQ />
      <ServiceAreaSnippet />
    </>
  );
}
