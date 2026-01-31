"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme, type ThemeProviderProps } from "next-themes";

const TimeBasedThemeSetter = ({ children }: { children: React.ReactNode }) => {
  const { setTheme } = useTheme();
  
  React.useEffect(() => {
    const themeInStorage = localStorage.getItem('theme');
    if (!themeInStorage) {
      const currentHour = new Date().getHours();
      // Light mode: 6 AM (6) to 6 PM (18)
      if (currentHour >= 6 && currentHour < 18) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    }
  }, [setTheme]);
  
  return <>{children}</>;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TimeBasedThemeSetter>{children}</TimeBasedThemeSetter>
    </NextThemesProvider>
  );
}
