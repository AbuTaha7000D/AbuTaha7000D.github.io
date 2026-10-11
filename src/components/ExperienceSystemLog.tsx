'use client';

import React from 'react';
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
							<span>{'// EXPERIENCE'}</span>
						</div>
						<div className="hidden sm:flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
							<span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6]" />
							<span>OPERATIONAL SYSTEMS &amp; DATA MANAGEMENT</span>
						</div>
					</div>

					<h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.1] text-[var(--text-primary)]">
						Applied Operational Experience
					</h2>

					<p className="mt-3.5 max-w-2xl text-[1rem] sm:text-[1.0625rem] leading-relaxed text-[var(--text-muted)]">
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
								className="rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm overflow-hidden"
							>
								{/* Entry Header Console Bar */}
								<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-color)] bg-[var(--bg-soft)] px-5 py-3">
									<div className="flex items-center gap-3">
										<span className="font-mono-code text-xs font-semibold text-[#1d4ed8] dark:text-[#60a5fa]">
											{`[${entryNum}]`}
										</span>
										<span className="font-mono-code text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
											RECORD_ID: {job.id.replace(/-/g, '_')}
										</span>
									</div>

									<div className="flex items-center gap-3 font-mono-code text-[11px] uppercase tracking-[0.14em]">
										<span className={`hidden sm:flex items-center gap-1.5 ${isCurrent ? 'text-[#1d4ed8] dark:text-[#60a5fa] font-medium' : 'text-[var(--text-muted)]'}`}>
											{isCurrent && <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6] animate-pulse" />}
											{isCurrent ? 'STATUS: CURRENT' : 'STATUS: COMPLETED'}
										</span>
										<span className="hidden sm:inline text-[var(--text-muted)]">/</span>
										<span className="rounded-[3px] border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] text-[#1d4ed8] dark:text-[#60a5fa]">
											{isRemote ? 'REMOTE OPERATIONS' : 'ON-SITE OPERATIONS'}
										</span>
									</div>
								</div>

								{/* Main Content: Two-column asymmetrical layout */}
								<div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1.18fr_1fr] gap-8 lg:gap-12 items-start">
									{/* Column 1: Role, Organization, Narrative, and Responsibilities */}
									<div className="space-y-6 min-w-0">
										<div>
											<h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.025em] leading-snug text-[var(--text-primary)]">
												{job.role}
											</h3>

											<div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono-code text-xs">
												<span className="flex items-center gap-1.5 text-[var(--text-primary)] font-medium">
													<Building2 className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" />
													{job.company}
												</span>
												<span className="text-[var(--text-muted)]">/</span>
												<span className="flex items-center gap-1.5 text-[var(--text-muted)]">
													<MapPin className="h-3.5 w-3.5" />
													{job.location}
												</span>
												<span className="text-[var(--text-muted)]">/</span>
												<span className="flex items-center gap-1.5 text-[#1d4ed8] dark:text-[#60a5fa]">
													<Calendar className="h-3.5 w-3.5" />
													{job.period}
												</span>
											</div>
										</div>

										{/* High-level Summary Narrative */}
										<p className="text-[0.9375rem] sm:text-[1rem] leading-relaxed text-[var(--text-muted)]">
											{job.summary}
										</p>

										{/* Core Operational Responsibilities */}
										<div className="pt-2">
											<div className="flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-color)] font-mono-code text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
												<span>CORE RESPONSIBILITIES &amp; EXECUTION</span>
												<span>{job.highlights.length} KEY AREAS</span>
											</div>

											<ul className="space-y-3">
												{job.highlights.map((point, j) => {
													const IconComponent = highlightIcons[j % highlightIcons.length];

													return (
														<li
															key={j}
															className="rounded-[4px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-3.5 transition-colors duration-300 hover:border-[#3b82f6]/40"
														>
															<div className="flex items-start gap-3">
																<div className="mt-0.5 shrink-0 p-1.5 rounded-[3px] bg-[var(--bg-primary)] border border-[var(--border-color)]">
																	<IconComponent className="h-3.5 w-3.5 text-[#2563eb] dark:text-[#3b82f6]" />
																</div>
																<p className="text-xs sm:text-[0.875rem] leading-relaxed text-[var(--text-secondary)]">
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
										<div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-soft)] p-5 space-y-4">
											<div className="flex items-center justify-between gap-x-2 pb-2.5 border-b border-[var(--border-color)] font-mono-code text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
												<span className="flex items-center gap-1.5">
													<ShieldCheck className="h-3 w-3 text-[#2563eb] dark:text-[#3b82f6]" />
													{manifest.title}
												</span>
												<span className="text-[#1d4ed8] dark:text-[#60a5fa] font-semibold">ROLE SUMMARY</span>
											</div>

											<div className="space-y-3 font-mono-code text-xs">
												<div className="space-y-1">
													<div className="text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
														PRIMARY DOMAIN
													</div>
													<div className="text-[var(--text-primary)] font-medium text-[11px] sm:text-xs">
														{manifest.domain}
													</div>
												</div>

												<div className="space-y-1 pt-2.5 border-t border-[var(--border-color)]/60">
													<div className="text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
														DATA &amp; TRACKING PRACTICE
													</div>
													<div className="text-[var(--text-secondary)] text-[11px] sm:text-xs">
														{manifest.dataPractice}
													</div>
												</div>

												<div className="space-y-1 pt-2.5 border-t border-[var(--border-color)]/60">
													<div className="text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
														INFRASTRUCTURE &amp; SYSTEMS
													</div>
													<div className="text-[var(--text-secondary)] text-[11px] sm:text-xs">
														{manifest.infrastructure}
													</div>
												</div>

												<div className="space-y-1 pt-2.5 border-t border-[var(--border-color)]/60">
													<div className="text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
														ENGINEERING TAKEAWAY
													</div>
													<div className="text-[var(--text-muted)] text-[11px] sm:text-xs leading-relaxed">
														{manifest.takeaway}
													</div>
												</div>
											</div>

											<div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center justify-between font-mono-code text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
												<span>LOCATION: {job.location.toUpperCase()}</span>
												<span className="text-[#15803d] dark:text-emerald-400 font-semibold">
													{manifest.statusBadge}
												</span>
											</div>
										</div>

										{/* Grounded Engineering Takeaways Bar */}
										<div className="rounded-[6px] border border-[var(--border-color)] bg-[var(--bg-card)] p-4 font-mono-code text-xs space-y-2.5">
											<div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
												<Sparkles className="h-3 w-3 text-[#2563eb] dark:text-[#3b82f6]" />
												<span>TRANSFERABLE DATA CAPABILITIES</span>
											</div>

											<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
												{manifest.capabilities.map((cap, cIdx) => (
													<div
														key={cIdx}
														className="p-2 rounded-[3px] border border-[var(--border-color)]/60 bg-[var(--bg-soft)] flex items-center gap-2"
													>
														<CheckCircle2 className="h-3 w-3 text-[#2563eb] dark:text-[#3b82f6] shrink-0" />
														<span className="text-[var(--text-secondary)]">{cap}</span>
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
