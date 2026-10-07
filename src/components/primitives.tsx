import type { ReactNode } from 'react';

/**
 * A small labeled node used in diagrams and section connectors.
 * Renders a dot with a label — active nodes pulse with accent color.
 */
export function Node({
	label,
	active = false,
	className = '',
}: {
	label: string;
	active?: boolean;
	className?: string;
}) {
	return (
		<span
			className={
				'inline-flex items-center gap-1.5 mono text-[10px] uppercase tracking-[0.16em] ' +
				(active ? 'text-accent' : 'text-faint') +
				' ' +
				className
			}
		>
			<span
				className={
					'h-1.5 w-1.5 rounded-full ' +
					(active ? 'bg-accent animate-pulse-node' : 'bg-[color:var(--border)]')
				}
			/>
			{label}
		</span>
	);
}

/**
 * Animated dashed connector between pipeline stages. Renders as a vertical
 * line with a downward-moving dash and small port circles at each end.
 */
export function FlowConnector({ label }: { label?: string }) {
	return (
		<div className="relative mx-auto h-16 w-px">
			<span className="absolute -left-1 -top-0.5 h-2 w-2 rounded-full bg-accent/70" />
			<svg
				className="absolute inset-0 h-full w-px"
				width="1"
				height="100%"
				preserveAspectRatio="none"
			>
				<line
					x1="0.5"
					y1="0"
					x2="0.5"
					y2="100%"
					className="flow-line"
					strokeWidth="1"
				/>
			</svg>
			<span className="absolute -left-1 -bottom-0.5 h-2 w-2 rounded-full bg-accent" />
			{label && (
				<span className="absolute left-3 top-1/2 -translate-y-1/2 mono text-[10px] uppercase tracking-[0.16em] text-faint whitespace-nowrap">
					{label}
				</span>
			)}
		</div>
	);
}

/**
 * A thin metadata label — the little `field: value` tags scattered around.
 */
export function Meta({
	k,
	v,
	className = '',
}: {
	k: string;
	v: ReactNode;
	className?: string;
}) {
	return (
		<span
			className={
				'mono text-[10px] uppercase tracking-[0.14em] text-faint ' + className
			}
		>
			{k}: <span className="text-muted">{v}</span>
		</span>
	);
}

/**
 * Card wrapper with the technical bordered look.
 */
export function Panel({
	children,
	className = '',
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className={'rounded-lg border border-line bg-card ' + className}>
			{children}
		</div>
	);
}

/**
 * A table-style header bar used on dataset-like cards.
 */
export function PanelHeader({
	title,
	meta,
	right,
}: {
	title: string;
	meta?: string;
	right?: ReactNode;
}) {
	return (
		<div className="flex items-center justify-between gap-3 border-b border-soft px-4 py-2.5">
			<div className="flex items-center gap-2 min-w-0">
				<span className="h-2 w-2 rounded-sm bg-accent/80" />
				<span className="mono text-[11px] uppercase tracking-[0.16em] text-muted truncate">
					{title}
				</span>
				{meta && (
					<span className="mono text-[10px] text-faint truncate">{'// '}{meta}</span>
				)}
			</div>
			{right && <div className="shrink-0">{right}</div>}
		</div>
	);
}
