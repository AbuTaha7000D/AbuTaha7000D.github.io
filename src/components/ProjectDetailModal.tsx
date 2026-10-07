'use client';

import React, { useEffect, useRef } from 'react';
import { Project } from '@/types';
import { X, ExternalLink, CheckCircle2, Code2, AlertCircle, Wrench, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
	project: Project | null;
	onClose: () => void;
}

const FOCUSABLE_SELECTOR = [
	'a[href]',
	'button:not([disabled])',
	'textarea',
	'input',
	'select',
	'[tabindex]:not([tabindex="-1"])',
].join(',');

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
	const panelRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!project) return;

		const previouslyFocused = document.activeElement as HTMLElement | null;
		const previousOverflow = document.body.style.overflow;

		const getFocusable = () => {
			const panel = panelRef.current;
			if (!panel) return [];
			return Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
				(el) =>
					el.offsetParent !== null ||
					el === document.activeElement ||
					el.getClientRects().length > 0
			);
		};

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				onClose();
				return;
			}

			if (event.key === 'Tab') {
				const focusable = getFocusable();
				if (focusable.length === 0) return;
				const first = focusable[0];
				const last = focusable[focusable.length - 1];
				const active = document.activeElement;

				if (event.shiftKey && (active === first || active === document.body)) {
					event.preventDefault();
					last.focus();
				} else if (!event.shiftKey && active === last) {
					event.preventDefault();
					first.focus();
				}
			}
		};

		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', onKeyDown);
		closeButtonRef.current?.focus();

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			document.body.style.overflow = previousOverflow;
			previouslyFocused?.focus();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [project]);

	if (!project) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-950/80 backdrop-blur-sm"
			role="dialog"
			aria-modal="true"
			aria-label={project.title}
			onClick={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}
		>
			<div ref={panelRef} className="relative w-full max-w-2xl bg-card border border-line rounded-lg shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">

				{/* Modal Header */}
				<div className="p-6 border-b border-line bg-surface flex items-start justify-between">
					<div className="space-y-2">
						<div className="flex items-center gap-2 font-mono-code text-xs">
							<span className="px-2.5 py-0.5 rounded bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20 font-bold">
								{project.subtitle.toUpperCase()}
							</span>
						</div>
						<h3 className="text-2xl font-bold text-[var(--text-primary)]">{project.title}</h3>
						<p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
					</div>

					<button
						ref={closeButtonRef}
						onClick={onClose}
						className="p-2 rounded bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)] transition-all ml-4"
						aria-label="Close project details"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Modal Body */}
				<div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-sm">

					{/* Problem */}
					<div className="space-y-2">
						<h4 className="font-mono-code text-xs font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
							<AlertCircle className="w-4 h-4" />
							THE PROBLEM
						</h4>
						<p className="text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-primary)] p-3 rounded border border-[var(--border-color)] text-xs">
							{project.problem}
						</p>
					</div>

					{/* What I Built */}
					<div className="space-y-2">
						<h4 className="font-mono-code text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-wider flex items-center gap-1.5">
							<Code2 className="w-4 h-4" />
							WHAT I BUILT
						</h4>
						<p className="text-[var(--text-primary)] leading-relaxed bg-[var(--bg-primary)] p-3 rounded border border-[var(--border-color)] text-xs">
							{project.whatIBuilt}
						</p>
					</div>

					{/* Technologies */}
					<div className="space-y-2">
						<h4 className="font-mono-code text-xs font-bold text-[var(--accent-violet)] uppercase tracking-wider flex items-center gap-1.5">
							<Wrench className="w-4 h-4" />
							TECHNOLOGIES USED
						</h4>
						<div className="flex flex-wrap gap-1.5">
							{project.technologies.map((tech) => (
								<span
									key={tech}
									className="px-2.5 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] font-mono-code text-xs font-semibold text-[var(--text-primary)]"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* Relevant Concepts */}
					<div className="space-y-2">
						<h4 className="font-mono-code text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-wider flex items-center gap-1.5">
							<Layers className="w-4 h-4" />
							RELEVANT CONCEPTS & PRACTICES
						</h4>
						<div className="flex flex-wrap gap-1.5">
							{project.relevantConcepts.map((concept) => (
								<span
									key={concept}
									className="px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-color)] font-mono-code text-[11px] text-[var(--text-muted)]"
								>
									{concept}
								</span>
							))}
						</div>
					</div>

					{/* Key Highlights */}
					<div className="space-y-3 pt-2">
						<h4 className="font-mono-code text-xs font-bold text-[var(--accent-emerald)] uppercase tracking-wider flex items-center gap-2">
							<CheckCircle2 className="w-4 h-4" />
							KEY HIGHLIGHTS & ARCHITECTURE
						</h4>
						<ul className="space-y-2 text-xs">
							{project.highlights.map((item, i) => (
								<li key={i} className="flex items-start gap-2 text-[var(--text-secondary)]">
									<span className="text-[var(--accent-emerald)] font-bold">✓</span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>

				</div>

				{/* Modal Footer */}
				<div className="p-6 border-t border-line bg-surface flex items-center justify-end">
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 rounded bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-mono-code text-xs font-semibold flex items-center gap-2 hover:opacity-90"
						>
							<Code2 className="w-4 h-4" />
							<span>VIEW ON GITHUB</span>
							<ExternalLink className="w-3.5 h-3.5" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

