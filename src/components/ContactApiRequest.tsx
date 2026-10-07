'use client';

import React, { useState } from 'react';
import { profileData } from '@/data/profile';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';
import { useTheme } from '@/components/ThemeProvider';
import {
	ArrowUpRight,
	BarChart3,
	CheckCircle2,
	Code2,
	MapPin,
	Send,
} from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactApiRequest() {
	const { theme } = useTheme();
	const dark = theme === 'dark';
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [status, setStatus] = useState<FormStatus>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const sectionBg = dark ? 'bg-[#0b0e14]' : 'bg-[var(--bg-primary)]';
	const border = dark ? 'border-[#212836]' : 'border-[var(--border-color)]';
	const divider = dark ? 'border-[#212836]/70' : 'border-[var(--border-color)]';
	const surface = dark ? 'bg-[#10141d]' : 'bg-[var(--bg-card)]';
	const surfaceRaised = dark ? 'bg-[#131824]' : 'bg-[var(--bg-soft)]';
	const inputSurface = dark ? 'bg-[#0e121a]' : 'bg-[var(--bg-primary)]';
	const inputBorder = dark ? 'border-[#212836]' : 'border-[var(--border-color)]';
	const heading = dark ? 'text-white' : 'text-[var(--text-primary)]';
	const primary = dark ? 'text-[#e6e9ef]' : 'text-[var(--text-primary)]';
	const secondary = dark ? 'text-[#c7cdd9]' : 'text-[var(--text-secondary)]';
	const muted = dark ? 'text-[#8a93a6]' : 'text-[var(--text-muted)]';
	const accent = dark ? 'text-[#60a5fa]' : 'text-[#1d4ed8]';
	const iconAccent = dark ? 'text-[#60a5fa]' : 'text-[#2563eb]';
	const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2';

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.message) return;

		setStatus('submitting');
		setErrorMessage('');
		try {
			// GitHub Pages is a static host — POST directly to Formspree from the browser.
			const res = await fetch('https://formspree.io/f/mzzjknob', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					subject: formData.subject || 'Portfolio contact',
					message: formData.message,
				}),
			});

			if (res.ok) {
				setStatus('success');
				setFormData({ name: '', email: '', subject: '', message: '' });
			} else {
				const data = await res.json().catch(() => null);
				const detail =
					data?.errors?.[0]?.message ?? data?.error ?? 'Something went wrong. Please try again.';
				setStatus('error');
				setErrorMessage(detail);
			}
		} catch {
			setStatus('error');
			setErrorMessage('Network error. Please check your connection and try again.');
		}
	};

	const updateField = (field: keyof typeof formData, value: string) => {
		setFormData((current) => ({ ...current, [field]: value }));
		if (status === 'error') {
			setStatus('idle');
			setErrorMessage('');
		}
	};

	const inputClass = `w-full min-h-11 rounded-[4px] border ${inputBorder} ${inputSurface} px-3.5 py-2.5 text-sm ${primary} ${dark ? 'placeholder:text-[#8a93a6]' : 'placeholder:text-[var(--text-muted)]'} ${focusRing} focus-visible:ring-offset-2 ${dark ? 'focus-visible:ring-offset-[#10141d]' : 'focus-visible:ring-offset-white'} transition-colors`;
	const labelClass = `mb-1.5 block text-xs font-medium ${secondary}`;
	const socialLinkClass = `inline-flex min-h-11 items-center gap-2 border-b ${divider} py-2 font-mono-code text-xs uppercase tracking-[0.08em] ${secondary} transition-colors ${dark ? 'hover:text-[#60a5fa]' : 'hover:text-[#1d4ed8]'} hover:border-[#3b82f6]/50 ${focusRing} focus-visible:ring-offset-2 ${dark ? 'focus-visible:ring-offset-[#0b0e14]' : 'focus-visible:ring-offset-[var(--bg-primary)]'}`;

	return (
		<section
			id="contact"
			className={`relative border-b ${border} ${sectionBg} py-20 transition-colors duration-200 sm:py-24 lg:py-28`}
		>
			<div className="mx-auto max-w-[1200px] px-5 lg:px-8">
				<header className={`mb-10 border-b ${border} pb-7 sm:mb-12 sm:pb-8 lg:mb-14`}>
					<div className="mb-3 flex flex-wrap items-center justify-between gap-3">
						<p className={`font-mono-code text-[11px] uppercase tracking-[0.2em] sm:text-xs ${accent}`}>
							{'// CONTACT'}
						</p>
						<p className={`hidden items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.16em] sm:flex ${muted}`}>
							<span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" aria-hidden="true" />
							Direct channels · message form
						</p>
					</div>
					<h2
						className={`text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] ${heading}`}
						style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
					>
						Let’s Connect
					</h2>
					<p className={`mt-3.5 max-w-2xl text-base leading-relaxed ${muted}`}>
						Open to entry-level Data Analyst &amp; Data Engineer opportunities. Reach out via direct channels or send a message below.
					</p>
				</header>

				<div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
					<div className="min-w-0 lg:col-span-5">
						<div className={`border-t-2 border-[#3b82f6] pt-4`}>
							<p className={`font-mono-code text-[10px] uppercase tracking-[0.16em] ${accent}`}>
								Primary channel
							</p>
							<a
								href={`mailto:${profileData.email}`}
								aria-label={`Email Mahmoud at ${profileData.email}`}
								className={`group mt-2 inline-flex max-w-full items-start gap-2 text-lg font-semibold leading-snug tracking-[-0.02em] ${primary} transition-colors ${dark ? 'hover:text-[#60a5fa]' : 'hover:text-[#1d4ed8]'} ${focusRing} focus-visible:ring-offset-4 ${dark ? 'focus-visible:ring-offset-[#0b0e14]' : 'focus-visible:ring-offset-[var(--bg-primary)]'} sm:text-xl`}
							>
								<span className="break-all">{profileData.email}</span>
								<ArrowUpRight className={`mt-1 h-4 w-4 shrink-0 ${iconAccent}`} aria-hidden="true" />
							</a>
						</div>

						<dl className={`mt-7 border-y ${divider} py-5`}>
							<div>
								<dt className={`mb-1 flex items-center gap-2 font-mono-code text-[10px] uppercase tracking-[0.14em] ${muted}`}>
									<MapPin className={`h-3.5 w-3.5 ${iconAccent}`} aria-hidden="true" /> Location
								</dt>
								<dd className={`text-sm font-medium ${secondary}`}>{profileData.location}</dd>
							</div>
						</dl>

						<div className="mt-6">
							<p className={`mb-2 font-mono-code text-[10px] uppercase tracking-[0.16em] ${muted}`}>
								Other channels
							</p>
							<ul className="flex flex-wrap gap-x-5 gap-y-1">
								<li>
									<a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={socialLinkClass}>
										<LinkedinIcon className={`h-3.5 w-3.5 ${iconAccent}`} aria-hidden="true" /> LinkedIn
									</a>
								</li>
								<li>
									<a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={socialLinkClass}>
										<Code2 className={`h-3.5 w-3.5 ${iconAccent}`} aria-hidden="true" /> GitHub
									</a>
								</li>
								<li>
									<a href={profileData.kaggle} target="_blank" rel="noopener noreferrer" aria-label="Kaggle (opens in a new tab)" className={socialLinkClass}>
										<BarChart3 className={`h-3.5 w-3.5 ${iconAccent}`} aria-hidden="true" /> Kaggle
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className={`min-w-0 overflow-hidden rounded-[6px] border ${border} ${surface} lg:col-span-7`}>
						<div className={`border-b ${border} ${surfaceRaised} px-5 py-4 sm:px-6`}>
							<p className={`font-mono-code text-[10px] uppercase tracking-[0.16em] ${accent}`}>
								Contact form
							</p>
							<h3
								id="contact-form-title"
								className={`mt-1 text-xl font-semibold tracking-[-0.02em] ${heading}`}
								style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
							>
								Send a message
							</h3>
						</div>
						<form
							aria-labelledby="contact-form-title"
							onSubmit={handleSubmit}
							className="grid grid-cols-1 gap-x-5 gap-y-4 p-5 sm:grid-cols-2 sm:p-6"
						>
							<div>
								<label className={labelClass} htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
								<input
									id="contact-name"
									type="text"
									required
									value={formData.name}
									onChange={(e) => updateField('name', e.target.value)}
									placeholder="Your name"
									autoComplete="name"
									className={inputClass}
								/>
							</div>
							<div>
								<label className={labelClass} htmlFor="contact-email">Email <span aria-hidden="true">*</span></label>
								<input
									id="contact-email"
									type="email"
									required
									value={formData.email}
									onChange={(e) => updateField('email', e.target.value)}
									placeholder="you@example.com"
									autoComplete="email"
									className={inputClass}
								/>
							</div>
							<div className="sm:col-span-2">
								<label className={labelClass} htmlFor="contact-subject">Subject <span className={muted}>(optional)</span></label>
								<input
									id="contact-subject"
									type="text"
									value={formData.subject}
									onChange={(e) => updateField('subject', e.target.value)}
									placeholder="Optional subject"
									className={inputClass}
								/>
							</div>
							<div className="sm:col-span-2">
								<label className={labelClass} htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
								<textarea
									id="contact-message"
									required
									rows={4}
									value={formData.message}
									onChange={(e) => updateField('message', e.target.value)}
									placeholder="Tell me about the role or project..."
									autoComplete="off"
									className={`${inputClass} min-h-28 resize-y`}
								/>
							</div>
							<div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-1">
								<button
									type="submit"
									disabled={status === 'submitting'}
									className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] bg-[#2563eb] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-60 ${focusRing} focus-visible:ring-offset-2 ${dark ? 'focus-visible:ring-offset-[#10141d]' : 'focus-visible:ring-offset-white'}`}
								>
									{status === 'submitting' ? 'Sending…' : 'Send message'}
									{status === 'submitting' ? null : <Send className="h-4 w-4" aria-hidden="true" />}
								</button>
								{status === 'success' && (
									<p className={`flex items-center gap-1.5 text-sm font-medium ${dark ? 'text-[#6ee7b7]' : 'text-[#166534]'}`} role="status">
										<CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Message sent. Thank you.
									</p>
								)}
								{status === 'error' && (
									<p className={`text-sm font-medium ${dark ? 'text-[#fca5a5]' : 'text-[#b91c1c]'}`} role="alert">
										{errorMessage}
									</p>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
