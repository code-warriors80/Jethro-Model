import React from 'react'
import insta from '../icon/icons8-instagram-94.png'
import facebook from '../icon/icons8-facebook-94.png'
import twitter from '../icon/icons8-twitter-circled-94.png'
import gmail from '../icon/icons8-gmail-logo-94.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='fixed w-full z-50'>
               <div className='lg:flex items-center justify-between header px-44 py-5 hidden bg-transparent'>
                              <div className='flex items-center justify-between gap-10'>
                                             <div className='text-[13px] flex items-center'>Phone:<p className='ml-3'>8801 234 567 890</p></div>
                                             <div className='text-[13px] flex items-center'>Opening Time:<p className='ml-3'>9:30am-5:30pm</p></div>
                                             <div className='text-[13px] flex items-center'>Address:<p className='ml-3'>Labartisan 1205 Newyork</p></div>
                              </div>
                              <div className='flex items-center gap-10'>
                                             <i><img src={insta} alt='' className='w-6'/></i>
                                             <i><img src={facebook} alt='' className='w-6'/></i>
                                             <i><img src={twitter} alt='' className='w-6'/></i>
                                             <i><img src={gmail} alt='' className='w-6'/></i>
                              </div>
               </div>

               <nav className='flex items-center justify-between px-16 lg:px-44 py-5 lg:py-10 bg-white'>
                              <div>logo</div>
                              <ul className='hidden lg:flex items-center justify-between gap-20 links'>
                                             <li><Link to='' className='font-bold text-link-colol-1'>Home</Link></li>
                                             <li><Link to='' className='font-bold text-link-colol-2'>About</Link></li>
                                             <li><Link to='' className='font-bold text-link-colol-3'>Class</Link></li>
                                             <li><Link to='' className='font-bold text-link-colol-4'>Review</Link></li>
                                             <li><Link to='' className='font-bold text-link-colol-5'>Contact</Link></li>
                              </ul>
                              <button className='lg:hidden block'><img src={twitter} alt='' className='w-8'/></button>
               </nav>
    </div>
  )
}

export default Header