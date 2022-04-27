import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from '../../components/toast'
import { add } from '../../store/cartSlice'
function Slug({data}) {
  const {image,description,price,title,rating:{count,rate}} = data
   
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  // Add to cart 
  const addToCart = (product) => {
    if (user.active) {
      
      dispatch(add(data))
      toast('Product Added to cart')
    }
    else{
      toast('Please login...')
    }
  }



  return (
    <>
    <section className='product-page-section'>
      <div className="product-page w-4/5 sm:w-3/5 mx-auto py-20">
        <div className="product-page__image mb-12 w-full flex justify-center">
        <Image
          loader={(l)=>image}
          src={image}
          alt={title}
          height={500}
          width={700}
          />
          </div>
          <div className="product-page__details">
            <h2 className="product-page__title text-[3.2rem] sm:text-[4rem]">{title}</h2>
            <p className=" text-red-500 text-4xl mt-12 product-page__price">Price: <span className='text-green-500'> ${price} </span></p>
            <p className="product-page__description text-3xl text-gray-500 my-12 ">{description}</p>
            <p className="product-page__rating text-3xl text-green-500">Rating : {rate} from {count} peoples</p>
            <button onClick={()=>{addToCart(data)}} className="product-page__add text-3xl flex justify-center items-center hover:bg-slate-900 cursor-pointer duration-300 mt-12 bg-slate-800 w-fit p-4 text-white rounded-lg">Add to cart</button>
          </div>
      </div>
    </section>

    </>

  )
}

export default Slug  

export async function getServerSideProps (context) {
    // console.log(context);
    const {id} = context.query
    const single =await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await single.json()
    return{
        props:{data}
    }
}