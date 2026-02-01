import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFeaturedItems } from '@/data/portfolio';

export function PortfolioTeaser() {
  const featuredItems = getFeaturedItems().slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Our Recent Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse our portfolio of completed projects across Portland and Vancouver.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredItems.map((item, index) => (
            <Link
              key={item.id}
              to="/portfolio"
              className={`group relative overflow-hidden rounded-xl aspect-square ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-primary-foreground font-display font-semibold text-lg">
                  {item.title}
                </p>
                <p className="text-stone-300 text-sm">{item.location}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/portfolio">
              View Full Portfolio
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
