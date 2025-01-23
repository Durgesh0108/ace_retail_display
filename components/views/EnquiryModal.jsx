"use client";
import { categories } from "@/data/products";
import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		companyName: "",
		mobile: "",
		email: "",
		city: "",
		category: "",
		requirement: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				access_key: "70bf09ac-23a8-490c-ac28-2ffa0b1a569c", // Replace with your Web3Forms access key
				...formData,
			}),
		});

		if (response.ok) {
			alert("Form submitted successfully!");
			setFormData({
				name: "",
				companyName: "",
				mobile: "",
				email: "",
				city: "",
				category: "",
				requirement: "",
			});
		} else {
			alert("There was an error submitting the form.");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
		>
			<div>
				<label className="block text-sm font-medium text-gray-700">
					Name
				</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					className="mt-1 block w-full border border-gray-300 rounded-md p-2"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">
					Company Name
				</label>
				<input
					type="text"
					name="companyName"
					value={formData.companyName}
					onChange={handleChange}
					required
					className="mt-1 block w-full border border-gray-300 rounded-md p-2"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">
					Mobile Number
				</label>
				<input
					type="tel"
					name="mobile"
					value={formData.mobile}
					onChange={handleChange}
					required
					className="mt-1 block w-full border border-gray-300 rounded-md p-2"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">
					Email
				</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					className="mt-1 block w-full border border-gray-300 rounded-md p-2"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">
					City
				</label>
				<input
					type="text"
					name="city"
					value={formData.city}
					onChange={handleChange}
					required
					className="mt-1 block w-full border border-gray-300 rounded-md p-2"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">
					Category
				</label>
				<select
					name="category"
					value={formData.category}
					onChange={handleChange}
					required
					className="mt-1 block w-full border border-gray-300 rounded-md p-2"
				>
					<option value="">Select a Category</option>
					{categories.map((cat) => (
						<option key={cat.slug} value={cat.name}>
							{cat.name}
						</option>
					))}
				</select>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700">
					Requirement
				</label>
				<textarea
					name="requirement"
					value={formData.requirement}
					onChange={handleChange}
					required
					rows="4"
					className="mt-1 block w-full border border-gray-300 rounded-md p-2"
				/>
			</div>

			<button
				type="submit"
				className="w-full bg-[#008ba8] hover:bg-[#008ba8] text-white py-2 rounded-md "
			>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
