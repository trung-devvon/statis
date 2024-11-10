import { Button } from '@/components/ui/button'
import React from 'react'

const CtaSection = () => {
  return (
    <div className='flex flex-col my-20 px-[64px] justify-center items-center gap-8'>
        <h2
          style={{
            marginBlockStart: 0,
            marginBlockEnd: 0,
          }}
          className="text-[40px] font-bold leading-tight md:text-[40px] lg:text-[56px] sm:text-[40px]"
        >
          Transforming Business Insights
        </h2>
        <p>Connect with us to explore how we can help your business thrive and succeed.</p>
        <div className="flex gap-3">
            <Button>Contact</Button>
            <Button variant={'outline'}>Sign Up</Button>
        </div>
    </div>
  )
}

export default CtaSection