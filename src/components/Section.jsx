import React from 'react'
import { Nav } from './Nav'
import { Chart as Chartjs,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from 'chart.js';
import { Bar} from 'react-chartjs-2';

export const Section = () => {
  Chartjs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  )
  const datas={
    labels:["Mon",'Tue','Wen'],
    datasets:[
      {
        labels:"378",
        data:[3,4,5],
        backgroundColor:"aqua",
        borderColor:"black",
        borderWidth:1,
      }
    ]
  }

  const options={

  }
  
  const category=["Food & Drinks","Shopping"]
  return (
   <>
   <Nav/>
      <section className=" bg-gray-200 py-[2%] px-[10%]">
        <div className="flex gap-4 mb-5">

            <div className=" rounded-xl p-5 bg-blue-500 w-4/12">
                  <div className="flex gap-2 mb-8 ">
                      <img src="/imgs/Vector (1).png" className="h-9"></img>
                      <p className=" text-2xl text-white"> Geld</p>
                  </div>
                <p className=" text-gray-500">Cash</p>
                <p>
                
                </p>
            </div>

            <div className=" rounded-xl p-5 w-4/12 bg-white">
              <div>
                 <p>Your Income</p>
                 <br></br>
              </div>
              <div className="mt-0">
                <h1 className=" text-2xl">909,090$</h1>
                <p className=" text-gray-300 mb-4">Your Income Amount</p>
                <p><button><i class="fa-regular fa-arrow-up"></i></button>
                   32% from last month
                </p>
              </div>
            </div>

            <div className=" rounded-xl p-5 w-4/12 bg-white">
                <div>
                  <p>Total Expenses</p>
                  <br></br>
                </div>
                <div className="mt-0">
                  <h1 className=" text-2xl">-909,090$</h1>
                  <p className=" text-gray-300 mb-4">Your Income Amount</p>
                  <p><button><i class="fa-regular fa-arrow-up"></i></button>
                     32% from last month
                  </p>
                </div>
            </div>
        </div>
        <div className="flex gap-5 mb-5">
            <div className="rounded-xl p-5 w-6/12  bg-white">
                <h1>Income - Expense</h1>
                <div>
                   <Bar data={datas} options={options} ></Bar>
                </div>
            </div>
            <div className="rounded-xl p-5 w-6/12 bg-white">
                <h1>Income - Expense</h1>
                <div>
                   <Bar data={datas} options={options} ></Bar>
                </div>
            </div>
        </div>
        <div className="rounded-xl p-5 w-[100%] bg-white">
          <h1 className='mb-3'>Last Records</h1>
          <div>
          {
              category.map((props)=>{
                    return(
                      <div className='flex justify-between bg-white p-4 rounded-lg mb-4'>
                      <div className='flex gap-3'>
                          <button className='w-5 h-5 border border-gray-300 bg-gray-100 mt-1'></button>
                          <button className=' bg-blue-600 rounded-full p-1'>
                              <img src='/imgs/House.png'></img>
                          </button>
                          <p>{props}</p>
                      </div>
                      <p className=' text-orange-300'>
                          -  1000$
                      </p>
                  </div>
                    )  
              })
          }
          </div>
        </div>

      </section>
   </>
  )
}
