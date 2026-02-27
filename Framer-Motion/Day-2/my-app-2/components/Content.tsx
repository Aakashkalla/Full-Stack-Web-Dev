"use client"
import { IconChevronCompactLeft, IconChevronCompactRight, IconHome } from '@tabler/icons-react';
import { useState } from 'react'
import {motion} from 'motion/react'

const Content = () => {
    const [open, setOpen] = useState(true);

    const toggleSidebar = () =>{
        setOpen(!open);
    }

    const links = [
        {
            name : "Home",
            href : "/",
            icon : <IconHome/>
        },
        {
            name : "Analytics",
            href : "/",
            icon : <IconHome/>
        },
        {
            name : "Settings",
            href : "/",
            icon : <IconHome/>
        },
        {
            name : "Random",
            href : "/",
            icon : <IconHome/>
        },
    ]
    
    const sideBarVariant = {
        open : {
            width : "16rem"
        },
        closed : {
            width : "4.5rem"
        }
    }

    const parentVariant = {
        open : {
            transition : {staggerChildren : 0.05, delayChildren : 0.2}
        },
        closed : {
            transition : {staggerChildren : 0.05, staggerDirection : -1}
        }
    }

    const childVariants = {
        open : {
            opacity : 1,
            y : 0,
        },
        closed : {
            opacity : 0,
            y : -10 
        }
    }
    return (
        <motion.div
        initial = {false}
        animate = {open ? "open" : "closed"}
        exit = "closed"
        transition={{duration : 0.3}}
        className='border-r border-neutral-100 min-h-screen'>
            <motion.nav variants={sideBarVariant} className='bg-white shadow-md h-screen'>
                <div className='p-4 flex justify-between items-center'>
                    <h2 className={`bg-neutral-500 text-xl font-semibold ${!open && "sr-only"}`}>
                        Dashboard
                    </h2>
                    <button onClick={toggleSidebar} className='bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none'
                    aria-label={open ? "close-sidebar" : "Open Side-bar"}>
                        {open ? <IconChevronCompactLeft/> : <IconChevronCompactRight/>}
                    </button>
                </div>
                <div className='relative'>
                    <nav className='p-4'>
                        <motion.ul variants={parentVariant} className='space-y-2'>
                            {links.map((link)=>(
                                <motion.li variants={childVariants} key={link.name}>
                                    <a href={link.href} className='flex items-center p-2 text-gray-700 rounded hover:bg-gray-200' title={!open ? link.name : ""}>
                                        {link.icon}
                                        {open && link.name}
                                        </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>
                </div>
            </motion.nav>
        </motion.div>
    )
}

export default Content
