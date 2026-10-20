const STORAGE_KEY = "revenue-ai-stores";

export interface Store {
  id: string;
  userId: string;
  name: string;
  slug: string;
  description: string;
  logo: string;
  heroTitle: string;
  heroDescription: string;
}

export function getStores(): Store[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function getStoreBySlug(slug: string): Store | null {
  const stores = getStores();
  return stores.find((s) => s.slug === slug) || null;
}

export function createStore(store: Omit<Store, "id">): Store {
  const stores = getStores();
  const newStore: Store = {
    ...store,
    id: crypto.randomUUID(),
  };
  stores.push(newStore);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stores));
  return newStore;
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
