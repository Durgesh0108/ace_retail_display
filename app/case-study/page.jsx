import { Button } from "@/components/ui/button";
import { CaseStudies } from "@/data/caseStudy";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export async function generateStaticParams() {
	// Simulate fetching data for categories
	return CaseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export const metadata = {
	title: "Case Study - Ace Retail Display",
	description: "Explore our range of Case Study.",
};

export default function CaseStudy() {

	return (
		<>
			{/* Header Section */}
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
							<li>Case Study</li>
						</ul>
					</nav>
					<h1 className="text-4xl font-bold text-gray-800">
						Case Study
					</h1>
				</div>
			</div>

			{/* Case Study Section */}
			<div className="container mx-auto mt-8 px-4">
				<div className="grid grid-cols-1 md:grid-cols-2  gap-6">
					{CaseStudies.map((category, index) => (
						<div
							key={index}
							className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
						>

							<div className="relative w-full ">
								<Image
									src={category.image}
									alt={category.title}
									// layout="fill"
									// objectFit="cover"
									// className="rounded-t-lg"
									height={1000}
									width={1000}
									className="w-full h-full object-cover"
								/>
							</div>


							<div className="flex flex-col justify-between bg-[#008ca8]/20 text-gray-800 p-6 h-fit">
								<h3 className="text-lg font-bold text-[#008ba8]">
									{category.title}
								</h3>
								<p className="text-sm sm:text-base mt-2">
									{category.category}
								</p>
								<div className="mt-4">
									<Link href={`/case-study/${category.slug}`}>
										<Button className="bg-[#008ba8] hover:bg-[#008ba8] text-white w-full">
											Read More
										</Button>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
