import Link from 'next/link'
import React from 'react'

export const Finish = () => {
  return (
    <div className='mt-10 absolute top-[18%] left-[35%]'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className=' flex justify-center mb-16'>
        <img src='/imgs/Frame 3.png'></img> 
    </div>
    <div className='flex justify-center mb-24'>
        <div className='flex gap-10'>
            <div>
                <div className='flex flex-col'>
                    <button className=' rounded-[50%] w-8 text-white bg-blue-500 '>1</button>
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
                    <button className=' rounded-[50%] w-8 text-white bg-blue-500'>3</button>
                    <p>Finish</p>
                </div>
            </div>
        </div>
    </div>        
 <div>
    <div className=' flex justify-center mb-3' >
        <button className='rounded-[50%] p-2 w-12 text-white bg-blue-500 '><i class="fa-solid fa-check"></i></button>
    </div>  
    <div className='flex justify-center text-2xl mb-10'>
        <p>
        Good job!
        </p>
    </div>
    
    <div className='flex justify-center'>
        <p className='w-96 text-gray-500 text-sm mb-10'>
        Your very first account has been created. Now continue to dashboard and start tracking
        </p>
    </div>
    <div className=' flex justify-center'>
        <Link href='/'>
        <button className=' bg-blue-500 text-white rounded-2xl p-2 w-96'>
        Go to Dashboard
        </button>
        </Link>
       
    </div>
</div>
    
</div>
  )
}
