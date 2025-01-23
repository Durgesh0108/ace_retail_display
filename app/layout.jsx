import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/views/Header";
import Footer from "@/components/views/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Ace Retail Display",
	description: "Ace Retail Display",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col `}
			>
				<Header />
				<div className="py-24">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
