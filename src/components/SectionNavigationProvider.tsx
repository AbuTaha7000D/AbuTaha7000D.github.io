'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { navigationData } from '@/data/navigation';

const SectionNavigationContext = createContext<{
	activeHref: string;
	setActiveHref: (href: string) => void;
} | null>(null);

export function SectionNavigationProvider({ children }: { children: React.ReactNode }) {
	const [activeHref, setActiveHref] = useState('');

	useEffect(() => {
		const sectionElements = navigationData
			.map((section) => ({ href: section.href, element: document.getElementById(section.href.slice(1)) }))
			.filter((section): section is { href: string; element: HTMLElement } => section.element !== null);

		const syncFromHash = () => {
			const section = navigationData.find((item) => item.href === window.location.hash);
			if (section) setActiveHref(section.href);
			else if (!window.location.hash || window.location.hash === '#system') setActiveHref('');
		};
		syncFromHash();
		window.addEventListener('hashchange', syncFromHash);

		if (!sectionElements.length || typeof IntersectionObserver === 'undefined') {
			return () => window.removeEventListener('hashchange', syncFromHash);
		}

		const updateActiveSection = () => {
			const activationY = window.innerHeight * 0.34;
			const active = sectionElements.find(({ element }) => {
				const rect = element.getBoundingClientRect();
				return rect.top <= activationY && rect.bottom > activationY;
			});
			if (active) setActiveHref(active.href);
			else if (activationY < sectionElements[0].element.getBoundingClientRect().top) setActiveHref('');
			else if (activationY > sectionElements[sectionElements.length - 1].element.getBoundingClientRect().bottom) {
				setActiveHref(sectionElements[sectionElements.length - 1].href);
			}
		};

		let observer: IntersectionObserver | undefined;
		const observeAtViewportHeight = () => {
			observer?.disconnect();
			const activationY = Math.round(window.innerHeight * 0.34);
			const bandBottom = Math.round(window.innerHeight * 0.65);
			observer = new IntersectionObserver(updateActiveSection, {
				rootMargin: `-${activationY}px 0px -${bandBottom}px 0px`,
				threshold: 0,
			});
			sectionElements.forEach(({ element }) => observer?.observe(element));
		};

		observeAtViewportHeight();
		window.addEventListener('resize', observeAtViewportHeight);
		return () => {
			observer?.disconnect();
			window.removeEventListener('resize', observeAtViewportHeight);
			window.removeEventListener('hashchange', syncFromHash);
		};
	}, []);

	return (
		<SectionNavigationContext.Provider value={{ activeHref, setActiveHref }}>
			{children}
		</SectionNavigationContext.Provider>
	);
}

export function useSectionNavigation() {
	const context = useContext(SectionNavigationContext);
	if (!context) throw new Error('useSectionNavigation must be used within SectionNavigationProvider');
	return context;
}
