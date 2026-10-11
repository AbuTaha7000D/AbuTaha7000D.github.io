'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '@/data/profile';
import { navigationData } from '@/data/navigation';

export function Footer() {
	const [showBackToTop, setShowBackToTop] = useState(false);

	const linkClass = "inline-flex min-h-9 items-center font-mono-code text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)] transition-colors duration-300 hover:text-[#1d4ed8] dark:hover:text-[#60a5fa] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3b82f6]";
	const floatingButtonClass = "fixed z-50 grid h-10 w-10 place-items-center rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-card)] text-[#1d4ed8] dark:text-[#60a5fa] transition-colors duration-300 motion-reduce:transition-none hover:border-[#3b82f6]/60 hover:text-[#1d4ed8] dark:hover:text-[#60a5fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]";

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

	return (
		<>
			<footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] transition-colors duration-300">
				<div className="mx-auto max-w-[1200px] px-5 py-7 sm:py-8 lg:px-8">
					<div className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:gap-8">
						<div>
							<p className="font-display text-base font-semibold tracking-[-0.025em] text-[var(--text-primary)]">
								{profileData.name}
							</p>
							<p className="mt-1 text-sm text-[var(--text-muted)]">Data Analyst &amp; Data Engineer</p>
						</div>

						<nav className="hidden md:block" aria-label="Footer navigation">
							<ul className="flex flex-wrap gap-x-5 gap-y-1 md:justify-end">
								{navigationData.map((item) => (
									<li key={item.href}>
										<a className={linkClass} href={item.href}>
											{item.label[0] + item.label.slice(1).toLowerCase()}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>

					<div className="mt-6 flex flex-col gap-3 border-t border-[var(--border-color)] pt-4 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
						<p className={`font-mono-code text-[10px] leading-relaxed text-[var(--text-muted)] ${showBackToTop ? 'pr-14' : ''} sm:pr-0`}>
							&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
			{showBackToTop && (
				<button
					type="button"
					aria-label="Back to top"
					title="Back to top"
					onClick={returnToTop}
					className={`${floatingButtonClass} bottom-[max(1rem,env(safe-area-inset-bottom))] xl:hidden`}
					style={{ right: 'max(1rem, env(safe-area-inset-right))' }}
				>
					<ArrowUp aria-hidden="true" className="h-4 w-4" />
				</button>
			)}
		</>
	);
}
