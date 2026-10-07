'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { profileData } from '@/data/profile';
import {
	Cpu,
	GraduationCap,
	MapPin,
	ShieldCheck,
	Sparkles,
} from 'lucide-react';

export function AboutSqlQuery() {
	const { theme } = useTheme();
	const dark = theme === 'dark';

	// Cohesive color tokens adhering to the Kube Labs-inspired design language with intentional dark/light contrast
	const surfaceCard = dark ? 'bg-[#10141d]' : 'bg-[var(--bg-card)]';
	const surfaceRaised = dark ? 'bg-[#131824]' : 'bg-[var(--bg-soft)]';
	const surfaceSubtle = dark ? 'bg-[#0e121a]' : 'bg-[var(--bg-primary)]';
	const borderMain = dark ? 'border-[#212836]' : 'border-[var(--border-color)]';
	const borderDivider = dark ? 'border-[#212836]/60' : 'border-[var(--border-color)]';
	const borderSubtle = dark ? 'border-[#212836]/40' : 'border-[var(--border-color)]/70';
	const textHeading = dark ? 'text-white' : 'text-[var(--text-primary)]';
	const textPrimary = dark ? 'text-[#e6e9ef]' : 'text-[var(--text-primary)]';
	const textSecondary = dark ? 'text-[#c7cdd9]' : 'text-[var(--text-secondary)]';
	const textMuted = dark ? 'text-[#8a93a6]' : 'text-[var(--text-muted)]';
	const accentBlue = dark ? 'text-[#60a5fa]' : 'text-[#1d4ed8]';
	const iconBlue = dark ? 'text-[#3b82f6]' : 'text-[#2563eb]';
	const overlayBadge = dark
		? 'bg-[#0b0e14]/85 text-white/90 border-white/10'
		: 'bg-white/90 text-[var(--text-primary)] border-black/10';

	return (
		<section
			id="about"
			className={`relative overflow-hidden border-b ${borderMain} ${dark ? 'bg-[#0b0e14]' : 'bg-[var(--bg-primary)]'
				} pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28 transition-colors duration-200`}
		>
			{/* Architectural background: disciplined coordinate grid */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
					backgroundSize: '28px 28px',
				}}
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
				{/* Section Header */}
				<div className={`mb-12 border-b ${borderMain} pb-8 sm:mb-14 lg:mb-16`}>
					<div className="flex flex-wrap items-center justify-between gap-3 mb-3">
						<div className={`flex items-center gap-2 font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.2em] ${accentBlue}`}>
							<span>{'// ABOUT.ME'}</span>
						</div>
						<div className={`hidden sm:flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] ${textMuted}`}>
							<span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
							<span>SYSTEM ARCHITECTURE &amp; ANALYTICAL RIGOR</span>
						</div>
					</div>

					<h2
						className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.1] ${textHeading}`}
						style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
					>
						Engineering Rigor Applied to Data
					</h2>

					<p className={`mt-3.5 max-w-2xl text-[1rem] sm:text-[1.0625rem] leading-relaxed ${textMuted}`}>
						How a Bachelor’s foundation in Computer &amp; Control Engineering translates into
						dependable ETL pipelines, structured relational schemas, and analytical precision.
					</p>
				</div>

				{/* Asymmetric 2-Column Composition: Portrait Console + Narrative Architecture */}
				<div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[400px_minmax(0,1fr)] gap-10 lg:gap-12 xl:gap-16 items-start">
					{/* LEFT COLUMN: The Portrait & Technical Identity Console */}
					<div className="flex flex-col min-w-0 max-w-[440px] mx-auto lg:max-w-none w-full">
						<div
							className={`rounded-[6px] border ${borderMain} ${surfaceCard} shadow-sm overflow-hidden`}
						>
							{/* Console Title Bar */}
							<div
								className={`flex items-center justify-between gap-3 border-b ${borderMain} ${surfaceRaised} px-4 py-2.5`}
							>
								<div className="flex items-center gap-2 min-w-0">
									<div className="flex items-center gap-1.5">
										<span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
										<span className="h-2 w-2 rounded-full bg-[#2e3748]" />
										<span className="h-2 w-2 rounded-full bg-[#2e3748]" />
									</div>
									<span className={`font-mono-code text-[11px] uppercase tracking-[0.16em] ${textSecondary} truncate`}>
										engineer_id: mahmoud_ehab
									</span>
								</div>
								<div className={`shrink-0 font-mono-code text-[10px] uppercase tracking-[0.14em] ${accentBlue}`}>
									{'B.Sc. // 2025'}
								</div>
							</div>

							{/* Portrait Frame with deliberate technical aspect ratio & intentional crop */}
							<div className={`relative aspect-[4/4.6] w-full overflow-hidden ${surfaceSubtle} border-b ${borderMain}`}>
								<Image
									src="/images/profile.png"
									alt="Portrait of Mahmoud Ehab, Data Analyst & Data Engineer"
									fill
									sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) 440px, (max-width: 1279px) 380px, 400px"
									className="object-cover object-[center_16%] transition-transform duration-300 hover:scale-[1.015]"
								/>
								<div
									className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 dark:opacity-80"
									aria-hidden="true"
								/>
								<div className={`absolute bottom-2.5 left-3 font-mono-code text-[10px] uppercase tracking-[0.16em] px-2 py-0.5 rounded-[2px] backdrop-blur-xs border ${overlayBadge}`}>
									Mahmoud Ehab Hussein
								</div>
							</div>

							{/* Structured Engineering Spec Sheet (attached under portrait) */}
							<div className="p-4 space-y-2.5 font-mono-code text-[11px]">
								<div className={`flex items-center justify-between pb-1 border-b ${borderDivider} text-[10px] uppercase tracking-[0.16em] ${textMuted}`}>
									<span>SPECIFICATION</span>
									<span>PROFILE_RECORD</span>
								</div>

								<div className="flex items-start justify-between gap-3">
									<span className={`${textMuted} uppercase tracking-[0.12em] shrink-0 flex items-center gap-1.5`}>
										<Cpu className={`h-3 w-3 ${iconBlue}`} />
										ROLE
									</span>
									<span className={`text-right ${textPrimary} font-medium`}>
										Data Analyst &amp; Data Engineer
									</span>
								</div>

								<div className="flex items-start justify-between gap-3">
									<span className={`${textMuted} uppercase tracking-[0.12em] shrink-0 flex items-center gap-1.5`}>
										<GraduationCap className={`h-3 w-3 ${iconBlue}`} />
										DEGREE
									</span>
									<span className={`text-right ${textSecondary}`}>
										B.Sc. Computer &amp; Control Eng
									</span>
								</div>

								<div className="flex items-start justify-between gap-3">
									<span className={`${textMuted} uppercase tracking-[0.12em] shrink-0 flex items-center gap-1.5`}>
										<MapPin className={`h-3 w-3 ${iconBlue}`} />
										LOCATION
									</span>
									<span className={`text-right ${textSecondary}`}>
										{profileData.location}
									</span>
								</div>

								<div className="flex items-start justify-between gap-3">
									<span className={`${textMuted} uppercase tracking-[0.12em] shrink-0 flex items-center gap-1.5`}>
										<ShieldCheck className={`h-3 w-3 ${iconBlue}`} />
										PRINCIPLE
									</span>
									<span className={`text-right font-medium ${accentBlue}`}>
										Data Integrity &amp; Automation
									</span>
								</div>
							</div>

							{/* Frame Footer status */}
							<div
								className={`border-t ${borderMain} ${surfaceRaised} px-4 py-2 flex items-center justify-between font-mono-code text-[10px] uppercase tracking-[0.14em] ${textMuted}`}
							>
								<span>PORT SAID UNIVERSITY</span>
								<span className={`${dark ? 'text-emerald-400' : 'text-[#13704f]'} font-medium`}>CLASS OF 2025</span>
							</div>
						</div>
					</div>

					{/* RIGHT COLUMN: Narrative & Engineering Architecture */}
					<div className="flex flex-col min-w-0">
						{/* Lead Philosophy Statement (Space Grotesk) */}
						<h3
							className={`text-xl sm:text-2xl font-semibold tracking-[-0.02em] leading-snug ${textHeading}`}
							style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
						>
							I treat data not merely as numbers to chart, but as software systems to architect,
							validate, and maintain.
						</h3>

						{/* Human Narrative Prose */}
						<div className={`mt-5 space-y-4 text-[0.9375rem] sm:text-[1rem] leading-relaxed ${textMuted}`}>
							<p>
								I am an early-career{' '}
								<strong className={`font-semibold ${textPrimary}`}>
									Data Analyst &amp; Data Engineer
								</strong>{' '}
								graduated from Port Said University with a Bachelor of Electrical Engineering in{' '}
								<strong className={`font-semibold ${textPrimary}`}>
									Computer &amp; Control Engineering (2025)
								</strong>
								. My daily technical practice focuses on writing Python and SQL to query, clean, and transform
								structured datasets, construct dependable ETL/ELT pipelines, and automate operational workflows.
							</p>
							<p>
								Rather than treating data analysis solely as reporting, I approach it with the rigor of software
								engineering: prioritizing data integrity, modular script architecture, and reproducible pipelines.
								My academic background instilled strong habits in algorithms, computer systems, and structured
								problem-solving, while hands-on work with Linux environments and relational databases enables me to bridge
								the gap between raw data sources and actionable analytics.
							</p>
						</div>

						{/* Structured Technical Specifications Table */}
						<div className={`mt-8 rounded-[4px] border ${borderMain} ${surfaceRaised} p-4 font-mono-code text-xs`}>
							<div className={`flex items-center justify-between pb-2 mb-2 border-b ${borderDivider} text-[10px] uppercase tracking-[0.16em] ${textMuted}`}>
								<span className="flex items-center gap-1.5">
									<Sparkles className={`h-3 w-3 ${iconBlue}`} />
									SYSTEM_SPECIFICATION: technical_competencies
								</span>
								<span className={accentBlue}>FACTUAL_DATA</span>
							</div>

							<div className="space-y-2 text-[11px]">
								<div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-3 py-1">
									<span className={`${textMuted} uppercase tracking-[0.12em]`}>PRIMARY STACK:</span>
									<span className={textPrimary}>Python (Pandas, NumPy) · SQL (PostgreSQL, SQLite)</span>
								</div>
								<div className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-3 py-1 border-t ${borderSubtle}`}>
									<span className={`${textMuted} uppercase tracking-[0.12em]`}>CORE DISCIPLINES:</span>
									<span className={textSecondary}>ETL/ELT Workflows · Relational Schema Design · EDA &amp; Cleaning</span>
								</div>
								<div className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-3 py-1 border-t ${borderSubtle}`}>
									<span className={`${textMuted} uppercase tracking-[0.12em]`}>SYSTEMS &amp; TOOLING:</span>
									<span className={textSecondary}>Linux Shell Scripting · Docker Fundamentals · Git Version Control</span>
								</div>
								<div className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-3 py-1 border-t ${borderSubtle}`}>
									<span className={`${textMuted} uppercase tracking-[0.12em]`}>ACADEMIC FOCUS:</span>
									<span className={textSecondary}>Computer &amp; Control Engineering (Algorithms, Automata &amp; Control)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
