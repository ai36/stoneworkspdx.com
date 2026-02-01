import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

const BASE_TITLE = 'Stoneworks PDX';
const DEFAULT_DESCRIPTION = 'Expert stone veneer, brick masonry, and repairs in Portland OR and Vancouver WA. Licensed & insured. Free estimates. Stone veneer contractor Portland.';
const BASE_URL = 'https://stoneworkspdx.com';

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  noIndex = false,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Stone & Brick Masonry Portland OR`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BASE_TITLE} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="geo.region" content="US-OR" />
      <meta name="geo.placename" content="Portland" />
    </Helmet>
  );
}
