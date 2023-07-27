import React from 'react'
import Tab2 from '../components/Tab2'

const Gallery = () => {
  return (
    <div>
               <section className='page_header zig_zag top-24 lg:top-40'>
                              <div className='bg-bg-color py-20'>
                                             <h1 className='text-[40px] font-extrabold mb-5 text-white text-center'>Our School Gallery</h1>
                                             <p className='text-[18px] pb-16 font-semibold text-white text-center'>Home - Gallery</p>
                              </div>
               </section>

               <Tab2 />
    </div>
  )
}

export default Gallery