// store/themeStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. Color definitions as pure functions
const getDarkColors = () => ({
  primary: "#55BCF6",
  primary2: "#090f15",
  secondary: "#2DD4BF",
  secondary2: "#ff6666",
  background: "#E8EAED",
  background2: "#000000",
  background3: "#000000",
  surface: "#1A1A1A",
  surfaceLight: "#2A2A2A",
  white: "#FFFFFF",
  logoColor: "#025895",
  signInText: "#FFFFFF",
  grey: "#9CA3AF",
  oppositeColor: "#ffffff",
});

const getLightColors = () => ({
  primary2: "#55BCF6",
  primary: "#a61651",
  background2: "#ffffff",
  background3: "#ffffff",
  grey: "#001b2b",
  secondary: "#0e3d8b",
  secondary2: "#960707",
  surface: "#ccc",
  surfaceLight: "#c9bcbc",
  white: "#070606",
  logoColor: "#025895",
  signInText: "#333",
  oppositeColor: "#000000",
  background: "#FFFFFF",
});

// 2. Type safety
type ColorScheme = ReturnType<typeof getDarkColors>;

interface ThemeState {
  isDarkMode: boolean;
  COLORS: ColorScheme;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
  _hasHydrated: boolean; // Track hydration state
}

// 3. Store creation with improved types
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: true,
      COLORS: getDarkColors(),
      _hasHydrated: false, // Hydration flag
      toggleTheme: () => set((state) => {
        const isDarkMode = !state.isDarkMode;
        return {
          isDarkMode,
          COLORS: isDarkMode ? getDarkColors() : getLightColors(),
        };
      }),
      setTheme: (isDark) => set({
        isDarkMode: isDark,
        COLORS: isDark ? getDarkColors() : getLightColors(),
      }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
      version: 1,
      migrate: (persistedState: any, version) => {
        // Migration logic for future versions
        if (version === 0) {
          return { 
            ...persistedState,
            COLORS: persistedState.isDarkMode ? getDarkColors() : getLightColors(),
            _hasHydrated: true 
          };
        }
        return persistedState;
      },
      onRehydrateStorage: () => (state) => {
        if (state) {
          state._hasHydrated = true;
        }
      },
    }
  )
);

// 4. Hydration utility hook
export const useThemeHydration = () => {
  return useThemeStore(state => state._hasHydrated);
};