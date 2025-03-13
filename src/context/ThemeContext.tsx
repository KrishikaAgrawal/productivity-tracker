import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
 
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div
        className={
          darkMode
            ? "dark bg-gradient-to-t bg-[#000814] text-[#f8961e]"
            : "bg-white text-gray-900"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
