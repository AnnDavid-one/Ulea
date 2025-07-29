// hooks/useTheme.ts
import { useThemeStore } from '../../Store/themeStore';

export const useTheme = () => {
  const { isDarkMode, COLORS, toggleTheme, setTheme } = useThemeStore();
  
  return {
    isDarkMode,
    COLORS,
    toggleTheme,
    setTheme,
  };
};