'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
    const pathname = usePathname()
  return (
    <>
      <div className='w-full h-[102px] flex items-center px-40'>
        <nav className='flex flex-row  items-center justify-between'>
            <ul className='flex flex-row gap-x-8 text-white-default uppercase text-[13px] font-semibold tracking-[1.2px]'>
                <li>
                    <Link href='/' className={`${pathname === '/' ? ' text-brown-default' : 'text-white-default hover:text-brown-default'}`}>Home</Link>
                </li>
                <li>
                    <Link href='#' className={`${pathname === '/about' ? ' text-brown-default' : 'text-white-default hover:text-brown-default'}`}>About</Link>
                </li>
                <li>
                    <Link href='#' className={`${pathname === '/blog' ? ' text-brown-default' : 'text-white-default hover:text-brown-default'}`}>Blog</Link>
                </li>
            </ul>
            <div>
                <Image src='/images/icon.webp' priority className='w-[221.47px] h-[63.27px] object-cover' width={10} height={10} />
            </div>
        </nav>
      </div>
    </>
  )
}
