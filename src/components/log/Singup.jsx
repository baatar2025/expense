import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'

export const Singup = () => {
    const [input,setinput]=useState([])
    const [product,setproduct]=useState([])
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
    const [repass,setrepass]=useState('')
    const fetched=async()=>{
        try{
            const fetched= await fetch('http://localhost:8000/');
            const data= await fetched.json();
            setproduct(data);
        }catch(error){
            console.error(error)
        }
    }

    function getinput(){
        setinput({
            name:name,
            email:email,
            pass:pass
        })
    }
    // validation
    const  create = async()=>{
        if(pass === repass){
        }else{ return alert("pass buruu bna")}
        if(!name || !email || !pass) return alert("dutu bna")
        try{
            const fetched = await fetch("http://localhost:8000/"+"sinup",{
            method: "POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input),
           })
           alert('success')
        }catch(error){
           alert("error: ",error)
        }
    }

    useMemo(()=>{
        getinput();
    },[name,email,pass])

    useEffect(()=>{
       fetched();
    },[])

  return (
    <div className=' absolute top-[22%] left-[37%]'>
        <div className='flex justify-center mb-10'>
            <img src='/imgs/Frame 3.png'></img>
        </div>
        {/* welcome */}
        <div>
            <div className='flex justify-center'>
               <h1 className=' text-bold text-2xl left-5 mb-5'>
                   Create Geld account
               </h1>
            </div>
            <div className='flex justify-center'>
                <p className='mb-10 text-gray-700'>
                   Sign up below to create your Wallet account
                </p>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='w-96 flex flex-col'>
                <input placeholder='Name' className='mb-5 p-2 border border-gray-300 rounded-md' onChange={(e)=>setname(e.target.value)}></input>
                <input placeholder='Email' className='mb-5 p-2 border border-gray-300 rounded-md' onChange={(e)=>setemail(e.target.value)}></input>
                <input placeholder='Passeword' className='mb-5 p-2 border border-gray-300 rounded-md' onChange={(e)=>setpass(e.target.value)}></input>
                <input placeholder='Re-password' className='mb-5 p-2 border border-gray-300 rounded-md' onChange={(e)=>setrepass(e.target.value)}></input>
                {/* <Link href='./stepone'> */}
                <button className='text-white bg-blue-500 mb-5 rounded-xl p-2 w-[100%]'
                onClick={create}>Sing up</button>
                {/* </Link> */}
            </div>
        </div>
         <div className='flex justify-center'>
            <div>
               <p className='text-gray-800'>Don’t have account?</p>
            </div>
         </div>
        
    </div>
  )
}
