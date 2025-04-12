import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

export default function Welcome() {
    return (
        <>
            <motion.div variants={{ hidden: { y: -100 }, show: { y: 0 }, transition: { staggerchildren: 0.25 } }} initial='hidden' animate='show' className='flex flex-col h-128 border m-3 rounded-xl bg-black px-4 py-1'>
                <h1 className='text-3xl lg:text-5xl text-white mt-2'>Welcome to AI-Does</h1>
                <p className='text-xl text-white mt-2'>Are all these todo list apps too much work? Let AI-Does handle it!</p>
                <div className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 text-white mt-6 ml-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className='text-white mt-5 ml-5'>Get your tasks REALLY done</p>
                </div>

                <motion.div whileHover={{ color: 'yellow' }} className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-18 text-white mt-6 ml-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                    <p className='text-white mt-5 ml-5'>Just talk! AI will handle the making of your todos and Deadlines!</p>
                </motion.div>

                <div className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-18 text-white mt-6 ml-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>

                    <p className='text-white mt-5 ml-5'> Get instant notifications! We won't forget and you won't either! </p>
                </div>

                <div className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 text-white mt-6 ml-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    <p className='text-white mt-5 ml-5'>Modify any of your todos in case they aren't to your liking :D</p>
                </div>

            </motion.div>

            <motion.div variants={{ hidden: { y: -100 }, show: { y: 0 }, transition: { duration: 1 } }} initial='hidden' animate='show' className='flex flex-col h-25 border m-3 rounded-xl bg-black px-4 py-1'>
                <h1 className='text-3xl lg:text-5xl text-white mt-2'>Where is my data going?</h1>
                <p className='text-xl text-white mt-2'>No where, trust me bro ;)</p>
            </motion.div>

            <motion.div variants={{ hidden: { y: -100 }, show: { y: 0 }, transition: { duration: 1 } }} initial='hidden' animate='show' className='flex flex-col h-128 border m-3 rounded-xl bg-black px-4 py-1'>
                <div className='flex flex-col items-center mt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-25 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                    <p className='text-xl text-white mt-3'>Lighting Fast, get your todos in no time</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-25 text-white mt-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <p className='text-xl text-white mt-3'>Ideal for any use case</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-25 text-white mt-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                    </svg>
                    <p className='text-xl text-white mt-3'>Smart and functional</p>
                </div>
            </motion.div>

            <motion.div variants={{ hidden: { y: -100 }, show: { y: 0 }, transition: { duration: 1 } }} initial='hidden' animate='show' className='flex flex-col h-16 border m-3 rounded-xl bg-black px-4 py-1'>
                <h1 className='text-2xl lg:text-5xl text-white mt-2'>Copyleft 2025 &copy; Roomi_Labs :S</h1>
            </motion.div>
        </>

    )
}
