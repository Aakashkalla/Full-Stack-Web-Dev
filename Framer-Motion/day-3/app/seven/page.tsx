"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function Page() {
    const [open, setOpen] = useState(false);

    return (
        <div className="h-screen flex items-center justify-center bg-neutral-900">
            <motion.div
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-30 h-30 rounded-full bg-neutral-500 border border-neutral-400 cursor-pointer"
            >
            {/* 1 -> goes to 4 */}
            <motion.div
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
            }}
            animate={{
                x: open ? 18 : 0,
                y: open ? 17 : 0,
                rotate: open ? 135 : 0,
                width: open ? 39 : 20,
                height: open ? 6 : 20,
            }}
            className="absolute top-8 left-8 rounded-full bg-white"
            />

            {/* 4 -> goes to 3 */}
            <motion.div
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
            }}
            animate={{
                x: open ? 2 : 0,
                y: open ? 40 : 0,
                rotate: open ? -135 : 0,
                width: open ?  39 :  20,
                height: open ? 6 : 20,
            }}
            className="absolute top-8 right-8 rounded-full bg-white"
            />

            {/* 3 -> goes to 2 */}
            <motion.div
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
            }}
            animate={{
                x: open ? -20 : 0,
                y: open ? -9 : 0,
                rotate: open ? 135 : 0,
                width: open ? 39 : 20,
                height: open ? 6 : 20,
            }}
            className="absolute bottom-8 right-8 rounded-full bg-white"
            />

            {/* 2 -> goes to 1 */}
            <motion.div
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
            }}
            animate={{
                x: open ? -5 : 0,
                y: open ? -31 : 0,
                rotate: open ? -135 : 0,
                width: open ? 39 : 20,
                height: open ? 6 : 20,
            }}
            className="absolute bottom-8 left-8 rounded-full bg-white"
            />
        </motion.div>
        </div>
    );
}