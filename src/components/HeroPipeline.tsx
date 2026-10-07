'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { profileData } from '@/data/profile';
import { projectsData } from '@/data/projects';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';
import {
	Database,
	Cpu,
	BarChart3,
	ArrowRight,
	Download,
	Mail,
	Workflow,
	GitBranch,
	CheckCircle2,
	Table,
	Binary,
} from 'lucide-react';

export function HeroPipeline() {
	const { theme } = useTheme();
	const dark = theme === 'dark';

	// Color tokens adhering to the Kube Labs-inspired dark blue-black design language
	const surfaceCard = dark ? 'bg-[#10141d]' : 'bg-[var(--bg-card)]';
	const surfaceRaised = dark ? 'bg-[#131824]' : 'bg-[var(--bg-soft)]';
	const borderMain = dark ? 'border-[#212836]' : 'border-[var(--border-color)]';
	const borderStrong = dark ? 'border-[#2e3748]' : 'border-[var(--border-subtle)]';
	const textHeading = dark ? 'text-white' : 'text-[var(--text-primary)]';
	const textPrimary = dark ? 'text-[#e6e9ef]' : 'text-[var(--text-primary)]';
	const textSecondary = dark ? 'text-[#c7cdd9]' : 'text-[var(--text-secondary)]';
	const textMuted = dark ? 'text-[#8a93a6]' : 'text-[var(--text-muted)]';
	const textFaint = dark ? 'text-[#7b8494]' : 'text-[var(--text-faint)]';
	const schemaSurface = dark ? 'bg-[#0b0e14]/70' : 'bg-[var(--bg-soft)]';
	const schemaLabel = dark ? 'text-[#8a93a6]' : 'text-[var(--text-secondary)]';
	const schemaIcon = dark ? 'text-[#3b82f6]' : 'text-[#2563eb]';
	const schemaAccent = dark ? 'text-[#60a5fa]' : 'text-[#1d4ed8]';
	const schemaMeta = dark ? 'text-[#8a93a6]' : 'text-[var(--text-secondary)]';
	const schemaSuccess = dark ? 'text-emerald-400/90' : 'text-[#13704f]';
	const schemaDivider = dark ? 'divide-[#212836]/60' : 'divide-[var(--border-color)]';

	return (
		<section
			id="system"
			className={`relative overflow-hidden border-b ${borderMain} ${dark ? 'bg-[#0b0e14]' : 'bg-[var(--bg-primary)]'
				} pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 transition-colors duration-200`}
		>
			{/* Architectural background: disciplined coordinate grid + controlled ambient glow */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
					backgroundSize: '28px 28px',
				}}
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute top-12 right-1/4 h-[380px] w-[500px] -translate-y-1/2 rounded-full bg-[#3b82f6]/[0.06] blur-[130px] dark:bg-[#3b82f6]/[0.08]"
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
				{/* Top metadata eyebrow bar */}
				<div className={`mb-8 flex flex-wrap items-center justify-between gap-3 border-b ${borderMain} pb-5`}>
					<div className="flex items-center gap-2.5 font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.18em]">
						<span className="inline-block h-2 w-2 rounded-full bg-[#3b82f6]" />
						<span className={textSecondary}>DATA ARCHITECTURE &amp; SYSTEMS</span>
						<span className={`hidden sm:inline ${textFaint}`}>/</span>
						<span className={`hidden sm:inline ${textMuted}`}>ETL · SCHEMAS · ANALYTICS</span>
					</div>

					<div className="flex items-center gap-3 font-mono-code text-[11px] uppercase tracking-[0.14em]">
						<span className={textMuted}>
							LOC: <span className={textSecondary}>{profileData.location}</span>
						</span>
						<span className={`hidden sm:inline ${textFaint}`}>/</span>
						<span className="flex items-center gap-1.5 rounded-[3px] border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] text-[#60a5fa]">
							<span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
							READY FOR INGESTION
						</span>
					</div>
				</div>

				{/* Two-column Hero Composition */}
				<div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-14 xl:gap-16 items-start">
					{/* LEFT COLUMN: Human identity & strong typographic hierarchy */}
					<div className="flex flex-col justify-center min-w-0">
						{/* Context label */}
						<div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-[0.2em] text-[#60a5fa] mb-3">
							<Binary className="h-3.5 w-3.5 text-[#3b82f6]" />
							<span>ENGINEERING PROFILE</span>
						</div>

						{/* Primary Name Display: Space Grotesk, large, dominant, confident */}
						<h1
							className={`text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold tracking-[-0.035em] leading-[1.04] ${textHeading}`}
							style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
						>
							Mahmoud Ehab
						</h1>

						{/* Professional Role Title */}
						<div className="mt-4 flex items-baseline flex-wrap gap-x-3 gap-y-1.5">
							<h2
								className="text-xl sm:text-2xl lg:text-[1.625rem] font-medium tracking-[-0.02em] text-[#60a5fa]"
								style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
							>
								Data Analyst &amp; Data Engineer
							</h2>
							<span className={`font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.14em] ${textMuted}`}>
								[ B.Sc. Comp &amp; Control Eng ]
							</span>
						</div>

						{/* Supporting Narrative Statement */}
						<p className={`mt-5 max-w-[540px] text-[0.9375rem] sm:text-[1rem] leading-relaxed ${textMuted}`}>
							Applying engineering rigor to data systems: designing dependable ETL pipelines,
							modeling clean relational schemas, and translating complex datasets into actionable
							business analytics with Python and SQL.
						</p>

						{/* Technical Capability Grid (Data Engineer / Analyst evidence) */}
						<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[560px]">
							<div
								className={`rounded-[4px] border ${borderMain} ${surfaceCard} p-3.5 transition-colors duration-150 hover:border-[#3b82f6]/50`}
							>
								<div className="flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#60a5fa]">
									<Workflow className="h-3.5 w-3.5 text-[#3b82f6]" />
									<span>ETL &amp; Pipelines</span>
								</div>
								<p className={`mt-1.5 font-mono-code text-[11px] leading-snug ${textMuted}`}>
									Data ingestion, schema validation, batch workflows &amp; automated transforms.
								</p>
							</div>

							<div
								className={`rounded-[4px] border ${borderMain} ${surfaceCard} p-3.5 transition-colors duration-150 hover:border-[#3b82f6]/50`}
							>
								<div className="flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#60a5fa]">
									<Database className="h-3.5 w-3.5 text-[#3b82f6]" />
									<span>SQL &amp; Relational DBs</span>
								</div>
								<p className={`mt-1.5 font-mono-code text-[11px] leading-snug ${textMuted}`}>
									PostgreSQL, SQLite, relational schemas, complex joins &amp; normalization.
								</p>
							</div>

							<div
								className={`rounded-[4px] border ${borderMain} ${surfaceCard} p-3.5 transition-colors duration-150 hover:border-[#3b82f6]/50`}
							>
								<div className="flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#60a5fa]">
									<BarChart3 className="h-3.5 w-3.5 text-[#3b82f6]" />
									<span>Analytics &amp; EDA</span>
								</div>
								<p className={`mt-1.5 font-mono-code text-[11px] leading-snug ${textMuted}`}>
									Data cleaning, exploratory analysis, distribution testing &amp; business insights.
								</p>
							</div>

							<div
								className={`rounded-[4px] border ${borderMain} ${surfaceCard} p-3.5 transition-colors duration-150 hover:border-[#3b82f6]/50`}
							>
								<div className="flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#60a5fa]">
									<Cpu className="h-3.5 w-3.5 text-[#3b82f6]" />
									<span>Python &amp; Automation</span>
								</div>
								<p className={`mt-1.5 font-mono-code text-[11px] leading-snug ${textMuted}`}>
									Pandas, NumPy, modular script architecture &amp; Linux CLI tooling.
								</p>
							</div>
						</div>

						{/* Primary Actions (CTAs) */}
						<div className="mt-8 flex flex-wrap items-center gap-3">
							<a
								href="#projects"
								className="group inline-flex items-center gap-2 rounded-[4px] bg-[#3b82f6] px-5 py-2.5 font-mono-code text-xs uppercase tracking-[0.1em] font-semibold text-white transition-all duration-150 hover:bg-[#2563eb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]"
							>
								<span>Explore Projects</span>
								<ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
							</a>

							<a
								href="/cv/Mahmoud_Ehab_CV_2026.pdf"
								download
								className={`inline-flex items-center gap-2 rounded-[4px] border ${borderStrong} ${surfaceCard} px-5 py-2.5 font-mono-code text-xs uppercase tracking-[0.1em] font-medium ${textSecondary} transition-colors duration-150 focus-visible:outline-2 ${dark ? 'hover:border-[#3b82f6]/60 hover:text-white focus-visible:outline-[#3b82f6]' : 'hover:border-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white focus-visible:outline-[#1d4ed8] active:border-[#1e40af] active:bg-[#1e40af] active:text-white'}`}
							>
								<Download className="h-3.5 w-3.5 text-[#8a93a6]" />
								<span>Download CV</span>
							</a>
						</div>

						{/* Verified technical profiles strip */}
						<div className={`mt-8 pt-6 border-t ${borderMain} flex flex-wrap items-center gap-4 sm:gap-6 font-mono-code text-xs ${textMuted}`}>
							<a
								href={profileData.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 transition-colors hover:text-[#60a5fa]"
							>
								<GitBranch className="h-3.5 w-3.5" />
								<span>GitHub</span>
							</a>
							<a
								href={profileData.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 transition-colors hover:text-[#60a5fa]"
							>
								<LinkedinIcon className="h-3.5 w-3.5" />
								<span>LinkedIn</span>
							</a>
							<a
								href={profileData.kaggle}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 transition-colors hover:text-[#60a5fa]"
							>
								<BarChart3 className="h-3.5 w-3.5" />
								<span>Kaggle</span>
							</a>
							<a
								href={`mailto:${profileData.email}`}
								className="inline-flex items-center gap-1.5 transition-colors hover:text-[#60a5fa]"
							>
								<Mail className="h-3.5 w-3.5" />
								<span>Email</span>
							</a>
						</div>
					</div>

					{/* RIGHT COLUMN: Authentic Data Architecture & Schema Console */}
					<div className="flex flex-col gap-4 min-w-0">
						{/* Master Data Pipeline Architecture Panel */}
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
										data_pipeline_architecture.dag
									</span>
								</div>
								<div className="shrink-0 font-mono-code text-[10px] uppercase tracking-[0.14em] text-[#60a5fa]">
									SPEC: RELATIONAL · PY/SQL
								</div>
							</div>

							{/* Section A: End-to-End Pipeline DAG Flow */}
							<div className="p-4 sm:p-5 space-y-3">
								<div className="flex items-center justify-between pb-1 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#8a93a6]">
									<span>PIPELINE EXECUTION FLOW</span>
									<span>STAGES 01 → 04</span>
								</div>

								{/* Stage 01: Extract */}
								<div
									className={`rounded-[4px] border ${borderMain} ${surfaceRaised} p-3 transition-colors hover:border-[#3b82f6]/40`}
								>
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<span className="font-mono-code text-[10px] font-semibold text-[#3b82f6]">01</span>
											<span className={`font-mono-code text-xs font-medium uppercase tracking-[0.1em] ${textPrimary}`}>
												INGESTION &amp; EXTRACTION
											</span>
										</div>
										<span className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-[#60a5fa] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded-[2px]">
											EXTRACT
										</span>
									</div>
									<div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-code text-[11px] text-[#8a93a6]">
										<span>REST APIs</span>
										<span className="text-[#2e3748]">·</span>
										<span>CSV / JSON Datasets</span>
										<span className="text-[#2e3748]">·</span>
										<span>Relational Ingest</span>
									</div>
								</div>

								{/* Connector 1 */}
								<div className="flex items-center justify-center -my-1">
									<div className="flex items-center gap-1.5 text-[#3b82f6] opacity-60">
										<div className="h-3 w-px bg-current" />
										<span className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[#8a93a6]">
											raw stream
										</span>
									</div>
								</div>

								{/* Stage 02: Transform */}
								<div
									className={`rounded-[4px] border ${borderMain} ${surfaceRaised} p-3 transition-colors hover:border-[#3b82f6]/40`}
								>
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<span className="font-mono-code text-[10px] font-semibold text-[#3b82f6]">02</span>
											<span className={`font-mono-code text-xs font-medium uppercase tracking-[0.1em] ${textPrimary}`}>
												TRANSFORMATION &amp; VALIDATION
											</span>
										</div>
										<span className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-[#60a5fa] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded-[2px]">
											TRANSFORM
										</span>
									</div>
									<div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-code text-[11px] text-[#8a93a6]">
										<span>Python (Pandas)</span>
										<span className="text-[#2e3748]">·</span>
										<span>Schema Validation</span>
										<span className="text-[#2e3748]">·</span>
										<span>Data Cleaning</span>
									</div>
								</div>

								{/* Connector 2 */}
								<div className="flex items-center justify-center -my-1">
									<div className="flex items-center gap-1.5 text-[#3b82f6] opacity-60">
										<div className="h-3 w-px bg-current" />
										<span className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[#8a93a6]">
											validated tuples
										</span>
									</div>
								</div>

								{/* Stage 03: Load / Storage */}
								<div
									className={`rounded-[4px] border ${borderMain} ${surfaceRaised} p-3 transition-colors hover:border-[#3b82f6]/40`}
								>
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<span className="font-mono-code text-[10px] font-semibold text-[#3b82f6]">03</span>
											<span className={`font-mono-code text-xs font-medium uppercase tracking-[0.1em] ${textPrimary}`}>
												RELATIONAL STORAGE &amp; SCHEMAS
											</span>
										</div>
										<span className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-[#60a5fa] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded-[2px]">
											LOAD
										</span>
									</div>
									<div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-code text-[11px] text-[#8a93a6]">
										<span>PostgreSQL</span>
										<span className="text-[#2e3748]">·</span>
										<span>SQLite</span>
										<span className="text-[#2e3748]">·</span>
										<span>Normalized Star Schemas</span>
									</div>
								</div>

								{/* Connector 3 */}
								<div className="flex items-center justify-center -my-1">
									<div className="flex items-center gap-1.5 text-[#3b82f6] opacity-60">
										<div className="h-3 w-px bg-current" />
										<span className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[#8a93a6]">
											analytical tables
										</span>
									</div>
								</div>

								{/* Stage 04: Analyze & Serve */}
								<div
									className={`rounded-[4px] border ${borderMain} ${surfaceRaised} p-3 transition-colors hover:border-[#3b82f6]/40`}
								>
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<span className="font-mono-code text-[10px] font-semibold text-[#3b82f6]">04</span>
											<span className={`font-mono-code text-xs font-medium uppercase tracking-[0.1em] ${textPrimary}`}>
												ANALYTICS, EDA &amp; AUTOMATION
											</span>
										</div>
										<span className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-[#60a5fa] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded-[2px]">
											ANALYZE
										</span>
									</div>
									<div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-code text-[11px] text-[#8a93a6]">
										<span>SQL Aggregations</span>
										<span className="text-[#2e3748]">·</span>
										<span>Exploratory Insights</span>
										<span className="text-[#2e3748]">·</span>
										<span>Automated Scripts</span>
									</div>
								</div>
							</div>

							{/* Section B: Structured Schema Contract Inspector */}
							<div className={`border-t ${borderMain} ${schemaSurface} p-4`}>
								<div className={`flex items-center justify-between mb-2.5 font-mono-code text-[10px] uppercase tracking-[0.16em] ${schemaLabel}`}>
									<span className="flex items-center gap-1.5">
										<Table className={`h-3 w-3 ${schemaIcon}`} />
										SCHEMA_CONTRACT: pipeline_manifest
									</span>
									<span className={schemaAccent}>TYPE_SAFE</span>
								</div>

								{/* Tabular Schema Definition */}
								<div className="overflow-x-auto">
									<table className="w-full text-left font-mono-code text-[11px]">
										<caption className="sr-only">Schema contract for the pipeline manifest</caption>
										<thead>
											<tr className={`border-b ${borderMain} ${textFaint} uppercase tracking-[0.12em] text-[10px]`}>
												<th scope="col" className="pb-1.5 pr-3 font-normal">ATTRIBUTE</th>
												<th scope="col" className="pb-1.5 px-3 font-normal">SQL TYPE</th>
												<th scope="col" className="pb-1.5 pl-3 font-normal">ROLE / CONSTRAINT</th>
											</tr>
										</thead>
										<tbody className={`divide-y ${schemaDivider}`}>
											<tr>
												<td className={`py-1.5 pr-3 ${textPrimary}`}>pipeline_run_id</td>
												<td className={`py-1.5 px-3 ${schemaAccent}`}>UUID</td>
												<td className={`py-1.5 pl-3 ${schemaMeta}`}>PRIMARY KEY</td>
											</tr>
											<tr>
												<td className={`py-1.5 pr-3 ${textPrimary}`}>source_extract</td>
												<td className={`py-1.5 px-3 ${schemaAccent}`}>VARCHAR(64)</td>
												<td className={`py-1.5 pl-3 ${schemaMeta}`}>NOT NULL</td>
											</tr>
											<tr>
												<td className={`py-1.5 pr-3 ${textPrimary}`}>data_validation</td>
												<td className={`py-1.5 px-3 ${schemaAccent}`}>BOOLEAN</td>
												<td className={`py-1.5 pl-3 ${schemaSuccess} font-medium`}>PASSED (PANDAS)</td>
											</tr>
											<tr>
												<td className={`py-1.5 pr-3 ${textPrimary}`}>target_relation</td>
												<td className={`py-1.5 px-3 ${schemaAccent}`}>VARCHAR(64)</td>
												<td className={`py-1.5 pl-3 ${schemaMeta}`}>POSTGRESQL_WAREHOUSE</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							{/* Section C: Verified System Footnote Bar */}
							<div
								className={`border-t ${borderMain} ${surfaceRaised} px-4 py-2.5 flex items-center justify-between font-mono-code text-[11px]`}
							>
								<div className="flex items-center gap-1.5 text-[#8a93a6]">
									<CheckCircle2 className="h-3.5 w-3.5 text-[#3b82f6]" />
									<span>{projectsData.length} Shipped Engineering Builds</span>
								</div>
								<div className="text-[#8a93a6] hidden sm:block">
									STACK: <span className={textSecondary}>PYTHON · SQL · BASH</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
