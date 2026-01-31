"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import style from "./style.module.scss";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={style.themeSwitcher}>
      <button 
        onClick={() => setTheme('light')} 
        className={theme === 'light' ? style.active : ''}
      >
        modo claro
      </button>
      <span>|</span>
      <button 
        onClick={() => setTheme('dark')} 
        className={theme === 'dark' ? style.active : ''}
      >
        modo escuro
      </button>
    </div>
  );
};
