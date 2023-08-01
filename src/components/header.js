import React, {useState} from 'react'
import insta from '../icon/icons8-instagram-94.png'
import facebook from '../icon/icons8-facebook-94.png'
import twitter from '../icon/icons8-twitter-circled-94.png'
import gmail from '../icon/icons8-gmail-logo-94.png'
import menu from '../icon/icons8-menu-94.png'
import close from '../icon/icons8-close-94.png'
import { Link } from 'react-router-dom'
import logo from '../image/1574619145-removebg-preview.png'
import { motion } from 'framer-motion';

const Header = () => {
    const [model, setModel] = useState(false);
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

               <motion.nav initial={{y: -150}} animate={{y: 0}} transition={{delay: 1.0}} className='flex items-center justify-between px-12 lg:px-44 py-3 lg:py-3 bg-white'>
                              <div><img src={logo} alt='' className='w-[40px] lg:w-[50px]'/></div>
                              <ul className='hidden lg:flex items-center justify-between gap-20 links'>
                                             <li><Link to='/' className='font-bold text-link-colol-1'>Home</Link></li>
                                             <li><Link to='/about' className='font-bold text-link-colol-2'>About</Link></li>
                                             <li><Link to='/classes' className='font-bold text-link-colol-4'>Class</Link></li>
                                             <li><Link to='/gallery' className='font-bold text-link-colol-5'>Gallery</Link></li>
                                             <li><Link to='/contact' className='font-bold text-link-colol-3'>Contact</Link></li>
                              </ul>

                                {model === true && (
                                              <ul className='mobilelinks lg:hidden fixed w-full left-0 top-[72px] h-[89vh] justify-between gap-20 links'>
                                                              <li className='p-10'><Link to='/' className='font-bold text-link-colol-1' onClick={() => setModel(false)}>Home</Link></li>
                                                              <li className='p-10'><Link to='/about' className='font-bold text-link-colol-2' onClick={() => setModel(false)}>About</Link></li>
                                                              <li className='p-10'><Link to='/classes' className='font-bold text-link-colol-4' onClick={() => setModel(false)}>Class</Link></li>
                                                              <li className='p-10'><Link to='/gallery' className='font-bold text-link-colol-5' onClick={() => setModel(false)}>Gallery</Link></li>
                                                              <li className='p-10'><Link to='/contact' className='font-bold text-link-colol-3' onClick={() => setModel(false)}>Contact</Link></li>
                                              </ul>
                                )}

                              {model === false ?(<button className='lg:hidden block'><img src={menu} alt='' className='w-8' onClick={() => setModel(true)}/></button>) : (<button className='lg:hidden block'><img src={close} alt='' className='w-8' onClick={() => setModel(false)}/></button>)}
               </motion.nav>
    </div>
  )
}

export default Header