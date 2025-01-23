"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImageGallery({ images, productName }) {
	const [selectedImage, setSelectedImage] = useState(images[0]); // Default to the first image

	return (
		<div>
			{/* Main Product Image */}
			<div>
				<Image
					src={selectedImage}
					alt={productName}
					width={800}
					height={800}
					loading="lazy"
					className="w-full h-[600px] object-contain rounded-lg "
				/>
			</div>

			{/* Image Thumbnails */}
			<div className="flex gap-4 mt-4 justify-center">
				{images.map((img, index) => (
					<button
						key={index}
						onClick={() => setSelectedImage(img)} // Change selected image
						className={`border-2 rounded-md overflow-hidden ${
							selectedImage === img
								? "border-[#008ba8]"
								: "border-gray-300"
						}`}
					>
						<Image
							src={img}
							alt={`${productName} thumbnail ${index}`}
							width={100}
							height={100}
							className="w-24 h-24 object-cover"
						/>
					</button>
				))}
			</div>
		</div>
	);
}
