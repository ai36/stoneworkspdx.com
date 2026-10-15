import { Link } from 'react-router';
import { ArrowRight, Clock, FileText, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/optimized/hero-fireplace-1920.webp';
import mobileHeroSmall from '@/assets/optimized/hero-fireplace-mobile-320.webp';
import mobileHero from '@/assets/optimized/hero-fireplace-mobile-540.webp';

import { responsiveImage } from '@/assets/responsive-images';

const trustBadges = [
  // { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: 'On‑time On‑budget' },
  { icon: Award, text: 'Workmanship Warranty' },
  { icon: FileText, text: 'Detailed Quotes' },
];

export function Hero() {
  return (
    <section className="relative min-h-dvh p-10 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture className="block w-full h-full">
          <source media="(max-width: 640px) and (orientation: portrait)" srcSet={`${mobileHeroSmall} 320w, ${mobileHero} 540w`} sizes="100vw" width="540" height="1080" />
        <img
          src={heroImage}
          {...responsiveImage(heroImage, "(max-aspect-ratio: 16/9) 178vh, 100vw")}
          fetchPriority="high"
          loading="eager"
          alt="Beautiful stone fireplace surround in modern living room"
          className="w-full h-full object-cover"
        />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-stone-50 mb-6 leading-tight">
            Stone & Brick Work That{' '}
            <span className="text-primary">Elevates Your Home</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 mb-8 leading-relaxed">
            Expert stone veneer, brick masonry, and repairs across Portland, OR and 
            Vancouver, WA — clear estimates, clean job sites, reliable timelines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Request a Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-stone-300"
              >
                <badge.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-balance max-w-min">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
