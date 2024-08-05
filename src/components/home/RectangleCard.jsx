import Image from 'next/image'
import React from 'react'
import RightArrowBtn from '../RightArrowBtn'

function RectangleCard({flex,data}) {
  return (
    <div className={`w-full h-full p-10 flex flex-col ${flex} gap-6 justify-between bg-blue-50 rounded-lg`}>
        <div className=''>
        <h4 className='text-2xl font-semibold'>{data?.title}</h4>
        <p className='my-5 hidden md:block'>{data?.description}</p>

        <RightArrowBtn/>
        </div>

        <Image src={data?.imageLink} width={200} height={200} className='w-full h-[160px] md:h-[130px] lg:h-full rounded-md'/>
    </div>
  )
}

export default RectangleCard