import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent shadow-sm'>
        <Link href="/" className='flex justify-center items-center'>
            <Image 
                src="/logo.svg"
                alt='logo'
                width={118}
                height={18}
                className='object-contain'
                />
        </Link>

        <CustomButton 
            title='Sign In'
            btnType="button"
            containerStyles='text-primary-blue rounded-full bg-white font-semibold min-w-[130px] hover:bg-blue-100 hover:text-blue-900 transition duration-300 ease-in-out'
            />
      </nav>
    </header>
  )
}

export default Navbar
