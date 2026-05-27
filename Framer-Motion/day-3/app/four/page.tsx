// Variants in Motion. 
"use client"

import { ChartBar, ChevronDown, ChevronUp, HomeIcon, Settings, User } from "lucide-react";
import {motion} from "motion/react";
import { useState } from "react";

const links = [{
    name : "Home",
    icon : <HomeIcon/>
},{
    name : "Analytics",
    icon : <ChartBar/>
},{
    name : "Users",
    icon : <User/>
},{
    name : "Settings",
    icon : <Settings/>
}]

const linksVariant = {
    open : {
        height : "12rem",
        transition : {
            duration : 0.5
        }
    },
    close : {
        height : "1.5rem",
        transition : {
            duration : 0.5
        }
    }
}

const parentVariants = {
    open : {
        transition : {
            staggerChildren : 0.07,
            delayChildren : 0.2
        }
    },
    close : {
        transition : {
            staggerChildren : 0.05,
            staggerDirection : -1
        }
    }
}

const childVariants = {
    open : {
        opacity : 1,
        x : 0
    },
    close : {
        opacity : 0,
        x : -10
    }
}
const page = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "close"}
            className="h-screen bg-black flex items-center justify-center">
            <div className="overflow-hidden p-4 flex flex-col gap-5 items-center justify-center">
                <h1 className="text-xl font-semibold text-white flex gap-2">
                    Motion Variants 
                    <button onClick={()=>setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <ChevronDown/> : <ChevronUp/>}
                    </button>
                </h1>
                <motion.div variants={linksVariant} className="flex flex-col">
                    <motion.ul variants={parentVariants} className="space-y-2">
                        {links.map((link)=>(
                            <motion.li variants={childVariants} key={link.name} className="flex gap-2 items-center p-2 text-white rounded font-medium">
                                {link.icon}
                                {link.name}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div> 
            </div>
        </motion.div>
        </>
    )
}

export default page