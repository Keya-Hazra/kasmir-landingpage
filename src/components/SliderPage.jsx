import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import { agra } from "../utils";

const SliderPage = () => {
	const [, setIsPrevShow] = useState(false);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		dotsClass: "button__bar",
		beforeChange: (next) => {
			if (next > 0) {
				setIsPrevShow(true);
			} else {
				setIsPrevShow(false);
			}
		},
	};

	return (
		<div>
            	<p className="text-3xl font-semibold text-center text-blue-500 capitalize pt-28 md:text-4xl">
				Top Places In Kashmir
			</p>
            <Slider {...settings} className="z-30 w-full mt-10">
                {agra.map((item, key) => {
                    return (
                        <div key={key}>
                            {/* Begin:: Card Body  */}
                            <div className="relative w-auto px-8 my-16 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-primary_shadow md:mr-8">
                                <div className="absolute bg-white rounded-full -top-12 left-4">
                                    <img
                                        className="w-20 h-20 rounded-full fill-current bg-primary bg-opacity-20"
                                        src={`${item.img}`}
                                        alt="user_image"
                                    />
                                </div>
                                <h1 className="pt-10 pb-5 text-gray-900 border-b-2 text-normal">
                                <div className="text-gray-500">{item.description}</div>
                                </h1>
                                <div className="justify-between py-4 md:flex">
                                    <div className="font-semibold">{item.location}</div>
                                   
                                </div>
                            </div>
                            {/* End:: Card Body  */}
                        </div>
                    );
                })}
            </Slider>
        </div>
	);
};
export default SliderPage;
