"use client"

import { motion } from "motion/react"
import { useRef, useState } from "react";

export default function Home() {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({x : 0, y : 0}); // To Track mouse position
	const handleMouseMove = (e : React.MouseEvent<HTMLDivElement>) =>{
		if(!ref.current) return;

		const {width, height, left, top} = ref.current.getBoundingClientRect(); // To get dimensions of the box ie button

		const {clientX, clientY} = e; // location of mouse pointer

		const x = clientX - (left + width / 2);
		const y = clientY - (top + height / 2);

		setPosition({x, y});
	}
	const handleMouseLeave = () => {
		setPosition({x : 0, y: 0});
	}
	return (
		<>
		<div className="h-screen w-full bg-neutral-900 flex items-center justify-center">
			<motion.div 
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			ref={ref}
			animate={{x : position.x, y : position.y}}
			transition={{type : 'spring', stiffness : 120, damping : 35, mass : 0.3}}
			>
				<button className="bg-linear-to-b from-yellow-500 to-orange-700 text-white font-medium rounded-lg px-4 py-2 active:scale-98 transition-all duration-200  cursor-pointer">Button</button>
			</motion.div>
		</div>
		</>
	);
}
