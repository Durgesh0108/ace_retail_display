import { categories } from "@/data/products";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-[#6e6f70] text-white">
			<div className="container mx-auto p-8">
				<div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-8">
					{/* Logo and Social Media */}
					<div className="flex flex-col items-center lg:items-start gap-4">
						<div>
							<img
								src="/img/LOGO 2.png"
								alt="Logo"
								className="h-16"
							/>
						</div>
						<div className="flex gap-4">
							<a
								href="#"
								className="hover:text-gray-200 transition duration-300"
							>
								{/* <Image
									src={"/img/facebook.png"}
									alt="facebook"
									height={1000}
									width={1000}
									className="h-8 w-8"
								/> */}
								<Facebook />
							</a>
							<a
								href="#"
								className="hover:text-gray-200 transition duration-300"
							>
								<Instagram />
							</a>
							<a
								href="#"
								className="hover:text-gray-200 transition duration-300"
							>
								<Linkedin />
							</a>
						</div>
					</div>

					{/* Pages Section */}
					<div className="text-center lg:text-left">
						<h2 className="text-lg font-semibold mb-4">Pages</h2>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="hover:text-gray-200 transition duration-300"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/aboutus"
									className="hover:text-gray-200 transition duration-300"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/case-study"
									className="hover:text-gray-200 transition duration-300"
								>
									Case Study
								</Link>
							</li>
							<li>
								<Link
									href="/contact-us"
									className="hover:text-gray-200 transition duration-300"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Categories Section */}
					<div className="text-center lg:text-left">
						<h2 className="text-lg font-semibold mb-4">Products</h2>
						<ul className="space-y-2">
							{categories.map((category) => (
								<li key={category.slug}>
									<Link
										href={`/category/${category.slug}`}
										className="hover:text-gray-200 transition duration-300"
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Details */}
					<div className="text-center lg:text-left text-sm">
						<h2 className="text-lg font-semibold mb-4">
							Contact Us
						</h2>
						<p>
							<span>102, Desh Udyog Mandir</span> <br />
							<span>Behind Hi-Tech Industrial Estate</span> <br />
							<span>Off Caves Road, Jogeshwari(E),</span> <br />
							<span>Mumbai - 400060.</span>
						</p>
						<a href="tel:+912245161366" className="hover:underline">
							+91 22 4516 1366
						</a>
						<p className="mt-2">
							<strong>Jaymin Shah</strong> <br />
							Call:{" "}
							<a
								href="tel:9769964775"
								className="hover:underline"
							>
								9769964775
							</a>
							<br />
							Email:{" "}
							<a
								href="mailto:jaymin@aceretaildisplay.com"
								className="hover:underline"
							>
								jaymin@aceretaildisplay.com
							</a>
						</p>
						<p className="mt-2">
							<strong>Rushabh Shah</strong> <br />
							Call:{" "}
							<a
								href="tel:9967025401"
								className="hover:underline"
							>
								9967025401
							</a>
							<br />
							Email:{" "}
							<a
								href="mailto:rushabh@aceretaildisplay.com"
								className="hover:underline"
							>
								rushabh@aceretaildisplay.com
							</a>
						</p>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm">
					<p>&copy; Copyright 2012 - 2025 | All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
