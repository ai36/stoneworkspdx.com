import { Link } from 'react-router';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPrimaryAreas } from '@/data/serviceAreas';

export function ServiceAreaSnippet() {
  const primaryAreas = getPrimaryAreas();

  return (
    <section className="section-padding bg-primary">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
              Serving Portland, OR & Vancouver, WA
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl">
              We provide expert stone and brick masonry services throughout the 
              greater Portland metro area and Southwest Washington.
            </p>
            
            {/* Areas List */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              {primaryAreas.map((area) => (
                <div
                  key={`${area.name}-${area.state}`}
                  className="flex items-center gap-1.5 bg-primary-foreground/10 rounded-full px-3 py-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary-foreground" />
                  <span className="text-sm text-primary-foreground">
                    {area.name}, {area.state}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Button asChild variant="heroOutline" size="lg" className="flex-shrink-0">
            <Link to="/service-area">
              View Full Service Area
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
