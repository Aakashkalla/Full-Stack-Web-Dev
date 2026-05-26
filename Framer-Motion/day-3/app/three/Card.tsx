"use client"

import { Annoyed, ClockPlus, MessageCircle, Plus, Thermometer, X } from "lucide-react"
import {AnimatePresence, motion} from "motion/react";

import Image from "next/image"
import { useState } from "react";

const Card = () => {
    const [open , setOpen] = useState(true);
    return (
        <div className="flex flex-col gap-4">
        
        <div className="flex justify-center items-center">
            <motion.button
            whileHover={{
                scale : 1.05
            }}
            transition={{
                duration : 0.2,
                ease : "easeInOut"
            }}
            onClick={()=> setOpen(true)} className="flex justify-center items-center bg-white rounded-sm px-2 hover:cursor-pointer hover:shadow-lg">
                Show Card
            </motion.button>
        </div>
        
        <AnimatePresence>
        {open && (
            <motion.div
            initial={{
                opacity : 0,
                scale : 0.5,
                filter : "blur(10px)"
            }}
            animate={{
                opacity : 1,
                scale : 1,
                filter : "blur(0px)"
            }}
            exit={{
                opacity : 0,
                scale : 0.5,
                filter : "blur(10px)"
            }}

            transition={{
                duration : 0.4,
                ease : "easeInOut"
            }}
            className="w-72 min-h-104 h-112 rounded-xl shadow-sm shadow-neutral-400 p-4 flex flex-col bg-white">
                <h2 className="font-bold text-[15px]">Card Components</h2>
                <p className="text-neutral-500 mt-2 text-[10px]">A collection of beautiful card components, let's get on with it.</p>

                <div className="flex items-center justify-center">
                    <button onClick={() => setOpen(false)} className="flex items-center gap-1 text-[10px] mt-4 px-2 py-1 shadow-sm rounded-md"><Image alt="logo" src="/vercel.svg" width={30} height={30}/>
                    Card Component
                    <X  className="size-4 cursor-pointer" color="gray"/>
                    </button>
                </div>
                <div className="flex-1 mt-4 rounded-lg bg-gray-100 border border-dashed border-neutral-300 relative">
                    {/* Motion Divs Here */}
                    <motion.div
                    initial={{
                        opacity : 0,
                        scale : 0.98,
                        filter : 'blur(10px)'
                    }}

                    whileHover={{
                        opacity : 1,
                        scale : 1.05,
                        filter : 'blur(0px)'
                    }}

                    transition={{
                        duration : 0.3,
                        ease : "easeInOut"
                    }}
                    className="absolute inset-0 h-full w-full rounded-lg bg-gray-100 divide-y divide-neutral-200">
                        <div className="flex gap-2 p-4">
                            <div className="h-7 w-7 shrink-0 bg-white rounded-md flex items-center justify-center shadow-sm">
                                <MessageCircle className="size-4 text-neutral-600"/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[8px] font-bold text-neutral-600">
                                    Card Components
                                </p>    
                                <p className="text-neutral-400 text-[8px] mt-1">
                                    A collection of Card Components
                                </p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex gap-2 p-4">
                            <div className="h-7 w-7 shrink-0 bg-white rounded-md flex items-center justify-center shadow-sm">
                                <ClockPlus className="size-4 text-neutral-600"/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[8px] font-bold text-neutral-600">
                                    24 hours Support
                                </p>    
                                <p className="text-neutral-400 text-[8px] mt-1">
                                    Super Fast Tech Support
                                </p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex gap-2 p-4">
                            <div className="h-7 w-7 shrink-0 bg-white rounded-md flex items-center justify-center shadow-sm">
                                <Thermometer className="size-4 text-neutral-600"/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[8px] font-bold text-neutral-600">
                                    Hot Components
                                </p>    
                                <p className="text-neutral-400 text-[8px] mt-1">
                                    Designed in Crazy Temperatures
                                </p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex gap-2 p-4">
                            <div className="h-7 w-7 shrink-0 bg-white rounded-md flex items-center justify-center shadow-sm">
                                <Annoyed className="size-4 text-neutral-600"/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[8px] font-bold text-neutral-600">
                                    WHAT TO WRITE!!
                                </p>    
                                <p className="text-neutral-400 text-[8px] mt-1">
                                    JUST BEAR WITH IT!
                                </p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex gap-2 p-4 items-center justify-center">
                            <div className="h-6 w-6 shrink-0 bg-white rounded-md flex items-center justify-center shadow-sm">
                                <Plus className="size-4 text-neutral-600"/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[8px] font-bold text-neutral-600">
                                    IDK
                                </p>    
                            </div>
                        </div>
                    </motion.div>
                    {/* Motion Div Ends here */}
                </div>
            </motion.div>
        )}  
        </AnimatePresence>
        </div>
    )
}

export default Card
