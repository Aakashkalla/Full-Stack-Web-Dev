"use client"
import {motion} from "motion/react";
const Content = () => {
    return (
        <div className="[perspective::1000px] [transform-3d] h-screen bg-neutral-800 w-full flex items-center justify-center"
        style={{
            backgroundImage : `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
            backgroundSize : "8px 8px",
            backgroundRepeat : "repeat"
        }}>
            <motion.button
            initial={{
                opacity : 0
            }}
            animate={{
                opacity : 1
            }}
            whileHover={{
                rotateX : 10,
                rotateY : 10,
                boxShadow : "0px 20px 50px rgba(100,112,184,0.7)",
                y:5 
            }}
            style={{
                translateZ : 100
            }}
            transition={{
                duration : 0.8
            }}
            className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black text-3xl">
                <span className="group-hover:text-cyan-500 transition-colors duration-300">Hey Lol</span>
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px blue-sm"></span>
            </motion.button>
        </div>
    )
}

export default Content
