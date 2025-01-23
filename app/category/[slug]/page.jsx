import { categories } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
	// Generate paths for all categories
	return categories.map((category) => ({
		slug: category.slug,
	}));
}

export default async function CategoryPage({ params }) {
	const { slug } = await params; // Destructure slug from params
	const category = categories.find((cat) => cat.slug === slug);

	if (!category) {
		return <div>Category not found!</div>;
	}

	return (
		<>
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
							<li>
								<Link
									href="/category"
									className="hover:text-[#008ba8]"
								>
									Products
								</Link>
							</li>
							<span>/</span>
							<li>{category.name}</li>
						</ul>
					</nav>
					<h1 className="text-4xl font-bold text-gray-800 mt-4">
						{category.name}
					</h1>
				</div>
			</div>

			<div className="container mx-auto py-8">
				{/* <h2 className="text-2xl font-bold mb-4">{category.name}</h2> */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{category.products.map((product) => (
						<Link
							key={product.slug}
							href={`/product/${product.slug}`}
							className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
						>
							<Image
								src={product.images[0]}
								alt={product.name}
								height={1000}
								width={1000}
								className="w-full h-96 object-cover"
							/>
							<div className="p-4">
								{/* Display Category Name */}
								<h3 className="text-2xl font-semibold">
									{product.name}
								</h3>
								<h3 className="text-lg font-semibold mb-2">
									{category.name}
								</h3>
								<h3 className="text-lg ">
									Size: {product.size}
								</h3>
								<h3 className="text-lg ">
									Material: {product.material}
								</h3>
								<h3 className="text-lg ">
									Capacity: {product.capacity}
								</h3>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
