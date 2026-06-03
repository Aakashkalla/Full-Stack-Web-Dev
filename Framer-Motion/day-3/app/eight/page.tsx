"use client";

import { Bell, X } from "lucide-react";
import { AnimatePresence,  motion  } from "motion/react";
import { useState } from "react";

const page = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative min-h-screen bg-[#001418] flex items-center justify-center">
            <div className="">
                <motion.button
                whileTap={{
                    scale : 0.95
                }}
                transition={{
                    duration : 0.3,
                    ease : "easeInOut"
                }}
                onClick={()=>setOpen(true)}
                className="text-white font-semibold shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] px-4 py-2 rounded-full hover:cursor-pointer">Add Toast</motion.button>
            </div>

            <AnimatePresence>
                {open && (
                    <>
                    <motion.div
                    initial={{
                        opacity : 0,
                        y : 20,
                        scale : 0.95
                    }}
                    animate={{
                        y : 0,
                        opacity : 1,
                        scale : 1 
                    }}
                    exit={{
                        y : 30,
                        opacity : 0,
                        scale : 0.95
                    }}
                    transition={{
                        type : "spring",
                        stiffness : 500,
                        damping : 30,
                    }}
                    className="absolute bottom-10 bg-[#001525] text-white px-6 py-2 rounded-md flex gap-5 items-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                        <Bell/>
                        <div className="flex items-center justify-between gap-10">
                            <div className="flex flex-col">
                                <h3 className="text-sm">Reminder</h3>
                                <p className="text-xs">Team standup starts in 5 mins</p>
                            </div>
                            <motion.div
                            initial={{
                                opacity : 0.6
                            }}
                            whileHover={{
                                opacity : 1
                            }}
                            onClick={()=>setOpen(false)} className="text-white hover:cursor-pointer"><X/></motion.div>
                        </div>
                    </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default page
