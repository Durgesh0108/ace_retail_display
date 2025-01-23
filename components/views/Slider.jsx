"use client";

// import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function ImageSlider() {
	const slides = [
		{
			img: "/img/Slider Image 3.jpg",
			link: "",
			alt: "Sample Image 3",
			type: "image",
		},
		{
			img: "/img/Slider Image 4.jpg",
			link: "",
			alt: "Sample Image 4",
			type: "image",
		},
		{
			img: "/img/Slider Image 2.jpg",
			link: "",
			alt: "Sample Image 2",
			type: "image",
		},
		{
			img: "/img/Slider Image 6.jpg",
			link: "",
			alt: "Sample Image 6",
			type: "image",
		},
		{
			img: "/img/SliderImage1.jpg",
			link: "",
			alt: "Sample Image 1",
			type: "image",
		},

		{
			img: "/img/Slider Image 5.jpg",
			link: "",
			alt: "Sample Image 5",
			type: "image",
		},
		// {
		// 	img: "/img/video.mp4",
		// 	link: "",
		// 	alt: "Sample Video 1",
		// 	type: "video",
		// },
	];

	return (
		<div className="w-full mx-auto">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={1}
				// navigation
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{ delay: 3000 }}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 1 },
					1024: { slidesPerView: 1 },
				}}
				className="mySwiper w-full"
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						{/* <a
							href={slide.link}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full"
						>
							<img
								src={slide.img}
								alt={slide.alt}
								className="w-full h-auto rounded-lg shadow-lg"
							/>
						</a> */}
						<div className="w-full">
							{slide.type === "video" ? (
								<video
									src={slide.img}
									alt={slide.alt}
									className="w-auto h-full rounded-lg shadow-lg"
									// controls
									autoPlay
									loop
								/>
							) : (
								<img
									src={slide.img}
									alt={slide.alt}
									className="w-full h-auto rounded-lg shadow-lg"
								/>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
