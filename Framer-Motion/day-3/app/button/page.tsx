"use client"

import {motion} from "motion/react";

const page = () => {
    return (
        <div style={{
            backgroundImage : `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)`,
            backgroundSize : "8px 8px",
            backgroundRepeat : "repeat"
        }} className="h-screen w-full bg-neutral-900 flex items-center justify-center">
            <motion.button
            drag
            dragConstraints={{
                top : -100,
                left : -100,
                right : 100,
                bottom : 100
            }}
            dragMomentum={false}
            whileDrag={{ scale: 1.1 }}
            
            whileHover={{
                rotateX : 2,
                rotateY : 11
            }}
            className="group relative text-neutral-500 px-12 py-2 rounded-lg bg-black">
                Simple
                <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 tranition-opacity duration-300 inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-full mx-auto blur-sm"></span>
            </motion.button>
        </div>
    )
}

export default page
