import React from "react";
import { categories } from "@/data/products";
import Categories from "@/components/views/Categories";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "@/components/views/FAQ";

// Static generation of params
export async function generateStaticParams() {
	// Simulate fetching data for categories
	return categories.map((category) => ({ slug: category.slug }));
}

// Metadata for SEO
export const metadata = {
	title: "Category - Ace Retail Display",
	description: "Explore our range of Categories.",
};

export default function CategoryPage() {

	return (
		<>
			<div className="bg-[#008ca8]/20 h-48 p-8">
				<div className="text-center h-full flex flex-col md:flex-row justify-between items-center container mx-auto">
					<nav className="mt-4">
						<ul className="flex justify-center text-gray-600 space-x-2 text-sm">
							<li>
								<Link href="/">
									<p className="hover:text-[#008ba8]">Home</p>
								</Link>
							</li>
							<span>/</span>
							<li>Products</li>
						</ul>
					</nav>
					<h1 className="text-4xl font-bold text-gray-800">
						Products
					</h1>
				</div>
			</div>
			<div className="container mx-auto mt-8 p-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{categories.map((category) => (
						<Link
							key={category.slug}
							href={category.link}
							className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
						>
							<Image
								src={category.image}
								alt={category.name}
								height={1000}
								width={1000}
								className="w-full h-96 object-cover"
							/>
							<div className="p-4 bg-[#008ba8] text-white rounded-b-lg flex justify-center items-center h-24">
								<h3 className="text-[22px] font-semibold text-center">
									{category.name}
								</h3>
							</div>
						</Link>
					))}
				</div>
			</div>
			<FAQAccordion />
		</>
	);
}
