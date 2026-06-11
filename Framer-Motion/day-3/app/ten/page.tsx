"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {Heart, Home, Search, Star, Plus} from "lucide-react";

const items = [
    {
        icon: Search,
        x: 0,
        y: -80,
        bg: "bg-purple-500",
    },
    {
        icon: Home,
        x: 80,
        y: 0,
        bg: "bg-blue-500",
    },
    {
        icon: Heart,
        x: 0,
        y: 80,
        bg: "bg-red-500",
    },
    {
        icon: Star,
        x: -80,
        y: 0,
        bg: "bg-yellow-500",
    },
];

export default function Page() {
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
            <div className="relative w-40 h-40 flex items-center justify-center">
                <AnimatePresence>
                {open &&
                    items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.button
                        key={index}
                        initial={{
                            scale: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            x: item.x,
                            y: item.y,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0,
                            x: 0,
                            y: 0,
                            opacity: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            delay: index * 0.1,
                        }}
                        className={`absolute w-12 h-12 rounded-full flex items-center justify-center ${item.bg}`}
                        >
                        <Icon size={20} color="white" />
                        </motion.button>
                    );
                    })}
                </AnimatePresence>

                <motion.button
                onClick={() => setOpen(!open)}
                whileTap={{ scale: 0.9 }}
                whileHover={{scale : 1.05}}
                animate={{
                    rotate: open ? 45 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
                className="z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:cursor-pointer"
                >
                <Plus size={30} />
                </motion.button>
            </div>
        </div>
    );
}