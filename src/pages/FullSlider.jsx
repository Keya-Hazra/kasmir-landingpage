import React from "react";
import Slider, { Settings } from "react-slick";
import { howItWorkData } from "../utils";
import Right from "./Right";

const FullSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
		dotsClass: "slick-dots-mid",
		appendDots: (dots) => (
			<div>
				<ul className="flex items-center w-full px-1 py-3 focus:outline-none">
					{" "}
					{dots}{" "}
				</ul>
			</div>
		),
		customPaging: (i) => (
			<div className="w-10 h-10 pt-2 text-base font-semibold text-center text-black transition duration-200 ease-in-out border rounded-full text-opacity-60 hover:bg-primary hover:text-white">
				{i + 1}
			</div>
		),
	};
	return (
		<Slider {...settings}>
			{howItWorkData.map((selected, i) => (
				<Right
					key={i}
					title={selected.title}
					selected={selected.description}
					buttonText={selected.buttonText}
					img={selected.img}
				/>
			))}
		</Slider>
	);
};

export default FullSlider;
