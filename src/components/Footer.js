import React from 'react'
import insta from '../icon/icons8-instagram-94.png'
import facebook from '../icon/icons8-facebook-94.png'
import twitter from '../icon/icons8-twitter-circled-94.png'
import gmail from '../icon/icons8-gmail-logo-94.png'
import { Link } from 'react-router-dom'
import img from '../image/class_02.jpg'
import class5 from '../image/gallery/gallery_15.jpg'
import class4 from '../image/gallery/gallery_14.jpg'
import logo from '../image/1574619145-removebg-preview.png'

// GALLERY
import g1 from '../image/gallery/gallery_01.jpg'
import g2 from '../image/gallery/gallery_02.jpg'
import g3 from '../image/gallery/gallery_03.jpg'
import g4 from '../image/gallery/gallery_04.jpg'
import g5 from '../image/gallery/gallery_05.jpg'
import g6 from '../image/gallery/gallery_06.jpg'
import g7 from '../image/gallery/gallery_07.jpg'
import g8 from '../image/gallery/gallery_08.jpg'
import g9 from '../image/gallery/gallery_09.jpg'

const Footer = () => {
  return (
    <section className='footer'>
               <div>
                              <div className='py-10 lg:py-30 w-[75%] lg:flex start lg:justify-between mx-auto'>
                                    <div className='lg:w-[30%]'>
                                      <img src={logo} alt='' className='w-[100px] mb-5' />
                                        <p className='font-bold text-text-color'>Distily enable team driven services through extensive is a relatonships platforms with interactive content. Enthusiastically scale effective.</p>
                                        <div className='mt-5'>
                                            <p className='font-semibold text-text-color mb-3'>New Chokoya Road, USA.</p>
                                            <p className='font-semibold text-text-color mb-3'>+8801 923 970 212, 0125897</p>
                                            <p className='font-semibold text-text-color mb-3'>Contact@admin LabArtisan</p>
                                            <p className='font-semibold text-text-color'>Email@admin LabArtisan</p>
                                        </div>
                                    </div>

                                    <div className='py-10 lg:py-0'>
                                        <h2 className='mb-5 lg:mb-5 text-[30px] text-link-colol-2 font-extrabold'>Latest News</h2>
                                        <Link className='flex items-center mb-5'>
                                            <img src={img} alt='' className='w-[90px] h-[70px]'/>
                                            <div className='ml-3'>
                                              <p className='lg:w-[70%] font-semibold text-text-color text-[16px]'>Corem psum dolor the amectetuer adipiscing...</p>
                                              <span className='text-link-colol-2 font-semibold'>04 February 2021</span>
                                            </div>
                                        </Link>

                                        <Link className='flex items-center mb-5'>
                                            <img src={class4} alt='' className='w-[90px] h-[70px]'/>
                                            <div className='ml-3'>
                                              <p className='lg:w-[70%] font-semibold text-text-color text-[16px]'>Corem psum dolor the amectetuer adipiscing...</p>
                                              <span className='text-link-colol-2 font-semibold'>04 February 2021</span>
                                            </div>
                                        </Link>

                                        <Link className='flex items-center'>
                                            <img src={class5} alt='' className='w-[90px] h-[70px]'/>
                                            <div className='ml-3'>
                                              <p className='lg:w-[70%] font-semibold text-text-color text-[16px]'>Corem psum dolor the amectetuer adipiscing...</p>
                                              <span className='text-link-colol-2 font-semibold'>04 February 2021</span>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className='lg:w-[25%]'>
                                    <h2 className='mb-5 lg:mb-5 text-[30px] text-link-colol-3 font-extrabold'>Recent Photos</h2>
                                    <div className='flex flex-wrap gap-2 lg:gap-3'>
                                          <img src={g1} alt=' ' />
                                          <img src={g2} alt=' ' />
                                          <img src={g3} alt=' ' />
                                          <img src={g4} alt=' ' />
                                          <img src={g5} alt=' ' />
                                          <img src={g6} alt=' ' />
                                          <img src={g7} alt=' ' />
                                          <img src={g8} alt=' ' />
                                          <img src={g9} alt=' ' />
                                    </div>
                                    </div>
                              </div>
                              <div className='py-10 lg:flex items-center justify-around bg-[#FAFAFA]'>
                                             <p className='text-center'>© 2021. Developed By <span className='text-code_war-color font-extrabold'>Code_Warriors</span></p>
                                             <div className='flex items-center justify-center gap-10 mt-3 lg:mt-0'>
                                                            <Link><img src={insta} alt='' className='w-6'/></Link>
                                                            <Link><img src={facebook} alt='' className='w-6'/></Link>
                                                            <Link><img src={twitter} alt='' className='w-6'/></Link>
                                                            <Link><img src={gmail} alt='' className='w-6'/></Link>
                                             </div>
                              </div>
               </div>
    </section>
  )
}

export default Footer