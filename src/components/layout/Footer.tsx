import { Link } from 'react-router';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { href: '/services', label: 'Our Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy', label: 'Privacy Policy' },
];

const serviceLinks = [
  { href: '/services#stone-veneer', label: 'Stone Veneer' },
  { href: '/services#brick-masonry', label: 'Brick Masonry' },
  { href: '/services#fireplace-surrounds', label: 'Fireplace Surrounds' },
  { href: '/services#masonry-repair', label: 'Masonry Repair' },
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
            <Button asChild variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+15035550123">
                <Phone className="w-5 h-5 mr-2" />
                (503) 555-0123
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">S</span>
              </div>
              <div>
                <span className="font-display font-semibold text-lg text-stone-100">
                  Stoneworks
                </span>
                <span className="font-display font-semibold text-lg text-primary"> PDX</span>
              </div>
            </Link>
            <p className="text-stone-400 text-sm mb-6">
              Expert stone veneer, brick masonry, and repairs across Portland, OR and Vancouver, WA. 
              Licensed, insured, and committed to exceptional craftsmanship.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-stone-100 mb-4">Quick Links</h3>
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
          <div>
            <h3 className="font-display font-semibold text-stone-100 mb-4">Services</h3>
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
          <div>
            <h3 className="font-display font-semibold text-stone-100 mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15035550123"
                  className="flex items-start gap-3 text-stone-400 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>(503) 555-0123</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@stoneworkspdx.com"
                  className="flex items-start gap-3 text-stone-400 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>info@stoneworkspdx.com</span>
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
          <p>© {currentYear} Stoneworks PDX. All rights reserved.</p>
          <p>Licensed & Insured | CCB #XXXXXX</p>
        </div>
      </div>
    </footer>
  );
}
