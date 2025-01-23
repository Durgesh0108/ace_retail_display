import Image from "next/image";

const ServiceHomePage = () => {
	return (
		<div className="bg-gray-200 my-10">
			<div className="container mx-auto py-20 p-8">
				<div className="text-[42px]  font-bold text-[#008ba8] text-center mb-8">
					How We Deliver Our Best
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					{/* Text Section */}
					<div className="space-y-4 text-lg">
						<p className="text-gray-700 leading-relaxed">
							At ACE Retail Display, we are committed to
							delivering exceptional retail display and packaging
							solutions that perfectly reflect your brand. Our
							process begins with a deep understanding of your
							goals and vision, ensuring that every detail aligns
							with your needs. From there, our creative team
							develops innovative concepts that blend
							functionality with stunning design.
						</p>

						<p className="text-gray-700 leading-relaxed">
							To bring these ideas to life, we craft detailed
							prototypes that offer a clear preview of the final
							product, allowing for feedback and refinement. Once
							approved, we move into production, utilizing
							advanced technology and rigorous quality control to
							manufacture high-quality displays and packaging that
							meet industry standards.
						</p>
						<p className="text-gray-700 leading-relaxed">
							Finally, we ensure your products are carefully
							packaged and delivered on time, ready to make an
							impact in the retail space. With a focus on quality,
							creativity, and customer satisfaction, ACE Retail
							Display brings your vision to life with unmatched
							precision and care.
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
	);
};

export default ServiceHomePage;
