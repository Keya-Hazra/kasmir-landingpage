import React from "react";
import Accordion from "../components/Accordion";
import { faqData } from "../utils";

const Faq = () => {
	return (
		<div id="faq" className=" bg-pink-500/5">
			<p className="py-12 text-3xl font-semibold text-center text-pink-500 capitalize md:text-4xl">
				frequently asked questions
			</p>
			<div className=" px-9">
				{faqData.map((faq) => (
					<div  key={faq.id} className="flex items-center justify-center">
						<Accordion title={faq.title} body={faq.body} />
					</div>
				))}
				<div className="flex justify-center py-10">
					<a
						href="https://www.tripncare.com/faq"
						rel="noreferrer"
						target="_blank"
						className="py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-500 px-14 border border-[#CEC382] text-primary hover:bg-secondary hover:text-primary shadow-lg"
					>
						More FAQ's
					</a>
				
				</div>
			</div>
		</div>
	);
};

export default Faq;
