import React from 'react'

export const Currency = () => {
  return (
    <div>
        <div className=' flex justify-center'>
            <img src='/imgs/Frame 3.png'></img>
        </div>
        <div className='flex justify-center'>
            <div className='flex gap-10'>
                <div>
                    <div className='flex flex-col'>
                        <button className=' rounded-[50%] w-8 text-white bg-blue-500 '>1</button>
                        <p>Currency</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <button className=' rounded-[50%] w-8 '>2</button>
                        <p>Balance</p>
                    </div>
                </div>
                <div>   
                    <div className='flex flex-col'>
                        <button className=' rounded-[50%] w-8'>3</button>
                        <p>Finish</p>
                    </div>
                </div>
            </div>
        </div>
            
    </div>
  )
}
