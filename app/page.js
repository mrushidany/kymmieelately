'use client'

import { useState } from 'react'
import Navbar from './_ui/components/Navbar'

export default function Home() {
  const [ activeCategory, setActiveCategory ] = useState(0)

  const categories = [
    { name: 'Lifestyle', backgroundImage: '', slug: '' },
    { name: 'Self Improvement',  backgroundImage: '', slug: '' },
    { name: 'Fitness',  backgroundImage: '', slug: '' },
    { name: 'Relationships',  backgroundImage: '', slug: '' },
  ]

  const activeBackgroundImage = categories[activeCategory].backgroundImage
  
  return (
    <main className="w-full bg-black-default min-h-screen font-poppins">
      <Navbar />
      <div className='w-full h-screen'>
        <div className={`w-full h-full lg:h-3/4 grid grid-cols-1 lg:grid-cols-4 bg-transparent cursor-pointer`}>
          {categories.map((item, index) => (
            <div key={index} className={`${index == (categories.length - 1) ? 'border-b-0 lg:border-r-0' : 'border-b-[1px] lg:border-r-[0.5px] lg:border-b-0 border-gray-default'} flex flex-col gap-2 px-4 py-10 uppercase`}>
              <p className='text-[11px]'>Category</p>
              <p className='font-teko font-medium text-[21px] leading-6 tracking-2'>{item.name}</p>
            </div>
          ))}
        </div>
        <div className='hidden lg:block w-full h-1/4 bg-white-default'>

        </div>
      </div>
    </main>
  )
}
