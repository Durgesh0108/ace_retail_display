// Import case studies data

import { CaseStudies } from "@/data/caseStudy";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
	// Generate paths for all case studies
	return CaseStudies.map((caseStudy) => ({
		slug: caseStudy.slug,
	}));
}
export default async function CaseStudyPage({ params }) {
	const { slug } = await params; // Destructure slug from params
	const caseStudy = CaseStudies.find((cs) => cs.slug === slug);

	if (!caseStudy) {
		return <div>Case study not found!</div>;
	}
	const currentIndex = CaseStudies.findIndex((cs) => cs.slug === slug);

	// Get the previous and next case studies
	const previousCaseStudy = CaseStudies[currentIndex - 1];
	const nextCaseStudy = CaseStudies[currentIndex + 1];

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
							<li>
								<Link href="/case-study">
									<p className="hover:text-[#008ba8]">
										Case Study
									</p>
								</Link>
							</li>
							<span>/</span>
							<li>{caseStudy.title}</li>
						</ul>
					</nav>
					<h1 className="text-4xl font-bold text-gray-800 mt-4">
						{caseStudy.title}
					</h1>
				</div>
			</div>

			<div className="container mx-auto py-8 px-4 md:px-8">
				<div className="flex flex-col-reverse lg:flex-row md:gap-8 ">
					<div className="w-full lg:w-1/2">
						<div className="text-[42px] text-[#008ba8] font-bold">
							{caseStudy.category}
						</div>
						<div
							className="text-lg text-gray-800 leading-relaxed"
							dangerouslySetInnerHTML={{ __html: caseStudy.text }} // Render HTML content
						/>
					</div>
					<div className="mb-8 w-full lg:w-1/2">
						<Image
							src={caseStudy.image}
							alt={caseStudy.title}
							height={1000}
							width={1000}
							className="w-full object-cover rounded-lg shadow-md"
						/>
					</div>
				</div>
				<div className="flex justify-between mt-8">
					{previousCaseStudy && (
						<Link
							href={`/case-study/${previousCaseStudy.slug}`}
							className="prev-next-btn bg-[#008ba8] text-white py-2 px-4 rounded-lg "
						>
							Previous
						</Link>
					)}

					{nextCaseStudy && (
						<Link
							href={`/case-study/${nextCaseStudy.slug}`}
							className="prev-next-btn bg-[#008ba8] text-white py-2 px-4 rounded-lg "
						>
							Next
						</Link>
					)}
				</div>
			</div>
		</>
	);
}

// // Import case studies data
// import { CaseStudies } from "@/data/caseStudy";
// import Image from "next/image";
// import Link from "next/link";

// export async function generateStaticParams() {
// 	// Generate paths for all case studies
// 	return CaseStudies.map((caseStudy) => ({
// 		slug: caseStudy.slug,
// 	}));
// }

// export default async function CaseStudyPage({ params }) {
// 	const { slug } = await params; // Destructure slug from params
// 	const caseStudy = CaseStudies.find((cs) => cs.slug === slug);

// 	if (!caseStudy) {
// 		return <div>Case study not found!</div>;
// 	}
// 	const currentIndex = CaseStudies.findIndex((cs) => cs.slug === slug);

// 	// Get the previous and next case studies
// 	const previousCaseStudy = CaseStudies[currentIndex - 1];
// 	const nextCaseStudy = CaseStudies[currentIndex + 1];

// 	return (
// 		<>
// 			<div className="bg-[#008ca8]/20 h-48 p-8">
// 				<div className="text-center h-full flex flex-col md:flex-row justify-between items-center container mx-auto">
// 					<nav className="mt-4">
// 						<ul className="flex flex-wrap justify-center text-gray-600 space-x-2 text-sm">
// 							<li>
// 								<Link href="/">
// 									<p className="hover:text-[#008ba8]">Home</p>
// 								</Link>
// 							</li>
// 							<span>/</span>
// 							<li>
// 								<Link href="/case-study">
// 									<p className="hover:text-[#008ba8]">
// 										Case Study
// 									</p>
// 								</Link>
// 							</li>
// 							<span>/</span>
// 							<li>{caseStudy.title}</li>
// 						</ul>
// 					</nav>
// 					<h1 className="text-2xl md:text-4xl font-bold text-gray-800 mt-4">
// 						{caseStudy.title}
// 					</h1>
// 				</div>
// 			</div>

// 			<div className="container mx-auto py-8 px-4 md:px-8">
// 				<div className="flex flex-col-reverse lg:flex-row gap-8">
// 					<div className="flex-1">
// 						<div className="text-2xl md:text-[42px] text-[#008ba8] font-bold mb-4">
// 							{caseStudy.category}
// 						</div>
// 						<div
// 							className="text-base md:text-lg text-gray-800 leading-relaxed"
// 							dangerouslySetInnerHTML={{ __html: caseStudy.text }} // Render HTML content
// 						/>
// 					</div>
// 					<div className="flex-1 mb-8 lg:mb-0">
// 						<Image
// 							src={caseStudy.image}
// 							alt={caseStudy.title}
// 							height={1000}
// 							width={1000}
// 							className="w-full object-cover rounded-lg shadow-md"
// 						/>
// 					</div>
// 				</div>
// 				<div className="flex flex-col md:flex-row justify-between mt-8 gap-4">
// 					{previousCaseStudy && (
// 						<Link
// 							href={`/case-study/${previousCaseStudy.slug}`}
// 							className="prev-next-btn bg-[#008ba8] text-white py-2 px-4 rounded-lg text-center"
// 						>
// 							Previous
// 						</Link>
// 					)}

// 					{nextCaseStudy && (
// 						<Link
// 							href={`/case-study/${nextCaseStudy.slug}`}
// 							className="prev-next-btn bg-[#008ba8] text-white py-2 px-4 rounded-lg text-center"
// 						>
// 							Next
// 						</Link>
// 					)}
// 				</div>
// 			</div>
// 		</>
// 	);
// }
