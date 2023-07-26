import React from 'react'
import A_Facility from '../components/A_Facility'
import A_About from '../components/A_About'
import boys from '../image/feature.jpg'
import world from '../icon/icons8-location-94.png'
import mind from '../icon/icons8-mind-map-94.png'
import book from '../icon/icons8-book-shelf-94.png'
import teacher from '../icon/icons8-student-male-94.png'
import NewsLetter from '../components/News-Letter'

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
                                             <div className='lg:flex items-center justify-between w-[75%] mx-auto'>
                                                            <div>
                                                                           <div className='mb-8 flex items-center flex-wrap-reverse'>
                                                                                          <div className='mr-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-2'>Expert Teachers</h2>
                                                                                                         <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                                          <img src={world}  alt='' className='mx-auto mb-3'/>
                                                                           </div>

                                                                           <div className='mb-8 flex items-center flex-wrap-reverse'>
                                                                                          <div className='mr-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-3'>Multimedia Class</h2>
                                                                                                         <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                                          <img src={mind}  alt='' className='mx-auto mb-3'/>
                                                                           </div>

                                                                           <div className='mb-8 flex items-center flex-wrap-reverse'>
                                                                                          <div className='mr-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-5'>Music And Art Class</h2>
                                                                                                         <p className=' text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                                          <img src={book}  alt='' className='mx-auto mb-3'/>
                                                                           </div>
                                                            </div>

                                                            <img src={boys} alt='' className='py-10'/>

                                                            <div>
                                                                           <div className='mb-8 flex items-center flex-wrap'>
                                                                                          <img src={teacher}  alt='' className='mx-auto mb-3'/>
                                                                                          <div className='ml-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-1'>Expert Teachers</h2>
                                                                                                         <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                           </div>

                                                                           <div className='mb-8 flex items-center flex-wrap'>
                                                                                          <img src={book}  alt='' className='mx-auto mb-3'/>
                                                                                          <div className='ml-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-4'>Multimedia Class</h2>
                                                                                                         <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                           </div>

                                                                           <div className='mb-8 flex items-center flex-wrap'>
                                                                                          <img src={mind}  alt='' className='mx-auto mb-3'/>
                                                                                          <div className='ml-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-code_war-color'>Music And Art Class</h2>
                                                                                                         <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                           </div>  
                                                            </div>
                                             </div>
               </section>

               <section className='special'>
                              <div className='bg-bg-color-1 py-32'>
                                             <h1 className='text-[40px] font-[800] mb-5 text-white text-center'>Meet Our Teachers</h1>
                                             <p className='text-center font-semibold text-white w-[85%] lg:w-[40%] text-[16px] mx-auto mb-20'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>         
                              </div>
               </section>
               <NewsLetter />
    </div>
  )
}

export default About