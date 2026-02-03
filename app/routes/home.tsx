import type { MetaFunction } from "react-router";
import { BASE_URL } from "@/assets/constants";
import {
  Hero,
  ServicesPreview,
  Process,
  PortfolioTeaser,
  Testimonials,
  FAQ,
  ServiceAreaSnippet,
} from "@/components/sections";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: MetaFunction = () => {
  const title = "Stone Veneer & Brick Masonry Contractor";
  const description =
    "Expert stone veneer, brick masonry, and repairs in Portland OR and Vancouver WA. Licensed & insured. Free estimates. Quality craftsmanship since day one.";
  const canonical = `${BASE_URL}/`;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: canonical },
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
