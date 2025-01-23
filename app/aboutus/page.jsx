"use client";

import OurClients from "@/components/views/OurClient";
import ServiceHomePage from "@/components/views/Service";
import Testimonial from "@/components/views/Testimonail";
import { Testimonials } from "@/data/testimonail";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function AboutUs() {
	return (
		<div>
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
							<li>About Us</li>
						</ul>
					</nav>
					<h1 className="text-4xl font-bold text-gray-800">
						About Us
					</h1>
				</div>
			</div>
			<div className="container mx-auto px-4 py-8">
				{/* Page Title */}
				{/* Content Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					{/* Text Section */}
					<div className="space-y-4">
						<p className="text-gray-700 leading-relaxed">
							With over a decade of experience, we are at the
							forefront of creating innovative and result-oriented
							P.O.P displays and in-store branding for both the
							corporate and retail industries. Our expertise
							ensures comprehensive marketing tools that enhance
							the visibility of your brand and improve product
							sell-through rates.
						</p>

						<p className="text-gray-700 leading-relaxed">
							We utilize a variety of materials such as corrugated
							paper, board, and plastics, offering compact,
							durable, and easy-to-install designs. Each solution
							includes a DIY installation guide tailored
							specifically for your display.
						</p>

						<h2 className="text-2xl font-semibold mt-6">
							Innovative P.O.P Displays & In-Store Branding
							Solutions
						</h2>

						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li>
								<strong>Industry Expertise:</strong> Over 10
								years of excellence.
							</li>
							<li>
								<strong>Professional Team:</strong> Skilled
								employees dedicated to your brand’s success.
							</li>
							<li>
								<strong>Advanced Infrastructure:</strong>{" "}
								Extensive factory capabilities for all
								production needs.
							</li>
							<li>
								<strong>Client-Centric Approach:</strong>{" "}
								Tailored solutions for unique requirements.
							</li>
							<li>
								<strong>Affordable & Compact Designs:</strong>{" "}
								Cost-effective, high-quality displays.
							</li>
						</ul>

						<p className="text-gray-700 leading-relaxed">
							Discover how Ace Retail Display can transform your
							brand presence and drive customer engagement through
							innovative, affordable, and impactful solutions.
						</p>
					</div>

					{/* Image Section */}
					<div className="flex justify-center">
						<div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
							<Image
								src="/img/jaymin.png"
								alt="About Us"
								width={500}
								height={500}
								className="object-cover w-full h-auto"
							/>
						</div>
					</div>
				</div>
				{/* How We Deliver Section */}
			</div>
			<div className="bg-gray-200 mt-10">
				<div className="container mx-auto py-20 p-8">
					<div className="text-[42px]  font-bold text-[#008ba8] text-center mb-8">
						How We Deliver Our Best
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						{/* Text Section */}
						<div className="space-y-4 text-lg">
							<p className="text-gray-700 leading-relaxed">
								At ACE Retail Display, we are committed to
								delivering exceptional retail display and
								packaging solutions that perfectly reflect your
								brand. Our process begins with a deep
								understanding of your goals and vision, ensuring
								that every detail aligns with your needs. From
								there, our creative team develops innovative
								concepts that blend functionality with stunning
								design.
							</p>

							<p className="text-gray-700 leading-relaxed">
								To bring these ideas to life, we craft detailed
								prototypes that offer a clear preview of the
								final product, allowing for feedback and
								refinement. Once approved, we move into
								production, utilizing advanced technology and
								rigorous quality control to manufacture
								high-quality displays and packaging that meet
								industry standards.
							</p>
							<p className="text-gray-700 leading-relaxed">
								Finally, we ensure your products are carefully
								packaged and delivered on time, ready to make an
								impact in the retail space. With a focus on
								quality, creativity, and customer satisfaction,
								ACE Retail Display brings your vision to life
								with unmatched precision and care.
							</p>
						</div>

						{/* Image Section */}
						<div className="flex justify-center">
							<div className=" w-3/4 rounded-lg  overflow-hidden">
								<Image
									src={"/img/ace creative.png"}
									alt="Hexagon"
									width={1000}
									height={1000}
									className="object-cover h-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonial */}
			<div className="mt-8 p-16">
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
			</div>
			<div className="container mx-auto p-8">
				<OurClients />
			</div>
		</div>
	);
}
