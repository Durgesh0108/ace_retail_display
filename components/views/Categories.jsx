import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Categories({ categories }) {
	return (
		<div>
			<h2 className="text-[42px] font-bold my-4 text-center text-[#008ba8]">
				Products
			</h2>
			{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{categories.map((category) => (
					<Link
						key={category.slug}
						href={category.link}
						className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
					>
						<Image
							src={category.image}
							alt={category.name}
							height={1000}
							width={1000}
							className="w-full h-96 object-cover"
						/>
						<div className="p-4 bg-[#008ba8] text-white text-center rounded-b-lg h-full">
							<h3 className="text-[22px] font-semibold flex justify-center items-center">
								{category.name}
							</h3>
						</div>
					</Link>
				))}
			</div> */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{categories.map((category) => (
					<Link
						key={category.slug}
						href={category.link}
						className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
					>
						<Image
							src={category.image}
							alt={category.name}
							height={1000}
							width={1000}
							className="w-full h-96 object-cover"
						/>
						<div className="p-4 bg-[#008ba8] text-white rounded-b-lg flex justify-center items-center h-24">
							<h3 className="text-[22px] font-semibold text-center">
								{category.name}
							</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
