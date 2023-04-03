import { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";


function Accordion({ title, body }) {
	const ref = useRef(null);
	const [selected, setSelected] = useState(false);

	return (
		<button
			type="button"
			onClick={() => setSelected((v) => !v)}
			className={` cursor-pointer border-white/50 ${selected && "pb-4"}`}
		>
			<div className="mx-20">
				<div className="flex items-center justify-between lg:mx-60 xl:mx-40 py-5 border-t border-[#00b4d8]/10">
					<p className="text-[#010103]/80 font-semibold">{title}</p>
					<span className="font-bold transition duration-500 ease-out transform">
						{selected ? (
							<p className="bg-white rounded-full shadow-lg w-7 h-7">
								<FaMinus className="w-5 h-5 pt-2 pl-2 text-blue-600" />
							</p>
						) : (
							<p className="bg-white rounded-full shadow-lg w-7 h-7">
								<FaPlus className="w-5 h-5 pt-2 pl-2 text-blue-600" />
							</p>
						)}
					</span>
				</div>
				<div
					ref={ref}
					className="relative overflow-hidden transition-all duration-500 not-prose"
					style={{
						maxHeight: selected && ref.current ? ref.current.scrollHeight : 0,
					}}
				>
					<div className="border rounded-lg border-blue-500/20 bg-blue-500/5 lg:mx-60 xl:mx-40 focus:outline-none">
						<p className="p-4 text-base text-left font-normal text-[#010103]/54">
							{body}
						</p>
					</div>
				</div>
			</div>
		</button>
	);
}

export default Accordion;
