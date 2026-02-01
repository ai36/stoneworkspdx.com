import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/../app/hooks";
import { setMobileMenuOpen } from "@/features/ui/uiSlice";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMainPage, setIsMainPage] = useState(location.pathname === "/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    dispatch(setMobileMenuOpen(false));
  }, [location.pathname, dispatch]);

  useEffect(() => {
    setIsMainPage(location.pathname === "/");
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background shadow-soft"
          : mobileMenuOpen ? "bg-background" : "bg-transparent",
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo scrolled={scrolled || mobileMenuOpen || !isMainPage}/>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-primary-light"
                    : (scrolled || !isMainPage) ? "text-foreground hover:text-foreground hover:bg-primary-light" : "text-background hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn("lg:hidden p-2 text-background", (scrolled || mobileMenuOpen) && "text-foreground")}
            onClick={() => dispatch(setMobileMenuOpen(!mobileMenuOpen))}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed place-content-center inset-x-0 top-16 md:top-20 bottom-0 z-40 bg-background transition-all duration-300",
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
      >
        <nav className="container py-6 flex flex-col items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                location.pathname === link.href
                  ? "text-primary bg-primary-light"
                  : "text-foreground hover:bg-muted",
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-6 pt-6 space-y-4">
            <Button asChild size="lg" className="">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
