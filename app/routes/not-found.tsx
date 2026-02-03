import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: MetaFunction = () => {
  const title = "Page Not Found";

  return [
    { title },
    { name: "robots", content: "noindex" },
  ];
};

export default function NotFoundRoute() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="container max-w-lg text-center">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button asChild>
          <Link to="/">
            <Home className="w-4 h-4 mr-1" />
            Home Page
          </Link>
        </Button>
      </div>
    </section>
  );
}
