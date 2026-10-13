import React from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
	return (
		<main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] px-5 py-24 transition-colors duration-300 sm:px-8">
			{/* Coordinate grid background pattern */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05] transition-opacity duration-300"
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
					backgroundSize: '28px 28px',
				}}
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[460px] rounded-full bg-[#3b82f6]/[0.06] blur-[120px] dark:bg-[#3b82f6]/[0.08]"
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-xl w-full">
				<div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm overflow-hidden">
					{/* Console Title Bar */}
					<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] bg-[var(--bg-soft)] px-5 py-3">
						<div className="flex items-center gap-2">
							<span className="h-2 w-2 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" aria-hidden="true" />
							<span className="font-mono-code text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
								error_log: 404_not_found.manifest
							</span>
						</div>
						<div className="font-mono-code text-[10px] uppercase tracking-[0.14em] text-[#b91c1c] dark:text-[#fca5a5] font-semibold">
							STATUS: EXCEPTION
						</div>
					</div>

					{/* Main Console Body */}
					<div className="p-6 sm:p-8 space-y-6">
						<div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-[0.2em] text-[#2563eb] dark:text-[#60a5fa]">
							<Terminal className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" aria-hidden="true" />
							<span>{'// ROUTING.EXCEPTION'}</span>
						</div>

						<div>
							<h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-tight text-[var(--text-primary)]">
								Pipeline Endpoint Not Found
							</h1>
							<p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
								The requested URL or resource does not exist in the route manifest. The schema query returned zero records.
							</p>
						</div>

						{/* Diagnostic Specification Table */}
						<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-4 font-mono-code text-xs space-y-2">
							<div className="flex items-center justify-between pb-1.5 border-b border-[var(--border-color)]/70 text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
								<span className="flex items-center gap-1.5">
									<AlertCircle className="h-3 w-3 text-[#2563eb] dark:text-[#3b82f6]" aria-hidden="true" />
									DIAGNOSTIC_TRACE
								</span>
								<span className="text-[#1d4ed8] dark:text-[#60a5fa] font-semibold">HTTP 404</span>
							</div>

							<div className="space-y-1.5 text-[11px]">
								<div className="flex items-center justify-between gap-3">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em]">ERROR_CODE:</span>
									<span className="text-[var(--text-primary)] font-medium">ERR_ROUTE_NOT_FOUND</span>
								</div>
								<div className="flex items-center justify-between gap-3 pt-1 border-t border-[var(--border-color)]/60">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em]">STATUS:</span>
									<span className="text-[#b91c1c] dark:text-[#fca5a5]">RESOURCE_UNAVAILABLE</span>
								</div>
								<div className="flex items-center justify-between gap-3 pt-1 border-t border-[var(--border-color)]/60">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em]">RECOMMENDED_ACTION:</span>
									<span className="text-[var(--text-secondary)]">REDIRECT_TO_ROOT</span>
								</div>
							</div>
						</div>

						{/* Actions */}
						<div className="pt-2 flex flex-wrap items-center gap-3">
							<Link
								href="/"
								className="inline-flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] px-5 py-2.5 font-mono-code text-xs uppercase tracking-[0.1em] font-semibold text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6] sm:w-auto"
							>
								<ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
								<span>Return to Pipeline</span>
							</Link>

							<Link
								href="/#projects"
								className="inline-flex w-full items-center justify-center gap-2 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-5 py-2.5 font-mono-code text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-secondary)] transition-colors duration-300 hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white dark:hover:border-[#3b82f6]/60 dark:hover:bg-[var(--bg-card-hover)] dark:hover:text-white focus-visible:outline-2 focus-visible:outline-[#3b82f6] sm:w-auto"
							>
								<span>View Projects</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
