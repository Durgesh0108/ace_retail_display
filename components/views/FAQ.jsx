"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question:
			"How long does it take to develop a prototype / mockup for this kind of displays?",
		answer: "This kind of unit typically takes 3 working days to develop depending on the material, size & design.",
	},
	{
		question: "How much weight can this kind of display hold?",
		answer: "This Display is robust. FSUs can take the weight of around 7 kg per shelf, and CTUs can take the weight of around 2 kg depending on the material, size & design.",
	},
	{
		question: "Are these units easy for transportation?",
		answer: "Units are designed in a flat-packed form, ensuring that there are no damages to your product.",
	},
	{
		question: "How easy is it to install these displays?",
		answer: "Units are foolproof. Assembles in less than 5 minutes. NO TOOLS required.",
	},
	{
		question: "Are these displays cost-effective?",
		answer: "Yes, these displays are highly cost-effective due to the use of recyclable materials like corrugated paper & plastic, reducing labor & shipping costs.",
	},
];

export default function FAQAccordion() {
	return (
		<div className="container mx-auto p-6 mt-4">
			<h2 className="text-[42px] font-bold mb-6 text-center text-[#008ba8]">
				Frequently Asked Questions
			</h2>
			<Accordion type="single" collapsible className="w-full">
				{faqs.map((faq, index) => (
					<AccordionItem
						key={index}
						value={`item-${index}`}
						className="text-lg"
					>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
