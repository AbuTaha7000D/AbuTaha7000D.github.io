'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Adds `is-in` to the element when it enters the viewport (once).
 * Returns a ref to attach to the target element.
 */
function useReveal<T extends HTMLElement = HTMLDivElement>(
	options?: IntersectionObserverInit,
) {
	const ref = useRef<T | null>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === 'undefined') return;
		el.classList.add('is-ready');
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add('is-in');
						io.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options },
		);
		io.observe(el);
		return () => io.disconnect();
	}, [options]);
	return ref;
}

/**
 * Every section renders as a pipeline stage. The header carries:
 *  - a stage index (00 / 05) in mono
 *  - a stage tag (RAW, CONTEXT, PROCESS...) in mono
 *  - a section title in display type
 *  - a one-line schema-style description
 */
export function SectionHeader({
	index,
	stage,
	title,
	schema,
	description,
}: {
	index: string;
	stage: string;
	title: string;
	schema: string;
	description: string;
}) {
	const ref = useReveal<HTMLDivElement>();
	return (
		<div ref={ref} className="reveal">
			<div className="flex flex-wrap items-center gap-x-3 gap-y-2 mono text-[11px] uppercase tracking-[0.18em] text-faint">
				<span className="text-accent">{index}</span>
				<span className="h-px w-6 bg-[color:var(--border)]" />
				<span className="px-2 py-0.5 rounded border border-line text-muted">
					{stage}
				</span>
				<span className="text-faint">{'// '}{schema}</span>
			</div>
			<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
				{title}
			</h2>
			<p className="mt-3 max-w-2xl text-muted leading-relaxed">{description}</p>
		</div>
	);
}
