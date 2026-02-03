import { Link } from "react-router";
import { Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/ui";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy", label: "Privacy Policy" },
];

const serviceLinks = [
  { href: "/services#stone-veneer", label: "Stone Veneer" },
  { href: "/services#brick-masonry", label: "Brick Masonry" },
  { href: "/services#fireplace-surrounds", label: "Fireplace Surrounds" },
  { href: "/services#masonry-repair", label: "Masonry Repair" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-100">
      {/* CTA Section */}
      <div className="bg-primary">
        <div className="container py-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Get a free, no-obligation estimate for your stone or brick project.
            We'll visit your home and provide a detailed quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/contact">Request Free Estimate</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo className="-translate-y-[22px]" />
            <p className="text-stone-400 text-sm mb-6">
              Expert stone veneer, brick masonry, and repairs across Portland,
              OR and Vancouver, WA. Licensed, insured, and committed to
              exceptional craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-stone-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-stone-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-stone-100 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-stone-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-stone-100 mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:stoneworkspdx@agamalabs.com"
                  className="flex items-start gap-3 text-stone-400 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>stoneworkspdx@agamalabs.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Portland, OR & Vancouver, WA</span>
              </li>
              <li className="flex items-start gap-3 text-stone-400 text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon–Fri: 7:00 AM – 5:00 PM</p>
                  <p>Sat: 9:00 AM – 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>© {currentYear} Stoneworks PDX. All rights reserved</p>
          <Link to={"/privacy"}>Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
