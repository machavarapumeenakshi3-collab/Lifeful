import { Scenario } from '../types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'tiny-apartment',
    slug: 'first-apartment',
    title: 'First Apartment',
    headline: 'Tiny apartment, big beginning.',
    subtitle: 'Everything needed to turn an empty studio into a peaceful, functional sanctuary without visual clutter.',
    promptExample: "I’m moving into my first tiny apartment. Need functional, warm pieces that don't crowd 350 sq ft.",
    heroImage: '/src/assets/images/hero_tiny_apartment_1791451912488.jpg',
    boardImage: '/src/assets/images/hero_tiny_apartment_1791451912488.jpg',
    defaultBudget: 22000,
    categories: ['Bedroom', 'Kitchen', 'Workspace', 'Essentials'],
    recommendedStyles: ['minimal', 'cozy', 'practical'],
    completionEstimate: 82,
    tags: ['Compact Living', 'Studio Flat', 'First Move', 'Space-Saving'],
    boardHotspots: [
      { id: 'hs-1', productId: 'p-apt-bed', xPercent: 28, yPercent: 62, label: 'Low Oak Platform Bed', category: 'Bedroom' },
      { id: 'hs-2', productId: 'p-apt-lamp', xPercent: 68, yPercent: 44, label: 'Wabi-Sabi Pleated Lamp', category: 'Bedroom' },
      { id: 'hs-3', productId: 'p-apt-desk', xPercent: 78, yPercent: 70, label: 'Foldaway Slim Oak Desk', category: 'Workspace' },
      { id: 'hs-4', productId: 'p-apt-plant', xPercent: 14, yPercent: 40, label: 'Indoor Potted Olive', category: 'Essentials' },
      { id: 'hs-5', productId: 'p-apt-kettle', xPercent: 50, yPercent: 52, label: 'Matte Gooseneck Kettle', category: 'Kitchen' }
    ]
  },
  {
    id: 'college-hostel',
    slug: 'college-hostel',
    title: 'College Hostel',
    headline: 'Dorm life, calm and composed.',
    subtitle: 'Intelligent compact storage, acoustic sanity, and comfortable study rituals for shared rooms.',
    promptExample: "I’m setting up my first college hostel room. Need quiet lighting, easy packing, and great study ergonomics.",
    heroImage: '/src/assets/images/hero_college_hostel_1791451934070.jpg',
    boardImage: '/src/assets/images/hero_college_hostel_1791451934070.jpg',
    defaultBudget: 12500,
    categories: ['Sleep', 'Study', 'Storage', 'Daily Essentials'],
    recommendedStyles: ['practical', 'minimal', 'cozy'],
    completionEstimate: 75,
    tags: ['Dormitory', 'Shared Room', 'Compact Desk', 'Portability'],
    boardHotspots: [
      { id: 'hs-h1', productId: 'p-hst-blanket', xPercent: 32, yPercent: 68, label: 'Waffle Knit Organic Quilt', category: 'Sleep' },
      { id: 'hs-h2', productId: 'p-hst-pegboard', xPercent: 65, yPercent: 35, label: 'Modular Desktop Pegboard', category: 'Study' },
      { id: 'hs-h3', productId: 'p-hst-lamp', xPercent: 74, yPercent: 54, label: 'Rechargeable Eye-Care Task Lamp', category: 'Study' },
      { id: 'hs-h4', productId: 'p-hst-crate', xPercent: 18, yPercent: 78, label: 'Collapsible Under-Bed Caddy', category: 'Storage' }
    ]
  },
  {
    id: 'home-office',
    slug: 'home-office',
    title: 'Home Office',
    headline: 'A sanctuary of deep focus.',
    subtitle: 'Tactile natural materials, ergonomic posture support, and subtle cable architecture for uninterrupted flow.',
    promptExample: "I want to build a calm home office with warm woods, minimal cables, and healthy seating.",
    heroImage: '/src/assets/images/hero_home_office_1791451955725.jpg',
    boardImage: '/src/assets/images/hero_home_office_1791451955725.jpg',
    defaultBudget: 28000,
    categories: ['Desk', 'Chair', 'Lighting', 'Organization', 'Tech Accessories'],
    recommendedStyles: ['minimal', 'aesthetic', 'premium'],
    completionEstimate: 88,
    tags: ['Deep Work', 'Ergonomics', 'Oak Timber', 'Cable-Free'],
    boardHotspots: [
      { id: 'hs-o1', productId: 'p-off-desk', xPercent: 52, yPercent: 64, label: 'Solid Oak Electric Standing Desk', category: 'Desk' },
      { id: 'hs-o2', productId: 'p-off-chair', xPercent: 34, yPercent: 72, label: 'Ergonomic Linen Mesh Task Chair', category: 'Chair' },
      { id: 'hs-o3', productId: 'p-off-lamp', xPercent: 72, yPercent: 48, label: 'Sculptural Lantern Desk Lamp', category: 'Lighting' },
      { id: 'hs-o4', productId: 'p-off-tray', xPercent: 58, yPercent: 58, label: 'Felt & Walnut Desk Mat & Tray', category: 'Organization' }
    ]
  },
  {
    id: 'gaming-setup',
    slug: 'gaming-setup',
    title: 'Gaming Setup',
    headline: 'Atmospheric, refined, immersive.',
    subtitle: 'High performance gaming without juvenile RGB clutter. Matte textures, acoustic warmth, and precision control.',
    promptExample: "Setting up a clean battlestation that looks mature by day and deeply immersive by night.",
    heroImage: '/src/assets/images/hero_home_office_1791451955725.jpg',
    boardImage: '/src/assets/images/hero_home_office_1791451955725.jpg',
    defaultBudget: 35000,
    categories: ['Desk', 'Chair', 'Display', 'Peripherals', 'Lighting'],
    recommendedStyles: ['aesthetic', 'premium', 'minimal'],
    completionEstimate: 80,
    tags: ['Battlestation', 'Acoustics', 'Ambient Backlight', 'Precision'],
    boardHotspots: [
      { id: 'hs-g1', productId: 'p-gam-chair', xPercent: 45, yPercent: 65, label: 'Breathable Charcoal Ergonomic Throne', category: 'Chair' },
      { id: 'hs-g2', productId: 'p-gam-light', xPercent: 70, yPercent: 30, label: 'Warm Indirect Lightbar & Backlight', category: 'Lighting' },
      { id: 'hs-g3', productId: 'p-gam-audio', xPercent: 25, yPercent: 50, label: 'Studio Reference Acoustic Monitors', category: 'Peripherals' }
    ]
  },
  {
    id: 'house-party',
    slug: 'house-party',
    title: 'First House Party',
    headline: 'Convivial evenings, effortless hosting.',
    subtitle: 'Fluted glassware, ambient candle warmth, seamless finger food trays, and graceful morning cleanup.',
    promptExample: "I’m hosting my first 10-person house party. Need cocktail ware, warm mood lighting, and no breakage anxiety.",
    heroImage: '/src/assets/images/hero_house_party_1791451969949.jpg',
    boardImage: '/src/assets/images/hero_house_party_1791451969949.jpg',
    defaultBudget: 14000,
    categories: ['Kitchen', 'Serving', 'Lighting', 'Seating', 'Cleanup'],
    recommendedStyles: ['cozy', 'aesthetic', 'practical'],
    completionEstimate: 85,
    tags: ['Dinner Party', 'Cocktail Hour', 'Guest Comfort', 'Warm Ambience'],
    boardHotspots: [
      { id: 'hs-p1', productId: 'p-pty-glass', xPercent: 42, yPercent: 58, label: 'Ribbed Borosilicate Highball Set', category: 'Serving' },
      { id: 'hs-p2', productId: 'p-pty-candle', xPercent: 64, yPercent: 46, label: 'Beeswax Taper Candles & Ceramic Holder', category: 'Lighting' },
      { id: 'hs-p3', productId: 'p-pty-tray', xPercent: 50, yPercent: 72, label: 'Acacia Wood Grazing Platter', category: 'Serving' }
    ]
  },
  {
    id: 'weekend-getaway',
    slug: 'weekend-getaway',
    title: 'Weekend Getaway',
    headline: 'Pack light, travel thoughtfully.',
    subtitle: 'Heavy canvas luggage, curated toiletry organization, and rugged weather-ready essentials for 48 hours away.',
    promptExample: "Packing for a 3-day mountain cabin trip. Need versatile layers, water resistance, and compact carry.",
    heroImage: '/src/assets/images/hero_weekend_getaway_1791451982017.jpg',
    boardImage: '/src/assets/images/hero_weekend_getaway_1791451982017.jpg',
    defaultBudget: 16500,
    categories: ['Travel', 'Clothing', 'Organization', 'Comfort', 'Essentials'],
    recommendedStyles: ['practical', 'premium', 'eco'],
    completionEstimate: 90,
    tags: ['48 Hours', 'Cabin Trip', 'Waxed Canvas', 'Light Packing'],
    boardHotspots: [
      { id: 'hs-w1', productId: 'p-wkd-duffel', xPercent: 40, yPercent: 60, label: 'Heavy Waxed Olive Canvas Duffel', category: 'Travel' },
      { id: 'hs-w2', productId: 'p-wkd-pouch', xPercent: 62, yPercent: 45, label: 'Spill-Proof Cordura Dopp Kit', category: 'Organization' },
      { id: 'hs-w3', productId: 'p-wkd-flask', xPercent: 25, yPercent: 72, label: 'Double-Walled Insulated Flask', category: 'Comfort' }
    ]
  },
  {
    id: 'fitness-starter',
    slug: 'fitness-starter',
    title: 'Fitness Starter',
    headline: 'Move intentionally, recover deeply.',
    subtitle: 'High-density natural rubber mat, calibrated resistance bands, ergonomic hydration, and silent post-workout tools.',
    promptExample: "Starting a home strength and mobility routine. Need quiet equipment that fits in a bedroom corner.",
    heroImage: '/src/assets/images/hero_home_office_1791451955725.jpg',
    boardImage: '/src/assets/images/hero_home_office_1791451955725.jpg',
    defaultBudget: 9800,
    categories: ['Training', 'Hydration', 'Recovery', 'Organization', 'Accessories'],
    recommendedStyles: ['minimal', 'practical', 'eco'],
    completionEstimate: 70,
    tags: ['Daily Mobility', 'Home Gym Corner', 'Low Noise', 'Recovery'],
    boardHotspots: [
      { id: 'hs-f1', productId: 'p-fit-mat', xPercent: 48, yPercent: 68, label: '5mm Natural Rubber Cork Yoga Mat', category: 'Training' },
      { id: 'hs-f2', productId: 'p-fit-roller', xPercent: 28, yPercent: 60, label: 'Textured EVA Mobility Foam Roller', category: 'Recovery' },
      { id: 'hs-f3', productId: 'p-fit-bottle', xPercent: 72, yPercent: 52, label: 'Matte Stainless Steel Hydration Carafe', category: 'Hydration' }
    ]
  },
  {
    id: 'new-pet',
    slug: 'new-pet',
    title: 'New Pet',
    headline: 'Welcome home, little companion.',
    subtitle: 'Orthopedic memory foam bedding, ceramic heavyweight bowls, odor-neutralizing hygiene, and secure walking gear.',
    promptExample: "I just adopted a puppy! Need non-slip bowls, clean bedding, odor management, and gentle walking essentials.",
    heroImage: '/src/assets/images/hero_tiny_apartment_1791451912488.jpg',
    boardImage: '/src/assets/images/hero_tiny_apartment_1791451912488.jpg',
    defaultBudget: 11500,
    categories: ['Feeding', 'Sleeping', 'Walking', 'Grooming', 'Cleaning'],
    recommendedStyles: ['cozy', 'practical', 'eco'],
    completionEstimate: 84,
    tags: ['Puppy Arrival', 'Odor Control', 'Ceramic Bowls', 'Gentle Leash'],
    boardHotspots: [
      { id: 'hs-pet-1', productId: 'p-pet-bed', xPercent: 44, yPercent: 66, label: 'Washable Linen Orthopedic Calming Bed', category: 'Sleeping' },
      { id: 'hs-pet-2', productId: 'p-pet-bowl', xPercent: 25, yPercent: 75, label: 'Weighted Stoneware Slow-Feed Bowls', category: 'Feeding' },
      { id: 'hs-pet-3', productId: 'p-pet-leash', xPercent: 70, yPercent: 45, label: 'Waterproof Biothane Walking Harness & Lead', category: 'Walking' }
    ]
  }
];
