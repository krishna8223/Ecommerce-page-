import React from 'react'
import Link from 'next/link'
import cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { AiOutlineUser } from 'react-icons/ai'
import { autoSet, update } from '../store/isUserSlice'
import { useDispatch, useSelector } from 'react-redux'



function Header() {
  const router = useRouter()

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  // let userName;
//   const userDetail = cookies.get('user')
// if(userDetail){
//   userName = JSON.parse(user).userName
//   console.log(userName);
// }
  // dispatch(autoSet)
  const logout = () => {
    cookies.remove('user')
    dispatch(update({active:false,name:null}))
    router.push('/')
  }
  const cartProduct = useSelector((state) => state.cart)
  return (
    <nav className='nav flex bg-orange-600 justify-between items-center px-20'>
      <ul className="nav__menu">
        <li className="nav__item">
          <Link href="/">
            <a className="text-white nav__link text-3xl">Home</a>
          </Link>
        </li>
      </ul>
      <div className="nav__right-side flex gap-12">
        {
          user.active ?
            <>
              <button  className='flex justify-center items-center p-4 rounded-lg  text-white text-3xl gap-2 bg-orange-400' > Welcome : : {user.name}</button>
              <div className="nav__cart-div relative">
                <div className="text-white top-[-10px] h-[2rem] w-[2rem] rounded-lg flex justify-center items-center right-[-10px] bg-blue-700 count absolute">{cartProduct.length}</div>
                <Link href="/cart">
                  <a aria-label='cart'>
                    <img src="/images/cart.svg" alt="" className="nav__cart cursor-pointer" />
                  </a>
                </Link>
              </div>
              <button onClick={logout} className='flex justify-center items-center p-4 rounded-lg  text-white text-3xl gap-2 bg-orange-400' >  Logout</button>

            </>
            :
            <>

              <Link href="/login">
                <a className='flex justify-center items-center p-4 rounded-lg  text-white text-3xl gap-2 bg-orange-400'> <AiOutlineUser /> Login</a>
              </Link>
              <Link href="/signUp">
                <a className='flex justify-center items-center p-4 rounded-lg  text-white text-3xl gap-2 bg-orange-400' >  Sign UP</a>
              </Link>
            </>
        }
      </div>
    </nav>
  )
}
export default Header





