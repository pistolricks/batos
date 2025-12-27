import { createContext, useContext, createSignal, JSX } from 'solid-js';

type Theme = 'liquid' | 'frost';

interface ThemeContextType {
  theme: () => Theme;
  setTheme: (theme: Theme) => void;
  getThemeClass: () => string;
}

const ThemeContext = createContext<ThemeContextType>();

export function ThemeProvider(props: { children: JSX.Element }) {
  const [theme, setTheme] = createSignal<Theme>('liquid');

  const getThemeClass = () => {
    return theme() === 'liquid' ? 'bg-black/95' : 'bg-gray-900/95';
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, getThemeClass }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
