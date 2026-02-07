import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle({ className }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={`relative h-8 w-14 rounded-full overflow-hidden transition-colors bg-gray-200 dark:bg-gray-800 light:bg-gray-200 border border-white/10 dark:border-white/10 light:border-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2afeb7] ${className || ""}`}
      style={{
        backgroundColor: isDark ? 'rgba(42, 254, 183, 0.15)' : '#e5e7eb', // slightly more cyan for dark, darker gray for light
      }}
    >
      {/* Knob */}
      <span
        aria-hidden
        className={`absolute top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-black light:bg-white border border-gray-300 dark:border-gray-600 light:border-gray-300 shadow-sm transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-[#2afeb7]" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-gray-500" />
        )}
      </span>
    </button>
  );
}