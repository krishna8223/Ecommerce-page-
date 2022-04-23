import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import {add} from '../store/cartSlice'
import  { toast } from './toast'



function ProductCard({data}) {
    const {id,title,description,image,rating,price} = data
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const addToCart = (product) => {
      if (user) {
        
        dispatch(add(data))
        toast('Product Added to cart')
      }
    }
  return (
      <>
            <div className="product lg:[width:clamp(33rem,30vw,42rem)] md:[width:clamp(34rem,46vw,50rem)] sm:[width:clamp(50rem,37vw,49rem)] [width:clamp(31rem,68vw,49rem)]   bg-white max-w-2xl shadow-lg  rounded-lg p-8" >
              <div className="product__image flex justify-center items-center ">
                <Image 
                loader={(l)=>image}
                  src={image}
                  alt='title'
                  width={200}
                  height={200}
                  />
              </div>
              <div className="product__details mt-8 py-8">
                <Link href={`/product?name=${title}&id=${id}`} scroll = {false}>
                  <a  className="product__title hover:text-slate-800 duration-100 text-4xl block mt-12 mb-20">{title}</a>
                </Link>
                <div className="flex justify-between buttons  ">
                  <p className=" text-3xl flex justify-center items-center hover:bg-orange-600 cursor-pointer duration-100 mt-8 bg-orange-700 w-fit p-4 text-white rounded-lg  product__price">${price}</p>
                  <button onClick={()=>{addToCart(data)}} className="product__add-to-cart text-3xl flex justify-center items-center hover:bg-slate-600 cursor-pointer duration-100 mt-8 bg-slate-800 w-fit p-4 text-white rounded-lg">Add to cart</button>
                </div>

              </div>

            </div>

      </>
  )
}

export default ProductCard

