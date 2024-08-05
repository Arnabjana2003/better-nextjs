import Image from 'next/image'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { MdStarRate } from 'react-icons/md'

function HeroSection() {
  return (
    <section className='bg-[#004733] border border-green-800 px-10'>
            
            <h1 className='text-5xl md:text-7xl lg:text-9xl font-semibold text-center md:relative top-16 my-14 md:my-0 text-green-400 '>
            Mortgages
            <br/>
            made simple
            </h1>

            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div>
                    <button className='py-5 px-12 rounded-full bg-green-400 font-medium text-green-950 hover:text-white hover:bg-transparent'>Start my approval</button>
                    <p className='text-center text-white text-sm mt-2'>3 min | No credit impact</p>
                </div>
                <div className=''>
                    <Image src={"https://media.better.com/better-com/homepage/hero-variant-c.webp"} width={500} height={810} />
                </div>
                <div>
                    <div className='flex gap-2'>
                        <FcGoogle size={30}/>
                        <div className='flex'>
                        <MdStarRate color='yellow' size={30}/>
                        <MdStarRate color='yellow' size={30}/>
                        <MdStarRate color='yellow' size={30}/>
                        <MdStarRate color='yellow' size={30}/>
                        <MdStarRate color='yellow' size={30}/>
                        </div>
                    </div>
                    <p className='text-sm text-white text-wrap'>4.6 Stars | 3177 Google reviews</p>
                </div>
            </div>
        </section>
  )
}

export default HeroSection