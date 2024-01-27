import React, { useEffect, useState } from 'react'

export const Categorycart = () => {
    const [categoryData,setCategorydata]=useState([]);

    const feched=async()=>{
        try{
            const catesdb= await fetch('http://localhost:8000/cates');
            const CategoryData= await catesdb.json();
            console.log(CategoryData)
            setCategorydata(CategoryData);
        }catch(error){
            alert("fetchledee asuudaltai bn oo",error)
        }
    }
    //useEffect
    useEffect(()=>{
        feched()
    },[])

    let categorys=["Food & Drinks","Shopping","Housing","Transportation","Vehicle","Life & Entertaiment","Communication,PC","Financial expenses","investments","income","Other"]
    const category=["Food & Drinks","Shopping","Housing","Transportation","Vehicle"]
  return (

    <div className="w-10/12">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className='mb-3'>
        <div className='flex justify-between'>
            <div className='flex gap-5'>
                <button className='bg-gray-300 w-8 h-7 rounded-lg'><i class="fa-solid fa-chevron-left"></i></button>
                <p>Last 30 Days</p>
                <button className='bg-gray-300 w-8 h-7 rounded-lg'><i class="fa-solid fa-chevron-right"></i></button>

            </div>
            <div>
                <select className=' rounded-lg border border-gray-300 p-2 bg-gray-100'>
                   <option>Newest fisrt</option>
                </select>
            </div>
        </div>
    </div>
    <div className='flex justify-between bg-white p-2 rounded-lg mb-7'>
        <div className='flex gap-3'>
            <button className='w-5 h-5 border border-gray-300 bg-gray-100 mt-1'></button>
            <p>Select all</p>
        </div>
        <p>
          909090
        </p>
    </div>
    {/* today  */}
    <div>
    <h1 className="text-lg mb-3">Today</h1>
        {
            categoryData.map((props)=>{
                return(
                <div className='flex justify-between bg-white p-4 rounded-lg mb-4'>
                    <div className='flex gap-3'>
                        <button className='w-5 h-5 border border-gray-300 bg-gray-100 mt-1'></button>
                        <button className=' bg-blue-600 rounded-full p-1'>
                            <img src='/imgs/House.png'></img>
                        </button>
                        <div className='flex flex-col '>
                            <h1>{props?.name}</h1>
                            <p className=' text-sm'>{props?.clock}</p>
                        </div>
                    </div>
                    <p className={ `${props?.types==="expense"?" text-red-500":"text-green-600"}`}>
                     {props?.amount}
                    </p>
                </div>
                )
            })
        }
        <h1 className="text-lg mb-5">Yesterday</h1>
        <div>
            {
                categoryData.map((props)=>{
                    return(
                    <div className='flex justify-between bg-white p-4 rounded-lg mb-4'>
                        <div className='flex gap-3'>
                            <button className='w-5 h-5 border border-gray-300 bg-gray-100 mt-1'></button>
                            <button className=' bg-blue-600 rounded-full p-1'>
                                <img src='/imgs/House.png'></img>
                            </button>
                            <div className='flex flex-col '>
                                <h1>{props?.name}</h1>
                                <p className=' text-sm'>{props?.clock}</p>
                            </div>
                        </div>
                        <p className={ `${props?.types==="expense"?" text-red-500 ":" text-green-600"}`}>
                         {props?.amount}
                        </p>
                    </div>
                    )
                })
            }
        </div>
        
    </div>
</div>
  )
}
