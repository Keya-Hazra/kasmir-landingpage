import React from "react";
import { agra } from "../utils";
import { FaLocationArrow } from "react-icons/fa";

const Location = () => {
	return (
		<div className="py-20 bg-green-500/5">
			<div className="pb-8">
				<p className="text-xl font-semibold text-center text-green-500">
					Start your journey
				</p>
				<p className="font-semibold text-center text-pink-500">
					The most demanding places in Golden triangle
				</p>
			</div>

			<div className="flex items-center justify-center space-x-6">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {agra.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-2xl w-80 h-100"
                        >
                            <div className="p-2 w-50">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="flex items-center justify-center py-2 space-x-4">
                                <FaLocationArrow
                                    size={20}
                                    style={{
                                        color: "#E91E63",
                                    }}
                                />
                                <p className="text-lg font-semibold text-center text-green-500">
                                    {item.location}
                                </p>
                            </div>
                            <div className="px-10 py-2">{item.description}</div>
                        </div>
                    ))}
                </div>
			</div>
		</div>
	);
};

export default Location;
