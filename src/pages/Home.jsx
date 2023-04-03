import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Faq from "./Faq";
import Footer from "./Footer";
import Hero from "./Hero";
import Location from "./Location";
import FullSlider from "./FullSlider";
import SliderPage from "../components/SliderPage";

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Hero />
			{/* <FullSlider /> */}
			{/* <Location /> */}
			<SliderPage/>
			<Faq />
			<Footer />
		</div>
	);
};

export default Home;
