import React from "react";
import { Link } from "react-router-dom";

// interface props {
//   title: string;
//   selected: string;
//   buttonText: string;
//   img: string;
// }
const Right = (props) => {
	const { title, selected, buttonText, img } = props;
	return (
		<div className="mt-6 bg-gray-500 cursor-pointer md:mt-0">
			<div className="justify-between py-8 lg:flex">
				<div className="space-x-8 space-y-8 ">
					<div className="ml-8 text-2xl font-semibold text-black">{title}</div>
					<div className="text-gray-600 lg:max-w-2xl text-normal">
						{selected}
					</div>
					<div className="md:flex">
						<Link
							to="/contact-us"
							className="w-auto px-4 py-3 font-medium text-black rounded-lg rounded-bl-lg focus:outline-none text-[#00b4d8]-400 bg-[#00b4d8] hover:bg-[#00b4d8]"
						>
							{buttonText}
						</Link>
					</div>
				</div>
				{/* <div className="py-4 md:py-0">
          <img src={`/image/${img}`} alt="" className="w-96 md:w-[500px] md:ml-36 lg:ml-60 mt-4 lg:mt-0" />
        </div> */}
			</div>
		</div>
	);
};

export default Right;
