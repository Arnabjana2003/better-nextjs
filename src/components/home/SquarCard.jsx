import React from 'react'
import RightArrowBtn from '../RightArrowBtn'
import Image from 'next/image'

function SquarCard({data}) {
  return (
    <div className='w-full h-full p-10 bg-blue-50 rounded-lg'>
        <h4 className='text-2xl font-semibold'>{data?.title}</h4>
        <RightArrowBtn/>
        <Image src={data?.imageLink} width={200} height={200} className='w-full h-[160px] md:h-[130px] rounded-md'/>
    </div>
  )
}

export default SquarCard