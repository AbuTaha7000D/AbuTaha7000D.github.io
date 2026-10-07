/** @type {import('next').NextConfig} */
const nextConfig = {
	// Emit a fully static export into the `out/` directory.
	// Required for GitHub Pages (static file hosting — no Node.js runtime).
	output: 'export',

	// This repository is deployed as a project site under /mahmoudehab.
	basePath: '/mahmoudehab',

	// Append trailing slashes so each route becomes out/<route>/index.html.
	// Prevents 404s when GitHub Pages serves directory URLs.
	trailingSlash: true,

	// next/image optimisation requires a server; disable it for static export.
	images: {
		unoptimized: true,
	},
};

export default nextConfig;

