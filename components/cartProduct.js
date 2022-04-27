import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'


function CartProduct({data}) {
  const dispatch = useDispatch()
    const {id,image,title,price} = data
   

 

  return (
    <div  className='flex justify-between items-center max-h-60 min-h-[15rem] rounded-lg overflow-hidden product mb-8  bg-gray-200 '>
      <div className='flex'>

        <div className=" relative img flex items-center  overflow-hidden w-[13rem]  h-[15rem]">
            <Image
                loader={(e)=>image}
                src={image}
                alt={title}
                layout='fill'
                objectFit='cover'
                />
                </div>        
        <div className=" about ml-16">
            <h3 className='text-[3rem] '>{title}</h3>
            <p className='text-[1.8rem] mt-2'> ${price}</p>
            <p className=''>Quantity:quantiey</p>
        </div>
      </div>
        <button onClick={()=>{dispatch(remove(id))}} className=" bg-red-500 p-2 self-end remove-cart text-4xl">Remove</button>
    </div>
  )
}

export default CartProduct