import React, { useRef, useState } from 'react'
import Link from 'next/link'
import cookies from 'js-cookie'
import Title from '../components/title'

import { useRouter } from 'next/router'
import { toast } from '../components/toast'
import { update } from '../store/isUserSlice'
import { useDispatch } from 'react-redux'

// Icons
import { RiLockPasswordLine } from 'react-icons/ri'
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'



export default function Login() {
    const router = useRouter()

    const dispatch = useDispatch()
    const input = useRef(null)
    const [change, setChange] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        
        // const user = await fetch('http://localhost:3000/api/login', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         email, password
        //     }),
        //     headers: {
        //         'Content-Type': 'Application/Json'
        //     }
        // })
        // const response = await user.json()


        if (email == 'abc@abc.com' && password == 'abc') {
            toast('Login successfull')
            router.push('/')
            dispatch(update({ active: true, name: 'abc' }))
            cookies.set('user', JSON.stringify({userName:'abc'}))
        } else {
            toast('Wrong Credentials')
        }
    }

    const show = () => {
        setChange(!change)
        input.current.type == 'password' ? input.current.type = 'text' : input.current.type = 'password'
    }
    return (
        <>
            <Title title={'login'} />
            <section onSubmit={submit}>
                <h2 className='mt-28  text-center text-5xl'>Login Here</h2>
                <div className="wrapper mx-auto w-full md:w-[60%] h-full">
                    <form action="" required className=' shadow-lg mt-16 w-fit mx-auto sm:px-20 px-4 py-28 bg-slate-100 rounded-2xl flex flex-col gap-12'>
                        <p className='text-3xl my-8'> use <span className='text-orange-500'> abc@abc.com </span> for email and <span className='text-orange-500'> abc </span> for password</p>
                        <div className='mx-auto flex gap-4 p-4 items-center '>
                            <span className=' text-4xl text-orange-500  '><MdEmail /></span>
                            <input onChange={((e) => setEmail(e.target.value))} required placeholder='Email' className='pr-8 bg-slate-100 h-12 text-neutral-600 w-[90%] sm:w-[unset] py-8 text-3xl border-b-2 border-orange-200 outline-none' type="text" />
                        </div>
                        <div className='mx-auto relative flex gap-4 p-4 items-center '>
                            <span className=' text-orange-500 text-4xl'><RiLockPasswordLine /></span>
                            <input onChange={((e) => setPassword(e.target.value))} ref={input} type='password' required placeholder='Password' className='h-12 w-[90%] sm:w-[unset] outline-none bg-slate-100  py-8 pr-8 text-3xl border-b-2 border-orange-200' />
                            <span onClick={show} className='cursor-pointer right-0 absolute text-4xl'>{!change ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                        </div>
                        <button className='bg-orange-500 w-fit mx-auto p-4 rounded-lg text-4xl '>Login</button>
                        <p className='text-2xl mx-auto'>
                            Not have an account
                            <Link href="/signUp">
                                <a className='text-orange-500'> SignUp Here</a>
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
    if (user) {
        return {

            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}
