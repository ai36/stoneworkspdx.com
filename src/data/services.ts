export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  idealFor: string[];
  whatsIncluded: string[];
  benefit: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'stone-veneer',
    title: 'Stone Veneer Installation',
    shortDescription: 'Transform any surface with natural or manufactured stone veneer.',
    description: 'Stone veneer adds timeless beauty and value to your home. Whether you want to upgrade your fireplace, accent wall, or exterior facade, we install both natural and manufactured stone with precision craftsmanship.',
    idealFor: [
      'Homeowners looking to add character and value',
      'Fireplace and accent wall upgrades',
      'Exterior facade transformations',
      'Outdoor living spaces and kitchens',
    ],
    whatsIncluded: [
      'On-site consultation and measurement',
      'Material selection guidance',
      'Surface preparation and waterproofing',
      'Professional stone installation',
      'Mortar joint finishing',
      'Complete cleanup and debris removal',
    ],
    benefit: 'Stone veneer typically increases home value by 3-6% while creating a stunning visual impact that lasts for decades.',
    icon: 'mountain',
  },
  {
    id: 'brick-masonry',
    title: 'Brick Masonry',
    shortDescription: 'Classic brick construction for fireplaces, walls, and outdoor features.',
    description: 'Nothing beats the warmth and durability of real brick. From traditional fireplaces to garden walls, mailbox columns, and decorative features, we build brick structures that stand the test of time.',
    idealFor: [
      'Traditional and colonial-style homes',
      'Wood-burning fireplace construction',
      'Outdoor features like mailboxes and planters',
      'Garden walls and edging',
    ],
    whatsIncluded: [
      'Structural assessment and planning',
      'Foundation preparation',
      'Quality brick selection',
      'Expert laying and mortar work',
      'Finishing and sealing',
      'Site cleanup',
    ],
    benefit: 'Brick structures are virtually maintenance-free and can last 100+ years, making them one of the best long-term investments for your property.',
    icon: 'brick-wall',
  },
  {
    id: 'fireplace-surrounds',
    title: 'Fireplace Surrounds',
    shortDescription: 'Create a stunning focal point with custom fireplace stonework.',
    description: 'Your fireplace should be the centerpiece of your living space. We design and install custom stone and brick surrounds that complement your style—from rustic stacked stone to sleek contemporary designs.',
    idealFor: [
      'Living room and family room upgrades',
      'Replacing outdated tile or brick',
      'New construction focal points',
      'Gas, electric, and wood-burning fireplaces',
    ],
    whatsIncluded: [
      'Design consultation',
      'Removal of existing surround (if needed)',
      'Fireproofing and code compliance',
      'Stone or brick installation',
      'Mantel integration',
      'Hearth construction or extension',
    ],
    benefit: 'A well-designed fireplace surround can increase your home\'s value by $5,000-$15,000 while creating the warm ambiance you\'ve always wanted.',
    icon: 'flame',
  },
  {
    id: 'exterior-facades',
    title: 'Exterior Stone & Brick Facades',
    shortDescription: 'Elevate your curb appeal with durable exterior masonry.',
    description: 'Transform your home\'s exterior with stone or brick cladding. We handle everything from partial accents to full facade installations, dramatically improving curb appeal and property value.',
    idealFor: [
      'Curb appeal improvements',
      'Full exterior makeovers',
      'Entry column and porch upgrades',
      'Foundation accent bands',
    ],
    whatsIncluded: [
      'Architectural assessment',
      'Waterproofing and moisture barrier',
      'Stone or brick veneer installation',
      'Window and door trim integration',
      'Color-matched pointing',
      'Final inspection and walkthrough',
    ],
    benefit: 'Exterior stone or brick can boost your home\'s curb appeal ranking from average to exceptional—and increase resale value by 5-10%.',
    icon: 'home',
  },
  {
    id: 'masonry-repair',
    title: 'Masonry Repair & Restoration',
    shortDescription: 'Restore and repair aging brick, stone, and mortar.',
    description: 'Cracking mortar, spalling brick, and deteriorating stone don\'t just look bad—they can lead to water damage and structural issues. We restore masonry to its original condition.',
    idealFor: [
      'Older homes with deteriorating mortar',
      'Historic preservation projects',
      'Fixing water infiltration issues',
      'Chimney repairs',
    ],
    whatsIncluded: [
      'Thorough condition assessment',
      'Mortar analysis and matching',
      'Careful removal of damaged material',
      'Tuckpointing and repointing',
      'Brick replacement (if needed)',
      'Sealing and protection',
    ],
    benefit: 'Proper masonry repair prevents costly water damage and structural issues while preserving your home\'s character and value.',
    icon: 'wrench',
  },
  {
    id: 'tuckpointing',
    title: 'Tuckpointing & Repointing',
    shortDescription: 'Renew your mortar joints for lasting protection and beauty.',
    description: 'Tuckpointing removes old, deteriorating mortar and replaces it with fresh mortar—restoring both the appearance and weatherproofing of your brick or stone structure.',
    idealFor: [
      'Brick walls with crumbling mortar',
      'Chimneys needing weather protection',
      'Historic buildings requiring preservation',
      'Preventing water infiltration',
    ],
    whatsIncluded: [
      'Joint condition assessment',
      'Historic mortar color matching',
      'Careful mortar removal',
      'New mortar application',
      'Joint finishing and tooling',
      'Optional waterproof sealing',
    ],
    benefit: 'Quality tuckpointing can extend the life of your masonry by 25-50 years while dramatically improving its appearance.',
    icon: 'hammer',
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
