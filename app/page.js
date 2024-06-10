'use client'

import { useState } from 'react'
import Navbar from './_ui/components/Navbar'
import lifestyle from '../public/images/bg/1.png'
import self from '../public/images/bg/2.png'
import fitness from '../public/images/bg/3.png'
import relationships from '../public/images/bg/4.png'

export default function Home() {
  const [ activeCategory, setActiveCategory ] = useState(0)

  const categories = [
    { name: 'Lifestyle', backgroundImage: lifestyle, slug: '' },
    { name: 'Self Improvement',  backgroundImage: self, slug: '' },
    { name: 'Fitness',  backgroundImage: fitness, slug: '' },
    { name: 'Relationships',  backgroundImage: relationships, slug: '' },
  ]

  const toggleActiveCategory = (index) => {
    setActiveCategory(index)
  }

  const activeBackgroundImage = categories[activeCategory].backgroundImage.src
  return (
    <main className="w-full bg-black-default h-screen font-poppins">
      <Navbar />
      <div className='w-full h-full'>
        <div className={`w-full h-full lg:h-[90%] grid grid-cols-1 lg:grid-cols-4 bg-transparent cursor-pointer bg-center bg-no-repeat bg-cover transition-all ease-in duration-700`} style={{ backgroundImage: `url(${activeBackgroundImage})` }}>
          {categories?.map((item, index) => (
            <div key={index} className={`${index == (categories.length - 1) ? 'border-b-0 lg:border-r-0' : 'border-b-[1px] lg:border-r-[0.5px] lg:border-b-0 border-gray-default'} flex flex-col gap-2 px-4 py-10 uppercase`} onMouseEnter={() => toggleActiveCategory(index)}>
              <p className='text-[11px]'>Category</p>
              <p className='font-teko font-medium text-[21px] leading-6 tracking-2'>{item.name}</p>
            </div>
          ))}
        </div>
        {/* <div className='w-full min-h-screen bg-white-default block'>
          <div className='w-full bg-brown-300 h-auto lg:w-[90%]'>
            <div className='hidden lg:grid grid-cols-4 w-full h-10'>
              <div className={`w-[360px] h-full ${activeCategory == 0 ? 'bg-brown-400' : 'hidden'}`}>
              </div>
              <div className={`w-[360px] h-full ${activeCategory == 1 ? 'bg-brown-400' : 'hidden'}`}>
              </div>
              <div className={`w-[360px] h-full ${activeCategory == 2 ? 'bg-brown-400' : 'hidden'}`}>
              </div>
              <div className={`w-[360px] h-full ${activeCategory == 3 ? 'bg-brown-400' : 'hidden'}`}>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  )
}
