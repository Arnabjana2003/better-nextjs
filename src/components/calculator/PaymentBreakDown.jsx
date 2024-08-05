'use client'


import React, { useState } from 'react'

function PaymentBreakDown({data}) {
    const [active,setActive] = useState(null)

const total = Number(Object.values(data).map(item=>item.value).reduce((prev,curr)=>prev+Number(curr),0))
console.log({total})
  return (
    <div className='w-full p-12'>
        <h5 className='text-lg font-semibold'>Monthly payment breakdown</h5>
        <p className='text-5xl font-bold my-5'>${total.toFixed(2)}/mo</p>

        <div className='mt-10 w-full flex'>
            {Object.values(data).map((itm,index)=><div onMouseEnter={()=>setActive(index)} onMouseLeave={()=>setActive(null)} key={index} style={{width:`${itm.value*100/total}%`,backgroundColor:(active === null || active===index)?itm.color:"#ede7e3"}} className='bg-red-200 h-20 rounded-full'></div>)}
        </div>

        {active !== null && <div className='w-full shadow-lg shadow-slate-3 00 rounded-md p-8 mt-10 bg-slate-50'>
            <h5 className='text-lg font-semibold mb-5'>{Object.keys(data)[active]}</h5>
            <p className='text-slate-500'>{Object.values(data)[active]?.des} Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, optio.</p>
        </div>}
    </div>
  )
}

export default PaymentBreakDown