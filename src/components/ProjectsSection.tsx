'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { projectsData } from '@/data/projects';
import {
	FileCode2,
	Cpu,
	Terminal,
	GitBranch,
	ArrowUpRight,
	Layers,
	CheckCircle2,
	Sparkles,
	BarChart2,
	ChevronDown,
	ChevronUp,
} from 'lucide-react';

type ProjectConfig = {
	domainBadge: string;
	icon: React.ComponentType<{ className?: string }>;
	scopeType: string;
};

type Project = (typeof projectsData)[number];

// Domain configurations mapping strictly to existing project fields
const projectConfigs: Record<string, ProjectConfig> = {
	'superstore-sales-analysis': {
		domainBadge: 'SALES & PROFITABILITY ANALYSIS',
		icon: BarChart2,
		scopeType: 'DATA ANALYSIS · SQL & PYTHON',
	},
	downv: {
		domainBadge: 'MEDIA STREAMS & CLI',
		icon: FileCode2,
		scopeType: 'MODULAR PYTHON UTILITY',
	},
	addch: {
		domainBadge: 'METADATA PARSING & TOOLKIT',
		icon: Cpu,
		scopeType: 'GO CLI TOOLKIT',
	},
	'linux-postinstall': {
		domainBadge: 'SYSTEMS & AUTOMATION',
		icon: Terminal,
		scopeType: 'LINUX SHELL INFRASTRUCTURE',
	},
};

const defaultConfig: ProjectConfig = {
	domainBadge: 'ENGINEERING BUILD',
	icon: Layers,
	scopeType: 'SOFTWARE UTILITY',
};

const focusRing =
	'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]';

// Shared height transition: grid-rows 0fr <-> 1fr animates without measuring content.
// `invisible` while closed removes that content from the tab order and the a11y tree.
const collapseBase =
	'grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none';

function ProjectCard({ project, index }: { project: Project; index: number }) {
	const [expanded, setExpanded] = useState(false);
	const detailsId = useId();
	const openBtnRef = useRef<HTMLButtonElement>(null);
	const closeBtnRef = useRef<HTMLButtonElement>(null);
	const mounted = useRef(false);

	const num = String(index + 1).padStart(2, '0');
	const config = projectConfigs[project.id] ?? defaultConfig;
	const DomainIcon = config.icon;

	// Keep keyboard focus on the visible toggle after the other one is hidden.
	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}
		(expanded ? closeBtnRef : openBtnRef).current?.focus();
	}, [expanded]);

	return (
		<article className="rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm overflow-hidden">
			{/* Project Console Header Bar: always visible, collapsed or expanded */}
			<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] bg-[var(--bg-soft)] px-5 py-3">
				<div className="flex items-center gap-3">
					<span className="font-mono-code text-xs font-semibold text-[#2563eb] dark:text-[#60a5fa]">
						{`[${num}]`}
					</span>
					<span className="font-mono-code text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
						PROJECT_ID: {project.id.replace(/-/g, '_')}
					</span>
				</div>

				<div className="flex items-center gap-3 font-mono-code text-[11px] uppercase tracking-[0.14em]">
					<span className="hidden sm:inline text-[var(--text-muted)]">{config.scopeType}</span>
					<span className="hidden sm:inline text-[var(--text-muted)]">/</span>
					<span className="rounded-[3px] border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] text-[#1d4ed8] dark:text-[#60a5fa]">
						{config.domainBadge}
					</span>
				</div>
			</div>

			{/* Collapsed summary: title + description on the left, source link + toggle on the right */}
			<div className={`${collapseBase} ${expanded ? 'invisible grid-rows-[0fr]' : 'visible grid-rows-[1fr]'}`}>
				<div className="overflow-hidden">
					<div className="flex flex-col gap-4 p-5 sm:p-6 md:flex-row md:items-center md:justify-between md:gap-8">
						<div className="min-w-0 flex-1">
							<div className="flex items-center gap-3">
								<div className="p-2 rounded-[3px] bg-[var(--bg-primary)] border border-[var(--border-color)] shrink-0">
									<DomainIcon className="h-4 w-4 text-[#2563eb] dark:text-[#3b82f6]" />
								</div>
								<h3 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.025em] leading-snug text-[var(--text-primary)]">
									{project.title}
								</h3>
							</div>
							<p className="mt-2.5 text-[0.9375rem] leading-relaxed text-[var(--text-muted)] line-clamp-2">
								{project.description}
							</p>
						</div>

						<div className="flex flex-wrap items-center gap-3 shrink-0">
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`View ${project.title} source repository (opens in a new tab)`}
									className={`group inline-flex items-center gap-2 rounded-[4px] border border-[#2563eb] bg-[#2563eb] hover:bg-[#1d4ed8] hover:border-[#1d4ed8] px-3.5 py-2 font-mono-code text-xs uppercase tracking-[0.1em] font-semibold text-white transition-colors duration-300 ${focusRing}`}
								>
									<GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
									<span>Source</span>
									<ArrowUpRight
										className="h-3.5 w-3.5 text-white/80 transition-transform duration-150 motion-reduce:transition-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
										aria-hidden="true"
									/>
								</a>
							)}

							<button
								ref={openBtnRef}
								type="button"
								onClick={() => setExpanded(true)}
								aria-expanded={expanded}
								aria-controls={detailsId}
								aria-label={`Show details for ${project.title}`}
								className={`inline-flex items-center gap-2 rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] hover:border-[#2563eb] dark:hover:border-[#60a5fa] px-3.5 py-2 font-mono-code text-xs uppercase tracking-[0.1em] font-semibold text-[var(--text-primary)] transition-colors duration-300 ${focusRing}`}
							>
								<span>View details</span>
								<ChevronDown className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#60a5fa]" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Expanded: the original card design, unchanged, plus a collapse button in its header bar */}
			<div
				id={detailsId}
				className={`${collapseBase} ${expanded ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'}`}
			>
				<div className="overflow-hidden">
					{/* Case Study Content Grid: Two Columns */}
					<div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-start">
						{/* Column 1: Identity, Narrative, Problem & Solution */}
						<div className="space-y-6 min-w-0">
							<div>
								<div className="flex items-center gap-3">
									<div className="p-2 rounded-[3px] bg-[var(--bg-primary)] border border-[var(--border-color)] shrink-0">
										<DomainIcon className="h-4 w-4 text-[#2563eb] dark:text-[#3b82f6]" />
									</div>
									<h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.025em] leading-snug text-[var(--text-primary)]">
										{project.title}
									</h3>
								</div>

								<p className="mt-2 font-mono-code text-xs uppercase tracking-[0.12em] text-[#2563eb] dark:text-[#60a5fa]">
									{project.subtitle}
								</p>

								<p className="mt-3.5 text-[0.9375rem] sm:text-[1rem] leading-relaxed text-[var(--text-muted)]">
									{project.description}
								</p>
							</div>

							{/* Problem & Solution Case Study Compartments */}
							<div className="space-y-3.5">
								{/* Problem Compartment */}
								<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-4 space-y-1.5">
									<div className="flex items-center justify-between font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#2563eb] dark:text-[#60a5fa]">
										<span>01 // THE CHALLENGE &amp; PROBLEM</span>
										<span>CONTEXT</span>
									</div>
									<p className="text-xs sm:text-[0.875rem] leading-relaxed text-[var(--text-secondary)]">
										{project.problem}
									</p>
								</div>

								{/* What I Built Compartment */}
								<div className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-primary)] p-4 space-y-1.5">
									<div className="flex items-center justify-between font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#2563eb] dark:text-[#60a5fa]">
										<span>02 // ARCHITECTURE &amp; WHAT I BUILT</span>
										<span>IMPLEMENTATION</span>
									</div>
									<p className="text-xs sm:text-[0.875rem] leading-relaxed text-[var(--text-primary)]">
										{project.whatIBuilt}
									</p>
								</div>
							</div>

							{/* Project Actions: GitHub Repository Link + Less details */}
							<div className="flex flex-wrap items-center gap-3 pt-1">
								{project.github && (
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`View ${project.title} source repository (opens in a new tab)`}
										className="group inline-flex items-center gap-2 rounded-[4px] border border-[#2563eb] bg-[#2563eb] hover:bg-[#1d4ed8] hover:border-[#1d4ed8] dark:border-[#2563eb] dark:bg-[#2563eb] dark:hover:border-[#1d4ed8] dark:hover:bg-[#1d4ed8] px-4 py-2 font-mono-code text-xs uppercase tracking-[0.1em] font-semibold text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]"
									>
										<GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
										<span>VIEW SOURCE REPOSITORY</span>
										<ArrowUpRight
											className="h-3.5 w-3.5 text-white/80 transition-transform duration-150 motion-reduce:transition-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
											aria-hidden="true"
										/>
									</a>
								)}

								<button
									ref={closeBtnRef}
									type="button"
									onClick={() => setExpanded(false)}
									aria-expanded={expanded}
									aria-controls={detailsId}
									aria-label={`Hide details for ${project.title}`}
									className={`inline-flex items-center gap-2 rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] hover:border-[#2563eb] dark:hover:border-[#60a5fa] px-4 py-2 font-mono-code text-xs uppercase tracking-[0.1em] font-semibold text-[var(--text-primary)] transition-colors duration-300 ${focusRing}`}
								>
									<span>Less details</span>
									<ChevronUp className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#60a5fa]" aria-hidden="true" />
								</button>
							</div>
						</div>

						{/* Column 2: Concepts, Key Highlights & Technology Stack */}
						<div className="space-y-6 min-w-0">
							{/* Relevant Concepts & Architectural Practices */}
							{project.relevantConcepts.length > 0 && (
								<div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-5 space-y-3">
									<div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]/70 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#2563eb] dark:text-[#60a5fa]">
										<span>03 // CORE CONCEPTS &amp; PRACTICES</span>
										<span>DATA RIGOR</span>
									</div>

									<div className="flex flex-wrap gap-2">
										{project.relevantConcepts.map((concept) => (
											<span
												key={concept}
												className="rounded-[3px] border border-[var(--border-color)]/70 bg-[var(--bg-primary)] px-2.5 py-1 font-mono-code text-[11px] leading-snug text-[var(--text-secondary)]"
											>
												{concept}
											</span>
										))}
									</div>
								</div>
							)}

							{/* Key Technical Highlights & Deliverables */}
							{project.highlights.length > 0 && (
								<div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
									<div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]/70 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#2563eb] dark:text-[#60a5fa]">
										<span>04 // DELIVERABLES &amp; HIGHLIGHTS</span>
										<span>{project.highlights.length} POINTS</span>
									</div>

									<ul className="space-y-2.5">
										{project.highlights.map((highlight) => (
											<li
												key={highlight}
												className="flex items-start gap-2.5 text-xs sm:text-[0.875rem] leading-relaxed"
											>
												<CheckCircle2 className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6] shrink-0 mt-0.5" />
												<span className="text-[var(--text-secondary)]">{highlight}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Technology Stack Tags */}
							<div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-4 font-mono-code text-xs space-y-2.5">
								<div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#2563eb] dark:text-[#60a5fa]">
									<span>05 // TECHNOLOGIES &amp; UTILITIES</span>
									<span>STACK</span>
								</div>

								<div className="flex flex-wrap gap-1.5">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="rounded-[2px] border border-[var(--border-color)]/70 bg-[var(--bg-primary)] px-2 py-0.5 text-[11px] text-[var(--text-primary)]"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

export function ProjectsSection() {
	return (
		<section
			id="projects"
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
				<div className="mb-10 border-b border-[var(--border-color)] pb-8 sm:mb-12">
					<div className="flex flex-wrap items-center justify-between gap-3 mb-3">
						<div className="flex items-center gap-2 font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#2563eb] dark:text-[#60a5fa]">
							<span>{'// TECHNICAL.PROJECTS'}</span>
						</div>
						<div className="hidden sm:flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
							<span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" />
							<span>SOURCE REPOSITORIES · {projectsData.length} BUILDS</span>
						</div>
					</div>

					<h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.1] text-[var(--text-primary)]">
						Selected Engineering Projects
					</h2>

					<p className="mt-3.5 max-w-2xl text-[1rem] sm:text-[1.0625rem] leading-relaxed text-[var(--text-muted)]">
						Practical builds applying relational modeling, media processing, software design, and automation
						to technical problems.
					</p>
				</div>

				{/* Single column: full-width cards stacked vertically, each expanding independently */}
				<div className="flex flex-col gap-5">
					{projectsData.map((project, i) => (
						<ProjectCard key={project.id} project={project} index={i} />
					))}
				</div>

				{/* Section Footer Summary Bar */}
				<div className="mt-10 border-t border-[var(--border-color)] pt-6 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[var(--text-muted)]">
					<div className="flex items-center gap-2">
						<Sparkles className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" />
						<span>{'// END_OF_PROJECTS'}</span>
					</div>
					<div className="text-[var(--text-secondary)]">
						{projectsData.length} BUILDS · PUBLIC SOURCE REPOSITORIES
					</div>
				</div>
			</div>
		</section>
	);
}
