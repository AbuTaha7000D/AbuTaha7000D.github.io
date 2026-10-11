'use client';

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const subscribeToThemePreference = (callback: () => void) => {
	if (typeof window === 'undefined') return () => {};
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	window.addEventListener('storage', callback);
	mediaQuery.addEventListener('change', callback);
	return () => {
		window.removeEventListener('storage', callback);
		mediaQuery.removeEventListener('change', callback);
	};
};

const getPreferredTheme = (): Theme => {
	if (typeof window === 'undefined') return 'dark';
	try {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme;
	} catch {
		// localStorage may be unavailable (e.g. private mode)
	}
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getServerTheme = (): Theme => 'dark';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const preferredTheme = useSyncExternalStore(subscribeToThemePreference, getPreferredTheme, getServerTheme);
	const [themeOverride, setThemeState] = useState<Theme | null>(null);
	const theme = themeOverride ?? preferredTheme;

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
		document.documentElement.style.colorScheme = theme;
	}, [theme]);

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
		try {
			localStorage.setItem('theme', newTheme);
		} catch {
			// localStorage may be unavailable (e.g. private mode)
		}
	};

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		const meta = document.querySelector('meta[name="theme-color"]');
		meta?.setAttribute('content', theme === 'dark' ? '#0b0e14' : '#f8fafc');
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme: theme ?? 'dark', toggleTheme, setTheme }}>
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
