/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["res.cloudinary.com"],
		unoptimized: true, // Allowed domains for optimized images
	},
	output: "export",
};

export default nextConfig;
