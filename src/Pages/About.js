import React from 'react'
import A_Facility from '../components/A_Facility'
import A_About from '../components/A_About'
import boys from '../image/feature.jpg'

const About = () => {
  return (
    <div>
               <section className='special'>
                              <div className='bg-bg-color py-20'>
                                             <h1 className='text-[40px] font-extrabold mb-5 text-white text-center'>About Jethro Model</h1>
                                             <p className='text-[16px] pb-16 font-semibold text-white text-center'>Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly.</p>
                              </div>
               </section>
               <A_Facility />
               <A_About />
               <section className='py-20'>
                                             <h1 className='text-[40px] font-[800] mb-5 text-link-colol-4 text-center'>Why Choose KidsAcademy</h1>
                                             <p className='text-center font-semibold text-text-color w-[85%] lg:w-[40%] text-[16px] mx-auto mb-20'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                                             <div className='flex items-center justify-between w-[70%] mx-auto'>
                                                            <div>
                                                                           <div>
                                                                                          <div>
                                                                                                         <h2>Expert Teachers</h2>
                                                                                                         <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                                          <img src=''  alt=''/>
                                                                           </div>

                                                                           <div>
                                                                                          <div>
                                                                                                         <h2>Expert Teachers</h2>
                                                                                                         <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                                          <img src=''  alt=''/>
                                                                           </div>
                                                                           <div>
                                                                                          <div>
                                                                                                         <h2>Expert Teachers</h2>
                                                                                                         <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                                          <img src=''  alt=''/>
                                                                           </div>
                                                            </div>
                                                            <img src={boys} alt='' />
                                                            <div></div>
                                             </div>
               </section>
    </div>
  )
}

export default About