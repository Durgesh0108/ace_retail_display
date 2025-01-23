"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/products";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="text-xl font-bold text-gray-800">
					<img src="/img/LOGO.png" alt="Logo" className="h-16" />
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex space-x-12 text-xl">
					<Link
						href="/"
						className="text-gray-700 hover:text-gray-900"
					>
						Home
					</Link>
					<Link
						href="/aboutus"
						className="text-gray-700 hover:text-gray-900"
					>
						About Us
					</Link>
					<div className="relative group">
						{/* Products Dropdown */}
						<Link href={"/category"}>
							<button className="text-gray-700 hover:text-gray-900">
								Products
							</button>
						</Link>

						{/* Dropdown: Only visible on hover */}
						<div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
							{categories.map((category) => (
								<Link
									key={category.slug}
									href={`/category/${category.slug}`}
									className="block px-4 py-2 hover:bg-gray-100 text-gray-700 text-[16px]"
								>
									{category.name}
								</Link>
							))}
						</div>
					</div>

					<Link
						href="/case-study"
						className="text-gray-700 hover:text-gray-900"
					>
						Case Study
					</Link>
					<Link
						href="/contact-us"
						className="text-gray-700 hover:text-gray-900"
					>
						Contact Us
					</Link>
				</nav>

				{/* Contact Us Button */}
				<Link href="/EnquireNow" className="hidden lg:block">
					<Button className="bg-[#008ba8] hover:bg-[#008ba8] text-white px-6 py-3 rounded-md text-lg font-semibold hover:opacity-90 transition">
						Enquire Now
					</Button>
				</Link>

				{/* Hamburger Icon */}
				<button
					className="lg:hidden flex items-center"
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				>
					<span className="material-icons text-gray-700 text-3xl">
						<Menu />
					</span>
				</button>
			</div>

			{/* Mobile Sidebar */}
			<div
				className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform ${
					isSidebarOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 z-40`}
			>
				<div className="flex items-center justify-between px-4 py-4">
					<Link href="/" className="text-xl font-bold text-gray-800">
						<img src="/img/LOGO.png" alt="Logo" className="h-16" />
					</Link>
					<button
						className="text-gray-700 text-3xl"
						onClick={() => setIsSidebarOpen(false)}
					>
						<X />
					</button>
				</div>
				<nav className="flex flex-col space-y-4 px-4">
					<Link
						href="/"
						className="text-gray-700 hover:text-gray-900"
						onClick={() => setIsSidebarOpen(false)}
					>
						Home
					</Link>
					<Link
						href="/aboutus"
						className="text-gray-700 hover:text-gray-900"
						onClick={() => setIsSidebarOpen(false)}
					>
						About Us
					</Link>
					<Accordion type="single" collapsible>
						<AccordionItem
							value="categories"
							className="border-none"
						>
							<AccordionTrigger className="text-gray-700 hover:text-gray-900  py-0">
								<Link href={"/category"}>Products</Link>
							</AccordionTrigger>
							<AccordionContent>
								{categories.map((category) => (
									<Link
										key={category.slug}
										href={`/category/${category.slug}`}
										className="block py-1 px-4 text-gray-700 hover:text-gray-900"
										onClick={() => setIsSidebarOpen(false)}
									>
										{category.name}
									</Link>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Link
						href="/contact-us"
						className="text-gray-700 hover:text-gray-900"
						onClick={() => setIsSidebarOpen(false)}
					>
						Contact Us
					</Link>
					<Link
						href="/case-study"
						className="text-gray-700 hover:text-gray-900"
						onClick={() => setIsSidebarOpen(false)}
					>
						Case Study
					</Link>

					{/* Accordion for Categories */}

					<div className="px-4 mt-4 lg:hidden">
						<Link
							href="/EnquireNow"
							onClick={() => setIsSidebarOpen(false)}
						>
							<Button className="bg-[#008ba8] hover:bg-[#008ba8] text-white w-full py-3 rounded-md text-lg font-semibold hover:opacity-90 transition">
								Enquire Now
							</Button>
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
}
