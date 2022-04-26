import React, { useRef, useState } from 'react'
let toast

function Toast() {
  const div = useRef(null)
  const [message, setMessage] = useState('')
  let timeout;
  toast = (value) => {
    console.log('called');

    setMessage(value)
    div.current.style.transform = 'translateX(-100%)'
    setTimeout(() => {
      div.current.style.transform = 'translateX(0)'
    }, 300);
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      div.current.style.transform = 'translateX(-110%)'
    }, 3000);
  }

  return (
    <div ref={div} className='[transform:translateX(-110%)] text-4xl p-8 z-40  duration-300  fixed top-40   rounded-r-2xl bg-orange-400'>{message}</div>
  )
}

export default Toast
export { toast }