import Image from "next/image";
import React from "react";

export default function AboutUsHomePage() {
	return (
		<div className="container mx-auto  px-4 sm:px-6 py-10 sm:py-20">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				{/* Text Section */}
				<div className="space-y-4 text-base sm:text-lg">
					<h1 className="text-2xl sm:text-[32px] font-bold text-[#008ba8]">
						ACE Retail Display and Packaging
					</h1>
					<p className="text-gray-700 leading-relaxed">
						With over a decade of experience, we lead the way in
						crafting innovative and result-driven P.O.P displays and
						in-store branding and tailored for the corporate and
						retail industries. Our expertise guarantees effective
						marketing tools that boost your brand visibility and
						significantly improve sales...
					</p>

					<p className="text-gray-700 leading-relaxed">
						We work with various materials like corrugated paper,
						board, and plastics, delivering compact, durable, and
						easy-to-install designs. Each solution comes with a
						comprehensive DIY installation guide, specifically
						tailored to ensure seamless setup for your display.
					</p>
				</div>

				{/* Image Section */}
				<div className="flex justify-center">
					<div className="w-full sm:w-3/4 h-64 sm:h-96 rounded-lg  overflow-hidden ">
						<Image
							src="/img/jaymin.png" // Replace with actual image path
							alt="About Us"
							layout="responsive"
							width={400}
							height={300}
							className="object-cover rounded-lg h-full w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
