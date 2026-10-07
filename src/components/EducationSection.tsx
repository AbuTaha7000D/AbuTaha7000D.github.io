'use client';

import { certificationData, educationData } from '@/data/experience';
import { useTheme } from '@/components/ThemeProvider';

export function EducationSection() {
	const { theme } = useTheme();
	const dark = theme === 'dark';

	const sectionBg = dark ? 'bg-[#0b0e14]' : 'bg-[var(--bg-primary)]';
	const surfaceCard = dark ? 'bg-[#10141d]' : 'bg-[var(--bg-card)]';
	const surfaceRaised = dark ? 'bg-[#131824]' : 'bg-[var(--bg-soft)]';
	const borderMain = dark ? 'border-[#212836]' : 'border-[var(--border-color)]';
	const borderDivider = dark ? 'border-[#212836]/60' : 'border-[var(--border-color)]';
	const textHeading = dark ? 'text-white' : 'text-[var(--text-primary)]';
	const textPrimary = dark ? 'text-[#e6e9ef]' : 'text-[var(--text-primary)]';
	const textSecondary = dark ? 'text-[#c7cdd9]' : 'text-[var(--text-secondary)]';
	const textMuted = dark ? 'text-[#8a93a6]' : 'text-[var(--text-muted)]';
	const accentBlue = dark ? 'text-[#60a5fa]' : 'text-[#1d4ed8]';
	const iconBlueBg = dark ? 'bg-[#3b82f6]' : 'bg-[#2563eb]';

	return (
		<section
			id="education"
			className={`relative overflow-hidden border-b ${borderMain} ${sectionBg} py-20 transition-colors duration-200 sm:py-24 lg:py-28`}
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
				<header className={`mb-12 border-b ${borderMain} pb-8 sm:mb-14 lg:mb-16`}>
					<div className="mb-3 flex flex-wrap items-center justify-between gap-3">
						<p className={`font-mono-code text-[11px] uppercase tracking-[0.2em] sm:text-xs ${accentBlue}`}>
							{'// EDUCATION.CREDENTIALS'}
						</p>
						<p className={`hidden items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] sm:flex ${textMuted}`}>
							<span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" aria-hidden="true" />
							Academic foundation · Professional development
						</p>
					</div>
					<h2
						className={`text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] ${textHeading}`}
						style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
					>
						Education &amp; Certifications
					</h2>
					<p className={`mt-3.5 max-w-2xl text-[1rem] leading-relaxed sm:text-[1.0625rem] ${textMuted}`}>
						Academic foundation and continued technical development supporting my work in data.
					</p>
				</header>

				<div className="space-y-8 sm:space-y-10">
					<section
						aria-labelledby="education-record-title"
						className={`overflow-hidden rounded-[6px] border ${borderMain} ${surfaceCard} shadow-sm`}
					>
						<div className={`flex flex-wrap items-center justify-between gap-3 border-b ${borderMain} ${surfaceRaised} px-4 py-3 sm:px-5`}>
							<div className="flex items-center gap-3">
								<span className={`font-mono-code text-xs font-semibold ${accentBlue}`}>[01]</span>
								<h3
									id="education-record-title"
									className={`font-mono-code text-[11px] uppercase tracking-[0.16em] ${textSecondary}`}
								>
									ACADEMIC FOUNDATION
								</h3>
							</div>
							<span className={`hidden font-mono-code text-[10px] uppercase tracking-[0.14em] sm:inline ${textMuted}`}>
								EDUCATION RECORD
							</span>
						</div>

						<div className="grid grid-cols-1 items-start gap-8 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.45fr)_minmax(250px,0.75fr)] lg:gap-12 lg:p-9">
							<div className="min-w-0">
								{educationData.map((education) => (
									<article key={education.id}>
										<div className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono-code text-[11px] uppercase tracking-[0.14em] ${textMuted}`}>
											<span>Degree</span>
											<span className={textMuted}>/</span>
											<span className="tabular-nums">{education.period}</span>
										</div>
										<h4
											className={`mt-3 text-2xl font-semibold leading-snug tracking-[-0.025em] sm:text-3xl ${textHeading}`}
											style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
										>
											{education.degree}
										</h4>
										<p className={`mt-2 font-mono-code text-xs uppercase tracking-[0.1em] sm:text-[0.8125rem] ${accentBlue}`}>
											{education.major}
										</p>
										<div className={`mt-5 border-t ${borderDivider} pt-4`}>
											<p className={`text-sm font-medium leading-relaxed sm:text-base ${textPrimary}`}>
												{education.institution}
											</p>
											<p className={`mt-1 font-mono-code text-xs leading-relaxed ${textMuted}`}>
												{education.location}
											</p>
										</div>
										{education.details && education.details.length > 0 && (
											<ul className="mt-5 space-y-3">
												{education.details.map((detail) => (
													<li key={detail} className={`border-l border-[#3b82f6]/40 pl-3 text-sm leading-relaxed sm:text-[0.9375rem] ${textMuted}`}>
														{detail}
													</li>
												))}
											</ul>
										)}
									</article>
								))}
							</div>

							{educationData.some((education) => education.project) && (
								<div className={`min-w-0 rounded-[4px] border ${borderMain} ${surfaceRaised} p-4 sm:p-5`}>
									<p className={`border-b ${borderDivider} pb-3 font-mono-code text-[10px] uppercase tracking-[0.16em] ${textMuted}`}>
										GRADUATION PROJECT
									</p>
									{educationData.filter((education) => education.project).map((education) => (
										<div key={education.id} className="pt-4">
											<p
												className={`text-lg font-semibold leading-snug ${textPrimary}`}
												style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
											>
												{education.project}
											</p>
										</div>
									))}
								</div>
							)}
						</div>
					</section>

					<section
						aria-labelledby="certification-registry-title"
						className={`overflow-hidden rounded-[6px] border ${borderMain} ${surfaceCard} shadow-sm`}
					>
						<div className={`flex flex-wrap items-center justify-between gap-3 border-b ${borderMain} ${surfaceRaised} px-4 py-3 sm:px-5`}>
							<div className="flex items-center gap-3">
								<span className={`font-mono-code text-xs font-semibold ${accentBlue}`}>[02]</span>
								<h3
									id="certification-registry-title"
									className={`font-mono-code text-[11px] uppercase tracking-[0.16em] ${textSecondary}`}
								>
									CERTIFICATIONS &amp; TRAINING
								</h3>
							</div>
							<span className={`font-mono-code text-[10px] uppercase tracking-[0.14em] ${textMuted}`}>
								{String(certificationData.length).padStart(2, '0')} RECORDS
							</span>
						</div>

						<ol className={`divide-y ${dark ? 'divide-[#212836]/60' : 'divide-[var(--border-color)]'}`}>
							{certificationData.map((certification, index) => (
								<li
									key={certification.id}
									className="grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] gap-3 p-4 transition-colors duration-150 hover:bg-black/[0.025] sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-4 sm:px-5 sm:py-5 dark:hover:bg-white/[0.025]"
								>
									<span className={`pt-0.5 font-mono-code text-xs font-semibold tabular-nums ${accentBlue}`}>
										{String(index + 1).padStart(2, '0')}
									</span>
									<div className="min-w-0">
										<h4
											className={`text-base font-semibold leading-snug sm:text-lg ${textPrimary}`}
											style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
										>
											{certification.name}
										</h4>
										<div className={`mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-code text-xs ${textMuted}`}>
											<span>{certification.issuer}</span>
											<span className={`h-1 w-1 rounded-full ${iconBlueBg}`} aria-hidden="true" />
											<span className="uppercase tracking-[0.08em]">
												{certification.status === 'COMPLETED' ? 'Completed' : 'In progress'}
											</span>
										</div>
									</div>
									{certification.link ? (
										<a
											href={certification.link}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`View credential for ${certification.name} (opens in a new tab)`}
											className={`col-start-2 mt-1 inline-flex min-h-8 items-center gap-1 font-mono-code text-xs uppercase tracking-[0.08em] transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6] sm:col-start-auto sm:mt-0 ${accentBlue}`}
										>
											View credential <span aria-hidden="true">→</span>
										</a>
									) : null}
								</li>
							))}
						</ol>
					</section>
				</div>
			</div>
		</section>
	);
}
