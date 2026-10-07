'use client';

import { leadershipData, volunteerData } from '@/data/experience';
import { useTheme } from '@/components/ThemeProvider';

export function LeadershipSection() {
	const { theme } = useTheme();
	const dark = theme === 'dark';
	const mainAchievement = leadershipData[0];

	const sectionBg = dark ? 'bg-[#0b0e14]' : 'bg-[var(--bg-primary)]';
	const surface = dark ? 'bg-[#10141d]' : 'bg-[var(--bg-card)]';
	const border = dark ? 'border-[#212836]' : 'border-[var(--border-color)]';
	const divider = dark ? 'border-[#212836]/70' : 'border-[var(--border-color)]';
	const heading = dark ? 'text-white' : 'text-[var(--text-primary)]';
	const primary = dark ? 'text-[#e6e9ef]' : 'text-[var(--text-primary)]';
	const secondary = dark ? 'text-[#c7cdd9]' : 'text-[var(--text-secondary)]';
	const muted = dark ? 'text-[#8a93a6]' : 'text-[var(--text-muted)]';
	const accent = dark ? 'text-[#60a5fa]' : 'text-[#1d4ed8]';

	return (
		<section
			id="leadership"
			className={`relative overflow-hidden border-b ${border} ${sectionBg} py-20 transition-colors duration-200 sm:py-24 lg:py-28`}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
				style={{
					backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
					backgroundSize: '28px 28px',
				}}
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
				<header className={`mb-10 border-b ${border} pb-7 sm:mb-12 sm:pb-8 lg:mb-14`}>
					<div className="mb-3 flex flex-wrap items-center justify-between gap-3">
						<p className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-code text-[11px] uppercase tracking-[0.2em] sm:text-xs ${accent}`}>
							<span>{'// LEADERSHIP'}</span>
						</p>
						<p className={`hidden items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] sm:flex ${muted}`}>
							<span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" aria-hidden="true" />
							Initiative · coordination · service
						</p>
					</div>
					<h2
						className={`text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] ${heading}`}
						style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
					>
						Leadership &amp; Community
					</h2>
					<p className={`mt-3.5 max-w-2xl text-base leading-relaxed ${muted}`}>
						Student-branch relaunch, board service, and technical event support—experience built around helping people and shared work move forward.
					</p>
				</header>

				{mainAchievement && (
					<article aria-labelledby="leadership-feature-title" className={`overflow-hidden rounded-[6px] border ${border} ${surface}`}>
						<div className={`grid min-w-0 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]`}>
							<div className={`min-w-0 border-b ${border} p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8`}>
								<p className={`mb-5 font-mono-code text-[10px] uppercase tracking-[0.16em] ${accent}`}>
									Featured leadership record <span className={muted}>/ 01</span>
								</p>
								<h3
									id="leadership-feature-title"
									className={`text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl ${heading}`}
									style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
								>
									{mainAchievement.title}
								</h3>
								<p className={`mt-3 text-sm font-medium leading-relaxed sm:text-base ${primary}`}>
									{mainAchievement.role}
								</p>
								<p className={`mt-1.5 text-sm leading-relaxed ${secondary}`}>
									{mainAchievement.organization}
								</p>
								<div className={`mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t ${divider} pt-4 font-mono-code text-xs ${muted}`}>
									<span className="uppercase tracking-[0.1em]">Period</span>
									<span className={accent}>2023 — 2025</span>
								</div>
								<p className={`mt-5 text-sm leading-relaxed sm:text-[0.9375rem] ${muted}`}>
									{mainAchievement.description}
								</p>
							</div>

							<div className="min-w-0 p-5 sm:p-7 lg:p-8">
								<div className={`mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b ${divider} pb-3`}>
									<h4 className={`font-mono-code text-[11px] uppercase tracking-[0.16em] ${secondary}`}>
										Responsibilities
									</h4>
									<span className={`font-mono-code text-[10px] uppercase tracking-[0.12em] ${muted}`}>
										{String(mainAchievement.highlights.length).padStart(2, '0')} contributions
									</span>
								</div>
								<ol className={`divide-y ${dark ? 'divide-[#212836]/60' : 'divide-[var(--border-color)]'}`}>
									{mainAchievement.highlights.map((item, index) => {
										const [label, ...rest] = item.split(': ');
										return (
											<li key={item} className="grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] gap-3 py-4 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4">
												<span className={`pt-0.5 font-mono-code text-xs tabular-nums ${accent}`}>
													{String(index + 1).padStart(2, '0')}
												</span>
												<div className="min-w-0">
													<p className={`text-sm font-semibold leading-snug ${primary}`} style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>
														{label}
													</p>
													<p className={`mt-1.5 text-sm leading-relaxed ${muted}`}>
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
						<div className={`mb-1 flex flex-wrap items-end justify-between gap-3 border-b ${border} pb-3`}>
							<div>
								<p className={`font-mono-code text-[10px] uppercase tracking-[0.16em] ${accent}`}>Community participation</p>
								<h3 id="community-service-title" className={`mt-1 text-xl font-semibold tracking-[-0.02em] sm:text-2xl ${heading}`} style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>
									Technical event volunteering
								</h3>
							</div>
							<span className={`font-mono-code text-[10px] uppercase tracking-[0.12em] ${muted}`}>
								{String(volunteerData.length).padStart(2, '0')} records
							</span>
						</div>
						<ol className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
							{volunteerData.map((role, index) => (
								<li key={role.id} className={`grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] gap-3 border-b ${divider} py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4 sm:py-6`}>
									<span className={`pt-0.5 font-mono-code text-xs tabular-nums ${accent}`}>
										{String(index + 1).padStart(2, '0')}
									</span>
									<div className="min-w-0">
										<div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
											<h4 className={`text-base font-semibold leading-snug ${primary}`} style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>
												{role.organization}
											</h4>
											<span className={`font-mono-code text-[11px] tabular-nums ${muted}`}>{role.period}</span>
										</div>
										<p className={`mt-1 font-mono-code text-[11px] uppercase tracking-[0.08em] ${accent}`}>{role.role}</p>
										<p className={`mt-3 text-sm leading-relaxed ${muted}`}>{role.summary}</p>
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
