'use client';

import { leadershipData, volunteerData } from '@/data/experience';

export function LeadershipSection() {
	const mainAchievement = leadershipData[0];

	return (
		<section
			id="leadership"
			className="relative overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-20 transition-colors duration-300 sm:py-24 lg:py-28"
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04] transition-opacity duration-300"
				style={{
					backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
					backgroundSize: '28px 28px',
				}}
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
				<header className="mb-10 border-b border-[var(--border-color)] pb-7 sm:mb-12 sm:pb-8 lg:mb-14">
					<div className="mb-3 flex flex-wrap items-center justify-between gap-3">
						<p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-code text-[11px] uppercase tracking-[0.2em] sm:text-xs text-[#2563eb] dark:text-[#60a5fa]">
							<span>{'// LEADERSHIP'}</span>
						</p>
						<p className="hidden items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] sm:flex text-[var(--text-muted)]">
							<span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" aria-hidden="true" />
							Initiative · coordination · service
						</p>
					</div>
					<h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] text-[var(--text-primary)]">
						Leadership &amp; Community
					</h2>
					<p className="mt-3.5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
						Student-branch relaunch, board service, and technical event support—experience built around helping people and shared work move forward.
					</p>
				</header>

				{mainAchievement && (
					<article aria-labelledby="leadership-feature-title" className="overflow-hidden rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-card)]">
						<div className="grid min-w-0 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
							<div className="min-w-0 border-b border-[var(--border-color)] p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
								<p className="mb-5 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#2563eb] dark:text-[#60a5fa]">
									Featured leadership record <span className="text-[var(--text-muted)]">/ 01</span>
								</p>
								<h3
									id="leadership-feature-title"
									className="font-display text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl text-[var(--text-primary)]"
								>
									{mainAchievement.title}
								</h3>
								<p className="mt-3 text-sm font-medium leading-relaxed sm:text-base text-[var(--text-primary)]">
									{mainAchievement.role}
								</p>
								<p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
									{mainAchievement.organization}
								</p>
								<div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-[var(--border-color)]/70 pt-4 font-mono-code text-xs text-[var(--text-muted)]">
									<span className="uppercase tracking-[0.1em]">Period</span>
									<span className="text-[#2563eb] dark:text-[#60a5fa]">2023 — 2025</span>
								</div>
								<p className="mt-5 text-sm leading-relaxed sm:text-[0.9375rem] text-[var(--text-muted)]">
									{mainAchievement.description}
								</p>
							</div>

							<div className="min-w-0 p-5 sm:p-7 lg:p-8">
								<div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-[var(--border-color)]/70 pb-3">
									<h4 className="font-mono-code text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
										Responsibilities
									</h4>
									<span className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
										{String(mainAchievement.highlights.length).padStart(2, '0')} contributions
									</span>
								</div>
								<ol className="divide-y divide-[var(--border-color)]/70">
									{mainAchievement.highlights.map((item, index) => {
										const [label, ...rest] = item.split(': ');
										return (
											<li key={item} className="grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] gap-3 py-4 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4">
												<span className="pt-0.5 font-mono-code text-xs tabular-nums text-[#2563eb] dark:text-[#60a5fa]">
													{String(index + 1).padStart(2, '0')}
												</span>
												<div className="min-w-0">
													<p className="font-display text-sm font-semibold leading-snug text-[var(--text-primary)]">
														{label}
													</p>
													<p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
														{rest.join(': ')}
													</p>
												</div>
											</li>
										);
									})}
								</ol>
							</div>
						</div>
					</article>
				)}

				{volunteerData.length > 0 && (
					<section aria-labelledby="community-service-title" className="mt-10 sm:mt-12">
						<div className="mb-1 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--border-color)] pb-3">
							<div>
								<p className="font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#2563eb] dark:text-[#60a5fa]">Community participation</p>
								<h3 id="community-service-title" className="font-display mt-1 text-xl font-semibold tracking-[-0.02em] sm:text-2xl text-[var(--text-primary)]">
									Technical event volunteering
								</h3>
							</div>
							<span className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
								{String(volunteerData.length).padStart(2, '0')} records
							</span>
						</div>
						<ol className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
							{volunteerData.map((role, index) => (
								<li key={role.id} className="grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] gap-3 border-b border-[var(--border-color)]/70 py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4 sm:py-6">
									<span className="pt-0.5 font-mono-code text-xs tabular-nums text-[#2563eb] dark:text-[#60a5fa]">
										{String(index + 1).padStart(2, '0')}
									</span>
									<div className="min-w-0">
										<div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
											<h4 className="font-display text-base font-semibold leading-snug text-[var(--text-primary)]">
												{role.organization}
											</h4>
											<span className="font-mono-code text-[11px] tabular-nums text-[var(--text-muted)]">{role.period}</span>
										</div>
										<p className="mt-1 font-mono-code text-[11px] uppercase tracking-[0.08em] text-[#2563eb] dark:text-[#60a5fa]">{role.role}</p>
										<p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{role.summary}</p>
									</div>
								</li>
							))}
						</ol>
					</section>
				)}
			</div>
		</section>
	);
}
