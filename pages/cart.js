import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartProduct from '../components/cartProduct';
import { clearAll } from '../store/cartSlice';

function Cart() {
  const dispatch = useDispatch()
  const products = useSelector((state)=>state.cart)

  const clearCart  = () => {
    console.log(';clearded');
    dispatch(clearAll([]))
  }
  return (
    <section className='cart '>

    <div className='all-cart-products w-4/5 mx-auto mt-12'>
      {
        products.length>=1?
        
          products.map((e)=>{
            return (
              <CartProduct key={e.id} data = {e}/>
              )
            })
            
            :
            <h1 className='text-[3rem] text-center'>Your Cart is empty please add items to cart.. </h1>
            
          }
          {
            products.length>=1?
            <div className="checkout flex justify-between">
            <button className='bg-green-400 text-5xl p-[13px] rounded-lg'>Checkout</button>
            <button onClick={clearCart} className='bg-red-400 text-5xl p-[13px] rounded-lg'>Clear All</button>
            </div>
            :
            ''
          }
    </div>
          
          <div className="checkot"></div>
        
        </section>


  )
}

export default Cart



export async function getServerSideProps(context) {
  const user = context.req.cookies.user
  console.log(user);
  if (!user )  {
      return {

          redirect:{
              destination:'/',
              permanent:false
          }
      }
  }
  
  return {
      props: {  }
    }
}