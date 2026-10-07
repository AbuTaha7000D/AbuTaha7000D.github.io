import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { profileData } from '@/data/profile';

const geist = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans',
	display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
	display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-space-grotesk',
	display: 'swap',
});

const openGraphImage = `${profileData.portfolio}og.png`;

export const metadata: Metadata = {
	metadataBase: new URL('https://abutaha7000d.github.io/'),
	alternates: {
		canonical: profileData.portfolio,
	},
	title: {
		default: `Mahmoud Ehab — Data Analyst & Data Engineer`,
		template: `%s | Mahmoud Ehab`,
	},
	description:
		'Portfolio of Mahmoud Ehab — Data Analyst & Data Engineer. Specializing in Python, SQL, data processing workflows, ETL pipelines, and automation.',
	keywords: [
		'Mahmoud Ehab',
		'Data Analyst',
		'Data Engineer',
		'SQL',
		'Python',
		'Pandas',
		'Data Processing',
		'ETL Pipelines',
		'Data Pipelines',
		'Data Analytics',
		'PostgreSQL',
		'Relational Databases',
		'Automation',
		'Linux',
		'Port Said Egypt',
	],
	authors: [{ name: profileData.name }],
	creator: profileData.name,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: profileData.portfolio,
		siteName: 'Mahmoud Ehab — Data Analyst & Data Engineer',
		title: 'Mahmoud Ehab — Data Analyst & Data Engineer',
		description:
			'Portfolio of Mahmoud Ehab — Data Analyst & Data Engineer. Specializing in Python, SQL, data processing workflows, ETL pipelines, and automation.',
		images: [
			{
				url: openGraphImage,
				width: 1200,
				height: 630,
				alt: 'Mahmoud Ehab — Data Analyst & Data Engineer portfolio',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Mahmoud Ehab — Data Analyst & Data Engineer',
		description:
			'Portfolio of Mahmoud Ehab — Data Analyst & Data Engineer. Specializing in Python, SQL, data processing workflows, ETL pipelines, and automation.',
		images: [openGraphImage],
	},
	robots: {
		index: true,
		follow: true,
	},
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="theme-color" content="#0b0e14" />
				<Script id="theme-init" strategy="beforeInteractive">
					{`
						(function() {
							try {
								var storedTheme = localStorage.getItem('theme');
								var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
								if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
									document.documentElement.classList.add('dark');
								}
							} catch (error) {}
						})();
					`}
				</Script>
			</head>
			<body
				className={`${geist.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased min-h-screen`}
			>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:rounded focus:border focus:border-[var(--border-accent)] focus:bg-[var(--bg-card)] focus:px-4 focus:py-2 focus:font-mono-code focus:text-xs focus:font-bold focus:text-[var(--text-primary)]"
				>
					Skip to main content
				</a>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
