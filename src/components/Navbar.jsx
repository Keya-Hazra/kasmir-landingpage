import React from "react";
import { useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const ref = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	// const handleLinkOnClick = () => setIsOpen(false);
	return (
		<>
			<div
				ref={ref}
				className="relative pt-1 overflow-hidden transition-all duration-500 ease-in-out"
				style={{ maxHeight: isOpen && ref.current ? 800 : 60 }}
			>
				<div className="flex justify-between px-4 lg:px-10">
					<div>
						<img
							src="Logo.jpg"
							alt=""
							className="object-scale-down h-8 w-50 md:max-w-md xs:object-fill"
						/>
					</div>
					<div className="text-lg font-bold text-pink-500 md:text-3xl">
						Golden-
						<span className="text-lg font-bold text-green-500 md:text-3xl">
							Triangle
						</span>
					</div>
					<div className="hidden space-x-4 lg:flex">
						<div className="px-4 py-1 font-semibold text-white rounded-lg bg-gradient-to-r from-green-300 via-green-400 to-green-500 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-500">
							<a
								href="https://www.tripncare.com/"
								target="_blank"
								rel="noreferrer"
								className="hover:underline"
							>
								Tripncare
							</a>
						</div>
						<div className="px-4 py-1 font-semibold text-white rounded-lg bg-gradient-to-r from-green-300 via-green-400 to-green-500 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-500">
							<a
								href="https://www.travelncare.com/"
								target="_blank"
								rel="noreferrer"
								className="hover:underline"
							>
								Travelncare
							</a>
						</div>
					</div>
					<button
						type="button"
						className="flex justify-end p-2 space-x-4 text-green-500 transition duration-500 ease-in-out cursor-pointer lg:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? (
							<AiOutlineClose size={20} />
						) : (
							<AiOutlineMenu size={20} />
						)}
					</button>
				</div>
			</div>
			{/* small screen links STARTS */}
			{isOpen && (
				<div className="p-2 my-4 space-y-2 rounded-lg lg:hidden">
					<div className="px-4 py-1 font-semibold text-center text-white rounded-lg bg-gradient-to-r from-green-300 via-green-400 to-green-500 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-500">
						<a
							href="https://www.tripncare.com/"
							target="_blank"
							rel="noreferrer"
							className="hover:underline"
						>
							Tripncare
						</a>
					</div>
					<div className="px-4 py-1 font-semibold text-center text-white rounded-lg bg-gradient-to-r from-green-300 via-green-400 to-green-500 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-500">
						<a
							href="https://www.travelncare.com/"
							target="_blank"
							rel="noreferrer"
							className="hover:underline"
						>
							Travelncare
						</a>
					</div>
				</div>
			)}
			{/* small screen links ENDS */}
		</>
	);
};

export default Navbar;
