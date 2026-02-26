"use client"
import { Icon24Hours, Icon360View, Icon3dCubeSphere, IconMessage, IconPlus, IconX } from "@tabler/icons-react";
import {AnimatePresence, motion} from "motion/react";
import Image from "next/image";
import { useState } from "react";
const Card = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
        <AnimatePresence>
        {open && 
        <motion.div
        initial={{
            opacity : 0,
            scale : 0.98,
            filter : "blur(10px)"
        }}
        animate={{
            opacity : 1,
            scale : 1.05,
            filter : "blur(0px)"
        }}
        exit={{
            opacity : 0,
            scale : 0.98,
            filter : "blur(10px)"
        }}
        transition={{
            duration : 0.5,
            ease : 'easeInOut'
        }}
        className="w-72 min-h-104 h-110 rounded-xl p-6 flex flex-col
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
            <h2 className="font-bold text-[10px]">Simple UI Components</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">A collection of simple UI Components.</p>
            <div className="flex justify-center items-center">
                <button onClick={()=> setOpen(false)} className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
                    <Image
                    width = {50}
                    height = {50}
                    className="h-4 w-4 bg-black"
                    alt="logo"
                    src={"/vercel.svg"}
                    />
                    Simple-UI
                    <IconX className="h-3 w-3 text-neutral-500"/>
                    </button>
            </div>
            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
                {/* Motion div start */}
                <motion.div
                initial={{opacity : 0, scale : 0.98, filter : 'blur(10px)'}}
                whileHover={{opacity : 1, scale : 1.05, filter : 'blur(0px)'}}
                transition={{duration : 0.3, ease : "easeInOut"}}
                className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200">
                    <div className="flex gap-2 p-4">
                        <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                            <IconMessage className="h-4 w-4 text-neutral-600"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[8px] font-bold text-neutral-600">
                                Simple UI Components
                            </p>
                            <p className="text-neutral-400 text-[8px] mt-1">
                                A collection of UI Components
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2 p-4">
                        <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                            <Icon24Hours className="h-4 w-4 text-neutral-600"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[8px] font-bold text-neutral-600">
                                24 hours turnaround
                            </p>
                            <p className="text-neutral-400 text-[8px] mt-1">
                                Super Fast Delivery at lighting speeds.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2 p-4">
                        <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                            <Icon360View className="h-4 w-4 text-neutral-600"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[8px] font-bold text-neutral-600">
                                360 days all around.
                            </p>
                            <p className="text-neutral-400 text-[8px] mt-1">
                                We are here to help you 24/7.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2 p-4">
                        <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                            <Icon3dCubeSphere className="h-4 w-4 text-neutral-600"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[8px] font-bold text-neutral-600">
                                3D Cube Sphere
                            </p>
                            <p className="text-neutral-400 text-[8px] mt-1">
                                3D Cube Sphere Icon.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2 p-4 items-center justify-center">
                        <div className="h-4 w-4 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                            <IconPlus className="h-3 w-3 text-neutral-600"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-neutral-400 text-[8px] mt-1">Create Project</p>
                        </div>
                    </div>
                    {/* Motion Div End */}
                </motion.div>
            </div>
        </motion.div>
        }
        </AnimatePresence>
        </>
    )
}

export default Card
