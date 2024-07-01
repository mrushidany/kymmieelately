'use client'

import Navbar from "../_ui/components/Navbar"

export default function AboutPage() {
  return (
    <>
      <section className='w-screen bg-black-default min-h-screen'>
        <Navbar />
        <div className='w-full h-screen relative'>
          <div className='absolute inset-0 overflow-hidden'>
            <video poster='/images/bg/2.png' autoPlay loop muted playsInline className='w-full h-full object-cover'>
              <source src='/videos/helicopter.mp4' type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  )
}
