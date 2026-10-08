import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { 
  PageRoute, 
  LifestyleStyle, 
  Scenario, 
  Product, 
  SetupItem, 
  SwapAlternative, 
  ForgottenEssential,
  UserAccount 
} from '../types';
import { SCENARIOS } from '../data/scenarios';
import { PRODUCTS, FORGOTTEN_ESSENTIALS } from '../data/products';

interface UserProfile {
  name: string;
  email: string;
  preferredStyle: LifestyleStyle;
  defaultBudgetRange: number;
  city: string;
}

interface AppContextType {
  // Navigation & Routing
  currentRoute: PageRoute;
  navigateTo: (route: PageRoute, params?: { scenarioId?: string; productId?: string }) => void;
  
  // Authentication & Session
  isAuthenticated: boolean;
  authView: 'signin' | 'signup';
  setAuthView: (view: 'signin' | 'signup') => void;
  currentUser: UserAccount | null;
  signIn: (email: string, password: string) => { success: boolean; error?: string };
  signUp: (name: string, email: string, password: string) => { success: boolean; error?: string };
  signOut: () => void;

  // Scenario Selection & Generation
  selectedScenarioId: string;
  currentScenario: Scenario;
  selectScenario: (scenarioId: string) => void;
  isGenerating: boolean;
  generationStep: number;
  triggerGeneration: (scenarioId: string, promptText?: string) => void;
  heroPromptText: string;
  setHeroPromptText: (text: string) => void;
  
  // Style Personalization
  selectedStyle: LifestyleStyle;
  setSelectedStyle: (style: LifestyleStyle) => void;
  applyStyleToSetup: (style: LifestyleStyle) => void;
  
  // Active Setup State
  activeItems: SetupItem[];
  addToSetup: (product: Product) => void;
  removeFromSetup: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  isProductInSetup: (productId: string) => boolean;
  
  // Budget State & Smart Optimization
  budgetCap: number;
  setBudgetCap: (amount: number) => void;
  totalCost: number;
  budgetOptimizationMessage: string | null;
  clearOptimizationMessage: () => void;
  optimizeForBudget: (targetBudget: number) => void;
  
  // Smart Product Swap
  swapModalProduct: Product | null;
  openSwapModal: (product: Product) => void;
  closeSwapModal: () => void;
  executeSwap: (originalProductId: string, alternative: SwapAlternative) => void;
  
  // Product Detail Modal
  detailProduct: Product | null;
  openDetailModal: (product: Product) => void;
  closeDetailModal: () => void;
  
  // Forgotten Essentials
  scenarioForgottenEssentials: ForgottenEssential[];
  addForgottenEssentialToSetup: (fe: ForgottenEssential) => void;
  
  // Saved Items
  savedProductIds: string[];
  savedSetupIds: string[];
  toggleSaveProduct: (productId: string) => void;
  toggleSaveSetup: (setupId: string) => void;
  isProductSaved: (productId: string) => boolean;
  isSetupSaved: (scenarioId: string) => boolean;
  
  // Progress
  completionRate: number;
  
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Profile
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const USERS_STORAGE_KEY = 'lifeful_registered_users_v2';
const SESSION_STORAGE_KEY = 'lifeful_active_session_email_v2';
const STORAGE_KEY_SETUP = 'lifeful_active_items_v2';
const STORAGE_KEY_SAVED_PRODUCTS = 'lifeful_saved_products_v2';
const STORAGE_KEY_SAVED_SETUPS = 'lifeful_saved_setups_v2';
const STORAGE_KEY_PROFILE = 'lifeful_user_profile_v2';
const STORAGE_KEY_SCENARIO = 'lifeful_active_scenario_v2';

const DEFAULT_SEED_USERS: UserAccount[] = [
  {
    id: 'user-maya',
    name: 'Maya Sharma',
    email: 'maya@studio.design',
    password: 'password123',
    preferredStyle: 'minimal',
    defaultBudgetRange: 25000,
    city: 'Bengaluru, India',
    createdAt: new Date().toISOString(),
    savedProductIds: ['p-apt-lamp', 'p-apt-kettle'],
    savedSetupIds: ['tiny-apartment']
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Users state
  const [users, setUsers] = useState<UserAccount[]>(() => {
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return DEFAULT_SEED_USERS;
  });

  // Current session user - null if not signed in
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => {
    try {
      const activeEmail = localStorage.getItem(SESSION_STORAGE_KEY);
      if (activeEmail) {
        const rawUsers = localStorage.getItem(USERS_STORAGE_KEY);
        const userList: UserAccount[] = rawUsers ? JSON.parse(rawUsers) : DEFAULT_SEED_USERS;
        const found = userList.find(u => u.email.toLowerCase() === activeEmail.toLowerCase());
        if (found) return found;
      }
    } catch {
      // ignore
    }
    return null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => currentUser !== null);
  const [authView, setAuthView] = useState<'signin' | 'signup'>('signin');

  // Routing state
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('tiny-apartment');
  const [heroPromptText, setHeroPromptText] = useState<string>(SCENARIOS[0].promptExample);
  const [selectedStyle, setSelectedStyle] = useState<LifestyleStyle>('minimal');
  const [budgetCap, setBudgetCap] = useState<number>(SCENARIOS[0].defaultBudget);
  const [budgetOptimizationMessage, setBudgetOptimizationMessage] = useState<string | null>(null);

  // Modals
  const [swapModalProduct, setSwapModalProduct] = useState<Product | null>(null);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  // Generation Loading State
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationStep, setGenerationStep] = useState<number>(0);

  // Search
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Profile - initialized with currentUser or default
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    if (currentUser) {
      return {
        name: currentUser.name,
        email: currentUser.email,
        preferredStyle: currentUser.preferredStyle || 'minimal',
        defaultBudgetRange: currentUser.defaultBudgetRange || 25000,
        city: currentUser.city || 'Bengaluru, India'
      };
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return {
      name: 'Maya Sharma',
      email: 'maya@studio.design',
      preferredStyle: 'minimal',
      defaultBudgetRange: 25000,
      city: 'Bengaluru, India'
    };
  });

  // Saved state
  const [savedProductIds, setSavedProductIds] = useState<string[]>(() => {
    if (currentUser) {
      return currentUser.savedProductIds || [];
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SAVED_PRODUCTS);
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return ['p-apt-lamp', 'p-apt-kettle'];
  });

  const [savedSetupIds, setSavedSetupIds] = useState<string[]>(() => {
    if (currentUser) {
      return currentUser.savedSetupIds || [];
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SAVED_SETUPS);
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return ['tiny-apartment'];
  });

  // Current Scenario
  const currentScenario = useMemo(() => {
    return SCENARIOS.find(s => s.id === selectedScenarioId) || SCENARIOS[0];
  }, [selectedScenarioId]);

  // Initial products for a scenario
  const getInitialItemsForScenario = useCallback((scenarioId: string): SetupItem[] => {
    const scenarioProducts = PRODUCTS.filter(p => p.scenarioId === scenarioId);
    return scenarioProducts.map(product => ({
      product,
      quantity: 1,
      addedAt: new Date().toISOString()
    }));
  }, []);

  // Active Setup Items
  const [activeItems, setActiveItems] = useState<SetupItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SETUP);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return getInitialItemsForScenario('tiny-apartment');
  });

  // Sync route with browser history
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const path = window.location.pathname.replace(/^\//, '');
      const validRoutes: PageRoute[] = [
        'home', 'explore', 'setups', 'setup', 'board', 'my-setup', 'saved', 'search', 'profile', 'about'
      ];
      if (validRoutes.includes(path as PageRoute)) {
        setCurrentRoute(path as PageRoute);
      } else if (!path) {
        setCurrentRoute('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((route: PageRoute, params?: { scenarioId?: string; productId?: string }) => {
    setCurrentRoute(route);
    const url = route === 'home' ? '/' : `/${route}`;
    if (window.location.pathname !== url) {
      window.history.pushState({ route }, '', url);
    }
    if (params?.scenarioId) {
      setSelectedScenarioId(params.scenarioId);
      const sc = SCENARIOS.find(s => s.id === params.scenarioId);
      if (sc) {
        setBudgetCap(sc.defaultBudget);
        setHeroPromptText(sc.promptExample);
      }
    }
    if (params?.productId) {
      const p = PRODUCTS.find(prod => prod.id === params.productId);
      if (p) setDetailProduct(p);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SETUP, JSON.stringify(activeItems));
    } catch {
      // ignore
    }
  }, [activeItems]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SAVED_PRODUCTS, JSON.stringify(savedProductIds));
    } catch {
      // ignore
    }
  }, [savedProductIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SAVED_SETUPS, JSON.stringify(savedSetupIds));
    } catch {
      // ignore
    }
  }, [savedSetupIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(userProfile));
    } catch {
      // ignore
    }
  }, [userProfile]);

  // Scenario Selection
  const selectScenario = useCallback((scenarioId: string) => {
    setSelectedScenarioId(scenarioId);
    const sc = SCENARIOS.find(s => s.id === scenarioId);
    if (sc) {
      setBudgetCap(sc.defaultBudget);
      setHeroPromptText(sc.promptExample);
      const items = getInitialItemsForScenario(scenarioId);
      setActiveItems(items);
      setBudgetOptimizationMessage(null);
    }
  }, [getInitialItemsForScenario]);

  // Total cost calculation
  const totalCost = useMemo(() => {
    return activeItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }, [activeItems]);

  // Completion calculation
  const completionRate = useMemo(() => {
    const totalPotential = 8;
    const currentCount = activeItems.length;
    const rate = Math.min(96, Math.max(45, Math.round((currentCount / totalPotential) * 85)));
    return rate;
  }, [activeItems]);

  // Generation Animation Sequence
  const triggerGeneration = useCallback((scenarioId: string, promptText?: string) => {
    setSelectedScenarioId(scenarioId);
    const sc = SCENARIOS.find(s => s.id === scenarioId);
    if (sc) {
      setBudgetCap(sc.defaultBudget);
      if (promptText) {
        setHeroPromptText(promptText);
      } else {
        setHeroPromptText(sc.promptExample);
      }
      setActiveItems(getInitialItemsForScenario(scenarioId));
    }

    setIsGenerating(true);
    setGenerationStep(1);

    const t1 = setTimeout(() => setGenerationStep(2), 600);
    const t2 = setTimeout(() => setGenerationStep(3), 1300);
    const t3 = setTimeout(() => setGenerationStep(4), 2000);
    const t4 = setTimeout(() => {
      setIsGenerating(false);
      setGenerationStep(0);
      navigateTo('setup', { scenarioId });
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [getInitialItemsForScenario, navigateTo]);

  // Add / Remove from Setup
  const addToSetup = useCallback((product: Product) => {
    setActiveItems(prev => {
      const exists = prev.find(item => item.product.id === product.id);
      if (exists) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        { product, quantity: 1, addedAt: new Date().toISOString() }
      ];
    });
  }, []);

  const removeFromSetup = useCallback((productId: string) => {
    setActiveItems(prev => prev.filter(item => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromSetup(productId);
      return;
    }
    setActiveItems(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  }, [removeFromSetup]);

  const isProductInSetup = useCallback((productId: string) => {
    return activeItems.some(item => item.product.id === productId);
  }, [activeItems]);

  // Smart Optimization when Budget is reduced
  const optimizeForBudget = useCallback((targetBudget: number) => {
    setBudgetCap(targetBudget);
    let currentSum = activeItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    if (currentSum <= targetBudget) {
      setBudgetOptimizationMessage(null);
      return;
    }

    // Identify expensive items that have affordable swap alternatives
    let swappedCount = 0;
    const newItems = activeItems.map(item => {
      if (currentSum > targetBudget && item.product.alternatives && item.product.alternatives.length > 0) {
        const affordAlt = item.product.alternatives.find(a => a.type === 'affordable' || a.price < item.product.price);
        if (affordAlt && affordAlt.price < item.product.price) {
          const savings = (item.product.price - affordAlt.price) * item.quantity;
          currentSum -= savings;
          swappedCount++;
          
          const syntheticProduct: Product = {
            ...item.product,
            id: affordAlt.id,
            name: affordAlt.name,
            price: affordAlt.price,
            originalPrice: item.product.price,
            reason: affordAlt.reason,
            budgetTier: 'budget',
            alternatives: [
              {
                id: item.product.id,
                name: item.product.name,
                price: item.product.price,
                image: item.product.image,
                type: 'quality',
                differenceLabel: 'Original premium choice',
                reason: item.product.reason,
                compatibilityNote: item.product.spaceCompatibility
              }
            ]
          };
          return {
            ...item,
            product: syntheticProduct,
            isCustomSwapped: true
          };
        }
      }
      return item;
    });

    setActiveItems(newItems);
    setBudgetOptimizationMessage(
      `Your setup was optimized to stay within ₹${targetBudget.toLocaleString('en-IN')}. ${swappedCount} pieces updated to high-value alternatives.`
    );
  }, [activeItems]);

  // Smart Product Swap Execution
  const executeSwap = useCallback((originalProductId: string, alternative: SwapAlternative) => {
    setActiveItems(prev => prev.map(item => {
      if (item.product.id === originalProductId) {
        const originalProduct = item.product;
        const newProduct: Product = {
          ...originalProduct,
          id: alternative.id,
          name: alternative.name,
          price: alternative.price,
          originalPrice: originalProduct.price,
          reason: alternative.reason,
          budgetTier: alternative.type === 'affordable' ? 'budget' : 'premium',
          alternatives: [
            {
              id: originalProduct.id,
              name: originalProduct.name,
              price: originalProduct.price,
              image: originalProduct.image,
              type: 'quality',
              differenceLabel: 'Revert to previous piece',
              reason: originalProduct.reason,
              compatibilityNote: originalProduct.spaceCompatibility
            }
          ]
        };
        return {
          ...item,
          product: newProduct,
          isCustomSwapped: true
        };
      }
      return item;
    }));
    setSwapModalProduct(null);
  }, []);

  const openSwapModal = useCallback((product: Product) => {
    setSwapModalProduct(product);
  }, []);

  const closeSwapModal = useCallback(() => {
    setSwapModalProduct(null);
  }, []);

  const openDetailModal = useCallback((product: Product) => {
    setDetailProduct(product);
  }, []);

  const closeDetailModal = useCallback(() => {
    setDetailProduct(null);
  }, []);

  // Forgotten Essentials
  const scenarioForgottenEssentials = useMemo(() => {
    return FORGOTTEN_ESSENTIALS.filter(fe => fe.scenarioId === selectedScenarioId);
  }, [selectedScenarioId]);

  const addForgottenEssentialToSetup = useCallback((fe: ForgottenEssential) => {
    const syntheticProduct: Product = {
      id: fe.id,
      name: fe.name,
      category: fe.category,
      scenarioId: fe.scenarioId,
      price: fe.price,
      image: fe.image,
      description: fe.reason,
      reason: fe.reason,
      priority: 'must-have',
      styles: ['practical', 'minimal'],
      spaceCompatibility: fe.spaceCompatibility,
      budgetTier: 'budget',
      tags: ['Essential', 'Zero Clutter']
    };
    addToSetup(syntheticProduct);
  }, [addToSetup]);

  // Saved items toggle
  const toggleSaveProduct = useCallback((productId: string) => {
    setSavedProductIds(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  }, []);

  const toggleSaveSetup = useCallback((scenarioId: string) => {
    setSavedSetupIds(prev => 
      prev.includes(scenarioId) ? prev.filter(id => id !== scenarioId) : [...prev, scenarioId]
    );
  }, []);

  const isProductSaved = useCallback((productId: string) => {
    return savedProductIds.includes(productId);
  }, [savedProductIds]);

  const isSetupSaved = useCallback((scenarioId: string) => {
    return savedSetupIds.includes(scenarioId);
  }, [savedSetupIds]);

  const clearOptimizationMessage = useCallback(() => {
    setBudgetOptimizationMessage(null);
  }, []);

  // Authentication: Sign In
  const signIn = useCallback((email: string, password: string): { success: boolean; error?: string } => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    let currentUsers = users;
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) currentUsers = parsed;
      }
    } catch {
      // ignore
    }

    const foundUser = currentUsers.find(u => u.email.toLowerCase() === cleanEmail);

    if (!foundUser) {
      return {
        success: false,
        error: 'No account found with this email. Please check your email or click Sign Up.'
      };
    }

    if (foundUser.password && foundUser.password !== cleanPass) {
      return {
        success: false,
        error: 'Incorrect password. Please verify your password and try again.'
      };
    }

    // Set authenticated session and restore user data
    setCurrentUser(foundUser);
    setIsAuthenticated(true);
    setUserProfile({
      name: foundUser.name,
      email: foundUser.email,
      preferredStyle: foundUser.preferredStyle || 'minimal',
      defaultBudgetRange: foundUser.defaultBudgetRange || 25000,
      city: foundUser.city || 'Bengaluru, India'
    });
    setSavedProductIds(foundUser.savedProductIds || []);
    setSavedSetupIds(foundUser.savedSetupIds || []);

    try {
      localStorage.setItem(SESSION_STORAGE_KEY, foundUser.email);
    } catch {
      // ignore
    }

    return { success: true };
  }, [users]);

  // Authentication: Sign Up
  const signUp = useCallback((name: string, email: string, password: string): { success: boolean; error?: string } => {
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    let currentUsers = users;
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) currentUsers = parsed;
      }
    } catch {
      // ignore
    }

    const existingUser = currentUsers.find(u => u.email.toLowerCase() === cleanEmail);
    if (existingUser) {
      return {
        success: false,
        error: 'An account with this email address already exists. Please sign in instead.'
      };
    }

    const newUser: UserAccount = {
      id: `user-${Date.now()}`,
      name: cleanName,
      email: cleanEmail,
      password: cleanPass,
      preferredStyle: 'minimal',
      defaultBudgetRange: 25000,
      city: '',
      createdAt: new Date().toISOString(),
      savedProductIds: [], // Empty wishlist for new registered user
      savedSetupIds: []
    };

    const updatedUsers = [...currentUsers, newUser];
    setUsers(updatedUsers);
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
      localStorage.setItem(SESSION_STORAGE_KEY, newUser.email);
    } catch {
      // ignore
    }

    // Immediately sign the user into Lifeful and take them into the website
    setCurrentUser(newUser);
    setIsAuthenticated(true);
    setUserProfile({
      name: newUser.name,
      email: newUser.email,
      preferredStyle: 'minimal',
      defaultBudgetRange: 25000,
      city: ''
    });
    setSavedProductIds([]);
    setSavedSetupIds([]);

    return { success: true };
  }, [users]);

  // Authentication: Sign Out
  const signOut = useCallback(() => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setAuthView('signin');
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    } catch {
      // ignore
    }
    setCurrentRoute('home');
  }, []);

  // Sync saved wishlist items with current user record
  useEffect(() => {
    if (currentUser) {
      setUsers(allUsers => {
        const updated = allUsers.map(u => {
          if (u.id === currentUser.id) {
            return {
              ...u,
              savedProductIds,
              savedSetupIds
            };
          }
          return u;
        });
        try {
          localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updated));
        } catch {
          // ignore
        }
        return updated;
      });
    }
  }, [savedProductIds, savedSetupIds, currentUser?.id]);

  const updateUserProfile = useCallback((profile: Partial<UserProfile>) => {
    setUserProfile(prev => {
      const updated = { ...prev, ...profile };
      if (currentUser) {
        const updatedUser: UserAccount = {
          ...currentUser,
          name: updated.name,
          email: updated.email,
          city: updated.city,
          preferredStyle: updated.preferredStyle,
          defaultBudgetRange: updated.defaultBudgetRange
        };
        setCurrentUser(updatedUser);
        setUsers(allUsers => {
          const newAll = allUsers.map(u => u.id === currentUser.id ? updatedUser : u);
          try {
            localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(newAll));
            localStorage.setItem(SESSION_STORAGE_KEY, updated.email);
          } catch {
            // ignore
          }
          return newAll;
        });
      }
      return updated;
    });
  }, [currentUser]);

  // Apply Style transformation across items
  const applyStyleToSetup = useCallback((style: LifestyleStyle) => {
    setSelectedStyle(style);
    
    setActiveItems(prev => {
      return prev.map(item => {
        const prod = item.product;
        if (prod.alternatives && prod.alternatives.length > 0) {
          if (style === 'premium') {
            const qualityAlt = prod.alternatives.find(a => a.type === 'quality');
            if (qualityAlt && qualityAlt.id !== prod.id) {
              return {
                ...item,
                product: {
                  ...prod,
                  id: qualityAlt.id,
                  name: qualityAlt.name,
                  price: qualityAlt.price,
                  originalPrice: prod.price,
                  reason: qualityAlt.reason,
                  budgetTier: 'premium',
                  styles: Array.from(new Set([...prod.styles, 'premium'])),
                },
                isCustomSwapped: true
              };
            }
          } else if (style === 'minimal') {
            const compactAlt = prod.alternatives.find(a => a.type === 'compact' || a.type === 'affordable');
            if (compactAlt && compactAlt.id !== prod.id) {
              return {
                ...item,
                product: {
                  ...prod,
                  id: compactAlt.id,
                  name: compactAlt.name,
                  price: compactAlt.price,
                  originalPrice: prod.price,
                  reason: compactAlt.reason,
                  budgetTier: 'budget',
                  styles: Array.from(new Set([...prod.styles, 'minimal'])),
                },
                isCustomSwapped: true
              };
            }
          } else if (style === 'practical') {
            const practicalAlt = prod.alternatives.find(a => a.type === 'affordable' || a.type === 'compact');
            if (practicalAlt && practicalAlt.id !== prod.id) {
              return {
                ...item,
                product: {
                  ...prod,
                  id: practicalAlt.id,
                  name: practicalAlt.name,
                  price: practicalAlt.price,
                  originalPrice: prod.price,
                  reason: practicalAlt.reason,
                  budgetTier: 'budget',
                  styles: Array.from(new Set([...prod.styles, 'practical'])),
                },
                isCustomSwapped: true
              };
            }
          }
        }
        return item;
      });
    });

    setBudgetOptimizationMessage(
      `Setup customized for ${style.toUpperCase()} living: Pieces and priority ratings reconfigured.`
    );
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        navigateTo,
        selectedScenarioId,
        currentScenario,
        selectScenario,
        isGenerating,
        generationStep,
        triggerGeneration,
        heroPromptText,
        setHeroPromptText,
        selectedStyle,
        setSelectedStyle,
        applyStyleToSetup,
        activeItems,
        addToSetup,
        removeFromSetup,
        updateQuantity,
        isProductInSetup,
        budgetCap,
        setBudgetCap,
        totalCost,
        budgetOptimizationMessage,
        clearOptimizationMessage,
        optimizeForBudget,
        swapModalProduct,
        openSwapModal,
        closeSwapModal,
        executeSwap,
        detailProduct,
        openDetailModal,
        closeDetailModal,
        scenarioForgottenEssentials,
        addForgottenEssentialToSetup,
        savedProductIds,
        savedSetupIds,
        toggleSaveProduct,
        toggleSaveSetup,
        isProductSaved,
        isSetupSaved,
        completionRate,
        searchQuery,
        setSearchQuery,
        userProfile,
        updateUserProfile,
        isAuthenticated,
        authView,
        setAuthView,
        currentUser,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
