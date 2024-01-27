import React, { useEffect, useState } from 'react'

export const CategoryNames = () => {
    const [cateName,setCateName]=useState("")
    // const fechedData= async()=>{
    //     try{
    //        const feched= await fetch('');
    //        const categoryName=await feched.json();
    //        setCateName(categoryName);
    //     }catch(error){
    //         console.log(error)
    //     }
    // }
    // useEffect(()=>{
    //     fechedData();
    // })
    const Namedata=async()=>{
        const res= await fetch('http://localhost:8000/names',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(categorys)
        })
        console.log(res.status);
    }
    useEffect(()=>{
        Namedata()
    },[])
    let categorys=["Food & Drinks","Shopping","Housing","Transportation","Vehicle","Life & Entertaiment","Communication,PC","Financial expenses","investments","income","Other"]
  return (
    <ul>
        {
            // cateName.map((props)=>{
            //     return(  
            //             <li className="group flex gap-2 justify-between mb-1">
            //                 <div className='flex gap-2'>
            //                     <div>
            //                     <i class="fa-regular fa-eye"></i>
            //                     </div>
            //                     <h1>{props}</h1>
            //                 </div>
            //                 <div>
            //                     <i class="fa-solid fa-caret-right"></i>
            //                 </div>
            //             </li>
            //         )
            // })
        }
  </ul>
  )
}
