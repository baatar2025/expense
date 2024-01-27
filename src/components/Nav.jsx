import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
    <div>
        <nav className="flex justify-between mt-[3%] mx-[10%] mb-5">
          <div className="flex gap-5">
              <img src="/imgs/Vector.png" className="h-10"></img>
              <p className="mt-2">
                <b>Dashboard</b> 
              </p>
              <p className="mt-2">
              Records
              </p>
          </div>
          <div className="flex gap-5">
            <Link href='./record'>
            <button className=" p-2 bg-blue-500 rounded-2xl flex text-center text-white w-30 mt-2">+ Record</button>
            </Link>
         
            <img src="/imgs/Placeholder.png " className="mt-2"></img>
          </div>
      </nav>
    </div>
  )
}
