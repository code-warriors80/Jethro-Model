import React from 'react'
import abt from '../image/about-3.png'
import { Link } from 'react-router-dom'

const A_About = () => {
  return (
    <div>
               <section className='special'>
                              <div className='lg:flex lg:items-center lg:justify-around lg:py-[40px] px-5 lg:px-20 bg-bg-color'>
                                             <img src={abt} alt='' className='lg:w-[40%] mb-20'/>
                                             <div className=' lg:w-[35%]'>
                                                            <h1 className='text-[40px] font-extrabold mb-5 text-white'>About Jethro Model</h1>
                                                            <p className='text-[16px] pb-16 font-semibold text-white'>Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>
                                                            <div className='flex items-center gap-5'>
                                                                                          <Link className='bg-link-colol-4 px-8 py-4 text-white font-bold'>Read More</Link>
                                                                                          <Link className='bg-link-colol-2 px-8 py-4 text-white font-bold'>Buy Now</Link>
                                                            </div>
                                             </div>
                              </div>
               </section>
    </div>
  )
}

export default A_About