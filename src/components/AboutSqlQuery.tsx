'use client';

import React from 'react';
import Image from 'next/image';
import { profileData } from '@/data/profile';
import {
	Cpu,
	GraduationCap,
	MapPin,
	ShieldCheck,
	Sparkles,
} from 'lucide-react';

export function AboutSqlQuery() {
	return (
		<section
			id="about"
			className="relative overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-primary)] pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28 transition-colors duration-300"
		>
			{/* Architectural background: disciplined coordinate grid */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04] transition-opacity duration-300"
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
					backgroundSize: '28px 28px',
				}}
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
				{/* Section Header */}
				<div className="mb-12 border-b border-[var(--border-color)] pb-8 sm:mb-14 lg:mb-16">
					<div className="flex flex-wrap items-center justify-between gap-3 mb-3">
						<div className="flex items-center gap-2 font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#2563eb] dark:text-[#60a5fa]">
							<span>{'// ABOUT.ME'}</span>
						</div>
						<div className="hidden sm:flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
							<span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" />
							<span>SYSTEM ARCHITECTURE &amp; ANALYTICAL RIGOR</span>
						</div>
					</div>

					<h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.1] text-[var(--text-primary)]">
						Engineering Rigor Applied to Data
					</h2>

					<p className="mt-3.5 max-w-2xl text-[1rem] sm:text-[1.0625rem] leading-relaxed text-[var(--text-muted)]">
						How a Bachelor’s foundation in Computer &amp; Control Engineering translates into
						dependable ETL pipelines, structured relational schemas, and analytical precision.
					</p>
				</div>

				{/* Asymmetric 2-Column Composition: Portrait Console + Narrative Architecture */}
				<div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[400px_minmax(0,1fr)] gap-10 lg:gap-12 xl:gap-16 items-start">
					{/* LEFT COLUMN: The Portrait & Technical Identity Console */}
					<div className="flex flex-col min-w-0 max-w-[440px] mx-auto lg:max-w-none w-full">
						<div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm overflow-hidden">
							{/* Console Title Bar */}
							<div className="flex items-center justify-between gap-3 border-b border-[var(--border-color)] bg-[var(--bg-soft)] px-4 py-2.5">
								<div className="flex items-center gap-2 min-w-0">
									<div className="flex items-center gap-1.5">
										<span className="h-2 w-2 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" />
										<span className="h-2 w-2 rounded-full bg-[var(--border-subtle)]" />
										<span className="h-2 w-2 rounded-full bg-[var(--border-subtle)]" />
									</div>
									<span className="font-mono-code text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)] truncate">
										engineer_id: mahmoud_ehab
									</span>
								</div>
								<div className="shrink-0 font-mono-code text-[10px] uppercase tracking-[0.14em] text-[#1d4ed8] dark:text-[#60a5fa] font-semibold">
									{'B.Sc. // 2025'}
								</div>
							</div>

							{/* Portrait Frame with deliberate technical aspect ratio & intentional crop */}
							<div className="relative aspect-[4/4.6] w-full overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
								<Image
									src="/images/profile.png"
									alt="Portrait of Mahmoud Ehab, Data Analyst & Data Engineer"
									fill
									sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) 440px, (max-width: 1279px) 380px, 400px"
									className="object-cover object-[center_16%] transition-transform duration-300 hover:scale-[1.015]"
								/>
								<div
									className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 dark:opacity-80 transition-opacity duration-300"
									aria-hidden="true"
								/>
								<div className="absolute bottom-2.5 left-3 font-mono-code text-[10px] uppercase tracking-[0.16em] px-2 py-0.5 rounded-[2px] backdrop-blur-xs border border-white/20 bg-black/70 text-white font-medium">
									Mahmoud Ehab Hussein
								</div>
							</div>

							{/* Structured Engineering Spec Sheet (attached under portrait) */}
							<div className="p-4 space-y-2.5 font-mono-code text-[11px]">
								<div className="flex items-center justify-between pb-1 border-b border-[var(--border-color)] text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
									<span>SPECIFICATION</span>
									<span>PROFILE_RECORD</span>
								</div>

								<div className="flex items-start justify-between gap-3">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em] shrink-0 flex items-center gap-1.5">
										<Cpu className="h-3 w-3 text-[#2563eb] dark:text-[#3b82f6]" />
										ROLE
									</span>
									<span className="text-right text-[var(--text-primary)] font-medium">
										Data Analyst &amp; Data Engineer
									</span>
								</div>

								<div className="flex items-start justify-between gap-3">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em] shrink-0 flex items-center gap-1.5">
										<GraduationCap className="h-3 w-3 text-[#2563eb] dark:text-[#3b82f6]" />
										DEGREE
									</span>
									<span className="text-right text-[var(--text-secondary)]">
										B.Sc. Computer &amp; Control Eng
									</span>
								</div>

								<div className="flex items-start justify-between gap-3">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em] shrink-0 flex items-center gap-1.5">
										<MapPin className="h-3 w-3 text-[#2563eb] dark:text-[#3b82f6]" />
										LOCATION
									</span>
									<span className="text-right text-[var(--text-secondary)]">
										{profileData.location}
									</span>
								</div>

								<div className="flex items-start justify-between gap-3">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em] shrink-0 flex items-center gap-1.5">
										<ShieldCheck className="h-3 w-3 text-[#2563eb] dark:text-[#3b82f6]" />
										PRINCIPLE
									</span>
									<span className="text-right font-medium text-[#1d4ed8] dark:text-[#60a5fa]">
										Data Integrity &amp; Automation
									</span>
								</div>
							</div>

							{/* Frame Footer status */}
							<div className="border-t border-[var(--border-color)] bg-[var(--bg-soft)] px-4 py-2 flex items-center justify-between font-mono-code text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
								<span>PORT SAID UNIVERSITY</span>
								<span className="text-[#15803d] dark:text-emerald-400 font-semibold">CLASS OF 2025</span>
							</div>
						</div>
					</div>

					{/* RIGHT COLUMN: Narrative & Engineering Architecture */}
					<div className="flex flex-col min-w-0">
						{/* Lead Philosophy Statement (font-display) */}
						<h3 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] leading-snug text-[var(--text-primary)]">
							I treat data not merely as numbers to chart, but as software systems to architect,
							validate, and maintain.
						</h3>

						{/* Human Narrative Prose */}
						<div className="mt-5 space-y-4 text-[0.9375rem] sm:text-[1rem] leading-relaxed text-[var(--text-muted)]">
							<p>
								I am an early-career{' '}
								<strong className="font-semibold text-[var(--text-primary)]">
									Data Analyst &amp; Data Engineer
								</strong>{' '}
								graduated from Port Said University with a Bachelor of Electrical Engineering in{' '}
								<strong className="font-semibold text-[var(--text-primary)]">
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
						<div className="mt-8 rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-4 font-mono-code text-xs">
							<div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border-color)] text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
								<span className="flex items-center gap-1.5">
									<Sparkles className="h-3 w-3 text-[#2563eb] dark:text-[#3b82f6]" />
									SYSTEM_SPECIFICATION: technical_competencies
								</span>
								<span className="text-[#1d4ed8] dark:text-[#60a5fa] font-semibold">FACTUAL_DATA</span>
							</div>

							<div className="space-y-2 text-[11px]">
								<div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-3 py-1">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em]">PRIMARY STACK:</span>
									<span className="text-[var(--text-secondary)]">Python (Pandas, NumPy) · SQL (PostgreSQL, SQLite)</span>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-3 py-1 border-t border-[var(--border-color)]/60">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em]">CORE DISCIPLINES:</span>
									<span className="text-[var(--text-secondary)]">ETL/ELT Workflows · Relational Schema Design · EDA &amp; Cleaning</span>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-3 py-1 border-t border-[var(--border-color)]/60">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em]">SYSTEMS &amp; TOOLING:</span>
									<span className="text-[var(--text-secondary)]">Linux Shell Scripting · Docker Fundamentals · Git Version Control</span>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-3 py-1 border-t border-[var(--border-color)]/60">
									<span className="text-[var(--text-muted)] uppercase tracking-[0.12em]">ACADEMIC FOCUS:</span>
									<span className="text-[var(--text-secondary)]">Computer &amp; Control Engineering (Algorithms, Automata &amp; Control)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
