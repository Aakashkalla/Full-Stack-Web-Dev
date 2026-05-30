// Motion Hooks
"use client"

import {motion} from "motion/react";
import { useState } from "react";

const page = () => {
    const [innerExpanded, setInnerExpanded] = useState(false)
    const [outerExpanded, setOuterExpanded] = useState(false)
    return (
        <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
                {/* <motion.div 
                animate={{transform : "rotate(360deg)"}}
                transition={{
                    duration : 1.25,
                    repeat : Infinity,
                    ease : "linear"
                }}
                className="w-10 h-10 border-t border-blue-300 rounded-[50%]"></motion.div> */}

                <motion.div 
                onClick={()=>{
                        if(!innerExpanded){
                            setInnerExpanded(true)
                            setTimeout(()=>{
                                setOuterExpanded(true)
                            },700)
                        }else{
                            setOuterExpanded(false)
                            setTimeout(()=>{
                                setInnerExpanded(false)
                            },700)
                        }
                        
                    }}
                animate={{
                    width : outerExpanded ? 300 : 180,
                    height : outerExpanded ? 300 : 180
                }}
                transition={{
                        ease: "easeInOut",
                        duration: 0.7 
                }}
                className="bg-transparent border border-blue-400 w-40 h-40 rounded-lg flex items-center justify-center hover:cursor-pointer">
                    <motion.div 
                    animate={{
                        width : innerExpanded ? 120 : 80,
                        height : innerExpanded ? 120 :  80
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.7 
                    }}
                    className="bg-blue-600 rounded-lg flex items-center justify-center">
                            <div className="absolute h-8 border-l-2 border-dashed border-white"></div>
                            <div className="absolute w-8 border-t-2 border-dashed border-white"></div>
                    </motion.div>  
                </motion.div>
        </div>
    )
}

export default page
