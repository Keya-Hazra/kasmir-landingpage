import React from "react";
import Typist from "react-typist";

const Hero = () => {
	return (
		<div className="my-2">
			<div className="relative bg-[#00b4d8] lg:bg-transparent rounded-3xl">
				<div className="px-6 py-16 bg-[#00b4d8] rounded-t-3xl md:px-16 xl:px-24">
					<div className="relative space-y-6 text-white md:mt-6 lg:mt-20 xl:mt-36">
						<h1 className="mb-10 text-3xl font-semibold md:text-4xl">
							{/* <Typist> */}
								<p>
									If you want to travel safe <br /> Be with{" "}
									<a
										href="https://www.tripncare.com/"
										className="font-bold shadow-2xl hover:text-pink-700 hover:underline"
									>
										{" "}
										Tripncare
									</a>
									.
								</p>
							{/* </Typist> */}
						</h1>
						<div className="curve"></div>
						<p>
							Placid Tripncare Travels Pvt Ltd is one of leading online travel
							company. <br /> We are a web platform providing a convenient way
							to search the <br /> best rates for airline tickets, hotels and
							other services.
						</p>
						{/* <GetStarted /> */}
					</div>
				</div>
				<div className="hidden w-full h-32 -mt-10 transform -skew-y-3 lg:block bg-[#00b4d8] rounded-b-3xl"></div>
				<div className="flex justify-center lg:absolute top-2 right-2">
					<div className="relative px-8 bg-white rounded-lg shadow-2xl cursor-pointer mt-44 hover:shadow-primary_shadow md:mr-8 w-80">
						<div className="absolute bg-white rounded-full -top-12 left-4">
							<img
								className="w-20 h-20 rounded-full fill-current bg-primary bg-opacity-20"
								src="image/slider/kashmir1.jpg"
								alt="kashmir_image"
							/>
						</div>
						<h1 className="pt-10 pb-5 text-gray-900 border-b-2 text-normal">
							My Vision Kashmir Tour & Travels provide you with the best Holiday
							Packages for Kashmir, Leh - Ladakh, Just pick any Holiday Package
							and leave all the rest to us. We make sure that you get the best
							value for your money. We will provide you with the best possible
							prices to suit your pocket without compromising on the service. We
							assure you of our best services and hospitality. A holiday with My
							Vision Kashmir Tour & Travels will be a lifetime memory that you
							will cherish all your life.
						</h1>
						<div className="justify-between py-4 md:flex">
							<div className="font-semibold">kashmir </div>
							{/* <div className="text-gray-500">{item.role}</div> */}
						</div>
					</div>
					{/* <img
						src={banner}
						alt="banner"
						className="w-full max-w-md xl:max-w-2xl"
					/> */}
				</div>
			</div>
		</div>
	);
};

export default Hero;
