import { Product, ForgottenEssential } from '../types';

export const PRODUCTS: Product[] = [
  // ===================== TINY APARTMENT =====================
  {
    id: 'p-apt-bed',
    name: 'Low Oak Platform Bed with Underbed Drawers',
    category: 'Bedroom',
    scenarioId: 'tiny-apartment',
    price: 8499,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
    description: 'Slender natural oak platform designed specifically for compact studios. Incorporates 300L of dust-sealed slide-out linen storage underneath.',
    reason: 'Eliminates the need for a separate dresser in rooms under 140 sq ft.',
    priority: 'must-have',
    styles: ['minimal', 'cozy', 'practical'],
    spaceCompatibility: 'Fits 10×10 ft rooms ✓',
    budgetTier: 'mid',
    tags: ['Platform', 'Hidden Storage', 'FSC Oak'],
    dimensions: '198 × 152 × 30 cm',
    materials: 'Solid rubberwood & American white oak veneer',
    specs: ['Tool-free 20 min assembly', 'Holds up to 320 kg', '35 cm underbed clearance'],
    alternatives: [
      {
        id: 'alt-apt-bed-afford',
        name: 'Steel Foldaway Platform Frame with Linen Skirt',
        price: 4999,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
        type: 'affordable',
        differenceLabel: 'Save ₹3,500',
        reason: 'Robust powder-coated steel base with standard 38cm clearance for storage bins.',
        compatibilityNote: 'Zero squeak construction, weighs only 16kg'
      },
      {
        id: 'alt-apt-bed-compact',
        name: 'Daybed Settee with Pull-Out Storage',
        price: 7499,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
        type: 'compact',
        differenceLabel: 'Doubles as Living Sofa',
        reason: 'Converts from day lounging to restful night sleep without consuming center floor space.',
        compatibilityNote: '2-in-1 piece for narrow studio rooms'
      },
      {
        id: 'alt-apt-bed-quality',
        name: 'Artisanal Teak Joinery Bedframe',
        price: 13999,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80',
        type: 'quality',
        differenceLabel: 'Heirloom Grade Solid Teak',
        reason: 'Traditional mortise and tenon joints with wax oil finish that ages gracefully for decades.',
        compatibilityNote: 'For long-term homeowners and aesthetic purists'
      }
    ]
  },
  {
    id: 'p-apt-desk',
    name: 'Foldaway Wall-Mount Writing Desk & Shelf',
    category: 'Workspace',
    scenarioId: 'tiny-apartment',
    price: 3499,
    originalPrice: 4299,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80',
    description: 'Folds flat against the wall to a mere 12cm profile when closed. Drops down into an ergonomic 80×50cm oak workspace with integrated power passthrough.',
    reason: 'Leaves central circulation clear during evenings and weekend hosting.',
    priority: 'must-have',
    styles: ['minimal', 'practical', 'aesthetic'],
    spaceCompatibility: 'Consumes 0 sq ft floor space ✓',
    budgetTier: 'mid',
    tags: ['Wall Mount', 'Foldaway', 'Cable Channel'],
    dimensions: '82 × 50 × 45 cm (open)',
    materials: 'White oak veneer, gas-strut dampeners',
    specs: ['Tested for 35 kg load', 'Internal shelf for 14-inch laptop'],
    alternatives: [
      {
        id: 'alt-apt-desk-afford',
        name: 'Compact Minimalist Hairpin Desk',
        price: 2199,
        image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80',
        type: 'affordable',
        differenceLabel: 'Save ₹1,300',
        reason: 'Slender matte black legs and textured laminate surface that tucks into any nook.',
        compatibilityNote: 'Requires only 80cm wall width'
      },
      {
        id: 'alt-apt-desk-compact',
        name: 'Corner Floating Wedge Desk',
        price: 2899,
        image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80',
        type: 'compact',
        differenceLabel: 'Uses Dead Corner Space',
        reason: 'Fits snug inside 90-degree unused corner room geometry.',
        compatibilityNote: 'Optimizes awkward awkward floor plans'
      },
      {
        id: 'alt-apt-desk-quality',
        name: 'Solid Walnut Secretary Bureau',
        price: 6999,
        image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80',
        type: 'quality',
        differenceLabel: 'Hand-finished Walnut',
        reason: 'Solid American walnut with concealed soft-close compartments and brass hinges.',
        compatibilityNote: 'Architectural statement piece'
      }
    ]
  },
  {
    id: 'p-apt-lamp',
    name: 'Wabi-Sabi Pleated Ceramic Table Lamp',
    category: 'Bedroom',
    scenarioId: 'tiny-apartment',
    price: 1899,
    image: '/src/assets/images/product_ceramic_lamp_1791453316353.jpg',
    description: 'Hand-thrown unglazed terracotta clay base with a folded cream rice-paper shade that disperses warm 2700K amber glow without harsh direct glare.',
    reason: 'Creates intimate zone lighting without occupying floor footprints.',
    priority: 'nice-to-have',
    styles: ['cozy', 'aesthetic', 'eco'],
    spaceCompatibility: 'Compact 18cm footprint ✓',
    budgetTier: 'mid',
    tags: ['Warm Amber', 'Handmade', 'Dimmable'],
    dimensions: '22 × 22 × 34 cm',
    alternatives: [
      {
        id: 'alt-apt-lamp-afford',
        name: 'Matte Dome Ambient Task Light',
        price: 999,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
        type: 'affordable',
        differenceLabel: 'Save ₹900',
        reason: 'Sleek spun steel dome with 3-step capacitive touch dimming.',
        compatibilityNote: 'USB-C rechargeable cord-free lamp'
      },
      {
        id: 'alt-apt-lamp-quality',
        name: 'Solid Fluted Travertine Table Lamp',
        price: 3699,
        image: '/src/assets/images/product_ceramic_lamp_1791453316353.jpg',
        type: 'quality',
        differenceLabel: 'Natural Italian Travertine',
        reason: 'Heavy carved mineral stone with brass rotary dimmer switch.',
        compatibilityNote: 'Architectural Digest feature grade'
      }
    ]
  },
  {
    id: 'p-apt-kettle',
    name: 'Matte Gooseneck Precision Kettle',
    category: 'Kitchen',
    scenarioId: 'tiny-apartment',
    price: 2299,
    image: '/src/assets/images/product_matte_kettle_1791453333827.jpg',
    description: '0.8L counter-conscious footprint with stainless interior and ergonomic counterbalanced handle for morning pourover and evening tisanes.',
    reason: 'Sits quietly on narrow counter spaces without steam damaging wall cabinets.',
    priority: 'must-have',
    styles: ['minimal', 'practical', 'aesthetic'],
    spaceCompatibility: 'Fits 20cm counter strip ✓',
    budgetTier: 'mid',
    tags: ['Gooseneck', 'Fast Boil', 'Matte Black'],
    alternatives: [
      {
        id: 'alt-apt-ket-afford',
        name: 'Single-Wall Fast Electric Jug 1.0L',
        price: 1199,
        image: '/src/assets/images/product_matte_kettle_1791453333827.jpg',
        type: 'affordable',
        differenceLabel: 'Save ₹1,100',
        reason: 'Compact 1-liter kettle with auto shutoff and cord wrap base.',
        compatibilityNote: 'Fast 90-second boil'
      }
    ]
  },
  {
    id: 'p-apt-pan',
    name: 'Multi-Tasking Cast Iron Skillet (26cm)',
    category: 'Kitchen',
    scenarioId: 'tiny-apartment',
    price: 1699,
    image: '/src/assets/images/product_cast_iron_1791453357705.jpg',
    description: 'Pre-seasoned virgin cast iron that sears, bakes, simmers and serves directly at the table, reducing required cookware inventory to one workhorse.',
    reason: 'Replaces 4 different pans in a studio kitchen with zero cabinet clutter.',
    priority: 'must-have',
    styles: ['practical', 'eco', 'cozy'],
    spaceCompatibility: 'Hangs on single wall hook ✓',
    budgetTier: 'mid',
    tags: ['Induction Ready', 'Non-Toxic', 'Lifelong']
  },
  {
    id: 'p-apt-linen',
    name: 'Washed French Flax Linen Duvet & Sheet Set',
    category: 'Bedroom',
    scenarioId: 'tiny-apartment',
    price: 3899,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
    description: 'Breathable 165 GSM stone-washed natural flax in warm oatmeal. Naturally thermoregulating for muggy summers and crisp winters.',
    reason: 'Requires zero ironing—looks effortlessly refined in open studio spaces where the bed is always on display.',
    priority: 'nice-to-have',
    styles: ['cozy', 'aesthetic', 'eco'],
    spaceCompatibility: 'Breathable in compact bedrooms ✓',
    budgetTier: 'mid',
    tags: ['French Flax', 'Thermoregulating', 'Zero Waste'],
    alternatives: [
      {
        id: 'alt-apt-lin-afford',
        name: '300 TC Washed Percale Cotton Set',
        price: 1999,
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
        type: 'affordable',
        differenceLabel: 'Save ₹1,900',
        reason: 'Crisp, lightweight 100% long-staple cotton with matte garment wash.',
        compatibilityNote: 'Cooling hand-feel'
      }
    ]
  },
  {
    id: 'p-apt-cart',
    name: 'Slender 3-Tier Utility Rolling Trolley',
    category: 'Essentials',
    scenarioId: 'tiny-apartment',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    description: '15cm narrow steel frame with smooth silicone caster wheels. Glides between refrigerator and wall or beside the bathroom basin.',
    reason: 'Transforms narrow dead gaps into 3 vertical shelves of organized storage.',
    priority: 'must-have',
    styles: ['practical', 'minimal'],
    spaceCompatibility: 'Rolls into 15cm crevices ✓',
    budgetTier: 'budget',
    tags: ['Narrow Frame', 'Silent Wheels', 'Anti-Rust']
  },
  {
    id: 'p-apt-plant',
    name: 'Potted Dwarf Olive Tree in Terracotta Planter',
    category: 'Essentials',
    scenarioId: 'tiny-apartment',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=80',
    description: 'Naturally acclimated dwarf Mediterranean olive potted in raw porous Italian clay with drainage saucer. Purifies indoor air and softens sharp studio edges.',
    reason: 'Brings alive natural organic texture into compact urban architecture.',
    priority: 'later',
    styles: ['cozy', 'aesthetic', 'eco'],
    spaceCompatibility: 'Window-sill friendly ✓',
    budgetTier: 'budget',
    tags: ['Live Flora', 'Air Purifying', 'Low Water']
  },

  // ===================== COLLEGE HOSTEL =====================
  {
    id: 'p-hst-blanket',
    name: 'Waffle Knit Heavy Cotton Hostel Quilt',
    category: 'Sleep',
    scenarioId: 'college-hostel',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
    description: 'Deep waffle weave that traps insulating air pockets in winter yet breathes during warm monsoon months. Machine-washable and bleach-resistant.',
    reason: 'Survives rough hostel laundry facilities while feeling deeply comforting after midnight study sessions.',
    priority: 'must-have',
    styles: ['cozy', 'practical'],
    spaceCompatibility: 'Rolls tight into travel duffel ✓',
    budgetTier: 'budget',
    tags: ['100% Cotton', 'Durable Weave', 'All-Season'],
    alternatives: [
      {
        id: 'alt-hst-blk-afford',
        name: 'Microfiber Thermal Fleece Blanket',
        price: 999,
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
        type: 'affordable',
        differenceLabel: 'Save ₹900',
        reason: 'Ultra-plush featherlight fleece that packs down to backpack size.',
        compatibilityNote: 'Fast dry in 45 minutes'
      }
    ]
  },
  {
    id: 'p-hst-pegboard',
    name: 'Clamp-On Desktop Modular Pegboard',
    category: 'Study',
    scenarioId: 'college-hostel',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&auto=format&fit=crop&q=80',
    description: 'No-drill clamps attach securely to standard hostel desks. Includes 4 steel hooks, pencil cup, and magnetic strip for notes and calculator.',
    reason: 'Expands zero-damage vertical storage without violating warden rules against drilling.',
    priority: 'must-have',
    styles: ['practical', 'minimal'],
    spaceCompatibility: 'Zero drill damage ✓',
    budgetTier: 'mid',
    tags: ['No-Drill', 'Vertical Storage', 'Cable Hooks']
  },
  {
    id: 'p-hst-lamp',
    name: 'Rechargeable Eye-Care Reading Wand & Lamp',
    category: 'Study',
    scenarioId: 'college-hostel',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80',
    description: 'Magnetic swivel base with 24-hour battery. Directed 40-degree optical cutoff ensures light illuminates your textbook without waking your roommate.',
    reason: 'Eliminates late-night roommate lighting conflicts completely.',
    priority: 'must-have',
    styles: ['practical', 'minimal'],
    spaceCompatibility: 'Targeted light cone ✓',
    budgetTier: 'budget',
    tags: ['Roommate-Safe', '24h Battery', 'USB-C'],
    alternatives: [
      {
        id: 'alt-hst-lmp-afford',
        name: 'Clip-On Flexible Goose Gooseneck Light',
        price: 649,
        image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80',
        type: 'affordable',
        differenceLabel: 'Save ₹750',
        reason: 'Sturdy padded spring clamp that clips directly onto bunk frame rails.',
        compatibilityNote: 'Powered via any phone charger'
      }
    ]
  },
  {
    id: 'p-hst-crate',
    name: 'Heavy-Duty Collapsible Under-Bed Caddy (55L)',
    category: 'Storage',
    scenarioId: 'college-hostel',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop&q=80',
    description: 'Transparent top dust zipper, steel reinforced handles, and structured oxford canvas that slides under standard institutional metal bunks.',
    reason: 'Keeps winter sweaters and extra bedsheets dry, pest-free, and organized.',
    priority: 'must-have',
    styles: ['practical', 'minimal'],
    spaceCompatibility: 'Fits 18cm bunk clearance ✓',
    budgetTier: 'budget',
    tags: ['Underbed', 'Foldable', 'Pest Proof']
  },
  {
    id: 'p-hst-foam',
    name: 'High-Density Dual-Sided Mattress Topper (3-inch)',
    category: 'Sleep',
    scenarioId: 'college-hostel',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
    description: 'Memory foam top with firm supportive base core. Turns hard hostel board beds into cloud-like orthopedic rest.',
    reason: 'Prevents morning lower back stiffness caused by worn-out hostel cot mattresses.',
    priority: 'nice-to-have',
    styles: ['cozy', 'practical'],
    spaceCompatibility: 'Standard 72×36 inch single bed ✓',
    budgetTier: 'mid',
    tags: ['Memory Foam', 'Bamboo Cover', 'Orthopedic']
  },
  {
    id: 'p-hst-mug',
    name: 'Vacuum-Insulated 450ml Thermal Sipper',
    category: 'Daily Essentials',
    scenarioId: 'college-hostel',
    price: 899,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    description: 'Leak-lock flip lid with ceramic interior coating that ensures hot chai tastes pure without metallic aftertaste.',
    reason: 'Keeps coffee steaming hot through 8 AM lectures and midnight revisions.',
    priority: 'must-have',
    styles: ['practical', 'eco'],
    spaceCompatibility: 'Fits backpack side pocket ✓',
    budgetTier: 'budget',
    tags: ['Ceramic Coated', 'Leak Proof', '12h Hot']
  },

  // ===================== HOME OFFICE =====================
  {
    id: 'p-off-desk',
    name: 'Solid Oak Electric Dual-Motor Standing Desk',
    category: 'Desk',
    scenarioId: 'home-office',
    price: 14999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80',
    description: 'Seamless solid European oak slab with beveled front edge, whisper-quiet dual motors (<45dB), and 4 memory presets with collision detection.',
    reason: 'Enables posture shifts between sitting and standing, keeping energy high during 8-hour sprint days.',
    priority: 'must-have',
    styles: ['minimal', 'aesthetic', 'premium'],
    spaceCompatibility: '120×60 cm compact footprint ✓',
    budgetTier: 'premium',
    tags: ['Dual Motor', 'Solid Oak', 'Collision Sensor'],
    alternatives: [
      {
        id: 'alt-off-dsk-afford',
        name: 'Fixed Height Solid Oak Minimalist Desk',
        price: 6999,
        image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80',
        type: 'affordable',
        differenceLabel: 'Save ₹8,000',
        reason: 'Hand-finished oak top with rigid steel A-frame base and integrated wire channel.',
        compatibilityNote: 'Uncompromising stability at fixed 75cm ergonomic height'
      },
      {
        id: 'alt-off-dsk-quality',
        name: 'Custom Walnut Executive Standing Desk (140cm)',
        price: 24999,
        image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80',
        type: 'quality',
        differenceLabel: 'Solid Walnut + Wireless Charging Inlay',
        reason: 'Hand-rubbed oil finish with invisible Qi charging built directly into the timber grain.',
        compatibilityNote: 'Presidential finish and tactile luxury'
      }
    ]
  },
  {
    id: 'p-off-chair',
    name: 'Linen Mesh Ergonomic Synchro-Tilt Task Chair',
    category: 'Chair',
    scenarioId: 'home-office',
    price: 7999,
    originalPrice: 9499,
    image: 'https://images.unsplash.com/photo-1580481077195-c328ad4f4f7f?w=800&auto=format&fit=crop&q=80',
    description: 'Tailored breathable linen weave backrest with dynamic 4D lumbar bladder, adjustable armrests, and weight-activated synchro tilt.',
    reason: 'Eliminates the ugly black plastic gaming-chair look while delivering laboratory-grade spinal alignment.',
    priority: 'must-have',
    styles: ['minimal', 'cozy', 'premium'],
    spaceCompatibility: 'Glides quietly on hardwood floors ✓',
    budgetTier: 'premium',
    tags: ['Dynamic Lumbar', 'Linen Mesh', '3-Year Warranty'],
    alternatives: [
      {
        id: 'alt-off-chr-afford',
        name: 'Breathable High-Back Mesh Work Chair',
        price: 4499,
        image: 'https://images.unsplash.com/photo-1580481077195-c328ad4f4f7f?w=800&auto=format&fit=crop&q=80',
        type: 'affordable',
        differenceLabel: 'Save ₹3,500',
        reason: 'Curved S-spine frame with molded high-density foam cushion and pneumatic lift.',
        compatibilityNote: 'BIFMA certified ergonomics'
      }
    ]
  },
  {
    id: 'p-off-lamp',
    name: 'Sculptural Lantern Desk Lamp with Brass Dial',
    category: 'Lighting',
    scenarioId: 'home-office',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
    description: 'Frosted opal glass sphere resting in a brushed brass cradle. Continuous stepless rotary dimmer calibrated between 2200K sunset and 4000K daylight.',
    reason: 'Warm optical eye-comfort during evening screen time without harsh downward shadows.',
    priority: 'nice-to-have',
    styles: ['aesthetic', 'cozy', 'premium'],
    spaceCompatibility: '15cm diameter weighted base ✓',
    budgetTier: 'mid',
    tags: ['Stepless Dimming', 'Opal Glass', 'Brushed Brass']
  },
  {
    id: 'p-off-tray',
    name: 'Merino Wool Felt & Walnut Desk Pad with Magnetic Cable Anchor',
    category: 'Organization',
    scenarioId: 'home-office',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    description: '3mm thick natural grey Bavarian merino felt paired with a magnetic solid walnut cable catch that prevents laptop cables slipping off the back edge.',
    reason: 'Cushions typing wrists, silences mouse movement, and visually defines the active focus zone.',
    priority: 'nice-to-have',
    styles: ['minimal', 'eco', 'premium'],
    spaceCompatibility: '80×35 cm coverage ✓',
    budgetTier: 'mid',
    tags: ['Natural Merino', 'Magnetic Catch', 'Anti-Fray']
  },
  {
    id: 'p-off-stand',
    name: 'Curved Birch Plywood Laptop Elevator',
    category: 'Tech Accessories',
    scenarioId: 'home-office',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80',
    description: 'Bentwood single-piece architectural arc that elevates the laptop screen to eye-level, leaving keyboard storage space underneath.',
    reason: 'Ends forward head slouching while keeping desk clutter tucked away.',
    priority: 'must-have',
    styles: ['minimal', 'eco', 'practical'],
    spaceCompatibility: 'Frees 25cm desk width underneath ✓',
    budgetTier: 'budget',
    tags: ['Bentwood', 'Ergonomic Elevation', 'Pass-Through']
  },

  // ===================== GAMING SETUP =====================
  {
    id: 'p-gam-chair',
    name: 'Charcoal Breathable Fabric Ergonomic Recliner',
    category: 'Chair',
    scenarioId: 'gaming-setup',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1580481077195-c328ad4f4f7f?w=800&auto=format&fit=crop&q=80',
    description: 'Densely woven tactile yarn fabric in deep slate with magnetic memory-foam neck support and 165-degree fluid recline mechanism.',
    reason: 'Stays cool during 4-hour sessions without sweaty PU leather sticking to your back.',
    priority: 'must-have',
    styles: ['aesthetic', 'premium'],
    spaceCompatibility: 'Reinforced nylon base ✓',
    budgetTier: 'premium',
    tags: ['Cooling Weave', 'Magnetic Pillow', 'Class-4 Gas Lift']
  },
  {
    id: 'p-gam-light',
    name: 'Screen Lightbar & Calibrated Ambient Backlight',
    category: 'Lighting',
    scenarioId: 'gaming-setup',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80',
    description: 'Asymmetric forward optics clip over curved or flat monitors without screen glare. Features rear-facing warm diffuser for eye fatigue reduction.',
    reason: 'Eliminates contrast-induced eye strain in dark rooms without lighting up the whole apartment.',
    priority: 'must-have',
    styles: ['minimal', 'practical'],
    spaceCompatibility: 'Zero desk footprint clip ✓',
    budgetTier: 'mid',
    tags: ['Zero Glare', 'Dual Source', 'Auto-Dimming']
  },
  {
    id: 'p-gam-audio',
    name: 'Active Studio Reference Nearfield Monitors (Pair)',
    category: 'Peripherals',
    scenarioId: 'gaming-setup',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
    description: 'Kevlar cone drivers and silk dome tweeters tuned for pinpoint stereo directional imaging and rich acoustic depth without artificial bass boost.',
    reason: 'Pinpoints footsteps and musical scores with surgical precision.',
    priority: 'nice-to-have',
    styles: ['premium', 'minimal'],
    spaceCompatibility: 'Compact 4-inch footprint ✓',
    budgetTier: 'premium',
    tags: ['Acoustic Reference', 'Balanced TRS', 'Matte Black']
  },
  {
    id: 'p-gam-desk',
    name: 'Chamfered Heavy-Duty Battle Desk with Under-Cable Tray',
    category: 'Desk',
    scenarioId: 'gaming-setup',
    price: 7499,
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80',
    description: 'Textured carbon-neutral high-density core board supporting dual monitor arms without warping. Includes concealed steel wire trough.',
    reason: 'Holds up to 100kg of rig gear with rock-solid zero-wobble stability.',
    priority: 'must-have',
    styles: ['practical', 'aesthetic'],
    spaceCompatibility: '140×70 cm spacious surface ✓',
    budgetTier: 'mid',
    tags: ['Heavy Duty', 'Zero Wobble', 'Dual Arm Ready']
  },

  // ===================== FIRST HOUSE PARTY =====================
  {
    id: 'p-pty-glass',
    name: 'Fluted Borosilicate Highball & Coupe Set (12 Pcs)',
    category: 'Serving',
    scenarioId: 'house-party',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80',
    description: 'Thermal shock-resistant vertical ribbing that catches candlelight. Thin, elegant rim that elevates both simple sodas and layered negronis.',
    reason: 'Enough glassware for a 10-person gathering with zero mismatched disposable plastic waste.',
    priority: 'must-have',
    styles: ['aesthetic', 'cozy', 'eco'],
    spaceCompatibility: 'Stacks neatly in 2 cupboard tiers ✓',
    budgetTier: 'mid',
    tags: ['Borosilicate', 'Dishwasher Safe', 'Thermal Shock Proof']
  },
  {
    id: 'p-pty-candle',
    name: 'Raw Beeswax Taper Candles & Ceramic Holder Set',
    category: 'Lighting',
    scenarioId: 'house-party',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&auto=format&fit=crop&q=80',
    description: '100% pure filtered honey-scented beeswax tapers with hand-cast stoneware dripless candle dishes.',
    reason: 'Instantly sets an intimate, convivial mood that makes guests relax and linger for hours.',
    priority: 'must-have',
    styles: ['cozy', 'aesthetic', 'eco'],
    spaceCompatibility: 'Safe dripless glaze trays ✓',
    budgetTier: 'budget',
    tags: ['Pure Beeswax', 'Clean Burn', 'Honey Aroma']
  },
  {
    id: 'p-pty-tray',
    name: 'Curved Edge Acacia Wood Grazing & Charcuterie Board',
    category: 'Serving',
    scenarioId: 'house-party',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&auto=format&fit=crop&q=80',
    description: 'Hand-carved single-slab acacia with subtle juice groove and food-grade walnut oil sealant. Measures 60×22cm.',
    reason: 'Turns simple cheeses, grapes, and crackers into an artful centerpiece without complex cooking.',
    priority: 'must-have',
    styles: ['cozy', 'aesthetic', 'practical'],
    spaceCompatibility: 'Slips vertically behind spice rack ✓',
    budgetTier: 'mid',
    tags: ['Solid Acacia', 'Natural Grain', 'Food Safe']
  },
  {
    id: 'p-pty-shaker',
    name: 'Brushed Brass Boston Cocktail Shaker & Strainer Kit',
    category: 'Kitchen',
    scenarioId: 'house-party',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80',
    description: 'Heavy gauge food-grade stainless steel with brushed brass PVD coating. Includes Hawthorne strainer, double jigger, and teardrop bar spoon.',
    reason: 'Makes craft cocktails interactive and fun for guests to try their hand at mixing.',
    priority: 'nice-to-have',
    styles: ['aesthetic', 'premium'],
    spaceCompatibility: 'Bar cart centerpiece ✓',
    budgetTier: 'mid',
    tags: ['PVD Brass', 'Leak Seal', 'Bar Pro']
  },
  {
    id: 'p-pty-stool',
    name: 'Stackable Bentwood Stool Trio (Warm Birch)',
    category: 'Seating',
    scenarioId: 'house-party',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&auto=format&fit=crop&q=80',
    description: 'Three nesting stools that stack vertically into the footprint of a single chair when guests depart.',
    reason: 'Solves the sudden need for extra seating without cluttering the apartment on normal weekdays.',
    priority: 'nice-to-have',
    styles: ['minimal', 'practical'],
    spaceCompatibility: 'Stacks into 35cm corner tower ✓',
    budgetTier: 'mid',
    tags: ['Nesting Stack', 'Bentwood', 'Extra Seats']
  },

  // ===================== WEEKEND GETAWAY =====================
  {
    id: 'p-wkd-duffel',
    name: 'Waxed 18oz Cotton Canvas Weekend Duffel (42L)',
    category: 'Travel',
    scenarioId: 'weekend-getaway',
    price: 4499,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
    description: 'Water-resistant storm-treated canvas with full-grain bridle leather handles, solid brass hardware, and dedicated shoe compartment.',
    reason: 'Fits airline overhead compartments or back car seats perfectly for 3-4 days of roaming.',
    priority: 'must-have',
    styles: ['practical', 'premium', 'eco'],
    spaceCompatibility: 'Cabin compliant 52×28×30 cm ✓',
    budgetTier: 'mid',
    tags: ['Waxed Canvas', 'Water Resistant', 'YKK Zippers']
  },
  {
    id: 'p-wkd-pouch',
    name: 'Ripstop Cordura Hanging Toiletry Dopp Kit',
    category: 'Organization',
    scenarioId: 'weekend-getaway',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
    description: 'Fold-out 3-tier internal mesh organization with integrated swivel aluminum hanger hook that hangs on any bathroom towel rail or tree branch.',
    reason: 'Keeps toiletries completely off damp cabin bathroom sink surfaces.',
    priority: 'must-have',
    styles: ['practical', 'minimal'],
    spaceCompatibility: 'Folds flat to 4cm depth ✓',
    budgetTier: 'budget',
    tags: ['Hanging Hook', 'Spill Proof', 'Mesh Pockets']
  },
  {
    id: 'p-wkd-flask',
    name: 'Double-Walled Copper-Core Vacuum Flask (750ml)',
    category: 'Comfort',
    scenarioId: 'weekend-getaway',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80',
    description: 'Pure 18/8 food-grade steel with internal thermal copper lining. Keeps tea scalding for 24 hours on breezy mountain summits.',
    reason: 'Guaranteed hot brew wherever the road stops, without single-use cups.',
    priority: 'must-have',
    styles: ['practical', 'eco', 'premium'],
    spaceCompatibility: 'Fits standard car cup holders ✓',
    budgetTier: 'budget',
    tags: ['Copper Core', '24h Hot', 'Zero Sweat']
  },
  {
    id: 'p-wkd-towel',
    name: 'Ultra-Compact Linen Travel Towel & Pouch',
    category: 'Essentials',
    scenarioId: 'weekend-getaway',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
    description: 'Naturally antimicrobial waffle flax linen that absorbs 4x its weight in moisture and air-dries in under 40 minutes.',
    reason: 'Takes up 1/5th the luggage volume of fluffy terry cloth towels.',
    priority: 'nice-to-have',
    styles: ['eco', 'practical', 'minimal'],
    spaceCompatibility: 'Compresses to fist size ✓',
    budgetTier: 'budget',
    tags: ['Pure Linen', 'Fast Dry', 'Antibacterial']
  },

  // ===================== FITNESS STARTER =====================
  {
    id: 'p-fit-mat',
    name: 'Natural Tree Rubber & Sustainable Cork Yoga Mat (5mm)',
    category: 'Training',
    scenarioId: 'fitness-starter',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&auto=format&fit=crop&q=80',
    description: 'Non-toxic, grippy organic cork surface that gains traction as you sweat, bonded to a heavy natural tree rubber base that never curls at edges.',
    reason: 'Absorbs joint impact and stays anchored on smooth tiles without emitting nasty synthetic plastic smells.',
    priority: 'must-have',
    styles: ['eco', 'aesthetic', 'practical'],
    spaceCompatibility: 'Rolls into 12cm diameter tube ✓',
    budgetTier: 'mid',
    tags: ['Cork & Rubber', 'Self-Cleaning', 'Joint Cushion']
  },
  {
    id: 'p-fit-roller',
    name: 'Dual-Zone High Density Textured Mobility Roller',
    category: 'Recovery',
    scenarioId: 'fitness-starter',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
    description: 'Engineered ridge profile for deep myofascial release on tight calves, thoracic spine, and quads after strenuous squats.',
    reason: 'Speeds up delayed muscle soreness recovery so you stay consistent in week 2.',
    priority: 'must-have',
    styles: ['practical', 'minimal'],
    spaceCompatibility: 'Stands upright in wardrobe corner ✓',
    budgetTier: 'budget',
    tags: ['Trigger Point', 'Firm Density', 'Washable']
  },
  {
    id: 'p-fit-bands',
    name: 'Natural Latex Fabric Resistance Band Loop Trio',
    category: 'Training',
    scenarioId: 'fitness-starter',
    price: 999,
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&auto=format&fit=crop&q=80',
    description: 'Three calibrated resistance levels (Light, Medium, Heavy) wrapped in soft knit fabric that never pinches skin or rolls up thighs.',
    reason: 'Provides full-body progressive overload anywhere with zero heavy dumbbell clutter.',
    priority: 'must-have',
    styles: ['practical', 'minimal'],
    spaceCompatibility: 'Packs into palm pouch ✓',
    budgetTier: 'budget',
    tags: ['Anti-Roll', 'Skin Friendly', 'Calibrated']
  },
  {
    id: 'p-fit-bottle',
    name: 'Matte Stainless Steel 1.2L Chug Carafe',
    category: 'Hydration',
    scenarioId: 'fitness-starter',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80',
    description: 'Wide mouth with quick-chug spout and heavy silicone bumper base to prevent loud metallic clanging on the floor.',
    reason: 'Ensures daily 2.5L water targets are effortlessly met without frequent kitchen runs.',
    priority: 'must-have',
    styles: ['practical', 'minimal'],
    spaceCompatibility: 'Drop-proof silicone boot ✓',
    budgetTier: 'budget',
    tags: ['BPA Free', 'Ice Friendly', 'Cold 30h']
  },

  // ===================== NEW PET =====================
  {
    id: 'p-pet-bed',
    name: 'Orthopedic Calming Memory Foam Pet Bed with Washable Cover',
    category: 'Sleeping',
    scenarioId: 'new-pet',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=800&auto=format&fit=crop&q=80',
    description: 'Human-grade memory foam slab with 360-degree bolstered rim for chin resting. Outer cover unzips completely for machine washing.',
    reason: 'Eases puppy separation anxiety and supports developing joints with ergonomic cushioning.',
    priority: 'must-have',
    styles: ['cozy', 'practical', 'aesthetic'],
    spaceCompatibility: '75×60 cm snug corner fit ✓',
    budgetTier: 'mid',
    tags: ['Removable Cover', 'Waterproof Liner', 'Non-Skid']
  },
  {
    id: 'p-pet-bowl',
    name: 'Heavyweight Ceramic Non-Slip Elevated Bowls (Set of 2)',
    category: 'Feeding',
    scenarioId: 'new-pet',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&auto=format&fit=crop&q=80',
    description: 'Dense stoneware that curious puppies cannot flip over. Elevated bamboo stand prevents neck straining and messy food scatter.',
    reason: 'Keeps floor clean and prevents water bowl flipping accidents during zoomies.',
    priority: 'must-have',
    styles: ['minimal', 'practical', 'aesthetic'],
    spaceCompatibility: 'Spill-containment bamboo stand ✓',
    budgetTier: 'budget',
    tags: ['Heavy Stoneware', 'Lead Free', 'No-Tip']
  },
  {
    id: 'p-pet-leash',
    name: 'Waterproof Biothane Odor-Proof Leash & Step-In Harness',
    category: 'Walking',
    scenarioId: 'new-pet',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=80',
    description: 'Leather-look synthetic webbing that wipes clean with a damp cloth. Never absorbs muddy puddle water or dog odor.',
    reason: 'Survives rainy puppy walks without turning smelly or stiff.',
    priority: 'must-have',
    styles: ['practical', 'minimal'],
    spaceCompatibility: 'Wipes clean in 5 seconds ✓',
    budgetTier: 'mid',
    tags: ['Biothane', '100% Waterproof', 'Brass Clip']
  },
  {
    id: 'p-pet-groom',
    name: 'Gentle Self-Cleaning Deshedding Slicker Brush',
    category: 'Grooming',
    scenarioId: 'new-pet',
    price: 899,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80',
    description: 'Fine bent wire bristles with coated safety tips that gently remove loose undercoat. Push-button retracts pins to eject fur clump cleanly.',
    reason: 'Stops fur shedding before it lands on your bedsheets and rugs.',
    priority: 'nice-to-have',
    styles: ['practical', 'cozy'],
    spaceCompatibility: 'Ergonomic rubber handle ✓',
    budgetTier: 'budget',
    tags: ['One-Click Eject', 'Gentle Tips', 'All Coats']
  }
];

export const FORGOTTEN_ESSENTIALS: ForgottenEssential[] = [
  // First Apartment
  {
    id: 'fe-apt-ext',
    name: 'Surge Protected Extension Board (4-way + 2 USB-C)',
    scenarioId: 'tiny-apartment',
    category: 'Essentials',
    price: 749,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    reason: 'Older rental apartments rarely have wall sockets where your bed and desk actually sit.',
    priority: 'must-have',
    spaceCompatibility: '3m braided flat cord'
  },
  {
    id: 'fe-apt-hang',
    name: 'Velvet Non-Slip Slim Hangers (Pack of 20)',
    scenarioId: 'tiny-apartment',
    category: 'Essentials',
    price: 599,
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=800&auto=format&fit=crop&q=80',
    reason: 'Ultra-thin 5mm profile doubles your wardrobe rod capacity instantly without clothes slipping.',
    priority: 'must-have',
    spaceCompatibility: '50% wardrobe space saved'
  },
  {
    id: 'fe-apt-door',
    name: 'Silicone Under-Door Noise & Dust Draft Stopper',
    scenarioId: 'tiny-apartment',
    category: 'Essentials',
    price: 349,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
    reason: 'Blocks hallway light, corridor elevator chatter, and insects from sliding under your main door.',
    priority: 'must-have',
    spaceCompatibility: 'Adhesive peel-and-stick'
  },
  {
    id: 'fe-apt-kit',
    name: 'Compact 12-Piece Household Tool & Picture Hanging Set',
    scenarioId: 'tiny-apartment',
    category: 'Essentials',
    price: 899,
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&auto=format&fit=crop&q=80',
    reason: 'You will need an allen key, hammer, and measuring tape on day one when assembling furniture.',
    priority: 'must-have',
    spaceCompatibility: 'Slim book-sized case'
  },

  // College Hostel
  {
    id: 'fe-hst-hamper',
    name: 'Pop-Up Mesh Laundry Hamper with Backpack Straps',
    scenarioId: 'college-hostel',
    category: 'Daily Essentials',
    price: 499,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    reason: 'Carrying dirty laundry downstairs to the hostel basement washer is painful without backpack straps.',
    priority: 'must-have',
    spaceCompatibility: 'Folds flat when empty'
  },
  {
    id: 'fe-hst-lock',
    name: 'Hardened Solid Brass Padlock & 3 Keys',
    scenarioId: 'college-hostel',
    category: 'Storage',
    price: 399,
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&auto=format&fit=crop&q=80',
    reason: 'Standard hostel lockers never provide locks. Keep your passport, laptop, and valuables secured.',
    priority: 'must-have',
    spaceCompatibility: 'Heavy 40mm shackle'
  },
  {
    id: 'fe-hst-caddy',
    name: 'Quick-Drain Mesh Shower Tote Caddy',
    scenarioId: 'college-hostel',
    category: 'Daily Essentials',
    price: 449,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    reason: 'Keeps soap, shampoo, and toothbrush together on shared bathroom trips without holding wet bottles.',
    priority: 'must-have',
    spaceCompatibility: 'Dries in 10 minutes'
  },

  // Home Office
  {
    id: 'fe-off-cable',
    name: 'Under-Desk Adhesive Cable Raceway & Velcro Ties',
    scenarioId: 'home-office',
    category: 'Organization',
    price: 649,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    reason: 'The difference between an aesthetic studio desk and a rat’s nest is 15 minutes of cable routing.',
    priority: 'must-have',
    spaceCompatibility: 'Zero sag under desktop'
  },
  {
    id: 'fe-off-clean',
    name: 'Optical Screen Microfiber & Anti-Static Mist Kit',
    scenarioId: 'home-office',
    category: 'Tech Accessories',
    price: 399,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    reason: 'Wiping displays with your sleeve causes micro-scratches and smudges that cause eye strain.',
    priority: 'must-have',
    spaceCompatibility: 'Pocket spray tube'
  },

  // Gaming Setup
  {
    id: 'fe-gam-hook',
    name: 'Silicone Under-Desk Headphone Swivel Hanger',
    scenarioId: 'gaming-setup',
    category: 'Peripherals',
    price: 499,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
    reason: 'Stops bulky headsets from occupying prime desk mouse space when not in discord voice.',
    priority: 'must-have',
    spaceCompatibility: '360° rotating hook'
  },

  // House Party
  {
    id: 'fe-pty-bags',
    name: 'Heavy Duty Odor-Shield Trash Bags (Pack of 30)',
    scenarioId: 'house-party',
    category: 'Cleanup',
    price: 349,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80',
    reason: 'Nothing ruins 1 AM hosting like a punctured flimsy bag leaking beer onto your living room rug.',
    priority: 'must-have',
    spaceCompatibility: 'Drawstring puncture-resistant'
  },
  {
    id: 'fe-pty-tongs',
    name: 'Stainless Steel Double-Walled Ice Bucket & Tongs',
    scenarioId: 'house-party',
    category: 'Serving',
    price: 999,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80',
    reason: 'Prevents guests crowding your tiny kitchen freezer every time someone wants a cold drink.',
    priority: 'must-have',
    spaceCompatibility: 'Compact 1.5L table cylinder'
  },

  // Weekend Getaway
  {
    id: 'fe-wkd-bottles',
    name: 'Leakproof Silicone Travel Bottles (Set of 4 × 80ml)',
    scenarioId: 'weekend-getaway',
    category: 'Organization',
    price: 549,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
    reason: 'Cabin pressure changes burst full-size shampoo bottles. These silicone seals never leak.',
    priority: 'must-have',
    spaceCompatibility: 'TSA clear carry bag'
  },

  // Fitness Starter
  {
    id: 'fe-fit-towel',
    name: 'Magnetic Workout Gym Towel with Phone Pocket',
    scenarioId: 'fitness-starter',
    category: 'Accessories',
    price: 499,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
    reason: 'Clips securely to metal frames or chairs so it never touches dirty floor surfaces.',
    priority: 'must-have',
    spaceCompatibility: 'Zippered key compartment'
  },

  // New Pet
  {
    id: 'fe-pet-bags',
    name: 'Cornstarch Biodegradable Waste Bags & Dispenser',
    scenarioId: 'new-pet',
    category: 'Cleaning',
    price: 429,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=80',
    reason: 'You will need these at least 3 times every day from the very first hour your puppy arrives.',
    priority: 'must-have',
    spaceCompatibility: 'Clips directly to leash'
  },
  {
    id: 'fe-pet-spray',
    name: 'Enzyme Odor & Urine Neutralizer Spray (500ml)',
    scenarioId: 'new-pet',
    category: 'Cleaning',
    price: 549,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
    reason: 'Standard floor cleaners leave puppy scent markers behind, inviting repeat indoor accidents.',
    priority: 'must-have',
    spaceCompatibility: 'Plant-based non-toxic'
  }
];
