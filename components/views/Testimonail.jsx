"use client";

import { Testimonials } from "@/data/testimonail";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Testimonial() {
	return (
		<div className="mt-8 bg-gray-200 p-16">
			<h2 className="text-[42px] font-bold mb-8 text-center text-[#008ba8]">
				Testimonials That Matter
			</h2>
			{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				// navigation
				pagination={{ clickable: true }}
				spaceBetween={20} // Space between slides
				slidesPerView={1} // Display 8 images at a time
				loop={true} // Enable looping
				breakpoints={{
					768: { slidesPerView: 2 }, // For very large screens
				}}
				autoplay={{ delay: 3000 }}
			>
				{Testimonials.map((testimonial, index) => (
					<SwiperSlide key={index}>
						<div
							key={index}
							className=" rounded-md p-6  flex flex-col text-center"
						>
							{/* Company and City */}
							<div className="mb-4">
								<h3 className="text-xl font-bold text-gray-800">
									{testimonial.company}
								</h3>
								<p className="text-sm text-gray-500">
									{testimonial.city}
								</p>
							</div>
							{/* Review */}
							<p className="text-gray-700">
								{testimonial.review}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			{/* </div> */}
		</div>
	);
}
