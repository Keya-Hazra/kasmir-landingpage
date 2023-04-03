import React from "react";
import Accordion from "../components/Accordion";
import { faqData } from "../utils";

const Faq = () => {
	return (
		<div id="faq" className=" bg-blue-500/10">
			<p className="py-12 text-3xl font-semibold text-center text-blue-500 capitalize md:text-4xl">
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
						className="py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-500 px-14 border border-[#CEC382] text-primary hover:bg-secondary hover:text-primary shadow-lg"
					>
						More FAQ's
					</a>
				
				</div>
			</div>
		</div>
	);
};

export default Faq;
