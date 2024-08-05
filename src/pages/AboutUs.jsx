"use client"

import { svgs } from '@/components/aboutUs/svgs'
import TimelineView from '@/components/aboutUs/TimelineView'
import Image from 'next/image'
import React from 'react'

function AboutUs() {
  return (
    <div className=''>
        <div className='w-full lg:w-[80%] mx-auto text-center mt-64 text-wrap'>
            <h1 className='text-3xl font-semibold text-green-600 my-8'>Our mission</h1>
            <h4 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</h4>
        </div>

        <section className='mt-52 px-5 md:px-0 flex flex-col-reverse md:flex-row justify-center'>
            <div className='w-full md:w-[40%]'>
                <h4 className='text-4xl font-semibold mb-8 text-slate-800'>The status quo is broken</h4>
                <p className='text-slate-600'>The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
                <button className='px-7 py-5 bg-green-700 hover:bg-green-900 text-white rounded-md my-10'>Read Vishal's story</button>
            </div>
            <div className='w-full md:w-[40%] flex justify-end'>
                <Image src={'https://media.better.com/video/vishal-mission.jpg'} width={800} height={800} className='w-[28rem] h-[28rem] object-cover'/>
            </div>
        </section>

        <section className='bg-green-700 py-20 text-white mt-40'>
            <div className='w-[80%] mx-auto'>
                <h4 className='text-5xl font-semibold mb-7'>How we’re changing things</h4>
                <p className='mb-5'>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</p>
                <p className=''>That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
            </div>
        </section>

        <section className='mt-32 w-full'>
            <h4 className='text-4xl font-semibold text-center text-slate-800 mb-16'>Backed by</h4>
            <div className='w-[90%] flex flex-wrap justify-center mx-auto gap-3'>
           {svgs.svg1}
           {svgs.svg2}
           {svgs.svg3}
           {svgs.svg4}
           {svgs.svg5}
           {svgs.svg6}
           {svgs.svg7}
            </div>
        </section>

        <section className='mt-32 w-full mb-16'>
        <h4 className='text-4xl font-semibold text-center text-slate-800 mb-16'>Company Timeline</h4>
            <TimelineView/>
        </section>
    </div>
  )
}

export default AboutUs