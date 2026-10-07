'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { navigationData } from '@/data/navigation';
import { useSectionNavigation } from './SectionNavigationProvider';

export function SectionProgressRail() {
	const { activeHref, setActiveHref } = useSectionNavigation();
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		let frame = 0;
		const updateVisibility = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const hero = document.getElementById('system');
				const threshold = Math.max(300, hero?.offsetHeight ?? window.innerHeight);
				setShowBackToTop(window.scrollY > threshold);
			});
		};

		updateVisibility();
		window.addEventListener('scroll', updateVisibility, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', updateVisibility);
		};
	}, []);

	const returnToTop = () => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const brandLink = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href="#system"]'))
			.find((link) => link.getClientRects().length > 0);
		brandLink?.focus({ preventScroll: true });
		window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
	};

	const rightOffset = 'max(1.5rem, env(safe-area-inset-right), calc((100vw - 75rem) / 4))';

	return (
		<>
			{/* Progress Rail (vertical middle) */}
			<nav
				aria-label="Section progress"
				className="fixed top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-start select-none w-9"
				style={{ right: rightOffset }}
			>
				{/* Stack of horizontal section bars */}
				<ol className="flex flex-col gap-3 w-full">
					{navigationData.map((item) => {
						const isActive = activeHref === item.href;

						return (
							<li key={item.href}>
								<a
									href={item.href}
									aria-label={item.label}
									aria-current={isActive ? 'location' : undefined}
									title={item.label}
									onClick={() => setActiveHref(item.href)}
									className="group relative flex items-center h-6 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3b82f6] rounded-xs"
								>
									{/* Bar column (fixed 36px width ensures the left edge never shifts) */}
									<div className="relative flex items-center w-9 h-full">
										<span
											aria-hidden="true"
											className={`shrink-0 h-[2px] rounded-[1px] transition-all duration-150 ease-out motion-reduce:transition-none ${
												isActive
													? 'w-9 bg-[#1d4ed8] dark:bg-[#3b82f6]'
													: 'w-5 bg-[var(--border-subtle)] dark:bg-[#3c5456] group-hover:w-9 group-hover:bg-[#1d4ed8] dark:group-hover:bg-[#60a5fa] group-focus-visible:w-9 group-focus-visible:bg-[#1d4ed8] dark:group-focus-visible:bg-[#60a5fa]'
											}`}
										/>
									</div>

									{/* Section Label (anchored to the right of the 36px column) */}
									<span
										aria-hidden="true"
										className={`absolute left-full ml-2.5 top-1/2 -translate-y-1/2 font-mono-code text-[11px] uppercase tracking-[0.08em] transition-all duration-150 ease-out motion-reduce:transition-none whitespace-nowrap pointer-events-none ${
											isActive
												? 'opacity-100 translate-x-0 text-[#1d4ed8] dark:text-[#60a5fa] font-medium'
												: 'opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 text-[var(--text-secondary)] dark:text-[#b4c5c5] group-hover:text-[#1d4ed8] dark:group-hover:text-[#60a5fa]'
										}`}
									>
										{item.label}
									</span>
								</a>
							</li>
						);
					})}
				</ol>
			</nav>

			{/* Back to Top control (fixed near bottom of viewport, sharing same horizontal axis) */}
			<div
				className={`fixed bottom-6 xl:bottom-8 z-30 hidden xl:block transition-all duration-200 motion-reduce:transition-none w-9 ${
					showBackToTop
						? 'opacity-100 translate-y-0 pointer-events-auto'
						: 'opacity-0 translate-y-1 pointer-events-none'
				}`}
				style={{ right: rightOffset }}
			>
				<button
					type="button"
					aria-label="Back to top"
					title="Back to top"
					onClick={returnToTop}
					className="group/top relative flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3b82f6] rounded-[4px]"
				>
					<span className="grid h-9 w-9 place-items-center rounded-[4px] border border-[var(--border-color)] dark:border-[#212836] bg-[var(--bg-card)] dark:bg-[#10141d] text-[#1d4ed8] dark:text-[#60a5fa] transition-colors duration-150 hover:border-[#3b82f6]/60 hover:bg-[#3b82f6]/10">
						<ArrowUp aria-hidden="true" className="h-4 w-4" />
					</span>
					<span className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 font-mono-code text-[11px] uppercase tracking-[0.08em] opacity-0 -translate-x-1.5 transition-all duration-150 group-hover/top:opacity-100 group-hover/top:translate-x-0 group-focus-visible/top:opacity-100 group-focus-visible/top:translate-x-0 whitespace-nowrap text-[var(--text-secondary)] dark:text-[#b4c5c5] pointer-events-none">
						TOP
					</span>
				</button>
			</div>
		</>
	);
}
