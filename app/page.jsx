import AboutUsHomePage from "@/components/views/AboutUs";
import CaseStudy from "@/components/views/CaseStudy";
import Categories from "@/components/views/Categories";
import Footer from "@/components/views/Footer";
import Header from "@/components/views/Header";
import OurClients from "@/components/views/OurClient";
import Reviews from "@/components/views/Reviews";
import ServiceHomePage from "@/components/views/Service";
import ImageSlider from "@/components/views/Slider";
import Testimonail from "@/components/views/Testimonail";
import { categories } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="w-full">
			{/* <Header /> */}
			<ImageSlider />
			<AboutUsHomePage />
			<Reviews />
			<main className="container mx-auto p-8">
				<Categories categories={categories} />
			</main>
			<ServiceHomePage />
			<main className="container mx-auto p-8">
				<CaseStudy />
			</main>
			<Testimonail />

			<main className="container mx-auto p-8">
				<OurClients />
			</main>
			{/* <Footer /> */}
		</div>
	);
}
