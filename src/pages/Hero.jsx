import React from "react";
import Typist from "react-typist";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="my-2">
			<div className="relative bg-[#00b4d8] lg:bg-transparent rounded-3xl">
				<div className="px-6 py-16 bg-[#00b4d8] rounded-t-3xl md:px-16 xl:px-24">
					<div className="relative space-y-6 text-white md:mt-6 lg:mt-20 xl:mt-36">
						<h1 className="mb-10 text-3xl font-semibold md:text-4xl">
							{/* <Typist> */}
							<p>
								If you want to travel safe in<span className="font-bold shadow-2xl hover:text-pink-700"> Kashmir </span><br /> Be with{" "}
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
				<div className="hidden w-full h-32 -mt-10 transform -skew-y-3 bg-teal-300 lg:block rounded-b-3xl"></div>
				<div className="flex justify-center lg:absolute top-2 right-10">
					<div className="relative px-8 bg-white shadow-2xl cursor-pointer w-96 rounded-xl mt-44 hover:shadow-white_shadow md:mr-8 h-80">
						<div className="absolute bg-white rounded-lg shadow-2xl cursor-pointer hover:shadow-[#00b4d8]_shadow w-80 text-end -top-12 h-30 -right-5">
							<div className="flex space-x-4">
								<p className="w-16 h-16 m-4 bg-teal-300 rounded-full shrink-0"></p>
								<div className="space-y-2">
									<p className="mt-6 font-semibold text-start">
										Hotel & Packages
									</p>
									<p className="w-40 h-3 bg-gray-300 rounded-lg"></p>
								</div>
							</div>
						</div>
						<div className="absolute bg-white rounded-lg shadow-2xl cursor-pointer hover:shadow-[#00b4d8]_shadow w-80 text-end h-30 -left-20 mt-28">
							<div className="flex space-x-4">
								<p className="w-16 h-16 m-4 bg-pink-300 rounded-full shrink-0"></p>
								<div className="space-y-2">
									<p className="mt-6 font-semibold text-start">
										SOTO Ticketing
									</p>
									<p className="w-40 h-3 bg-gray-300 rounded-lg"></p>
								</div>
							</div>
						</div>
						<div className="absolute bg-white rounded-lg shadow-2xl cursor-pointer hover:shadow-[#00b4d8]_shadow w-56 text-end h-44 -right-10 -bottom-20">
							<div className="flex items-center justify-center">
								<div className="mt-6 space-y-2">
									<p className="items-center w-16 h-16 mx-12 bg-orange-300 rounded-full shrink-0"></p>
									<div className="flex space-x-4">
										<p className="font-semibold text-center">
											Medical Tourism
										</p>
										<Link
										to="https://www.tripncare.com/blog/blogdetail/medical-tourism-in-india"
										className="items-center block w-6 h-6 p-1 text-orange-500 bg-orange-100 rounded-full shadow-xl animate-pulse"
										target="_blank"
									>
										<CgWebsite />
									</Link>
									</div>
									<p className="w-40 h-1 bg-gray-300 rounded-lg "></p>
								
								
								</div>
							</div>
						</div>
						{/* <div className="absolute bg-white rounded-full -top-12 left-4">
							<img
								className="w-20 h-20 rounded-full fill-current bg-[#00b4d8] bg-opacity-20"
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
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
