import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import abt from '../image/testimonial_01.jpg'

const Review = () => {
  return (
               <section className='special'>
                              <div className='py-32 landing_tran'>
                                             <h1 className='text-[40px] font-extrabold mb-5 text-link-colol-4 text-center'>What Parents Say</h1>
                                             <p className='text-center font-semibold text-text-color w-[85%] lg:w-[40%] text-[16px] mx-auto'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>

                                             <Carousel className=''>
                                                            <div className='w-[85%] lg:w-[40%] mx-auto'>
                                                                           <div className='w-[100px] h-[100px] mx-auto rounded-full mt-5 border-link-colol-2 border-[7px] border-solid  flex items-center justify-center'>
                                                                                          <img src={abt} alt='' className=' rounded-full' />
                                                                           </div>
                                                                           <h2 className='text-[20px] text-link-colol-1 mt-5 mb-3'>John Doe</h2>
                                                                           <h4>Designer</h4>
                                                                           <p className='mt-5 font-semibold text-text-color'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatformRapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform</p>
                                                            </div>

                                                            <div className='w-[85%] lg:w-[40%] mx-auto'>
                                                                           <div className='w-[100px] h-[100px] mx-auto rounded-full mt-5 border-link-colol-2 border-[7px] border-solid  flex items-center justify-center'>
                                                                                          <img src={abt} alt='' className=' rounded-full' />
                                                                           </div>
                                                                           <h2 className='text-[20px] text-link-colol-1 mt-5 mb-3'>John Doe</h2>
                                                                           <h4>Designer</h4>
                                                                           <p className='mt-5 font-semibold text-text-color'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatformRapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform</p>
                                                            </div>

                                                            <div className='w-[85%] lg:w-[40%] mx-auto'>
                                                                           <div className='w-[100px] h-[100px] mx-auto rounded-full border-link-colol-2 border-[7px] border-solid  flex items-center justify-center mt-5'>
                                                                                          <img src={abt} alt='' className=' rounded-full ' />
                                                                           </div>
                                                                           <h2 className='text-[20px] text-link-colol-1 mt-5 mb-3'>John Doe</h2>
                                                                           <h4>Designer</h4>
                                                                           <p className='mt-5 font-semibold text-text-color'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatformRapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform</p>
                                                            </div>
                                             </Carousel>
                              </div>
          </section>
  )
}

export default Review