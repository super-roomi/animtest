import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'



export default function nav() {
    const [showDropdown, setDropdown] = useState(false);

    return (
        <motion.nav>
            <motion.div variants={{ play: { y: -100 }, end: { y: 0 } }} initial="play" animate="end" className='sticky flex justify-between px-5 py-3 bg-black mt-2.5 mx-1.5 rounded-2xl'>
                <h1 className='text-3xl text-white'>AI-<span className='text-amber-300'>Does</span></h1>
                <svg onClick={() => setDropdown((prev => !prev))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8 text-white cursor-pointer active:scale-110 transition-all">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {showDropdown && <div className='dropdown'>
                    <ul className='text-xl text-white flex flex-row gap-23'>
                        <li>Home</li>
                        <li>Installation</li>
                        <li>About</li>
                    </ul>
                </div>}

            </motion.div>
        </motion.nav >
    )
}
