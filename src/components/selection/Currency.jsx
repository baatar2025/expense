import Link from 'next/link'
import React, { useMemo, useState } from 'react'

export const Currency = () => {
    const [valut,setvalut]=useState('');
    const set= [
        'USD -- Америк доллар','EUR -- Eвро','CNY -- Хятадын юань','GBP -- Английн фунт','RUB -- Оросын рубль','KRW -- БНСУ-ын вон','CAD -- Канад доллар','NZD -- Шинэ Зеландын Доллар','AUD -- Австрали доллар','JPY -- Японы иен','HKD -- Гонконг доллар','SGD -- Сингапур доллар','CHF -- Швейцарь франк','SEK -- Швед крон','AUG -- ','TRY -- Туркийн Лир','THB -- Тайландын бат','MNT -- Mongolia tugrug'
    ]
// useMemo(()=>{
//     console.log(valut)
// },[valut])
  return (
    <div className='mt-10'>
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
     <div>
        <div className=' flex justify-center mb-3' >
            <img src="/imgs/Money.png" alt="" className=' bg-blue-500 p-2 rounded-full  '/>
        </div>  
        <div className='flex justify-center text-2xl mb-10'>
            <p>
            Select base currency
            </p>
        </div>
        <div className='flex justify-center'>
            <select className='w-96 h-10 mb-10' onChange={(e)=>{
                setvalut(e.target.value)
            }}>
                {
                    set.map((props)=>{
                        return(
                            <option>{props}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className='flex justify-center'>
            <p className='w-96 text-gray-500 text-sm mb-10'>
            Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one 
            </p>
        </div>
        <div className=' flex justify-center'>
          <Link href='./steptwo'>
          <button className=' bg-blue-500 text-white rounded-2xl p-2 w-96'>
            Confirm 
            </button>
          </Link>  
        </div>
    </div>
        
    </div>
  )
}
