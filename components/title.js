import React from 'react'
import Head from 'next/head'

function Title({title}) {
  return (
      <Head>
          <title>shopping-{title}</title>
      </Head>
  )
}

export default Title