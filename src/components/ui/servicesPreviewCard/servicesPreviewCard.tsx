import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export const ServicesPreviewCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <Link
      to={`/services#${service.id}`}
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
      <div className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-hover transition-colors">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
};
