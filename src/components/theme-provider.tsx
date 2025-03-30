import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);

      // Add or remove gradient spotlights based on system theme
      handleGradientSpotlights(systemTheme);
      return;
    }

    root.classList.add(theme);

    // Add or remove gradient spotlights based on selected theme
    handleGradientSpotlights(theme);
  }, [theme]);

  // Function to handle gradient spotlights
  const handleGradientSpotlights = (currentTheme: "dark" | "light") => {
    // Remove existing spotlights if they exist
    const existingSpotlights = document.querySelectorAll(".theme-spotlight");
    existingSpotlights.forEach((el) => el.remove());

    // Only add spotlights for dark theme
    if (currentTheme === "dark") {
      // Create bottom left spotlight
      const bottomLeftSpotlight = document.createElement("div");
      bottomLeftSpotlight.className = "theme-spotlight bottom-left";
      bottomLeftSpotlight.style.cssText = `
        position: fixed;
        bottom: -500px;
        left: -500px;
        width: 1000px;
        height: 1000px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(76, 29, 149, 0.15) 40%, rgba(0, 0, 0, 0) 70%);
        pointer-events: none;
        z-index: -1;
        filter: blur(30px);
      `;

      // Create top right spotlight
      const topRightSpotlight = document.createElement("div");
      topRightSpotlight.className = "theme-spotlight top-right";
      topRightSpotlight.style.cssText = `
        position: fixed;
        top: -500px;
        right: -500px;
        width: 1000px;
        height: 1000px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.15) 40%, rgba(0, 0, 0, 0) 70%);
        pointer-events: none;
        z-index: -1;
        filter: blur(30px);
      `;

      document.body.appendChild(bottomLeftSpotlight);
      document.body.appendChild(topRightSpotlight);
    }
  };

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
