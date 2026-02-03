import type { MetaFunction } from "react-router";
import { BASE_URL } from "@/assets/constants";
import { Link } from "react-router";
import {
  Mountain,
  Flame,
  Home,
  Wrench,
  Hammer,
  Building,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "mountain": Mountain,
  "flame": Flame,
  "home": Home,
  "wrench": Wrench,
  "hammer": Hammer,
  "brick-wall": Building,
};

// eslint-disable-next-line react-refresh/only-export-components
export const meta: MetaFunction = () => {
  const title = "Stone & Brick Masonry Services";
  const description =
    "Stone veneer installation, brick masonry, fireplace surrounds, exterior facades, masonry repair, and tuckpointing services in Portland OR and Vancouver WA.";
  const canonical = `${BASE_URL}/services`;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: canonical },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
};

export default function ServicesRoute() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-stone-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Stone & Brick Services
            </h1>
            <p className="text-lg text-muted-foreground">
              From stunning fireplace surrounds to complete exterior
              transformations, we deliver craftsmanship that stands the test of
              time. Every project includes a detailed quote, clear timeline, and
              our workmanship warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Mountain;
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-10 lg:gap-16 items-start`}
                  >
                    {/* Icon/Visual */}
                    <div className="lg:w-1/3 flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center mb-4">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                        <h4 className="font-semibold text-foreground mb-3">
                          Ideal For:
                        </h4>
                        <ul className="space-y-2">
                          {service.idealFor.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3">
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* What's Included */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">
                          What's Included:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.whatsIncluded.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefit */}
                      <div className="bg-primary-light rounded-lg p-4 mb-6">
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">Why it matters:</span>{" "}
                          {service.benefit}
                        </p>
                      </div>

                      {/* CTA */}
                      <Button asChild size="lg">
                        <Link to="/contact">
                          Get a Quote for This Service
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
