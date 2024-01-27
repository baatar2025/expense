import Link from 'next/link'
import React, { useState } from 'react'

export const Balance = () => {
    const [email,setemail]=useState('')
  return (
    <div className='mt-10'>
    <div className=' flex justify-center mb-16'>
        <img src='/imgs/Frame 3.png'></img> 
    </div>
    <div className='flex justify-center mb-24'>
        <div className='flex gap-10'>
            <div>
                <div className='flex flex-col'>
                    <button className=' rounded-[50%] w-8 text-white bg-blue-500  '>1</button>
                    <p>Currency</p>
                </div>
            </div>
            <div>
                <div className='flex flex-col'>
                    <button className=' rounded-[50%] w-8 text-white bg-blue-500'>2</button>
                    <p>Balance</p>
                </div>
            </div>
            <div>   
                <div className='flex flex-col'>
                    <button className=' rounded-[50%] w-8 '>3</button>
                    <p>Finish</p>
                </div>
            </div>
        </div>
    </div>        
 <div>
    <div className=' flex justify-center mb-3' >
        <img src="/imgs/Money.png" alt="" className=' bg-blue-500 p-2 rounded-full  '/>
    </div>  
    <div className='flex justify-center text-2xl mb-7'>
        <p>
        Set up your cash Balance
        </p>
    </div>
    <div className='flex justify-center'>
        <input type="text" placeholder='Email' className='w-96 h-12 mb-3 border border-gray-400 rounded-lg p-2 bg-gray-100' 
        onChange={(e)=>{
            setemail(e.target.value)
        }}/>
    </div>
    <div className='flex justify-center'>
        <p className='w-96 text-gray-500 text-sm mb-10'>
        How much cash do you have in your wallet?
        </p>
    </div>
    <div className=' flex justify-center'>
      <Link href='./finish'>
      <button className=' bg-blue-500 text-white rounded-2xl p-2 w-96'>
        Confirm 
        </button>
      </Link>  
    </div>
</div>
    
</div>
  )
}
