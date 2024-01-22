import Link from 'next/link'
import React from 'react'

export const Login = () => {
  return (
    <div className=' absolute top-[30%] left-[37%]'>
        <div className='flex justify-center mb-10'>
            <img src='/imgs/Frame 3.png'></img>
        </div>
        {/* welcome */}
        <div >
            <div className='flex justify-center'>
               <h1 className=' text-bold text-2xl left-5 mb-5'>
               Welcome Back
               </h1>
            </div>
            <div className='flex justify-center'>
                <p className='mb-10 text-gray-700'>
                Welcome back, Please enter your details
                </p>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='w-96 flex flex-col'>
                <input placeholder='Email ' className='mb-5 p-2 border border-gray-300 rounded-md'></input>
                <input placeholder='Passeword ' className='mb-5 p-2 border border-gray-300 rounded-md'></input>
                <button className='text-white bg-blue-500 mb-5 rounded-xl p-2'>Log in</button>
            </div>
        </div>
         <div className='flex justify-center'>
            <div>
            <p className='text-gray-800'>Don’t have account?</p>
            {/* <Link scrs>
            </Link> */}
            </div>
            
         </div>
        
    </div>
  )
}
