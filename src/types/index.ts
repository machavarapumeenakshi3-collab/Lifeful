export type LifestyleStyle = 'minimal' | 'cozy' | 'aesthetic' | 'practical' | 'premium' | 'eco';

export type PriorityTier = 'must-have' | 'nice-to-have' | 'later';

export interface SwapAlternative {
  id: string;
  name: string;
  price: number;
  image: string;
  type: 'affordable' | 'compact' | 'aesthetic' | 'quality';
  differenceLabel: string;
  reason: string;
  compatibilityNote: string;
  specs?: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  scenarioId: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  reason: string;
  priority: PriorityTier;
  styles: LifestyleStyle[];
  spaceCompatibility: string;
  budgetTier: 'budget' | 'mid' | 'premium';
  tags: string[];
  dimensions?: string;
  materials?: string;
  specs?: string[];
  alternatives?: SwapAlternative[];
}

export interface ForgottenEssential {
  id: string;
  name: string;
  scenarioId: string;
  category: string;
  price: number;
  image: string;
  reason: string;
  priority: PriorityTier;
  spaceCompatibility: string;
}

export interface BoardHotspot {
  id: string;
  productId: string;
  xPercent: number; // 0 to 100%
  yPercent: number; // 0 to 100%
  label: string;
  category: string;
}

export interface Scenario {
  id: string;
  slug: string;
  title: string;
  headline: string;
  subtitle: string;
  promptExample: string;
  heroImage: string;
  boardImage: string;
  defaultBudget: number;
  categories: string[];
  recommendedStyles: LifestyleStyle[];
  completionEstimate: number;
  tags: string[];
  boardHotspots: BoardHotspot[];
  accentColor?: string;
}

export interface SetupItem {
  product: Product;
  quantity: number;
  addedAt: string;
  selectedVariant?: string;
  isCustomSwapped?: boolean;
}

export interface UserSetup {
  scenarioId: string;
  title: string;
  style: LifestyleStyle;
  budgetCap: number;
  items: SetupItem[];
  updatedAt: string;
}

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  password?: string;
  preferredStyle?: LifestyleStyle;
  defaultBudgetRange?: number;
  city?: string;
  createdAt: string;
  savedProductIds: string[];
  savedSetupIds: string[];
  activeItems?: SetupItem[];
}

export type PageRoute = 
  | 'home' 
  | 'explore' 
  | 'setups' 
  | 'setup' 
  | 'board' 
  | 'my-setup' 
  | 'saved' 
  | 'search' 
  | 'profile' 
  | 'about';
