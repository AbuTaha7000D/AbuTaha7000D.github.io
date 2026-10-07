'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { projectsData } from '@/data/projects';
import {
	Database,
	FileCode2,
	Cpu,
	Terminal,
	GitBranch,
	ArrowUpRight,
	Layers,
	CheckCircle2,
	Sparkles,
} from 'lucide-react';

export function ProjectsSection() {
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
	const badgeBg = dark
		? 'bg-[#3b82f6]/10 border-[#3b82f6]/30 text-[#60a5fa]'
		: 'bg-[#3b82f6]/10 border-[#3b82f6]/40 text-[#1d4ed8]';

	// Domain configurations mapping strictly to existing project fields
	const projectConfigs: Record<
		string,
		{
			domainBadge: string;
			icon: React.ComponentType<{ className?: string }>;
			scopeType: string;
		}
	> = {
		'snack-n-track': {
			domainBadge: 'RELATIONAL DATABASE & ML',
			icon: Database,
			scopeType: 'ACADEMIC GRADUATION BUILD',
		},
		'downv': {
			domainBadge: 'MEDIA STREAMS & CLI',
			icon: FileCode2,
			scopeType: 'MODULAR PYTHON UTILITY',
		},
		'addch': {
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

	return (
		<section
			id="projects"
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
							<span>{'// TECHNICAL.PROJECTS'}</span>
						</div>
						<div className={`hidden sm:flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] ${textMuted}`}>
							<span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
							<span>SOURCE REPOSITORIES · {projectsData.length} BUILDS</span>
						</div>
					</div>

					<h2
						className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.1] ${textHeading}`}
						style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
					>
						Selected Engineering Projects
					</h2>

					<p className={`mt-3.5 max-w-2xl text-[1rem] sm:text-[1.0625rem] leading-relaxed ${textMuted}`}>
						Practical builds applying relational modeling, media processing, software design, and automation
						to technical problems.
					</p>
				</div>

				{/* Projects Case Studies List */}
				<div className="space-y-12">
					{projectsData.map((project, i) => {
						const num = String(i + 1).padStart(2, '0');
						const config = projectConfigs[project.id] ?? {
							domainBadge: 'ENGINEERING BUILD',
							icon: Layers,
							scopeType: 'SOFTWARE UTILITY',
						};
						const DomainIcon = config.icon;

						return (
							<article
								key={project.id}
								className={`rounded-[6px] border ${borderMain} ${surfaceCard} shadow-sm overflow-hidden`}
							>
								{/* Project Console Header Bar */}
								<div
									className={`flex flex-wrap items-center justify-between gap-3 border-b ${borderMain} ${surfaceRaised} px-5 py-3`}
								>
									<div className="flex items-center gap-3">
										<span className={`font-mono-code text-xs font-semibold ${accentBlue}`}>
											{`[${num}]`}
										</span>
										<span className={`font-mono-code text-[11px] uppercase tracking-[0.16em] ${textSecondary}`}>
											PROJECT_ID: {project.id.replace(/-/g, '_')}
										</span>
									</div>

									<div className="flex items-center gap-3 font-mono-code text-[11px] uppercase tracking-[0.14em]">
										<span className={`hidden sm:inline ${textMuted}`}>{config.scopeType}</span>
										<span className={`hidden sm:inline ${textMuted}`}>/</span>
										<span className={`rounded-[3px] border px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] ${badgeBg}`}>
											{config.domainBadge}
										</span>
									</div>
								</div>

								{/* Case Study Content Grid: Two Columns */}
								<div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-start">
									{/* Column 1: Identity, Narrative, Problem & Solution */}
									<div className="space-y-6 min-w-0">
										<div>
											<div className="flex items-center gap-3">
												<div className={`p-2 rounded-[3px] ${surfaceSubtle} border ${borderMain} shrink-0`}>
													<DomainIcon className={`h-4 w-4 ${iconBlue}`} />
												</div>
												<h3
													className={`text-2xl sm:text-3xl font-semibold tracking-[-0.025em] leading-snug ${textHeading}`}
													style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
												>
													{project.title}
												</h3>
											</div>

											<p className={`mt-2 font-mono-code text-xs uppercase tracking-[0.12em] ${accentBlue}`}>
												{project.subtitle}
											</p>

											<p className={`mt-3.5 text-[0.9375rem] sm:text-[1rem] leading-relaxed ${textMuted}`}>
												{project.description}
											</p>
										</div>

										{/* Problem & Solution Case Study Compartments */}
										<div className="space-y-3.5">
											{/* Problem Compartment */}
											<div className={`rounded-[4px] border ${borderMain} ${surfaceRaised} p-4 space-y-1.5`}>
												<div className={`flex items-center justify-between font-mono-code text-[10px] uppercase tracking-[0.16em] ${accentBlue}`}>
													<span>01 // THE CHALLENGE &amp; PROBLEM</span>
													<span>CONTEXT</span>
												</div>
												<p className={`text-xs sm:text-[0.875rem] leading-relaxed ${textSecondary}`}>
													{project.problem}
												</p>
											</div>

											{/* What I Built Compartment */}
											<div className={`rounded-[4px] border ${borderMain} ${surfaceSubtle} p-4 space-y-1.5`}>
												<div className={`flex items-center justify-between font-mono-code text-[10px] uppercase tracking-[0.16em] ${accentBlue}`}>
													<span>02 // ARCHITECTURE &amp; WHAT I BUILT</span>
													<span>IMPLEMENTATION</span>
												</div>
												<p className={`text-xs sm:text-[0.875rem] leading-relaxed ${textPrimary}`}>
													{project.whatIBuilt}
												</p>
											</div>
										</div>

										{/* Project Action / GitHub Repository Link */}
										{project.github && (
											<div className="pt-1">
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`View ${project.title} source repository (opens in a new tab)`}
													className={`group inline-flex items-center gap-2 rounded-[4px] border ${borderMain} ${surfaceRaised} px-4 py-2 font-mono-code text-xs uppercase tracking-[0.1em] font-medium ${textPrimary} transition-colors duration-150 hover:border-[#3b82f6]/60 ${dark ? 'hover:text-[#60a5fa]' : 'hover:text-[#1d4ed8]'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]`}
												>
													<GitBranch className="h-3.5 w-3.5 text-[#3b82f6]" />
													<span>VIEW SOURCE REPOSITORY</span>
													<ArrowUpRight className={`h-3.5 w-3.5 ${textMuted} transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} aria-hidden="true" />
												</a>
											</div>
										)}
									</div>

									{/* Column 2: Concepts, Key Highlights & Technology Stack */}
									<div className="space-y-6 min-w-0">
										{/* Relevant Concepts & Architectural Practices */}
										{project.relevantConcepts.length > 0 && (
											<div className={`rounded-[6px] border ${borderMain} ${surfaceRaised} p-5 space-y-3`}>
												<div className={`flex items-center justify-between pb-2 border-b ${borderDivider} font-mono-code text-[10px] uppercase tracking-[0.16em] ${accentBlue}`}>
													<span>03 // CORE CONCEPTS &amp; PRACTICES</span>
													<span>DATA RIGOR</span>
												</div>

												<div className="flex flex-wrap gap-2">
													{project.relevantConcepts.map((concept) => (
														<span
															key={concept}
															className={`rounded-[3px] border ${borderSubtle} ${surfaceSubtle} px-2.5 py-1 font-mono-code text-[11px] leading-snug ${textSecondary}`}
														>
															{concept}
														</span>
													))}
												</div>
											</div>
										)}

										{/* Key Technical Highlights & Deliverables */}
										{project.highlights.length > 0 && (
											<div className={`rounded-[6px] border ${borderMain} ${surfaceCard} p-5 space-y-3`}>
												<div className={`flex items-center justify-between pb-2 border-b ${borderDivider} font-mono-code text-[10px] uppercase tracking-[0.16em] ${accentBlue}`}>
													<span>04 // DELIVERABLES &amp; HIGHLIGHTS</span>
													<span>{project.highlights.length} POINTS</span>
												</div>

												<ul className="space-y-2.5">
													{project.highlights.map((highlight) => (
														<li
															key={highlight}
															className="flex items-start gap-2.5 text-xs sm:text-[0.875rem] leading-relaxed"
														>
															<CheckCircle2 className={`h-3.5 w-3.5 ${iconBlue} shrink-0 mt-0.5`} />
															<span className={textSecondary}>{highlight}</span>
														</li>
													))}
												</ul>
											</div>
										)}
										{/* Technology Stack Tags */}
										<div className={`rounded-[6px] border ${borderMain} ${surfaceRaised} p-4 font-mono-code text-xs space-y-2.5`}>
											<div className={`flex items-center justify-between text-[10px] uppercase tracking-[0.16em] ${accentBlue}`}>
												<span>05 // TECHNOLOGIES &amp; UTILITIES</span>
												<span>STACK</span>
											</div>

											<div className="flex flex-wrap gap-1.5">
												{project.technologies.map((tech) => (
													<span
														key={tech}
														className={`rounded-[2px] border ${borderSubtle} ${surfaceSubtle} px-2 py-0.5 text-[11px] ${textPrimary}`}
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</article>
						);
					})}
				</div>

				{/* Section Footer Summary Bar */}
				<div
					className={`mt-12 border-t ${borderMain} pt-6 flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs ${textMuted}`}
				>
					<div className="flex items-center gap-2">
						<Sparkles className={`h-3.5 w-3.5 ${iconBlue}`} />
						<span>{'// END_OF_PROJECTS'}</span>
					</div>
					<div className={textSecondary}>
						{projectsData.length} BUILDS · PUBLIC SOURCE REPOSITORIES
					</div>
				</div>
			</div>
		</section>
	);
}
