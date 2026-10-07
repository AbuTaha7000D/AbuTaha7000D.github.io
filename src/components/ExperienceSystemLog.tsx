'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { experienceData } from '@/data/experience';
import {
	Building2,
	Calendar,
	MapPin,
	FileSpreadsheet,
	MonitorCheck,
	Network,
	AlertCircle,
	FileText,
	ShieldCheck,
	CheckCircle2,
	Sparkles,
	Radio,
	MessageSquare,
} from 'lucide-react';

export function ExperienceSystemLog() {
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

	// Highlight icons mapping for structured scannability
	const highlightIcons = [
		FileSpreadsheet,
		MonitorCheck,
		Network,
		AlertCircle,
		FileText,
		MessageSquare,
		Radio,
	];

	// Operational context manifests per role
	const jobManifests: Record<
		string,
		{
			title: string;
			domain: string;
			dataPractice: string;
			infrastructure: string;
			takeaway: string;
			statusBadge: string;
			capabilities: string[];
		}
	> = {
		'exp-freelance-yard': {
			title: 'OPERATIONAL_MANIFEST // FREELANCE_YARD',
			domain: 'Online Lecture Coordination & Session Support',
			dataPractice: 'Lecture schedules, attendance, and session requirements coordination',
			infrastructure: 'Online lecture environment and live session support',
			takeaway: 'Coordinates schedules and communication, supports lecture delivery, and handles technical or organizational session issues.',
			statusBadge: 'ACTIVE ROLE',
			capabilities: [
				'Schedule Coordination',
				'Live Session Delivery',
				'Technical Triage',
				'Cross-Team Communication',
			],
		},
		'exp-almentor': {
			title: 'OPERATIONAL_MANIFEST // ALMENTOR_EGYPT',
			domain: 'EdTech Training Operations & Cohort Logistics',
			dataPractice: 'Structured Spreadsheets (Microsoft Excel / Google Sheets) for student attendance, session schedules, and operational details',
			infrastructure: 'Device Readiness, Audio/Visual Presentation Systems, Network Connectivity, Classroom Diagnostics',
			takeaway: 'Hands-on experience managing operational data hygiene, resolving hardware/network incidents in real time, and maintaining consistent reporting cadences.',
			statusBadge: 'VERIFIED RECORD',
			capabilities: [
				'Data Organization',
				'System Diagnostics',
				'Logistics Coordination',
				'Status Reporting',
			],
		},
	};

	return (
		<section
			id="experience"
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
							<span>{'// EXPERIENCE'}</span>
						</div>
						<div className={`hidden sm:flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] ${textMuted}`}>
							<span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
							<span>OPERATIONAL SYSTEMS &amp; DATA MANAGEMENT</span>
						</div>
					</div>

					<h2
						className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.1] ${textHeading}`}
						style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
					>
						Applied Operational Experience
					</h2>

					<p className={`mt-3.5 max-w-2xl text-[1rem] sm:text-[1.0625rem] leading-relaxed ${textMuted}`}>
						Where technical problem-solving meets practical operational execution: tracking session datasets,
						coordinating technical workflows, and supporting instructional infrastructure.
					</p>
				</div>

				{/* Experience Entries List */}
				<div className="space-y-12">
					{experienceData.map((job, idx) => {
						const entryNum = String(idx + 1).padStart(2, '0');
						const isCurrent = job.period.toLowerCase().includes('present');
						const isRemote = job.location.toLowerCase().includes('remote');

						const manifest = jobManifests[job.id] ?? {
							title: `OPERATIONAL_MANIFEST // ${job.company.toUpperCase().replace(/\s+/g, '_')}`,
							domain: 'Technical Operations & Coordination',
							dataPractice: 'Operational Data Tracking & Management',
							infrastructure: 'System Environment & Diagnostics',
							takeaway: 'Operational execution and structured workflow maintenance.',
							statusBadge: isCurrent ? 'ACTIVE ROLE' : 'VERIFIED RECORD',
							capabilities: [
								'Operational Tracking',
								'Technical Coordination',
								'Issue Resolution',
								'Communication',
							],
						};

						return (
							<div
								key={job.id}
								className={`rounded-[6px] border ${borderMain} ${surfaceCard} shadow-sm overflow-hidden`}
							>
								{/* Entry Header Console Bar */}
								<div
									className={`flex flex-wrap items-center justify-between gap-3 border-b ${borderMain} ${surfaceRaised} px-5 py-3`}
								>
									<div className="flex items-center gap-3">
										<span className={`font-mono-code text-xs font-semibold ${accentBlue}`}>
											{`[${entryNum}]`}
										</span>
										<span className={`font-mono-code text-[11px] uppercase tracking-[0.16em] ${textSecondary}`}>
											RECORD_ID: {job.id.replace(/-/g, '_')}
										</span>
									</div>

									<div className="flex items-center gap-3 font-mono-code text-[11px] uppercase tracking-[0.14em]">
										<span className={`hidden sm:flex items-center gap-1.5 ${isCurrent ? accentBlue : textMuted}`}>
											{isCurrent && <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6] animate-pulse" />}
											{isCurrent ? 'STATUS: CURRENT' : 'STATUS: COMPLETED'}
										</span>
										<span className={`hidden sm:inline ${textMuted}`}>/</span>
										<span className={`rounded-[3px] border px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] ${badgeBg}`}>
											{isRemote ? 'REMOTE OPERATIONS' : 'ON-SITE OPERATIONS'}
										</span>
									</div>
								</div>

								{/* Main Content: Two-column asymmetrical layout */}
								<div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1.18fr_1fr] gap-8 lg:gap-12 items-start">
									{/* Column 1: Role, Organization, Narrative, and Responsibilities */}
									<div className="space-y-6 min-w-0">
										<div>
											<h3
												className={`text-2xl sm:text-3xl font-semibold tracking-[-0.025em] leading-snug ${textHeading}`}
												style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
											>
												{job.role}
											</h3>

											<div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono-code text-xs">
												<span className={`flex items-center gap-1.5 ${textPrimary} font-medium`}>
													<Building2 className={`h-3.5 w-3.5 ${iconBlue}`} />
													{job.company}
												</span>
												<span className={textMuted}>/</span>
												<span className={`flex items-center gap-1.5 ${textMuted}`}>
													<MapPin className="h-3.5 w-3.5" />
													{job.location}
												</span>
												<span className={textMuted}>/</span>
												<span className={`flex items-center gap-1.5 ${accentBlue}`}>
													<Calendar className="h-3.5 w-3.5" />
													{job.period}
												</span>
											</div>
										</div>

										{/* High-level Summary Narrative */}
										<p className={`text-[0.9375rem] sm:text-[1rem] leading-relaxed ${textMuted}`}>
											{job.summary}
										</p>

										{/* Core Operational Responsibilities */}
										<div className="pt-2">
											<div className={`flex items-center justify-between pb-2 mb-3 border-b ${borderDivider} font-mono-code text-[10px] uppercase tracking-[0.16em] ${textMuted}`}>
												<span>CORE RESPONSIBILITIES &amp; EXECUTION</span>
												<span>{job.highlights.length} KEY AREAS</span>
											</div>

											<ul className="space-y-3">
												{job.highlights.map((point, j) => {
													const IconComponent = highlightIcons[j % highlightIcons.length];

													return (
														<li
															key={j}
															className={`rounded-[4px] border ${borderMain} ${surfaceRaised} p-3.5 transition-colors duration-150 hover:border-[#3b82f6]/40`}
														>
															<div className="flex items-start gap-3">
																<div className={`mt-0.5 shrink-0 p-1.5 rounded-[3px] ${surfaceSubtle} border ${borderMain}`}>
																	<IconComponent className={`h-3.5 w-3.5 ${iconBlue}`} />
																</div>
																<p className={`text-xs sm:text-[0.875rem] leading-relaxed ${textSecondary}`}>
																	{point}
																</p>
															</div>
								</li>
													);
												})}
											</ul>
										</div>
									</div>

									{/* Column 2: Operational Manifest & Engineering Contribution Console */}
									<div className="space-y-5 min-w-0">
										<div className={`rounded-[6px] border ${borderMain} ${surfaceRaised} p-5 space-y-4`}>
							<div className={`flex items-center justify-between gap-x-2 pb-2.5 border-b ${borderDivider} font-mono-code text-[10px] uppercase tracking-[0.16em] ${textMuted}`}>
												<span className="flex items-center gap-1.5">
													<ShieldCheck className={`h-3 w-3 ${iconBlue}`} />
													{manifest.title}
												</span>
								<span className={accentBlue}>ROLE SUMMARY</span>
											</div>

											<div className="space-y-3 font-mono-code text-xs">
												<div className="space-y-1">
													<div className={`text-[10px] uppercase tracking-[0.12em] ${textMuted}`}>
														PRIMARY DOMAIN
													</div>
													<div className={`${textPrimary} font-medium text-[11px] sm:text-xs`}>
														{manifest.domain}
													</div>
												</div>

												<div className={`space-y-1 pt-2.5 border-t ${borderSubtle}`}>
													<div className={`text-[10px] uppercase tracking-[0.12em] ${textMuted}`}>
														DATA &amp; TRACKING PRACTICE
													</div>
													<div className={`${textSecondary} text-[11px] sm:text-xs`}>
														{manifest.dataPractice}
													</div>
												</div>

												<div className={`space-y-1 pt-2.5 border-t ${borderSubtle}`}>
													<div className={`text-[10px] uppercase tracking-[0.12em] ${textMuted}`}>
														INFRASTRUCTURE &amp; SYSTEMS
													</div>
													<div className={`${textSecondary} text-[11px] sm:text-xs`}>
														{manifest.infrastructure}
													</div>
												</div>

												<div className={`space-y-1 pt-2.5 border-t ${borderSubtle}`}>
													<div className={`text-[10px] uppercase tracking-[0.12em] ${textMuted}`}>
														ENGINEERING TAKEAWAY
													</div>
													<div className={`${textMuted} text-[11px] sm:text-xs leading-relaxed`}>
														{manifest.takeaway}
													</div>
												</div>
											</div>

											<div
												className={`mt-4 pt-3 border-t ${borderDivider} flex items-center justify-between font-mono-code text-[10px] uppercase tracking-[0.14em] ${textMuted}`}
											>
												<span>LOCATION: {job.location.toUpperCase()}</span>
												<span className="text-emerald-500 dark:text-emerald-400 font-medium">
													{manifest.statusBadge}
												</span>
											</div>
										</div>

										{/* Grounded Engineering Takeaways Bar */}
										<div className={`rounded-[6px] border ${borderMain} ${surfaceCard} p-4 font-mono-code text-xs space-y-2.5`}>
											<div className={`flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] ${textMuted}`}>
												<Sparkles className={`h-3 w-3 ${iconBlue}`} />
												<span>TRANSFERABLE DATA CAPABILITIES</span>
											</div>

											<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
												{manifest.capabilities.map((cap, cIdx) => (
													<div
														key={cIdx}
														className={`p-2 rounded-[3px] border ${borderSubtle} ${surfaceRaised} flex items-center gap-2`}
													>
														<CheckCircle2 className={`h-3 w-3 ${iconBlue} shrink-0`} />
														<span className={textSecondary}>{cap}</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
