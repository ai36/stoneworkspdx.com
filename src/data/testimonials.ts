export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    location: 'Portland, OR',
    project: 'Stone Fireplace',
    quote: "Stoneworks PDX transformed our living room. The stone fireplace is absolutely stunning, and the crew left our home cleaner than they found it. Professional from start to finish.",
    rating: 5,
  },
  {
    id: '2',
    name: 'Mike & Jennifer T.',
    location: 'Lake Oswego, OR',
    project: 'Exterior Stone Facade',
    quote: "We interviewed five contractors. Stoneworks was the only one who actually listened to what we wanted and gave us a detailed quote. The finished product exceeded our expectations.",
    rating: 5,
  },
  {
    id: '3',
    name: 'David R.',
    location: 'Vancouver, WA',
    project: 'Brick Repair',
    quote: "Our 1940s home needed serious tuckpointing. They matched the historic mortar perfectly—you can't even tell where the repairs are. True craftsmen.",
    rating: 5,
  },
  {
    id: '4',
    name: 'Linda K.',
    location: 'Beaverton, OR',
    project: 'Outdoor Kitchen',
    quote: "The outdoor kitchen is now the heart of our backyard. Friends can't believe how quickly it was built—just two weeks from start to finish. Worth every penny.",
    rating: 5,
  },
  {
    id: '5',
    name: 'Robert & Maria S.',
    location: 'West Linn, OR',
    project: 'Retaining Wall',
    quote: "We had drainage issues for years. The retaining wall not only fixed the problem but looks like it's always been part of our landscape. Exceptional work.",
    rating: 5,
  },
  {
    id: '6',
    name: 'Tom H.',
    location: 'Tigard, OR',
    project: 'Stone Columns',
    quote: "The stone columns completely changed our home's curb appeal. The team was punctual, respectful, and the craftsmanship is impeccable. Highly recommend.",
    rating: 5,
  },
];
