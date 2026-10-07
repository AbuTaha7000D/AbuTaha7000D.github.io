'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>('dark');

	useEffect(() => {
		const preferredTheme = (() => {
			if (typeof window === 'undefined') return 'dark';
			const storedTheme = localStorage.getItem('theme');
			if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme;
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		})();

		// This is required to sync the theme after hydration without a visible flash.
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setThemeState(preferredTheme);
		document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
		document.documentElement.style.colorScheme = preferredTheme;
	}, []);

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
		try {
			localStorage.setItem('theme', newTheme);
		} catch {
			// localStorage may be unavailable (e.g. private mode)
		}
		if (newTheme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		document.documentElement.style.colorScheme = newTheme;
	};

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		const meta = document.querySelector('meta[name="theme-color"]');
		meta?.setAttribute('content', theme === 'dark' ? '#0d1416' : '#f4f7f7');
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
			{children}
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
