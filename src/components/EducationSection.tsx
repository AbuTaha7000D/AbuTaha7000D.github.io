'use client';

import { certificationData, educationData } from '@/data/experience';

export function EducationSection() {
	return (
		<section
			id="education"
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
				<header className="mb-12 border-b border-[var(--border-color)] pb-8 sm:mb-14 lg:mb-16">
					<div className="mb-3 flex flex-wrap items-center justify-between gap-3">
						<p className="font-mono-code text-[11px] uppercase tracking-[0.2em] sm:text-xs text-[#2563eb] dark:text-[#60a5fa]">
							{'// EDUCATION.CREDENTIALS'}
						</p>
						<p className="hidden items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] sm:flex text-[var(--text-muted)]">
							<span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" aria-hidden="true" />
							Academic foundation · Professional development
						</p>
					</div>
					<h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] text-[var(--text-primary)]">
						Education &amp; Certifications
					</h2>
					<p className="mt-3.5 max-w-2xl text-[1rem] leading-relaxed sm:text-[1.0625rem] text-[var(--text-muted)]">
						Academic foundation and continued technical development supporting my work in data.
					</p>
				</header>

				<div className="space-y-8 sm:space-y-10">
					<section
						aria-labelledby="education-record-title"
						className="overflow-hidden rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm"
					>
						<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] bg-[var(--bg-soft)] px-4 py-3 sm:px-5">
							<div className="flex items-center gap-3">
								<span className="font-mono-code text-xs font-semibold text-[#2563eb] dark:text-[#60a5fa]">[01]</span>
								<h3
									id="education-record-title"
									className="font-mono-code text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]"
								>
									ACADEMIC FOUNDATION
								</h3>
							</div>
							<span className="hidden font-mono-code text-[10px] uppercase tracking-[0.14em] sm:inline text-[var(--text-muted)]">
								EDUCATION RECORD
							</span>
						</div>

						<div className="grid grid-cols-1 items-start gap-8 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.45fr)_minmax(250px,0.75fr)] lg:gap-12 lg:p-9">
							<div className="min-w-0">
								{educationData.map((education) => (
									<article key={education.id}>
										<div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono-code text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
											<span>Degree</span>
											<span className="text-[var(--text-muted)]">/</span>
											<span className="tabular-nums">{education.period}</span>
										</div>
										<h4 className="mt-3 font-display text-2xl font-semibold leading-snug tracking-[-0.025em] sm:text-3xl text-[var(--text-primary)]">
											{education.degree}
										</h4>
										<p className="mt-2 font-mono-code text-xs uppercase tracking-[0.1em] sm:text-[0.8125rem] text-[#2563eb] dark:text-[#60a5fa]">
											{education.major}
										</p>
										<div className="mt-5 border-t border-[var(--border-color)]/70 pt-4">
											<p className="text-sm font-medium leading-relaxed sm:text-base text-[var(--text-primary)]">
												{education.institution}
											</p>
											<p className="mt-1 font-mono-code text-xs leading-relaxed text-[var(--text-muted)]">
												{education.location}
											</p>
										</div>
										{education.details && education.details.length > 0 && (
											<ul className="mt-5 space-y-3">
												{education.details.map((detail) => (
													<li key={detail} className="border-l border-[#3b82f6]/40 pl-3 text-sm leading-relaxed sm:text-[0.9375rem] text-[var(--text-muted)]">
														{detail}
													</li>
												))}
											</ul>
										)}
									</article>
								))}
							</div>

							{educationData.some((education) => education.project) && (
								<div className="min-w-0 rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-4 sm:p-5">
									<p className="border-b border-[var(--border-color)]/70 pb-3 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
										GRADUATION PROJECT
									</p>
									{educationData.filter((education) => education.project).map((education) => (
										<div key={education.id} className="pt-4">
											<p className="font-display text-lg font-semibold leading-snug text-[var(--text-primary)]">
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
						className="overflow-hidden rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm"
					>
						<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] bg-[var(--bg-soft)] px-4 py-3 sm:px-5">
							<div className="flex items-center gap-3">
								<span className="font-mono-code text-xs font-semibold text-[#2563eb] dark:text-[#60a5fa]">[02]</span>
								<h3
									id="certification-registry-title"
									className="font-mono-code text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]"
								>
									CERTIFICATIONS &amp; TRAINING
								</h3>
							</div>
							<span className="font-mono-code text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
								{String(certificationData.length).padStart(2, '0')} RECORDS
							</span>
						</div>

						<ol className="divide-y divide-[var(--border-color)]/70">
							{certificationData.map((certification, index) => (
								<li
									key={certification.id}
									className="grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] gap-3 p-4 transition-colors duration-300 hover:bg-black/[0.025] sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-4 sm:px-5 sm:py-5 dark:hover:bg-white/[0.025]"
								>
									<span className="pt-0.5 font-mono-code text-xs font-semibold tabular-nums text-[#2563eb] dark:text-[#60a5fa]">
										{String(index + 1).padStart(2, '0')}
									</span>
									<div className="min-w-0">
										<h4 className="font-display text-base font-semibold leading-snug sm:text-lg text-[var(--text-primary)]">
											{certification.name}
										</h4>
										<div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-code text-xs text-[var(--text-muted)]">
											<span>{certification.issuer}</span>
											<span className="h-1 w-1 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" aria-hidden="true" />
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
											className="col-start-2 mt-1 inline-flex min-h-8 items-center gap-1 font-mono-code text-xs uppercase tracking-[0.08em] text-[#2563eb] dark:text-[#60a5fa] transition-colors duration-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6] sm:col-start-auto sm:mt-0"
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
