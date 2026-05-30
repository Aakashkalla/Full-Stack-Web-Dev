"use client"

import {easeInOut, motion} from "motion/react";
import { useState } from 'react'

const page = () => {
    const [isOn, setIsOn] = useState(true);
    return (
        <>
            <div className="h-screen flex justify-center items-center bg-neutral-800">
                <motion.div
                initial={{scale : 0}}
                transition={{
                    duration : 0.9,
                    ease : "easeInOut"
                }}
                animate={{
                    scale : !isOn ? 0 : 20,

                }}
                className={`fixed w-20 h-20 rounded-full ${isOn ? "bg-green-500" : "bg-red-500"}`}></motion.div>
                <motion.div
                transition={{
                    duration : 0.9,
                    ease : "easeInOut"
                }} layout className={`z-10  shadow-md shadow-black flex items-center px-2 rounded-3xl w-32 h-14 
                    ${isOn ? "justify-end" : "justify-start"}`}>
                    <motion.div 
                    layout
                    transition={{
                        duration : 0.4,
                        ease : easeInOut
                    }}
                    onClick={()=>setIsOn(!isOn)} 
                    className="hover:cursor-pointer h-10 w-10 rounded-full bg-white"></motion.div>
                    </motion.div>
            </div>
        </>
    )
}

export default page
