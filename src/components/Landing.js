import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Landing = () => {
  return (
               <Carousel showArrows={false} infiniteLoop={true} interval={2} className='h-[100vh] carosel'>
                          <div className='h-[100vh] land-1'>
                                        <div className='landing_trans w-full h-full flex items-center justify-center'>
                                                      <div className=''>
                                                                      <h1 className=' text-lg lg:text-3xl font-[700] text-white'>Welcome To Jethro Model Academy</h1>
                                                                      <h2 className='text-[40px] lg:text-[70px] font-extrabold text-white'>Best For Education</h2>
                                                                      <p className='pt-5 mb-16 text-[16px] font-semibold w-[80%] mx-auto text-white'>Monotonely principle centered ahitectures through and outstanding magnetic metrics whereas cross functional products</p>
                                                                      <div className='flex items-center justify-center gap-5'>
                                                                                    <Link className='bg-link-colol-4 px-8 py-4 text-white font-bold'>Read More</Link>
                                                                                    <Link className='bg-link-colol-2 px-8 py-4 text-white font-bold'>Buy Now</Link>
                                                                      </div>
                                                      </div>
                                        </div>
                        </div>
                        <div className='h-[100vh] land-2'>
                                        <div className='landing_trans w-full h-full flex items-center justify-center'>
                                                      <div className=''>
                                                                      <h1 className=' text-lg lg:text-3xl font-[700] text-white'>Welcome To Jethro Model Academy</h1>
                                                                      <h2 className='text-[40px] lg:text-[70px] font-extrabold text-white'>Best For Education</h2>
                                                                      <p className='pt-5 mb-16 text-[16px] font-semibold w-[80%] mx-auto text-white'>Monotonely principle centered ahitectures through and outstanding magnetic metrics whereas cross functional products</p>
                                                                      <div className='flex items-center justify-center gap-5'>
                                                                                    <Link className='bg-link-colol-4 px-8 py-4 text-white font-bold'>Read More</Link>
                                                                                    <Link className='bg-link-colol-2 px-8 py-4 text-white font-bold'>Buy Now</Link>
                                                                      </div>
                                                      </div>
                                        </div>
                        </div>

                        <div className='h-[100vh] landing-3'>
                                        <div className='landing_trans w-full h-full flex items-center justify-center'>
                                                      <div className=''>
                                                                      <h1 className=' text-lg lg:text-3xl font-[700] text-white'>Welcome To Jethro Model Academy</h1>
                                                                      <h2 className='text-[40px] lg:text-[70px] font-extrabold text-white'>Best For Education</h2>
                                                                      <p className='pt-5 mb-16 text-[16px] font-semibold w-[80%] mx-auto text-white'>Monotonely principle centered ahitectures through and outstanding magnetic metrics whereas cross functional products</p>
                                                                      <div className='flex items-center justify-center gap-5'>
                                                                                    <Link className='bg-link-colol-4 px-8 py-4 text-white font-bold'>Read More</Link>
                                                                                    <Link className='bg-link-colol-2 px-8 py-4 text-white font-bold'>Buy Now</Link>
                                                                      </div>
                                                      </div>
                                        </div>
                        </div>
               </Carousel>
  )
}

export default Landing