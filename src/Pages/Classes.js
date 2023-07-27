import React from 'react'
import Classes1 from '../components/Classes1'
import NewsLetter from '../components/News-Letter'

const Classes = () => {
  return (
               <div>
                              <section className='page_header zig_zag top-24 lg:top-40'>
                                             <div className='bg-bg-color py-20'>
                                                            <h1 className='text-[40px] font-extrabold mb-5 text-white text-center'>Our Popular Classes</h1>
                                                            <p className='text-[18px] pb-16 font-semibold text-white text-center'>Home - Classes</p>
                                             </div>
                              </section>
                              <Classes1 />
                              <NewsLetter />
               </div>
  )
}

export default Classes