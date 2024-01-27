
import { useMemo, useState } from 'react'
import { Nav } from '../Nav';
import { Add } from './Add';
import { Categorycart } from './Categorycart';


export const Record = (props) => {
    const [icon,setIcon]=useState({})
    const [cateName,setcateName]=useState('')
    const [toglle,settoglle]=useState(true);  
    const [cateToglle,setcateToglle] =useState(false);
    const [too,setToo]=useState(null)
    let categorys=["Food & Drinks","Shopping","Housing","Transportation","Vehicle","Life & Entertaiment","Communication,PC","Financial expenses","investments","income","Other"]
    const category=["Food & Drinks","Shopping","Housing","Transportation","Vehicle"]
    if(props.cheked){
        settoglle(props.cheked)
    }

    function cateAdd(){
        console.log(cateName)
        categorys.push(cateName)
        setcateToglle(false)
    }
    
  return (
    <>
      <div className={`${toglle?"null":"opacity-10 to-black"} ${cateToglle?"opacity-10 to-black":"null"}`}>
        <Nav/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className="bg-gray-200 py-[2%] px-[10%] ">
            <div className="flex gap-10">
                <div className=" w-3/12 p-4 bg-white rounded-2xl">
                   <div>
                      <h1 className="text-2xl mb-5">Records</h1>

                      <button className=" w-[100%] p-1 rounded-2xl bg-blue-600 text-white mb-3" onClick={()=>{
                        settoglle(false)
                      }}>+Add</button>
                      
                      <input className="w-[100%] p-1 rounded-lg bg-gray-100 text-white mb-5 border border-gray-300" placeholder="Search"></input>
                   </div>
                   <div>
                       <h1 className="text-lg mb-3">Types</h1>
                      <ul className="ml-3 mb-5">
                          <li className="group flex gap-2 mb-1">
                              <button className="w-3 h-3 border border-gray-400 rounded-lg mt-[6px]"></button>
                              <h1>All</h1>
                          </li>
                          <li className="group flex gap-2 mb-1">
                              <button className="w-3 h-3 border border-gray-400 rounded-lg mt-[6px]"></button>
                              <h1>Income</h1>
                          </li>
                          <li className="group flex gap-2">
                              <button className="w-3 h-3 border border-gray-400 rounded-lg mt-[6px]"></button>
                              <h1>Expense</h1>
                          </li>
                      </ul>
                      <h1 className="text-lg mb-3">Category</h1>
                      <ul>
                        {
                            categorys.map((props)=>{
                                return(  
                                <li className="group flex gap-2 justify-between mb-1">
                                <div className='flex gap-2'>
                                    <div>
                                    <i class="fa-regular fa-eye"></i>
                                    </div>
                                    <h1>{props}</h1>
                                </div>
                                <div>
                                    <i class="fa-solid fa-caret-right"></i>
                                </div>
                            </li>)
                            })
                        }
                      </ul>
                   </div>
                   <div>
                      <button className='flex gap-2 ml-2 mb-5' onClick={(e)=>setcateToglle(true)}> <h1 className=' text-blue-500 text-2xl'>+</h1> <div className='mt-[5px]'>
                                  Add Category
                        </div></button>

                       
                     <h1 className="text-lg mb-3">Amount Range</h1>
                     <div className='flex gap-8 mb-5 ml-2'>
                        <p className=' w-5/12 rounded-lg p-2 border border-gray-300 bg-gray-200'>0</p>
                        <p className=' w-5/12 rounded-lg p-2 border border-gray-300 bg-gray-200'>{too?too :1000}</p>
                     </div>
                     <div className=' flex justify-center'>
                     <input type='range' max={1000} min={0} onChange={(e)=>{setToo(e.target.value)}} className=' px-4 w-11/12' ></input>
                     </div>
               
                   </div>

                </div>

     {/* category carts */}

                    <Categorycart/>
                
            </div>
        </div>
      </div>
      <div>
                {
                    toglle?null :<Add/>
                }
      </div>
        {/* Add categore */}
        <div className={`${cateToglle?"null" :"hidden"}`}>
            <div className=' w-2/12 rounded-xl absolute top-[45%] left-[40%] h-fit    bg-white p-5'>
                <div className='flex justify-between mb-3'>
                    <h1>Add Category</h1>
                    <p>x</p>
                </div>
                <div className='flex gap-5 justify-around mb-5'>
                    <div >
                        <select className=' border border-gray-400 rounded-lg bg-gray-50 p-1 w-10' onChange={(e)=>{
                            setIcon(e.target.value)
                        }}>
                        </select>
                    </div>
                    <div className='w-100'>
                        <input className='border border-gray-400 rounded-lg bg-gray-50 p-1 w-[100%]'
                        onChange={(e)=>{
                            setcateName(e.target.value)
                        }}> 
                        </input>
                    </div>
                </div>
                <button className=' rounded-lg bg-green-500 w-[100%] h-8'
                onClick={cateAdd}>Add category</button>
            </div>
    </div>
   </>
  )
}
