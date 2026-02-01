import { Link } from 'react-router';
import { ArrowRight, Mountain, Flame, Home, Wrench, Hammer, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mountain: Mountain,
  flame: Flame,
  home: Home,
  wrench: Wrench,
  hammer: Hammer,
  'brick-wall': Building,
};

export function ServicesPreview() {
  // Show first 6 services
  const previewServices = services.slice(0, 6);

  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Stone & Brick Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From stunning fireplace surrounds to complete exterior transformations, 
            we deliver craftsmanship that stands the test of time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service) => {
            const Icon = iconMap[service.icon] || Mountain;
            return (
              <div
                key={service.id}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
