import type { MetaFunction } from "react-router";
import { BASE_URL } from "@/assets/constants";
import { Link } from "react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAreasByState } from "@/data/serviceAreas";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: MetaFunction = () => {
  const title = "Service Area";
  const description =
    "Stoneworks PDX serves Portland OR, Vancouver WA, and surrounding areas. Expert stone and brick masonry services in the greater Portland metro area.";
  const canonical = `${BASE_URL}/service-area`;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: canonical },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
};

export default function ServiceAreaRoute() {
  const oregonAreas = getAreasByState("OR");
  const washingtonAreas = getAreasByState("WA");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-stone-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Service Area
            </h1>
            <p className="text-lg text-muted-foreground">
              We provide expert stone and brick masonry services throughout the
              greater Portland metro area and Southwest Washington. If you're
              within about 30 miles of Portland, we can likely help.
            </p>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-8">
        <div className="container">
          <div className="aspect-[10/16] sm:aspect-[1/1] md:aspect-[21/9] bg-stone-200 rounded-xl overflow-hidden relative">
            <iframe width="100%" height="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.84156799316408%2C45.46061022009265%2C-122.50511169433595%2C45.607791130167435&amp;layer=mapnik"></iframe>
          </div>
        </div>
      </section>

      {/* Areas Lists */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Oregon */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-primary font-bold text-sm">
                  OR
                </span>
                Oregon
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {oregonAreas.map((area) => (
                  <div
                    key={area.name}
                    className={`flex items-center gap-2 p-3 rounded-lg border ${
                      area.primary
                        ? "border-primary bg-primary-light"
                        : "border-border bg-card"
                    }`}
                  >
                    <MapPin
                      className={`w-4 h-4 ${
                        area.primary ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={
                        area.primary
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {area.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Washington */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-primary font-bold text-sm">
                  WA
                </span>
                Washington
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {washingtonAreas.map((area) => (
                  <div
                    key={area.name}
                    className={`flex items-center gap-2 p-3 rounded-lg border ${
                      area.primary
                        ? "border-primary bg-primary-light"
                        : "border-border bg-card"
                    }`}
                  >
                    <MapPin
                      className={`w-4 h-4 ${
                        area.primary ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={
                        area.primary
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {area.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 bg-stone-50 rounded-xl p-6 text-center">
            <p className="text-muted-foreground mb-4">
              Don't see your area listed? Give us a call — we may still be able
              to help with your project depending on scope and location.
            </p>
            <Button asChild>
              <Link to="/contact">
                Request a Free Estimate
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
