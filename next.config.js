/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				pathname: '**',
			},
		],
	},
	webpack(config) {
		config.experiments = {
			...config.experiments,
			topLevelAwait: true,
		};
		return config;
	},
	async headers() {
		return [
			{
				source: '/:all*(svg|jpg|png)',
				locale: false,
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=0, must-revalidate',
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
