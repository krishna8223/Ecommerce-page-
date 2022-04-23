import React,{useState,useRef} from 'react'
import Link from 'next/link'
import Title from '../components/title'

// Icons
import {AiOutlineUser} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { toast } from '../components/toast'
import {  useRouter } from 'next/router'

export default function SignUp() {
    const inputOne = useRef(null)
    const inputTwo = useRef(null)
    const router = useRouter()
    const [change,setChange] = useState(false)

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [Cpassword,setCPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        if(password!==Cpassword){
            toast('Passwords are not matching')
            return
        }
        const user =await fetch('http://localhost:3000/api/user',{
            method:'POST',
            body:JSON.stringify({
                name,email,password
            }),
            headers:{
                'Content-Type':'Application/Json'
            }
        })
        const response =await user.json()
        console.log(response);
        if(user.status==200){
            toast('Registeration Successful! Please Login')
            router.push('/login')
        }
    }

    const show = () => {
        setChange(!change)
        inputOne.current.type=='password'?inputOne.current.type='text':inputOne.current.type='password'
        inputTwo.current.type=='password'?inputTwo.current.type='text':inputTwo.current.type='password'
    }
  return (
      <>
      <Title title={'signUp'}/>
      <section onSubmit={submit}>
        <h2 className='mt-28  text-center text-5xl'>SignUp Here</h2>
        <div className="wrapper mx-auto w-[60%] h-full">
            <form action=""  className=' shadow-lg mt-16 w-fit mx-auto px-20 py-28 bg-slate-100 rounded-2xl flex flex-col gap-12'>
                <div className='mx-auto flex gap-4 p-4 items-center '>
                    <span className=' text-4xl text-orange-500  '><AiOutlineUser/></span>
                    <input onChange={((e)=>setName(e.target.value))} required placeholder='Name' className='pr-8 bg-slate-100 h-12 text-neutral-600 py-8 text-3xl border-b-2 border-orange-200 outline-none' type="text" />
                </div>
                <div className='mx-auto flex gap-4 p-4 items-center '>
                    <span className=' text-4xl text-orange-500  '><MdEmail/></span>
                    <input onChange={((e)=>setEmail(e.target.value))} required placeholder='Email' className='pr-8 bg-slate-100 h-12 text-neutral-600 py-8 text-3xl border-b-2 border-orange-200 outline-none' type="text" />
                </div>
                <div className='mx-auto relative flex gap-4 p-4 items-center '>
                    <span className=' text-orange-500 text-4xl'><RiLockPasswordLine/></span>
                    <input onChange={((e)=>setPassword(e.target.value))} ref={inputOne} type='password' required placeholder='Password' className='h-12 outline-none bg-slate-100  py-8 pr-8 text-3xl border-b-2 border-orange-200'  />
                    <span  onClick={show} className='cursor-pointer right-0 absolute text-4xl'>{!change?<AiFillEye/>:<AiFillEyeInvisible/>}</span>
                </div>
                <div className='mx-auto relative flex gap-4 p-4 items-center '>
                    <span className=' text-orange-500 text-4xl'><RiLockPasswordLine/></span>
                    <input onChange={((e)=>setCPassword(e.target.value))} ref={inputTwo} type='password' required placeholder='Confirm Password' className='h-12 outline-none bg-slate-100  py-8 pr-8 text-3xl border-b-2 border-orange-200'  />
                    <span  onClick={show} className='cursor-pointer right-0 absolute text-4xl'>{!change?<AiFillEye/>:<AiFillEyeInvisible/>}</span>
                </div>
                <button className='bg-orange-500 w-fit mx-auto p-4 rounded-lg text-4xl '>Sign Up</button>
                <p className='text-2xl mx-auto'>
                    Already have an account
                <Link href="/login"> 
                    <a className='text-orange-500'> Login Here</a>
                </Link>
                </p>
            </form>
        </div>
      </section>
      </>
  )
}


export async function getServerSideProps(context) {
    const user = context.req.cookies.user
    console.log(user);
    if (user )  {
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