import Link from 'next/link'
import Router from 'next/router';
import React, { useMemo, useState } from 'react'

export const Login = () => {
    const [input,setinput]=useState([]);
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    function getvalues(){
        setinput({
            email:email,
            pass:pass
        })
    }
    useMemo(()=>{
        getvalues();
    },[email,pass])
    const create = async()=>{
        // if(email || !pass)
        try{
            const fetched = await fetch("http://localhost:8000/"+"log",{
            method: "POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(input),
           }) 
        //    const result= await fetched.json();
          
           if(fetched.status === 200){
            console.log(fetched.status) 
            Router.push("./mains/section")
           }else{
            alert('pass martayuda odoo san san')
           }
        }catch(error){
           alert("error: ",error)
        }
    }
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
                <input placeholder='Email' className='mb-5 p-2 border border-gray-300 rounded-md' onChange={(e)=>setemail(e.target.value)} ></input>
                <input placeholder='Passeword' className='mb-5 p-2 border border-gray-300 rounded-md' onChange={(e)=>setpass(e.target.value)} ></input>
             {/* <Link href="./mains/section"> */}
                 <button className='text-white bg-blue-500 mb-5 rounded-xl p-2 w-[100%]' onClick={create} >Log in</button>
             {/* </Link> */}
            </div>
        </div>
         <div className='flex justify-center'>
            <div className='flex gap-3'>
                <p className='text-gray-800'>Don’t have account?</p>
                <Link href='./logs/singup'>
                  <p className=' text-blue-400'>Sing up</p>
                </Link>
            </div>
         </div>
        
    </div>
  )
}
