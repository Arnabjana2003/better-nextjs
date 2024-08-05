 "use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { MdStarRate } from 'react-icons/md'

function StoriesSection() {
    const [storyPic,setStoryPic] = useState(0)
    const storyPicUrls = ["https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp","https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp","https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp"]
  return (
    <section id='stories' className='pt-20 px-8 md:p-12 lg:p-28'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                <div>
                    <Image src={storyPicUrls[storyPic]} width={341} height={606} className='rounded-xl transition-all duration-150'/>
                    <div className='mt-7 flex justify-between'>
                    <button className={`px-6 py-3 border rounded-3xl hover:border-green-800 hover:border-4 transition-all duration-150 hover:px-5 hover:py-2 ${storyPic === 0 ?"border-4 border-green-900":"border-slate-300"}`} onClick={()=>setStoryPic(0)}>Arian</button>
                    <button className={`px-6 py-3 border rounded-3xl hover:border-green-800 hover:border-4 transition-all duration-150 hover:px-5 hover:py-2 ${storyPic === 1 ?"border-4 border-green-900":"border-slate-300"}`} onClick={()=>setStoryPic(1)}>Amada</button>
                    <button className={`px-6 py-3 border rounded-3xl hover:border-green-800 hover:border-4 transition-all duration-150 hover:px-5 hover:py-2 ${storyPic === 2 ?"border-4 border-green-900":"border-slate-300"}`} onClick={()=>setStoryPic(2)}>Paul</button>
                    </div>
                </div>
                <div className='w-full md:w-[45%] mb-10 md:mb-0'>
                    <h1 className='text-5xl md:text-8xl font-semibold text-slate-800'>Find out why we’re better.</h1>
                    <button className='w-full md:w-auto px-9 py-5 rounded-full bg-green-900 text-white my-8 font-medium'>See all our stories</button>
                    <p className='flex gap-3 items-center'>
                    <span className='font-semibold flex items-center'>
                        <MdStarRate size={25} color='green'/>
                        Trustpilot
                        </span>

                        <span className='text-slate-700 font-semibold'>
                            Excellent
                        </span>
                        <span>
                            <span className='font-medium text-slate-700'>4.3 </span> out of 5
                        </span>
                    </p>
                </div>
            </div>
        </section>
  )
}

export default StoriesSection