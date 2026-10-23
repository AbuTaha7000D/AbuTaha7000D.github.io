import { Project } from '@/types';

export const projectsData: Project[] = [
	{
		id: 'superstore-sales-analysis',
		title: 'Superstore Sales & Profitability Analysis',
		subtitle: 'Personal Project | Data Analysis',
		description:
			'Analyzed 10,194 order lines and 5,111 orders to investigate sales performance, profitability, discount patterns, and return rates across a retail superstore dataset.',
		problem:
			'The dataset contained multiple interrelated dimensions — product categories, regional segments, discount tiers, and return flags — with no consolidated view of which combinations were associated with lower profitability or higher return rates.',
		whatIBuilt:
			'A reproducible Python and SQL analysis pipeline that loads the dataset into SQLite, runs structured queries to compute KPIs (revenue, profit margin, discount impact, return rate), and produces four validated Matplotlib charts covering monthly sales trends, category profitability, profit margin by discount band, and return rate by region.',
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
			'Produced four reproducible Matplotlib charts covering monthly sales trends, category profitability, profit margin by discount band, and return rate by region.',
			'Identified high-discount bands with negative aggregate profit margins through SQL aggregation over SQLite.',
			'Documented all analytical findings and query logic for full reproducibility.',
		],
		github: 'https://github.com/AbuTaha7000D/salesAnalysis',
	},
	{
		id: 'customer-retention-analysis',
		title: 'Customer Retention & RFM Analysis',
		subtitle: 'Personal Project | Data Analysis',
		description:
			'Analyzed customer retention, repeat purchasing, RFM segmentation, and cohort retention on the UCI Online Retail dataset using Python, SQL, and SQLite.',
		problem:
			'The UCI Online Retail data is raw transaction-level data with missing CustomerIDs, cancellations and returns, duplicate rows, and partial first and last months, so customer retention and value could not be measured without explicit, documented definitions for populations, monetary value, and observation windows.',
		whatIBuilt:
			'A two-stage Python pipeline (data preparation and SQLite loading) followed by six ordered, read-only SQL analyses covering data exploration, customer purchase summaries, RFM scoring, calendar-month cohort retention, and business findings, plus a script that renders four charts reconciled against the SQL results.',
		technologies: ['Python', 'SQL', 'SQLite', 'Pandas', 'NumPy', 'Matplotlib', 'openpyxl'],
		relevantConcepts: [
			'RFM Segmentation',
			'Cohort Retention Analysis',
			'Repeat Purchase Analysis',
			'Data Quality Flagging & Validation',
			'Methodology Documentation',
			'Reproducible Analytical Workflows',
		],
		highlights: [
			'Built a reproducible pipeline where the preparation script adds quality flags and Gross Purchase Value and validates against verified audit counts, and the loading script rebuilds the SQLite table with SQL-level validation checks.',
			'Wrote six ordered, read-only SQL analyses covering data exploration, customer purchase summaries, RFM scoring diagnostics and scoring, cohort retention, and business findings.',
			'Produced a calendar-month cohort retention matrix that treats unobservable cohort-age cells as NULL/NA rather than zero.',
			'Generated four charts (customer value concentration, RFM score distributions, cohort retention heatmap, and monthly new vs. repeat active customers) reconciled against SQL results.',
			'Documented methodology choices: gross purchase value without netting returns, missing CustomerIDs excluded without imputation, duplicates flagged rather than deleted, and aggregate-only published results.',
		],
		github: 'https://github.com/AbuTaha7000D/customer-retention-analysis',
	},
	{
		id: 'olist-ecommerce-data-pipeline',
		title: 'Olist E-Commerce Data Pipeline',
		subtitle: 'Personal Project | Data Analysis & Data Engineering',
		description:
			'Built a reproducible PostgreSQL and dbt pipeline for the nine-table Olist Brazilian e-commerce dataset, with contract-based validation, dimensional marts, and reconciliation tests.',
		problem:
			'The source is a collection of related CSV files with imperfect geolocation and category coverage. Reliable analysis requires validating the snapshot and its relationships, preserving consistent raw data on failures, and defining tested analytical models.',
		whatIBuilt:
			'A Python ingestion pipeline that verifies the pinned archive checksum, safely extracts and validates all nine CSVs, and transactionally replaces PostgreSQL raw tables while recording run status and counts. A dbt project builds nine staging views and nine analytical marts with data-quality and reconciliation tests.',
		technologies: ['Python', 'PostgreSQL', 'SQL', 'dbt', 'Pytest', 'Podman Compose'],
		relevantConcepts: [
			'Contract-Driven Data Validation',
			'Transactional Snapshot Ingestion',
			'Dimensional Modeling',
			'Data Quality & Reconciliation',
			'Ingestion Ledger & Failure Handling',
			'Database Write Safety',
			'Reproducible Data Workflows',
		],
		highlights: [
			'Validated and loaded 1,526,922 rows across nine source tables with matching source and database counts.',
			'Built 18 dbt models and ran 255 data tests, including reconciliation checks across orders, items, payments, reviews, and geolocation.',
			'Used transactional snapshot replacement so a failed load rolls back raw-table changes; recorded ingestion status and per-table counts in PostgreSQL.',
			'Added guarded local orchestration that targets warehouse_test, verifies the source archive, and runs ingestion and dbt tests; production writes require explicit authorization.',
		],
		github: 'https://github.com/AbuTaha7000D/ecommerce-data-pipeline',
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
			'A Go CLI toolkit consisting of three dedicated utilities (addch, rmch, getch) that parse human-readable chapter syntax and validate timestamps. It adds, removes, and extracts chapters natively for ISO-BMFF (MP4/M4A/M4V/MOV/M4B) and Matroska (MKV/WebM/MKA/MK3D, including legacy ftyp-less QuickTime) containers without re-encoding or external tools; for other containers, it generates FFMETADATA1 internally and uses FFmpeg/FFprobe for stream-copy remuxing.',
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
			'Implemented native chapter embedding and removal for ISO-BMFF and Matroska containers without re-encoding, with FFmpeg stream-copy remuxing as a fallback for other containers.',
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