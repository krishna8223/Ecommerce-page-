import React from 'react'
import Footer from './footer'
import Header from './header'

import Toast from './toast'
export default function Layout({ children,id }) {
  

  return (
    <>
      <Toast />
      <Header />
      {children}
      <Footer/>

    </>
  )
}

