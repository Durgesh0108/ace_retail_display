// const OurClients = () => {
// 	return (
// 		<div>
// 			<h1 className="text-center text-[42px] my-8 font-bold text-[#008ba8]">
// 				Our Clients
// 			</h1>
// 			<div className="grid grid-cols-8 gap-8">
// 				<div className="border-black rounded-md border h-48 w-auto"></div>
// 				<div className="border-black rounded-md border h-48 w-auto"></div>
// 				<div className="border-black rounded-md border h-48 w-auto"></div>
// 				<div className="border-black rounded-md border h-48 w-auto"></div>
// 				<div className="border-black rounded-md border h-48 w-auto"></div>
// 				<div className="border-black rounded-md border h-48 w-auto"></div>
// 				<div className="border-black rounded-md border h-48 w-auto"></div>
// 				<div className="border-black rounded-md border h-48 w-auto"></div>
// 			</div>
// 		</div>
// 	);
// };

// export default OurClients;

// ***********************************

// import { Clients } from "@/data/clients"; // assuming the Clients array is in this location

// const OurClients = () => {
// 	return (
// 		<div>
// 			<h1 className="text-center text-[42px] my-8 font-bold text-[#008ba8]">
// 				Our Clients
// 			</h1>
// 			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8">
// 				{/* Loop through the Clients array to display logos */}
// 				{Clients.map((client, index) => (
// 					<div
// 						key={index}
// 						className=" rounded-md h-48 flex items-center justify-center"
// 					>
// 						<img
// 							src={client.image}
// 							alt={`Client Logo ${index + 1}`}
// 							className="object-contain h-full w-full"
// 						/>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default OurClients;
"use client";

import { Clients } from "@/data/clients";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const OurClients = () => {
	return (
		<div>
			<h1 className="text-center text-[42px] my-8 font-bold text-[#008ba8]">
				Our Clients
			</h1>
			{/* Swiper Container */}
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				// navigation
				pagination={{ clickable: true }}
				spaceBetween={20} // Space between slides
				slidesPerView={8} // Display 8 images at a time
				loop={true} // Enable looping
				breakpoints={{
					320: { slidesPerView: 2 }, // For small screens (e.g., mobile)
					640: { slidesPerView: 3 }, // For medium screens (e.g., tablets)
					768: { slidesPerView: 4 }, // For large screens
					1024: { slidesPerView: 6 }, // For very large screens
					1280: { slidesPerView: 8 }, // For ultra-wide screens
				}}
				autoplay={{ delay: 1000 }}
			>
				{/* Loop through Clients to create each slide */}
				{Clients.map((client, index) => (
					<SwiperSlide key={index}>
						<div className="rounded-md h-48 flex items-center justify-center">
							<img
								src={client.image}
								alt={`Client Logo ${index + 1}`}
								className="object-contain h-full w-full"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default OurClients;
