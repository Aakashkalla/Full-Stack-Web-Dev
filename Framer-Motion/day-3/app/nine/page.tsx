"use client"

import {motion} from "motion/react";

const page = () => {
    return (
        <div className="bg-[#001415] min-h-screen z-10 relative">
            <motion.div
            initial={{
                x : 500,
                y : 400
            }}
            animate={{
                x : [500,530,530,500,500],
                y : [300,300,250,250,300]
            }}
            transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
            }}
            className="blur-3xl bg-[#80ed99]/20 w-40 h-40 rounded-full absolute"
            />
            <motion.div
            initial={{
                x : 900,
                y : 400
            }}
            animate={{
                x : [900,950,930,900,900],
                y : [350,350,350,350,400]
            }}
            transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
            }}
            className="blur-3xl bg-cyan-300/20 w-50 h-50 rounded-full z-0 absolute"
            />
            <div className="flex items-center justify-center mt-20 overflow-hidden">
                <button className="bg-[#100515] flex items-center justify-center gap-2 text-cyan-300 rounded-full border-cyan-300/50 border px-4 py-1">
                <motion.div
                animate={{
                    opacity : [0.5, 1]
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="rounded-full h-2 w-2 bg-cyan-300"/>
                    Just shipped v1.0
                </button>
            </div>
            <div className="text-center text-7xl text-white font-semibold mt-10 tracking-tight">
                <h1>Build beautiful</h1>
                <h1 className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 to-[#c7f9cc]">animations</h1>
            </div>

            <div className="text-center max-w-lg text-lg mx-auto mt-10">
                <p className="text-white/40">A production-ready motion library for crafting polished interfaces with spring physics and layout animations.</p>
            </div>

            <div className="flex items-center justify-center mt-6">
                <div className="flex gap-2">
                    <motion.button
                    whileHover={{
                        y : -1
                    }}
                    className="bg-white text-black px-6 py-2 rounded-md hover:shadow-md hover:shadow-white/40 hover:cursor-pointer">Get Started</motion.button>
                    <motion.button
                    whileHover={{
                        scale : 0.98,
                        y : -1
                    }}
                    className="text-white bg-transparent border-white/40 border px-6 py-2 rounded-md hover:cursor-pointer">View Docs</motion.button>
                </div>
            </div>

            <div className="flex items-center justify-center mt-8">
                <div className="grid grid-cols-3 uppercase">
                    <div className="flex flex-col items-center">
                        <h1 className="text-white font-semibold text-2xl">30K+</h1>
                        <h2 className="text-white/40">stars</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-white font-semibold text-2xl">30M+</h1>
                        <h2 className="text-white/40">downloads</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-white font-semibold text-2xl">330+</h1>
                        <h2 className="text-white/40">examples</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
