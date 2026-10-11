'use client';

import React from 'react';
import { skillGroupsData } from '@/data/skills';
import {
	BarChart3,
	Database,
	Cpu,
	Terminal,
	Sparkles,
	Layers,
} from 'lucide-react';

const totalSkillCount = skillGroupsData.reduce(
	(total, group) => total + group.skills.length,
	0,
);

export function StackArchitectureMap() {
	// Tier configuration mapping
	const tierConfigs: Record<
		string,
		{
			badge: string;
			icon: React.ComponentType<{ className?: string }>;
			scopeTag: string;
		}
	> = {
		'data-analysis': {
			badge: 'ANALYTICAL CORE',
			icon: BarChart3,
			scopeTag: 'EXPLORATION & QUERYING',
		},
		'data-engineering': {
			badge: 'PIPELINE ARCHITECTURE',
			icon: Database,
			scopeTag: 'INGESTION & STORAGE',
		},
		'programming-engineering': {
			badge: 'SOFTWARE DISCIPLINE',
			icon: Cpu,
			scopeTag: 'AUTOMATION & TOOLING',
		},
		'systems-infrastructure': {
			badge: 'SYSTEMS FOUNDATION',
			icon: Terminal,
			scopeTag: 'LINUX & RUNTIMES',
		},
	};

	return (
		<section
			id="skills"
			className="relative overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-primary)] pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28 transition-colors duration-300"
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
				<div className="mb-12 border-b border-[var(--border-color)] pb-8 sm:mb-14 lg:mb-16">
					<div className="flex flex-wrap items-center justify-between gap-3 mb-3">
						<div className="flex items-center gap-2 font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#2563eb] dark:text-[#60a5fa]">
							<span>{'// TECHNICAL.SKILLS'}</span>
						</div>
						<div className="hidden sm:flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
							<span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" />
							<span>DATA STACK · 4 INTEGRATED TIERS</span>
						</div>
					</div>

					<h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.1] text-[var(--text-primary)]">
						Technical Stack &amp; Architecture
					</h2>

					<p className="mt-3.5 max-w-2xl text-[1rem] sm:text-[1.0625rem] leading-relaxed text-[var(--text-muted)]">
						A structured architectural view of tools, data pipelines, and engineering workflows I build with:
						analytical processing first, reliable pipelines second, backed by software discipline and Linux systems.
					</p>
				</div>

				{/* High-level Lifecycle Mental Model Bar */}
				<div
					role="region"
					aria-label="Data workflow lifecycle"
					tabIndex={0}
					className="mb-8 rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-3 sm:p-4 overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3b82f6] focus-visible:outline-offset-2"
				>
					<div className="min-w-[640px] flex items-center justify-between gap-4 font-mono-code text-xs">
						<div className="flex items-center gap-2">
							<span className="px-2 py-0.5 rounded-[3px] border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#1d4ed8] dark:text-[#60a5fa] text-[10px] font-semibold">
								01
							</span>
							<span className="text-[var(--text-secondary)]">INGESTION &amp; PIPELINES</span>
						</div>

						<span className="text-[#3b82f6]/40">→</span>

						<div className="flex items-center gap-2">
							<span className="px-2 py-0.5 rounded-[3px] border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#1d4ed8] dark:text-[#60a5fa] text-[10px] font-semibold">
								02
							</span>
							<span className="text-[var(--text-secondary)]">RELATIONAL STORAGE</span>
						</div>

						<span className="text-[#3b82f6]/40">→</span>

						<div className="flex items-center gap-2">
							<span className="px-2 py-0.5 rounded-[3px] border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#1d4ed8] dark:text-[#60a5fa] text-[10px] font-semibold">
								03
							</span>
							<span className="text-[var(--text-secondary)]">TRANSFORM &amp; ANALYTICS</span>
						</div>

						<span className="text-[#3b82f6]/40">→</span>

						<div className="flex items-center gap-2">
							<span className="px-2 py-0.5 rounded-[3px] border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#1d4ed8] dark:text-[#60a5fa] text-[10px] font-semibold">
								04
							</span>
							<span className="text-[var(--text-secondary)]">SYSTEMS &amp; AUTOMATION</span>
						</div>
					</div>
				</div>

				{/* Main Stack Architecture Rack */}
				<div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm overflow-hidden">
					{skillGroupsData.map((group, idx) => {
						const tierNum = String(idx + 1).padStart(2, '0');
						const config = tierConfigs[group.id] ?? {
							badge: 'TECHNICAL TIER',
							icon: Layers,
							scopeTag: 'ENGINEERING',
						};
						const TierIcon = config.icon;
						const isLast = idx === skillGroupsData.length - 1;

						return (
							<div
								key={group.id}
								className={`p-6 sm:p-8 lg:p-10 ${!isLast ? 'border-b border-[var(--border-color)]' : ''}`}
							>
								{/* Two-column layout: Tier Info & Description (Left) + Competency Grid (Right) */}
								<div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] gap-8 lg:gap-12 items-start">
									{/* Column 1: Tier Identification & Narrative */}
									<div className="space-y-4 min-w-0">
										<div className="flex items-center gap-2.5">
											<span className="font-mono-code text-xs font-semibold text-[#1d4ed8] dark:text-[#60a5fa]">
												{`[TIER ${tierNum}]`}
											</span>
											<span className="rounded-[3px] border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-2 py-0.5 font-mono-code text-[10px] font-medium tracking-[0.12em] text-[#1d4ed8] dark:text-[#60a5fa]">
												{config.badge}
											</span>
										</div>

										<div className="flex items-center gap-3">
											<div className="p-2 rounded-[3px] bg-[var(--bg-primary)] border border-[var(--border-color)] shrink-0">
												<TierIcon className="h-4 w-4 text-[#2563eb] dark:text-[#3b82f6]" />
											</div>
											<h3 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] leading-snug text-[var(--text-primary)]">
												{group.category}
											</h3>
										</div>

										<p className="text-xs sm:text-[0.875rem] leading-relaxed text-[var(--text-muted)]">
											{group.description}
										</p>

										<div className="pt-1 flex items-center gap-2 font-mono-code text-[11px] text-[var(--text-muted)]">
											<span className="text-[#1d4ed8] dark:text-[#60a5fa] font-medium">SCOPE:</span>
											<span>{config.scopeTag}</span>
										</div>
									</div>

									{/* Column 2: Structured Competency Grid */}
									<div className="min-w-0">
										<div className="flex items-center justify-between pb-2 mb-3.5 border-b border-[var(--border-color)] font-mono-code text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
											<span>SKILLS</span>
											<span>{group.skills.length} AREAS</span>
										</div>

										<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
											{group.skills.map((skill) => (
												<li
													key={skill}
													className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] px-3.5 py-3 flex items-center gap-3"
												>
													<span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]/60 shrink-0" aria-hidden="true" />
													<span className="min-w-0 font-mono-code text-xs text-[var(--text-primary)] whitespace-normal break-words sm:truncate">
														{skill}
													</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						);
					})}

					{/* Architectural Summary Strip */}
					<div className="border-t border-[var(--border-color)] bg-[var(--bg-soft)] px-6 py-4 flex flex-wrap items-center justify-between gap-4 font-mono-code text-[11px]">
						<div className="flex items-center gap-2 text-[var(--text-muted)]">
							<Sparkles className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" />
							<span>STACK COMPOSITION: {skillGroupsData.length} TIERS · {totalSkillCount} SKILLS</span>
						</div>
						<div className="flex flex-wrap items-center gap-3 text-xs">
							<span className="text-[var(--text-muted)]">CORE ENGINES:</span>
							<span className="text-[var(--text-secondary)] font-medium">PYTHON · SQL · BASH · POSTGRESQL</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
