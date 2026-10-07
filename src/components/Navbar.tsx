'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { navigationData } from '@/data/navigation';
import { profileData } from '@/data/profile';
import { ArrowDownToLine, ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { useSectionNavigation } from './SectionNavigationProvider';

const sections = navigationData.map((item, index) => ({
	...item,
	number: String(index + 1).padStart(2, '0'),
	label: item.label[0] + item.label.slice(1).toLowerCase(),
}));

const cvPath = '/cv/Mahmoud_Ehab_CV_2026.pdf';

export function Navbar() {
	const { theme, toggleTheme } = useTheme();
	const [sectionsOpen, setSectionsOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { activeHref, setActiveHref } = useSectionNavigation();
	const dropdownRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const mobileTriggerRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!sectionsOpen && !mobileMenuOpen) return;
		const handlePointerDown = (event: PointerEvent) => {
			const target = event.target as Node;
			if (sectionsOpen && !dropdownRef.current?.contains(target)) setSectionsOpen(false);
			if (mobileMenuOpen && !mobileMenuRef.current?.contains(target)) setMobileMenuOpen(false);
		};
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				if (mobileMenuOpen) {
					setMobileMenuOpen(false);
					mobileTriggerRef.current?.focus();
				} else {
					setSectionsOpen(false);
					triggerRef.current?.focus();
				}
			}
		};
		document.addEventListener('pointerdown', handlePointerDown);
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('pointerdown', handlePointerDown);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [sectionsOpen, mobileMenuOpen]);

	const dark = theme === 'dark';
	const headerSurface = dark ? 'bg-[#0b0e14]/95' : 'bg-[var(--bg-primary)]/95';
	const borderTone = dark ? 'border-[#212836]' : 'border-[var(--border-color)]';
	const raisedSurface = dark ? 'bg-[#131824]' : 'bg-[var(--bg-card)]';
	const hoverSurface = dark ? 'hover:bg-[#161b26]' : 'hover:bg-[var(--bg-card-hover)]';
	const primaryText = dark ? 'text-[#e6e9ef]' : 'text-[var(--text-primary)]';
	const secondaryText = dark ? 'text-[#8a93a6]' : 'text-[var(--text-secondary)]';
	const activeSection = sections.find((section) => section.href === activeHref);
	return (
		<header className={`sticky top-0 z-40 w-full border-b ${borderTone} ${headerSurface} transition-colors duration-200`}>
			<div className="relative mx-auto hidden h-16 max-w-[1200px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-5 md:grid lg:px-8">
				<a
					href="#system"
					className={`justify-self-start rounded-sm font-semibold text-lg tracking-[-0.035em] ${primaryText} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3b82f6]`}
					style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
				>
					{profileData.firstName}.Ehab
				</a>

				<div ref={dropdownRef} className="relative col-start-2 row-start-1 justify-self-center">
					<button
						ref={triggerRef}
						type="button"
						onClick={() => setSectionsOpen((open) => !open)}
						aria-expanded={sectionsOpen}
						aria-controls="portfolio-sections"
						className={`flex h-9 items-center gap-2 border ${borderTone} ${raisedSurface} px-3 font-mono-code text-xs uppercase tracking-[0.08em] ${secondaryText} transition-colors duration-150 hover:border-[#3b82f6]/60 hover:text-[#60a5fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]`}
					>
						{activeSection ? (
							<>
								<span className="tabular-nums text-[#60a5fa]">{activeSection.number}</span>
								<span className={primaryText}>{activeSection.label}</span>
							</>
						) : <span>Sections</span>}
						<ChevronDown aria-hidden="true" className={`h-3.5 w-3.5 transition-transform duration-200 ${sectionsOpen ? 'rotate-180' : ''}`} />
					</button>
					<nav
						id="portfolio-sections"
						aria-label="Portfolio sections"
						className={`absolute left-1/2 top-full z-50 mt-2 w-[min(260px,calc(100vw-40px))] -translate-x-1/2 origin-top border ${borderTone} ${dark ? 'bg-[#10141d]' : 'bg-[var(--bg-secondary)]'} p-1.5 transition-[opacity,transform,visibility] duration-150 ${sectionsOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
					>
						{sections.map((section) => {
							const selected = activeHref === section.href;
							return (
								<a
									key={section.href}
									href={section.href}
									onClick={() => {
										setActiveHref(section.href);
										setSectionsOpen(false);
									}}
									aria-current={selected ? 'location' : undefined}
									className={`grid grid-cols-[2.5rem_1fr] items-center gap-2 border-l-2 px-2.5 py-2 font-mono-code text-xs transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#3b82f6] ${selected ? 'border-l-[#3b82f6] bg-[#3b82f6]/10 text-[#60a5fa]' : `border-l-transparent ${secondaryText} ${hoverSurface} hover:text-[#60a5fa]`}`}
								>
									<span className={`tabular-nums text-[0.625rem] ${selected ? 'text-[#60a5fa]' : dark ? 'text-[#5b6472]' : 'text-[var(--text-muted)]'}`}>{section.number}</span>
									<span>{section.label}</span>
								</a>
							);
						})}
					</nav>
				</div>

				<div className="col-start-3 row-start-1 flex items-center justify-self-end gap-2.5">
					<button
						type="button"
						onClick={toggleTheme}
						className={`grid h-9 w-9 place-items-center border ${borderTone} ${raisedSurface} ${secondaryText} transition-colors duration-150 ${hoverSurface} hover:text-[#60a5fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]`}
						aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
						title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
					>
						{theme === 'dark' ? <Sun aria-hidden="true" className="h-4 w-4" /> : <Moon aria-hidden="true" className="h-4 w-4" />}
					</button>
					<a
						href={cvPath}
						download
						className="inline-flex h-9 items-center justify-center gap-2 border border-[#3b82f6] bg-[#3b82f6] px-3 font-mono-code text-xs font-semibold uppercase tracking-[0.06em] text-white transition-colors duration-150 hover:border-[#60a5fa] hover:bg-[#60a5fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60a5fa]"
					>
						<ArrowDownToLine aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
						<span>Download CV</span>
					</a>
				</div>
			</div>

			<div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:hidden">
				<a
					href="#system"
					className={`shrink-0 rounded-sm font-semibold text-lg tracking-[-0.035em] ${primaryText} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3b82f6]`}
					style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
				>
					{profileData.firstName}.Ehab
				</a>
				<div ref={mobileMenuRef} className="relative flex shrink-0 items-center gap-2">
					<button
						ref={mobileTriggerRef}
						type="button"
						onClick={() => setMobileMenuOpen((open) => !open)}
						aria-expanded={mobileMenuOpen}
						aria-controls="mobile-portfolio-menu"
						aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
						className={`grid h-9 w-9 place-items-center rounded-sm border ${borderTone} ${raisedSurface} ${secondaryText} transition-colors duration-150 ${hoverSurface} hover:text-[#60a5fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]`}
					>
						{mobileMenuOpen ? <X aria-hidden="true" className="h-4 w-4" /> : <Menu aria-hidden="true" className="h-4 w-4" />}
					</button>
					<button
						type="button"
						onClick={toggleTheme}
						className={`grid h-9 w-9 place-items-center rounded-sm border ${borderTone} ${raisedSurface} ${secondaryText} transition-colors duration-150 ${hoverSurface} hover:text-[#60a5fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]`}
						aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
						title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
					>
						{theme === 'dark' ? <Sun aria-hidden="true" className="h-4 w-4" /> : <Moon aria-hidden="true" className="h-4 w-4" />}
					</button>
					<nav
						id="mobile-portfolio-menu"
						aria-label="Mobile navigation"
						className={`absolute right-0 top-[calc(100%+0.5rem)] z-50 max-h-[calc(100dvh-5.5rem)] w-[min(20rem,calc(100vw-2.5rem))] origin-top-right overflow-y-auto overscroll-contain rounded-sm border ${borderTone} ${dark ? 'bg-[#10141d]' : 'bg-[var(--bg-secondary)]'} p-2 transition-[opacity,transform,visibility] duration-150 ${mobileMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
					>
						{sections.map((section) => {
							const selected = activeHref === section.href;
							return (
								<a
									key={section.href}
									href={section.href}
									onClick={() => {
										setActiveHref(section.href);
										setMobileMenuOpen(false);
									}}
									aria-current={selected ? 'location' : undefined}
									className={`grid min-h-11 grid-cols-[2.5rem_1fr] items-center gap-3 rounded-sm border-l-2 px-3 font-mono-code text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#3b82f6] ${selected ? 'border-l-[#3b82f6] bg-[#3b82f6]/10 text-[#60a5fa]' : `border-l-transparent ${secondaryText} ${hoverSurface} hover:text-[#60a5fa]`}`}
								>
									<span className={`tabular-nums text-[0.6875rem] ${selected ? 'text-[#60a5fa]' : dark ? 'text-[#5b6472]' : 'text-[var(--text-muted)]'}`}>{section.number}</span>
									<span>{section.label}</span>
								</a>
							);
						})}
						<div className={`mt-2 border-t ${borderTone} px-1.5 pt-2`}>
							<a
								href={cvPath}
								download
								onClick={() => setMobileMenuOpen(false)}
								className="flex h-10 items-center justify-center gap-2 border border-[#3b82f6] bg-[#3b82f6] px-3 font-mono-code text-xs font-semibold uppercase tracking-[0.06em] text-white transition-colors duration-150 hover:border-[#60a5fa] hover:bg-[#60a5fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60a5fa]"
							>
								<ArrowDownToLine aria-hidden="true" className="h-3.5 w-3.5" />
								Download CV
							</a>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
