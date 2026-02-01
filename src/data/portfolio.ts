import exteriorStone1 from '@/assets/portfolio/exterior-stone-1.jpg';
import brickFireplace1 from '@/assets/portfolio/brick-fireplace-1.jpg';
import accentWall1 from '@/assets/portfolio/accent-wall-1.jpg';
import brickRepair1 from '@/assets/portfolio/brick-repair-1.jpg';
import outdoorKitchen1 from '@/assets/portfolio/outdoor-kitchen-1.jpg';
import stoneFireplace2 from '@/assets/portfolio/stone-fireplace-2.jpg';
import commercialExterior1 from '@/assets/portfolio/commercial-exterior-1.jpg';
import retainingWall1 from '@/assets/portfolio/retaining-wall-1.jpg';
import stoneColumns1 from '@/assets/portfolio/stone-columns-1.jpg';
import brickMailbox1 from '@/assets/portfolio/brick-mailbox-1.jpg';
import fireplaceHearth1 from '@/assets/portfolio/fireplace-hearth-1.jpg';

export type PortfolioCategory = 
  | 'stone-veneer'
  | 'brick'
  | 'fireplaces'
  | 'repairs'
  | 'exteriors';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  summary: string;
  scope: string[];
  results: string[];
  images: string[];
  featured?: boolean;
}

export const categoryLabels: Record<PortfolioCategory | 'all', string> = {
  all: 'All Projects',
  'stone-veneer': 'Stone Veneer',
  brick: 'Brick',
  fireplaces: 'Fireplaces',
  repairs: 'Repairs',
  exteriors: 'Exteriors',
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'modern-stone-fireplace',
    title: 'Modern Stone Fireplace Surround',
    category: 'fireplaces',
    location: 'Portland, OR',
    summary: 'Floor-to-ceiling gray stacked stone fireplace with custom wood mantel. Transformed a dated living room into a stunning focal point.',
    scope: [
      'Removed existing tile surround',
      'Installed natural stacked stone veneer',
      'Custom floating wood mantel installation',
      'Gas insert integration',
      'Hearth extension with matching stone',
    ],
    results: [
      'Completed in 5 days',
      'Increased home value by $15,000+',
      'Seamless gas line integration',
      'Zero cleanup issues—spotless finish',
    ],
    images: [stoneFireplace2, fireplaceHearth1],
    featured: true,
  },
  {
    id: 'craftsman-exterior-facade',
    title: 'Craftsman Home Stone Facade',
    category: 'exteriors',
    location: 'Lake Oswego, OR',
    summary: 'Complete exterior stone veneer installation on a craftsman-style home. Tan and gray blend complements the existing architecture.',
    scope: [
      'Full front facade stone veneer',
      'Stone column wraps (4 columns)',
      'Foundation skirting',
      'Water barrier installation',
      'Color-matched mortar joints',
    ],
    results: [
      'Transformed curb appeal',
      'Project completed on schedule',
      '25-year warranty on materials',
      'Neighbors requesting similar work',
    ],
    images: [exteriorStone1, stoneColumns1],
    featured: true,
  },
  {
    id: 'classic-brick-fireplace',
    title: 'Classic Red Brick Fireplace',
    category: 'fireplaces',
    location: 'Vancouver, WA',
    summary: 'Traditional red brick fireplace with herringbone interior and wood mantel. Warm, timeless design for a family room renovation.',
    scope: [
      'Full brick fireplace construction',
      'Herringbone pattern firebox',
      'Custom wood mantel',
      'Brick hearth extension',
      'Flue and damper installation',
    ],
    results: [
      'Beautiful traditional aesthetic',
      'Fully functional wood-burning fireplace',
      'Centerpiece of new family room',
      'Client extremely satisfied',
    ],
    images: [brickFireplace1],
  },
  {
    id: 'contemporary-accent-wall',
    title: 'Contemporary Ledgestone Accent Wall',
    category: 'stone-veneer',
    location: 'Beaverton, OR',
    summary: 'Modern gray ledgestone accent wall with linear gas fireplace. Minimalist design that adds texture and warmth to an open floor plan.',
    scope: [
      'Full-height stone accent wall',
      'Linear gas fireplace integration',
      'Hidden TV mounting preparation',
      'LED accent lighting channels',
      'Floating media console area',
    ],
    results: [
      'Stunning modern aesthetic',
      'Perfect integration with home theater',
      'Completed in 4 days',
      'Featured in local design blog',
    ],
    images: [accentWall1],
    featured: true,
  },
  {
    id: 'historic-brick-restoration',
    title: 'Historic Brick Restoration',
    category: 'repairs',
    location: 'Portland, OR',
    summary: 'Comprehensive tuckpointing and brick repair on a 1920s commercial building. Preserved historic character while ensuring structural integrity.',
    scope: [
      'Complete mortar joint assessment',
      'Selective brick replacement',
      'Full facade tuckpointing',
      'Historic mortar color matching',
      'Waterproofing treatment',
    ],
    results: [
      'Restored to original appearance',
      'Passed historic preservation review',
      'Extended building life by 50+ years',
      'Water infiltration eliminated',
    ],
    images: [brickRepair1],
  },
  {
    id: 'outdoor-kitchen-patio',
    title: 'Stone Outdoor Kitchen & Patio',
    category: 'stone-veneer',
    location: 'West Linn, OR',
    summary: 'Custom outdoor kitchen with stone veneer base, bar seating, and integrated grill station. Perfect for Pacific Northwest entertaining.',
    scope: [
      'L-shaped kitchen island',
      'Stone veneer on all sides',
      'Granite countertop installation',
      'Built-in grill and side burner',
      'Bar seating area with overhang',
    ],
    results: [
      'Backyard transformed into entertainment hub',
      'All-weather durability',
      'Increased property value significantly',
      'Multiple referrals from happy client',
    ],
    images: [outdoorKitchen1],
    featured: true,
  },
  {
    id: 'commercial-stone-facade',
    title: 'Commercial Building Stone Facade',
    category: 'exteriors',
    location: 'Portland, OR',
    summary: 'Modern gray stacked stone veneer on commercial retail building. Professional appearance that attracts quality tenants.',
    scope: [
      'Three-story stone veneer installation',
      'Commercial-grade water barrier',
      'Steel framing reinforcement',
      'Expansion joint planning',
      'Scaffold and safety management',
    ],
    results: [
      'Building fully leased within 3 months',
      'Met commercial code requirements',
      'Completed on tight timeline',
      'Owner very pleased with ROI',
    ],
    images: [commercialExterior1],
  },
  {
    id: 'terraced-retaining-wall',
    title: 'Terraced Stone Retaining Wall',
    category: 'stone-veneer',
    location: 'Tigard, OR',
    summary: 'Multi-level natural stone retaining wall with integrated stairs. Solved drainage issues while creating beautiful landscaping tiers.',
    scope: [
      'Site grading and preparation',
      'Drainage system installation',
      'Three-tier retaining wall',
      'Natural stone steps',
      'Planting bed integration',
    ],
    results: [
      'Eliminated yard erosion',
      'Created usable outdoor space',
      'Structural engineer approved',
      'Beautiful natural appearance',
    ],
    images: [retainingWall1],
  },
  {
    id: 'stone-entry-columns',
    title: 'Stone Entry Columns & Facade',
    category: 'exteriors',
    location: 'Clackamas, OR',
    summary: 'Stacked stone columns and partial facade on craftsman home entry. Dramatically improved curb appeal and home value.',
    scope: [
      'Four entry column wraps',
      'Partial front facade veneer',
      'Foundation accent band',
      'Address stone integration',
      'Exterior lighting prep',
    ],
    results: [
      'Transformed home exterior',
      'Consistent with neighborhood aesthetic',
      'Increased appraisal value',
      'Completed before family reunion deadline',
    ],
    images: [stoneColumns1],
  },
  {
    id: 'brick-mailbox-planter',
    title: 'Custom Brick Mailbox & Planter',
    category: 'brick',
    location: 'Vancouver, WA',
    summary: 'Traditional red brick mailbox column with integrated planter. Classic curb appeal upgrade that matches the home\'s brick accents.',
    scope: [
      'Concrete foundation pour',
      'Brick column construction',
      'Mailbox housing integration',
      'Planter box with drainage',
      'Cap stone finishing',
    ],
    results: [
      'Perfect match to existing brick',
      'Durable and low-maintenance',
      'Neighborhood compliments',
      'Completed in 2 days',
    ],
    images: [brickMailbox1],
  },
  {
    id: 'stone-fireplace-remodel',
    title: 'Fireplace Remodel with Extended Hearth',
    category: 'fireplaces',
    location: 'Hillsboro, OR',
    summary: 'Complete fireplace transformation with gray stacked stone and extended hearth seating. Modern update for an older home.',
    scope: [
      'Demo of existing brick',
      'New stacked stone installation',
      'Extended hearth for seating',
      'Floating mantel shelf',
      'Recessed TV niche',
    ],
    results: [
      'Completely transformed space',
      'Added functional seating',
      'Modern yet timeless design',
      'Client thrilled with result',
    ],
    images: [fireplaceHearth1, stoneFireplace2],
  },
];

export const getFeaturedItems = (): PortfolioItem[] => {
  return portfolioItems.filter((item) => item.featured);
};
