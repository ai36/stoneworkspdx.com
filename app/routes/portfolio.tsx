import type { MetaFunction } from "react-router";
import { BASE_URL } from "@/assets/constants";
import { useEffect } from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, A11y } from "swiper/modules";
import { X, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/../app/hooks";
import {
  setActiveFilter,
  setSelectedProject,
  selectFilteredItems,
  selectSelectedProject,
} from "@/features/portfolio/portfolioSlice";
import { categoryLabels, type PortfolioCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const filterOptions: (PortfolioCategory | "all")[] = [
  "all",
  "stone-veneer",
  "brick",
  "fireplaces",
  "repairs",
  "exteriors",
];

// eslint-disable-next-line react-refresh/only-export-components
export const meta: MetaFunction = () => {
  const title = "Our Portfolio";
  const description =
    "Browse our portfolio of stone veneer, brick masonry, and fireplace projects in Portland OR and Vancouver WA. See our craftsmanship in action.";
  const canonical = `${BASE_URL}/portfolio`;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: canonical },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
};

export default function PortfolioRoute() {
  const dispatch = useAppDispatch();

  const activeFilter = useAppSelector((state) => state.portfolio.activeFilter);
  const filteredItems = useAppSelector(selectFilteredItems);

  // ✅ соответствует твоему portfolioSlice: возвращает объект проекта или null
  const selectedProject = useAppSelector(selectSelectedProject);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(setSelectedProject(null));
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [dispatch]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-stone-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Work
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our portfolio of completed stone and brick projects across
              Portland and Vancouver. Click any project to see details.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => dispatch(setActiveFilter(filter))}
                className={cn(
                  "filter-chip",
                  activeFilter === filter && "filter-chip-active"
                )}
              >
                {categoryLabels[filter]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => dispatch(setSelectedProject(item.id))}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] text-left"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-2 py-1 bg-primary/80 text-primary-foreground text-xs font-medium rounded mb-2">
                    {categoryLabels[item.category]}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-stone-50">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-stone-300 text-sm mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No projects found in this category. Try selecting a different
                filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal/Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-stone-900/95 flex items-center justify-center p-4"
          onClick={() => dispatch(setSelectedProject(null))}
        >
          <div
            className="relative bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => dispatch(setSelectedProject(null))}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-stone-800/80 text-stone-100 flex items-center justify-center hover:bg-stone-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Carousel */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Thumbs, A11y]}
                navigation
                pagination={{ clickable: true }}
                className="aspect-video rounded-t-2xl"
              >
                {selectedProject.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Project Details */}
            <div className="p-6 md:p-8">
              <span className="inline-block px-3 py-1 bg-primary-light text-primary text-sm font-medium rounded-full mb-3">
                {categoryLabels[selectedProject.category]}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                {selectedProject.title}
              </h2>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>{selectedProject.location}</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Scope */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Project Scope:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.scope.map((item, i) => (
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

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Results:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button asChild size="lg" className="w-full md:w-auto">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
