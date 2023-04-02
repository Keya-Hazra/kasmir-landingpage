import { useState } from "react";

function ImageContainer({ src, alt, className }) {
	const [loading, setLoading] = useState(true);

	return (
		<img
			src={src}
			alt={alt}
			className={`${className} transition duration-300 ease-in-out ${
				loading ? "bg-gray-600/40 animate-pulse rounded-md" : "opacity-100"
			}`}
			onLoad={() => setLoading(false)}
		/>
	);
}

export default ImageContainer;
