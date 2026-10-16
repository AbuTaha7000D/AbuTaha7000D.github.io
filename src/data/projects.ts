import { Project } from '@/types';

export const projectsData: Project[] = [
	{
		id: 'superstore-sales-analysis',
		title: 'Superstore Sales Analysis',
		subtitle: 'Personal Project | Data Analysis',
		description:
			'Analyzed 10,194 order lines and 5,111 orders to investigate sales performance, profitability, discount patterns, and return rates across a retail superstore dataset.',
		problem:
			'The dataset contained multiple interrelated dimensions — product categories, regional segments, discount tiers, and return flags — with no consolidated view of which combinations drove profit losses or elevated return rates.',
		whatIBuilt:
			'A reproducible Python and SQL analysis pipeline that loads the dataset into SQLite, runs structured queries to compute KPIs (revenue, profit margin, discount impact, return rate), and produces four validated Matplotlib charts covering sales trends, category profitability, discount distribution, and regional performance.',
		technologies: ['SQL', 'Python', 'Pandas', 'SQLite', 'Matplotlib'],
		relevantConcepts: [
			'Exploratory Data Analysis (EDA)',
			'SQL Aggregation & Window Functions',
			'KPI Definition & Validation',
			'Discount & Profitability Segmentation',
			'Return Rate Analysis',
			'Reproducible Analytical Workflows',
		],
		highlights: [
			'Processed 10,194 order lines and 5,111 distinct orders with validated business KPIs including revenue, profit margin, and return rate.',
			'Produced four reproducible Matplotlib charts covering sales trends, category profitability, discount distribution, and regional performance.',
			'Identified high-discount segments with negative average profit margins through SQL aggregation and Pandas groupby analysis.',
			'Documented all analytical findings and query logic for full reproducibility.',
		],
		github: 'https://github.com/AbuTaha7000D/salesAnalysis',
	},
	{
		id: 'linux-postinstall',
		title: 'Linux Post-Install Script',
		subtitle: 'Personal Project | Bash Automation',
		description:
			'A modular Bash automation script that streamlines environment setup, application provisioning, and GNOME configuration after fresh Linux installs.',
		problem:
			'Setting up a new Linux installation requires executing dozens of repetitive manual terminal commands to configure repositories, desktop themes, developer tooling, and fonts.',
		whatIBuilt:
			'A comprehensive Bash automation script that configures desktop settings, installs essential software packages across distributions, and applies themes and developer fonts automatically.',
		technologies: ['Bash', 'Linux (Ubuntu, Fedora)', 'GNOME CLI', 'Shell'],
		relevantConcepts: [
			'Bash Scripting & Shell Automation',
			'Linux System Administration',
			'Package Management Automation (APT, DNF, Flatpak)',
			'Desktop Environment Configuration',
			'Defensive Shell Scripting',
		],
		highlights: [
			'Automated post-installation software provisioning across multiple Linux distributions.',
			'Configured GNOME desktop settings, shell customizations, font installations, and terminal profiles.',
			'Reduced repetitive manual configuration time through structured, reusable shell routines.',
		],
		github: 'https://github.com/AbuTaha7000D/linux-postinstall',
	},
	{
		id: 'addch',
		title: 'addch',
		subtitle: 'Personal Project | Go CLI Toolkit',
		description:
			'A cross-platform Go command-line suite for lossless chapter embedding, removal, and extraction in video files.',
		problem:
			'Embedding chapter markers into video files without re-encoding typically requires crafting complex, non-intuitive FFmpeg metadata syntax by hand, risking errors and broken timestamps.',
		whatIBuilt:
			'A Go CLI toolkit composed of three dedicated utilities (addch, rmch, getch) that parse human-readable chapter syntax, validate timestamps, generate FFMETADATA1 files internally, and perform stream-copy remuxing with FFmpeg/FFprobe.',
		technologies: ['Go (Golang)', 'FFmpeg', 'FFprobe', 'Shell / Make'],
		relevantConcepts: [
			'Go CLI Tool Development',
			'File Parsing & Timestamp Validation',
			'Lossless Stream-Copy Remuxing',
			'Subprocess Orchestration (FFmpeg/FFprobe)',
			'Error Handling & Defensive Validation',
			'Cross-Platform Architecture (Linux, macOS, Windows)',
		],
		highlights: [
			'Engineered a custom chapter file parser supporting millisecond precision, timestamp chronological validation, and UTF-8 BOM handling.',
			'Used FFmpeg stream-copy remuxing to add chapters without re-encoding the video or audio streams.',
			'Implemented clean 3-part architecture: addch (embed), rmch (strip), and getch (extract to stdout or sidecar).',
			'Provided test suites (`make test`) and static analysis (`make vet`) covering unit and FFmpeg integration workflows.',
		],
		github: 'https://github.com/AbuTaha7000D/addch',
	},
	{
		id: 'downv',
		title: 'DownV',
		subtitle: 'Personal Project | Python CLI Tool',
		description:
			'A modular Python command-line utility for downloading media streams, extracting audio, and tracking local download history.',
		problem:
			'Downloading media across different formats and resolutions, extracting standalone audio, and keeping track of downloaded files typically requires manual bookkeeping and fragmented tooling.',
		whatIBuilt:
			'A Python command-line tool built on top of yt-dlp and FFmpeg that downloads video/audio streams, provides interactive quality selection, detects duplicate downloads, maintains a searchable local history, and supports optional chapter embedding.',
		technologies: ['Python', 'yt-dlp', 'FFmpeg', 'Pytest'],
		relevantConcepts: [
			'Python CLI Development',
			'Media Metadata Extraction & Parsing',
			'Media Stream Processing & Audio Extraction',
			'Local History State Tracking & Query Filtering',
			'Process Automation & Subprocess Execution',
			'Automated Testing (Pytest)',
		],
		highlights: [
			'Constructed a clean CLI with interactive quality selection, audio extraction, and batch playlist support.',
			'Implemented duplicate detection and a persistent local download history with search, count, and inspection commands.',
			'Integrated FFmpeg process pipelines for media/audio stream conversion and metadata handling.',
			'Added automated unit tests with Pytest to verify argument parsing and core utility routines.',
		],
		github: 'https://github.com/AbuTaha7000D/downv',
	},
];
