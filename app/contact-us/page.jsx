import Link from "next/link";

export default function ContactUs() {
	return (
		<div className="min-h-screen h-full bg-gray-50">
			{/* Header Section with Breadcrumb */}
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
							<li>Contact Us</li>
						</ul>
					</nav>
					<h1 className="text-4xl font-bold text-gray-800">
						Contact Us
					</h1>
				</div>
			</div>

			<div className="container mx-auto px-4 py-12">
				<div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
					{/* Left Side Image */}
					<div className="lg:w-1/2 w-full h-64 lg:h-auto">
						<img
							src="/img/Office.jpeg"
							alt="Contact Us"
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Right Side Form */}
					<div className="lg:w-1/2 w-full p-8">
						<h2 className="text-[42px]  text-[#008ba8] font-semibold mb-4">
							Get in Touch
						</h2>
						<p className="text-gray-600 mb-6">
							Have any questions? We'd love to hear from you!
							{/* It is Very Important for us to keep in touch with
							you, so we are always ready to answer any questions
							that interest you. */}
						</p>
						<form
							action="https://api.web3forms.com/submit"
							method="POST"
							className="space-y-4"
						>
							<input
								type="hidden"
								name="access_key"
								value="ad2916ea-38a9-48b9-8411-18237487dd74" // Replace with your Web3Forms key
							/>
							<div>
								<label className="block text-gray-600 mb-1">
									Name
								</label>
								<input
									type="text"
									name="name"
									required
									placeholder="Your Name"
									className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div>
								<label className="block text-gray-600 mb-1">
									Email
								</label>
								<input
									type="email"
									name="email"
									required
									placeholder="Your Email"
									className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div>
								<label className="block text-gray-600 mb-1">
									Message
								</label>
								<textarea
									name="message"
									rows="4"
									required
									placeholder="Your Message"
									className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								></textarea>
							</div>
							<div>
								<button
									type="submit"
									className="w-full bg-[#008ba8] hover:bg-[#008ba8] text-white py-2 px-4 rounded-md"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>

				{/* Map Section */}
				<div className="mt-12">
					<h2 className="text-[42px] text-[#008ba8] font-semibold text-center mb-4 ">
						Our Location
					</h2>
					<div className="w-full h-[400px]">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.309735137066!2d72.8535301!3d19.1379146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b715c3a56e19%3A0xddfcb8a4ac9625a!2sMillion%20shirts%20%26%20kurta%20mens%20%26%20kids!5e0!3m2!1sen!2sin!4v1734422532930!5m2!1sen!2sin"
							width="100%"
							height="100%"
							allowFullScreen=""
							loading="lazy"
							className="rounded-lg shadow-lg"
							title="Google Map"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
