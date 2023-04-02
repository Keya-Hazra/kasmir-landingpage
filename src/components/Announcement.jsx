import React from "react";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

const Announcement = () => {
	return (
		<div className="flex px-10 py-1 font-semibold text-white bg-green-500">
			<div className="flex space-x-4">
				<div className="flex space-x-2">
					<span className="mt-1 text-sm font-semibold ">
						<BsFillTelephoneFill size={12} />
					</span>
					<span className="text-sm font-semibold">+919073231547</span>
				</div>
				<div className="flex space-x-2">
					<span className="mt-1 text-sm font-semibold ">
						<BsFillEnvelopeFill size={12} />
					</span>
					<span className="text-sm font-semibold font-norma">
						info@tripncare.com
					</span>
				</div>
			</div>
		</div>
	);
};

export default Announcement;
