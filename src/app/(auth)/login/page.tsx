import React from 'react'
import LoginForm from './LoginForm'
import Image from 'next/image'

export default function page() {
  return (
    <div className=''>
      <div style={{
        backgroundColor: '#191919'
      }} className="h-96 w-full">
        <Image className='w-full h-full object-cover' alt='test' src={'/assets/request-bg-demo.png'} width={1000} height={1000} />
      </div>
      <LoginForm />
    </div>
  )
}
