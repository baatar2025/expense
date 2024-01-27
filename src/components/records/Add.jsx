import React, { useEffect, useMemo, useState } from 'react'
import { Record } from './Record'
import { Awesome } from '../Awesome'
export const Add = () => {
    const [toglle,settoggle]=useState(true) 
    const [taskValues,setTaskValues]=useState([]);
    // box 1
    const [amount,setAmount]=useState('');
    const [cate,setCate]=useState(null);
    const [date,setDate]=useState('');
    const [clock,setClock]=useState('')
    // box 2
    const [note,setNote]=useState('');
    const [pay,setPay]=useState('');
   
    function addtask(){
        setTaskValues({
            amount,
            cate,
            clock:clock.toString(),
            name:toglle==="true"?"expense":"income"
        })
    }
    
    const create= async()=>{
        try{
            const res= await fetch('http://localhost:8000/cates',{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify(taskValues)
            })
        }catch(error){
            alert(error)
        }
    }
    useMemo(()=>{
        addtask()
    },[amount,cate,date,clock])
    const category=['Add Category','Homoe','Gift','Food',"Drink",'Taxi','shopping']
  return (
    <div className=' w-5/12 rounded-xl absolute top-[20%] left-[30%] h-3/6 bg-slate-200 p-5'>
        <Awesome/>
        <div className='flex justify-between mb-7'>
            <h1>Add Record</h1>
            <button className=' mr-3'>
              x
            </button>
        </div>
        <div className='flex gap-10'>
            <div className=' w-6/12 bg-white p-5 rounded-xl'>
                <div className='flex gap-2 bg-gray-300 rounded-xl mb-3'>
                    <button className={`${toglle? "bg-blue-500" :"bg-gray-300"} rounded-xl w-6/12 ${toglle?"text-white" :"text-black"}`} onClick={()=>{
                        settoggle(true)
                    }}>
                        Expense
                    </button>
                    <button className={`${toglle? "bg-gray-300 ":"bg-[#16A34A]"} rounded-xl w-6/12 text-white ${toglle ?"text-black" :"text-white"}`} onClick={()=>{
                        settoggle(false)
                    }}>
                        Income
                    </button>
                </div>
                <div className=' w-[100%] border border-gray-300 bg-gray-100 rounded-lg p-3 mb-3'>
                    <h1>Amount</h1>
                    <input type="text" placeholder='$ 000,000' className=' bg-gray-100' onChange={(e)=>{
                        setAmount(e.target.value)
                    }} />
                </div>
                <div>
                    <h1 className='mb-1'>Category</h1>
                    <select className=' bg-gray-100 border border-gray-300 rounded-lg w-[100%] h-8 mb-4' onChange={(e)=>{
                        setCate(e.target.value)
                    }} >
                        {
                            category.map((props)=>{
                                return(
                                    <option>{props}</option>
                                )
                            })
                        }
                    </select>
                    <div className='flex gap-3 mb-5'>
                        <div>
                            <p>Date</p>
                            <input className=' bg-gray-100 p-1 rounded-lg border border-gray-300' onChange={(e)=>{
                                setDate(e.target.value)
                            }} placeholder='date' type='date' >
                                
                            </input>
                        </div>
                        <div>
                            <p>Date</p>
                            <input className=' bg-gray-100 p-1 rounded-lg border border-gray-300' onChange={(e)=>{
                                setClock(e.target.value)
                            }} placeholder='date' type='date' >
                                
                            </input>
                        </div>
                    </div>
                    <div>
                        <button className={`${toglle? "bg-blue-500 ":"bg-[#16A34A]"}  rounded-lg p-1 w-[100%] text-white`} onClick={create}  >Add Record</button>
                    </div>
                </div>
            </div>
            <div className=' w-6/12 bg-white p-5 rounded-xl'>
                <div className='w-[100%]'>
                    <h1 className='mb-2'>Pay</h1>
                    <select className=' bg-gray-100 border border-gray-300 rounded-lg w-[100%] h-10 mb-4  text-gray-400 ' onChange={(e)=>{
                        setPay(e.target.value)
                    }}>
                        <option >Write</option>
                    </select>
                </div>
                <div>
                    <h1 className='mb-4'>Note</h1>
                    <input className=' bg-gray-100 border border-gray-300 rounded-lg w-[100%] h-[96 mb-4  text-gray-400 p-2'  placeholder='Write' onChange={(e)=>{
                        setNote(e.target.value)
                    }}>
                    </input>
                </div>
            </div>
        </div>
    </div>
  )
}
