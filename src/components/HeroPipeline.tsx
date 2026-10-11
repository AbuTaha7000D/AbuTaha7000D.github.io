'use client';

import React from 'react';
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
	return (
		<section
			id="system"
			className="relative overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-primary)] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 transition-colors duration-200"
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
				<div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] pb-5">
					<div className="flex items-center gap-2.5 font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.18em]">
						<span className="inline-block h-2 w-2 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" />
						<span className="text-[var(--text-secondary)]">DATA ARCHITECTURE &amp; SYSTEMS</span>
						<span className="hidden sm:inline text-[var(--text-faint)]">/</span>
						<span className="hidden sm:inline text-[var(--text-muted)]">ETL · SCHEMAS · ANALYTICS</span>
					</div>

					<div className="flex items-center gap-3 font-mono-code text-[11px] uppercase tracking-[0.14em]">
						<span className="text-[var(--text-muted)]">
							LOC: <span className="text-[var(--text-secondary)]">{profileData.location}</span>
						</span>
						<span className="hidden sm:inline text-[var(--text-faint)]">/</span>
						<span className="flex items-center gap-1.5 rounded-[3px] border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] text-[#1d4ed8] dark:text-[#60a5fa]">
							<span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6] animate-pulse" />
							READY FOR INGESTION
						</span>
					</div>
				</div>

				{/* Two-column Hero Composition */}
				<div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-14 xl:gap-16 items-start">
					{/* LEFT COLUMN: Human identity & strong typographic hierarchy */}
					<div className="flex flex-col justify-center min-w-0">
						{/* Context label */}
						<div className="flex items-center gap-2 font-mono-code text-xs uppercase tracking-[0.2em] text-[#2563eb] dark:text-[#60a5fa] mb-3">
							<Binary className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" />
							<span>ENGINEERING PROFILE</span>
						</div>

						{/* Primary Name Display: font-display, large, dominant, confident */}
						<h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold tracking-[-0.035em] leading-[1.04] text-[var(--text-primary)]">
							Mahmoud Ehab
						</h1>

						{/* Professional Role Title */}
						<div className="mt-4 flex items-baseline flex-wrap gap-x-3 gap-y-1.5">
							<h2 className="font-display text-xl sm:text-2xl lg:text-[1.625rem] font-medium tracking-[-0.02em] text-[#2563eb] dark:text-[#60a5fa]">
								Data Analyst &amp; Data Engineer
							</h2>
							<span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
								[ B.Sc. Comp &amp; Control Eng ]
							</span>
						</div>

						{/* Supporting Narrative Statement */}
						<p className="mt-5 max-w-[540px] text-[0.9375rem] sm:text-[1rem] leading-relaxed text-[var(--text-muted)]">
							Applying engineering rigor to data systems: designing dependable ETL pipelines,
							modeling clean relational schemas, and translating complex datasets into actionable
							business analytics with Python and SQL.
						</p>

						{/* Technical Capability Grid (Data Engineer / Analyst evidence) */}
						<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[560px]">
							<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-card)] p-3.5 transition-colors duration-150 hover:border-[#3b82f6]/50">
								<div className="flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#2563eb] dark:text-[#60a5fa]">
									<Workflow className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" />
									<span>ETL &amp; Pipelines</span>
								</div>
								<p className="mt-1.5 font-mono-code text-[11px] leading-snug text-[var(--text-muted)]">
									Data ingestion, schema validation, batch workflows &amp; automated transforms.
								</p>
							</div>

							<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-card)] p-3.5 transition-colors duration-150 hover:border-[#3b82f6]/50">
								<div className="flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#2563eb] dark:text-[#60a5fa]">
									<Database className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" />
									<span>SQL &amp; Relational DBs</span>
								</div>
								<p className="mt-1.5 font-mono-code text-[11px] leading-snug text-[var(--text-muted)]">
									PostgreSQL, SQLite, relational schemas, complex joins &amp; normalization.
								</p>
							</div>

							<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-card)] p-3.5 transition-colors duration-150 hover:border-[#3b82f6]/50">
								<div className="flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#2563eb] dark:text-[#60a5fa]">
									<BarChart3 className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" />
									<span>Analytics &amp; EDA</span>
								</div>
								<p className="mt-1.5 font-mono-code text-[11px] leading-snug text-[var(--text-muted)]">
									Data cleaning, exploratory analysis, distribution testing &amp; business insights.
								</p>
							</div>

							<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-card)] p-3.5 transition-colors duration-150 hover:border-[#3b82f6]/50">
								<div className="flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.14em] text-[#2563eb] dark:text-[#60a5fa]">
									<Cpu className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" />
									<span>Python &amp; Automation</span>
								</div>
								<p className="mt-1.5 font-mono-code text-[11px] leading-snug text-[var(--text-muted)]">
									Pandas, NumPy, modular script architecture &amp; Linux CLI tooling.
								</p>
							</div>
						</div>

						{/* Primary Actions (CTAs) */}
						<div className="mt-8 flex flex-wrap items-center gap-3">
							<a
								href="#projects"
								className="group inline-flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] px-5 py-2.5 font-mono-code text-xs uppercase tracking-[0.1em] font-semibold text-white transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6] sm:w-auto"
							>
								<span>Explore Projects</span>
								<ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
							</a>

							<a
								href="/cv/Mahmoud_Ehab_CV_2026.pdf"
								download
								className="inline-flex w-full items-center justify-center gap-2 rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-5 py-2.5 font-mono-code text-xs uppercase tracking-[0.1em] font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white dark:hover:border-[#3b82f6]/60 dark:hover:bg-[var(--bg-card-hover)] dark:hover:text-white focus-visible:outline-2 focus-visible:outline-[#3b82f6] sm:w-auto"
							>
								<Download className="h-3.5 w-3.5 text-[var(--text-muted)]" />
								<span>Download CV</span>
							</a>
						</div>

						{/* Verified technical profiles strip */}
						<div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center gap-4 sm:gap-6 font-mono-code text-xs text-[var(--text-muted)]">
							<a
								href={profileData.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 transition-colors hover:text-[#2563eb] dark:hover:text-[#60a5fa]"
							>
								<GitBranch className="h-3.5 w-3.5" />
								<span>GitHub</span>
							</a>
							<a
								href={profileData.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 transition-colors hover:text-[#2563eb] dark:hover:text-[#60a5fa]"
							>
								<LinkedinIcon className="h-3.5 w-3.5" />
								<span>LinkedIn</span>
							</a>
							<a
								href={profileData.kaggle}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 transition-colors hover:text-[#2563eb] dark:hover:text-[#60a5fa]"
							>
								<BarChart3 className="h-3.5 w-3.5" />
								<span>Kaggle</span>
							</a>
							<a
								href={`mailto:${profileData.email}`}
								className="inline-flex items-center gap-1.5 transition-colors hover:text-[#2563eb] dark:hover:text-[#60a5fa]"
							>
								<Mail className="h-3.5 w-3.5" />
								<span>Email</span>
							</a>
						</div>
					</div>

					{/* RIGHT COLUMN: Authentic Data Architecture & Schema Console */}
					<div className="flex flex-col gap-4 min-w-0">
						{/* Master Data Pipeline Architecture Panel */}
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
										data_pipeline_architecture.dag
									</span>
								</div>
								<div className="shrink-0 font-mono-code text-[10px] uppercase tracking-[0.14em] text-[#1d4ed8] dark:text-[#60a5fa] font-semibold">
									SPEC: RELATIONAL · PY/SQL
								</div>
							</div>

							{/* Section A: End-to-End Pipeline DAG Flow */}
							<div className="p-4 sm:p-5 space-y-3">
								<div className="flex items-center justify-between pb-1 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
									<span>PIPELINE EXECUTION FLOW</span>
									<span>STAGES 01 → 04</span>
								</div>

								{/* Stage 01: Extract */}
								<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-3 transition-colors hover:border-[#3b82f6]/40">
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<span className="font-mono-code text-[10px] font-semibold text-[#2563eb] dark:text-[#3b82f6]">01</span>
											<span className="font-mono-code text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-primary)]">
												INGESTION &amp; EXTRACTION
											</span>
										</div>
										<span className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-[#1d4ed8] dark:text-[#60a5fa] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded-[2px] font-medium">
											EXTRACT
										</span>
									</div>
									<div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-code text-[11px] text-[var(--text-muted)]">
										<span>REST APIs</span>
										<span className="text-[var(--border-subtle)]">·</span>
										<span>CSV / JSON Datasets</span>
										<span className="text-[var(--border-subtle)]">·</span>
										<span>Relational Ingest</span>
									</div>
								</div>

								{/* Connector 1 */}
								<div className="flex items-center justify-center -my-1">
									<div className="flex items-center gap-1.5 text-[#2563eb] dark:text-[#3b82f6] opacity-60">
										<div className="h-3 w-px bg-current" />
										<span className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
											raw stream
										</span>
									</div>
								</div>

								{/* Stage 02: Transform */}
								<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-3 transition-colors hover:border-[#3b82f6]/40">
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<span className="font-mono-code text-[10px] font-semibold text-[#2563eb] dark:text-[#3b82f6]">02</span>
											<span className="font-mono-code text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-primary)]">
												TRANSFORMATION &amp; VALIDATION
											</span>
										</div>
										<span className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-[#1d4ed8] dark:text-[#60a5fa] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded-[2px] font-medium">
											TRANSFORM
										</span>
									</div>
									<div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-code text-[11px] text-[var(--text-muted)]">
										<span>Python (Pandas)</span>
										<span className="text-[var(--border-subtle)]">·</span>
										<span>Schema Validation</span>
										<span className="text-[var(--border-subtle)]">·</span>
										<span>Data Cleaning</span>
									</div>
								</div>

								{/* Connector 2 */}
								<div className="flex items-center justify-center -my-1">
									<div className="flex items-center gap-1.5 text-[#2563eb] dark:text-[#3b82f6] opacity-60">
										<div className="h-3 w-px bg-current" />
										<span className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
											validated tuples
										</span>
									</div>
								</div>

								{/* Stage 03: Load / Storage */}
								<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-3 transition-colors hover:border-[#3b82f6]/40">
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<span className="font-mono-code text-[10px] font-semibold text-[#2563eb] dark:text-[#3b82f6]">03</span>
											<span className="font-mono-code text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-primary)]">
												RELATIONAL STORAGE &amp; SCHEMAS
											</span>
										</div>
										<span className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-[#1d4ed8] dark:text-[#60a5fa] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded-[2px] font-medium">
											LOAD
										</span>
									</div>
									<div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-code text-[11px] text-[var(--text-muted)]">
										<span>PostgreSQL</span>
										<span className="text-[var(--border-subtle)]">·</span>
										<span>SQLite</span>
										<span className="text-[var(--border-subtle)]">·</span>
										<span>Normalized Star Schemas</span>
									</div>
								</div>

								{/* Connector 3 */}
								<div className="flex items-center justify-center -my-1">
									<div className="flex items-center gap-1.5 text-[#2563eb] dark:text-[#3b82f6] opacity-60">
										<div className="h-3 w-px bg-current" />
										<span className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
											analytical tables
										</span>
									</div>
								</div>

								{/* Stage 04: Analyze & Serve */}
								<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-3 transition-colors hover:border-[#3b82f6]/40">
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<span className="font-mono-code text-[10px] font-semibold text-[#2563eb] dark:text-[#3b82f6]">04</span>
											<span className="font-mono-code text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-primary)]">
												ANALYTICS, EDA &amp; AUTOMATION
											</span>
										</div>
										<span className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-[#1d4ed8] dark:text-[#60a5fa] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded-[2px] font-medium">
											ANALYZE
										</span>
									</div>
									<div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-code text-[11px] text-[var(--text-muted)]">
										<span>SQL Aggregations</span>
										<span className="text-[var(--border-subtle)]">·</span>
										<span>Exploratory Insights</span>
										<span className="text-[var(--border-subtle)]">·</span>
										<span>Automated Scripts</span>
									</div>
								</div>
							</div>

							{/* Section B: Structured Schema Contract Inspector */}
							<div className="border-t border-[var(--border-color)] bg-[var(--bg-soft)]/60 p-4">
								<div className="flex items-center justify-between mb-2.5 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
									<span className="flex items-center gap-1.5">
										<Table className="h-3 w-3 text-[#2563eb] dark:text-[#3b82f6]" />
										SCHEMA_CONTRACT: pipeline_manifest
									</span>
									<span className="text-[#1d4ed8] dark:text-[#60a5fa] font-semibold">TYPE_SAFE</span>
								</div>

								{/* Tabular Schema Definition */}
								<div className="overflow-x-auto">
									<table className="w-full text-left font-mono-code text-[11px]">
										<caption className="sr-only">Schema contract for the pipeline manifest</caption>
										<thead>
											<tr className="border-b border-[var(--border-color)] text-[var(--text-faint)] uppercase tracking-[0.12em] text-[10px]">
												<th scope="col" className="pb-1.5 pr-3 font-normal">ATTRIBUTE</th>
												<th scope="col" className="pb-1.5 px-3 font-normal">SQL TYPE</th>
												<th scope="col" className="pb-1.5 pl-3 font-normal">ROLE / CONSTRAINT</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-[var(--border-color)]">
											<tr>
												<td className="py-1.5 pr-3 text-[var(--text-primary)] font-medium">pipeline_run_id</td>
												<td className="py-1.5 px-3 text-[#1d4ed8] dark:text-[#60a5fa]">UUID</td>
												<td className="py-1.5 pl-3 text-[var(--text-secondary)]">PRIMARY KEY</td>
											</tr>
											<tr>
												<td className="py-1.5 pr-3 text-[var(--text-primary)] font-medium">source_extract</td>
												<td className="py-1.5 px-3 text-[#1d4ed8] dark:text-[#60a5fa]">VARCHAR(64)</td>
												<td className="py-1.5 pl-3 text-[var(--text-secondary)]">NOT NULL</td>
											</tr>
											<tr>
												<td className="py-1.5 pr-3 text-[var(--text-primary)] font-medium">data_validation</td>
												<td className="py-1.5 px-3 text-[#1d4ed8] dark:text-[#60a5fa]">BOOLEAN</td>
												<td className="py-1.5 pl-3 text-[#15803d] dark:text-emerald-400 font-medium">PASSED (PANDAS)</td>
											</tr>
											<tr>
												<td className="py-1.5 pr-3 text-[var(--text-primary)] font-medium">target_relation</td>
												<td className="py-1.5 px-3 text-[#1d4ed8] dark:text-[#60a5fa]">VARCHAR(64)</td>
												<td className="py-1.5 pl-3 text-[var(--text-secondary)]">POSTGRESQL_WAREHOUSE</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							{/* Section C: Verified System Footnote Bar */}
							<div className="border-t border-[var(--border-color)] bg-[var(--bg-soft)] px-4 py-2.5 flex items-center justify-between font-mono-code text-[11px]">
								<div className="flex items-center gap-1.5 text-[var(--text-muted)]">
									<CheckCircle2 className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" />
									<span>{projectsData.length} Shipped Engineering Builds</span>
								</div>
								<div className="text-[var(--text-muted)] hidden sm:block">
									STACK: <span className="text-[var(--text-secondary)]">PYTHON · SQL · BASH</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
