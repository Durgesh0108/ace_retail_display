// "use client";

// import { CaseStudies } from "@/data/caseStudy";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Pagination, Navigation, Autoplay } from "swiper/modules";

// // Case study data in JSON format

// export default function CaseStudy() {
// 	return (
// 		<div>
// 			{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
// 			<Swiper
// 				modules={[Navigation, Pagination, Autoplay]}
// 				// navigation
// 				pagination={{ clickable: true }}
// 				spaceBetween={20} // Space between slides
// 				slidesPerView={1} // Display 8 images at a time
// 				loop={true} // Enable looping
// 				breakpoints={{
// 					1024: { slidesPerView: 2 }, // For very large screens
// 				}}
// 				autoplay={{ delay: 3000 }}
// 			>
// 				{CaseStudies.map((category, index) => (
// 					<SwiperSlide key={index}>
// 						<div
// 							key={index}
// 							className=" rounded-md  flex items-center justify-center "
// 						>
// 							<div className="flex w-full">
// 								{/* Image section with 70% width */}
// 								<div className="w-3/4">
// 									<Image
// 										src={category.image}
// 										alt={category.title}
// 										width={300}
// 										height={200}
// 										className="rounded-l-md w-full"
// 									/>
// 								</div>

// 								{/* Title section with 30% width and gradient background */}
// 								<div className="w-1/4 bg-gradient-to-r from-green-100 to-[#08667c]/40 text-white flex  justify-center p-4 rounded-r-md flex-col">
// 									<h3 className="text-lg font-bold">
// 										<Button className="bg-[#008ba8] hover:bg-[#208b6e]">
// 											Case Study
// 										</Button>
// 									</h3>
// 									<h3 className="text-lg font-bold mb-6 text-gray-800">
// 										{category.title}
// 									</h3>
// 									<h3 className="text-2xl  leading-6 text-gray-800">
// 										{category.category}
// 									</h3>
// 									<Link
// 										className="text-lg font-bold mt-6 "
// 										href={`/case-study/${category.slug}`}
// 									>
// 										<Button className="bg-[#208b6e] hover:bg-[#008ba8]">
// 											Read More
// 										</Button>
// 									</Link>
// 								</div>
// 							</div>
// 						</div>
// 					</SwiperSlide>
// 				))}
// 			</Swiper>
// 			{/* </div> */}
// 		</div>
// 	);
// }

"use client";

import { CaseStudies } from "@/data/caseStudy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function CaseStudy() {
	return (
		<div className="p-4">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				pagination={{ clickable: true }}
				spaceBetween={20}
				slidesPerView={1}
				loop={true}
				autoplay={{ delay: 3000 }}
				breakpoints={{
					// 640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					// 1024: { slidesPerView: 3 },
				}}
			>
				{CaseStudies.map((category, index) => (
					<SwiperSlide key={index}>
						<div className="flex flex-col bg-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
							<div className="p-12 pb-4 bg-[#008ca8]/20">
								<Button className="bg-[#008ba8] hover:bg-[#008ba8] text-sm sm:text-base mb-2">
									Case Study
								</Button>
								<h3 className="text-lg sm:text-3xl font-semibold text-gray-800 mb-1">
									{category.title}
								</h3>
								<p className="text-sm sm:text-3xl text-gray-600 mb-4 truncate">
									{category.category}
								</p>
							</div>

							<div className="relative w-full ">
								<Image
									src={category.image}
									alt={category.title}
									height={1000}
									width={1000}
									className="w-full h-full object-cover"
								/>
							</div>

							<div className=" bg-white w-full">
								<Link href={`/case-study/${category.slug}`}>
									<Button className="bg-[#008ba8] hover:bg-[#008ba8] text-sm sm:text-2xl w-full p-10 rounded-t-none">
										Read More
									</Button>
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
