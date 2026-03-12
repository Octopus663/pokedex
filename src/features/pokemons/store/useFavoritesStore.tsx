import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (name: string) => void;
  isFavorite: (name: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      
      toggleFavorite: (name: string) => {
        const { favorites } = get();
        const isFav = favorites.includes(name);
        
        if (isFav) {
          set({ favorites: favorites.filter((n) => n !== name) });
        } else {
          set({ favorites: [...favorites, name] });
        }
      },

      isFavorite: (name: string) => {
        return get().favorites.includes(name);
      },
    }),
    { name: 'pokemon-favorites' }
  )
);