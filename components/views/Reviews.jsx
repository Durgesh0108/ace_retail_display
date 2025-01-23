// const Reviews = () => {
// 	return (
// 		<div className="bg-gray-200">
// 			<div className="flex justify-around p-24">
// 				<div className="text-2xl text-center">
// 					<div className="font-bold text-5xl text-[#008ba8] ">
// 						25000
// 					</div>
// 					<div>Sq. Ft Workspace</div>
// 				</div>
// 				<div className="text-2xl text-center">
// 					<div className="font-bold text-5xl text-[#008ba8] ">
// 						35+
// 					</div>
// 					<div>Years of Experience</div>
// 				</div>
// 				<div className="text-2xl text-center">
// 					<div className="font-bold text-5xl text-[#008ba8] ">
// 						50+
// 					</div>
// 					<div>Brand Partners</div>
// 				</div>
// 				<div className="text-2xl text-center">
// 					<div className="font-bold text-5xl text-[#008ba8] ">
// 						1m+
// 					</div>
// 					<div>Products Delivered</div>
// 				</div>
// 				<div className="text-2xl text-center">
// 					<div className="font-bold text-5xl text-[#008ba8] ">
// 						75+
// 					</div>
// 					<div>Team Members</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Reviews;

const Reviews = () => {
	return (
		<div className="bg-gray-200">
			<div className="flex flex-wrap justify-around gap-8 p-10 lg:p-20">
				{/* Workspace */}
				<div className="text-center">
					<div className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#008ba8]">
						25000
					</div>
					<div className="text-lg md:text-xl lg:text-2xl">
						Sq. Ft Workspace
					</div>
				</div>
				{/* Experience */}
				<div className="text-center">
					<div className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#008ba8]">
						35+
					</div>
					<div className="text-lg md:text-xl lg:text-2xl">
						Years of Experience
					</div>
				</div>
				{/* Brand Partners */}
				<div className="text-center">
					<div className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#008ba8]">
						50+
					</div>
					<div className="text-lg md:text-xl lg:text-2xl">
						Brand Partners
					</div>
				</div>
				{/* Products Delivered */}
				<div className="text-center">
					<div className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#008ba8]">
						1m+
					</div>
					<div className="text-lg md:text-xl lg:text-2xl">
						Products Delivered
					</div>
				</div>
				{/* Team Members */}
				<div className="text-center">
					<div className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#008ba8]">
						75+
					</div>
					<div className="text-lg md:text-xl lg:text-2xl">
						Team Members
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
