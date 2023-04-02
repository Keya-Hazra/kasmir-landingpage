import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
// import SliderPage from "../components/SliderPage";
import Faq from "./Faq";
import Footer from "./Footer";
import Hero from "./Hero";
import Location from "./Location";

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Hero />
			{/* <SliderPage /> */}
			<Location />
			<Faq />
			<Footer />
		</div>
	);
};

export default Home;
