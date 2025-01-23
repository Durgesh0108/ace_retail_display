// app/product/[slug]/page.jsx

import notfound from "@/app/not-found";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProductImageGallery from "@/components/views/ProductImageGallery";
import { categories } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// mounika8511@godaddy.com

export async function generateStaticParams() {
	// Generate paths for all products
	const allProducts = categories.flatMap((category) => category.products);
	return allProducts.map((product) => ({
		slug: product.slug,
	}));
}

export default async function ProductPage({ params }) {
	const { slug } = await params; // Destructure the `slug` from `params`.

	// Flatten all products while keeping track of their category
	const allProducts = categories.flatMap((category) =>
		category.products.map((product) => ({
			...product,
			category: category.name, // Add category dynamically
			categorySlug: category.slug, // Add category slug dynamically
		}))
	);

	// Find the product by slug
	const product = allProducts.find((prod) => prod.slug === slug);

	if (!product) {
		notfound(); // Render the default 404 page
	}

	// Find related products (products from the same category)
	const relatedProducts = allProducts.filter(
		(prod) => prod.slug !== slug && prod.category === product.category
	);

	return (
		<div>
			{/* Header Section */}

			<div className="bg-[#008ca8]/20 h-48 p-8">
				<div className="text-center h-full flex flex-col md:flex-row justify-between items-center container mx-auto">
					<nav className="mt-4">
						<ul className="flex justify-center text-gray-600 space-x-2 text-sm">
							<li>
								<Link href="/" className="hover:text-[#008ba8]">
									Home
								</Link>
							</li>
							<span>/</span>
							<li>
								<Link
									href="/category"
									className="hover:text-[#008ba8]"
								>
									Products
								</Link>
							</li>
							<span className="mx-2">/</span>
							<li>
								<Link
									href={`/category/${product.categorySlug}`}
									className="hover:text-[#008ba8]"
								>
									{product.category}
								</Link>
							</li>
							<span className="mx-2">/</span>
							<li className=" font-semibold">{product.name}</li>
						</ul>
					</nav>
					<h1 className="text-4xl font-bold text-gray-800 mt-4">
						{product.name}
					</h1>
				</div>
			</div>

			{/* Product Details */}
			<div className="container mx-auto my-8 px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
					{/* Product Image */}
					{/* <div>
						<Image
							src={product.images[0]}
							alt={product.name}
							width={800}
							height={800}
							className="w-full h-[600px] object-contain rounded-lg shadow-lg"
						/>
					</div> */}
					<ProductImageGallery
						images={product.images}
						productName={product.name}
					/>

					{/* Product Information */}
					<div className="p-4">
						{/* Display Category Name */}
						<h3 className="text-4xl font-semibold">
							{product.name}
						</h3>
						<h3 className="text-lg font-semibold mb-2">
							{product.category}
						</h3>
						<h3 className="text-lg ">Size: {product.size}</h3>
						<h3 className="text-lg ">
							Material: {product.material}
						</h3>
						<h3 className="text-lg ">
							Capacity: {product.capacity}
						</h3>
						<Link href={"/EnquireNow"} className="">
							<Button className="bg-[#008ba8] hover:bg-[#008ba8] mt-8">
								Enquiry Now
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{/* Related Products Section */}
			<div className="container mx-auto px-4 mb-16">
				<h3 className="text-2xl font-bold mb-4 text-gray-800">
					Related Products
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{relatedProducts && relatedProducts.length > 0 ? (
						relatedProducts.map((relProd) => (
							// <div
							// 	key={relProd.slug}
							// 	className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
							// >
							// 	<Link href={`/product/${relProd.slug}`}>
							// 		<Image
							// 			src={relProd.images[0]}
							// 			alt={relProd.name}
							// 			width={400}
							// 			height={400}
							// 			className="w-full  object-cover"
							// 		/>
							// 		<div className="p-4">
							// 			<h4 className="font-semibold text-lg">
							// 				{relProd.name}
							// 			</h4>
							// 			<p className="text-sm text-gray-600">
							// 				Material: {relProd.material}
							// 			</p>
							// 		</div>
							// 	</Link>
							// </div>

							<Link
								key={relProd.slug}
								href={`/product/${relProd.slug}`}
								className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
							>
								<Image
									src={relProd.images[0]}
									alt={relProd.name}
									height={1000}
									width={1000}
									className="w-full h-96 object-cover"
								/>
								<div className="p-4">
									{/* Display Category Name */}

									<h4 className="font-semibold text-lg">
										{relProd.name}
									</h4>

									<p className="text-sm text-gray-600">
										Material: {relProd.material}
									</p>
								</div>
							</Link>
						))
					) : (
						<p className="text-gray-500">
							No Related Products Available
						</p>
					)}
				</div>
				<div className="mt-8">
					<Separator className="font-bold" />
				</div>
			</div>
			<div className="container mx-auto px-4 mb-16">
				<h3 className="text-2xl font-bold mb-4 text-gray-800">
					Explore Other Categories
				</h3>
				<div className="flex flex-wrap gap-4">
					{categories
						.filter((cat) => cat.name !== product.category) // Exclude current category
						.map((cat) => (
							<Link
								key={cat.slug}
								href={`/category/${cat.slug}`}
								className="inline-block"
							>
								<Button className="bg-white text-gray-800 hover:bg-white">
									{cat.name}
								</Button>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}
