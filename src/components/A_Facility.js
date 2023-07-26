import React from 'react'
import world from '../icon/icons8-location-94.png'
import mind from '../icon/icons8-mind-map-94.png'
import book from '../icon/icons8-book-shelf-94.png'
import teacher from '../icon/icons8-student-male-94.png'

const A_Facility = () => {
  return (
    <div>
               <div className='w-[75%] lg:flex items-center justify-between mx-auto py-16'>
                          <div className='mb-5'>
                              <img src={book} alt='' className='mx-auto mb-5'/>
                              <h1 className='text-[25px] font-bold text-center text-link-colol-1 mb-5'>Active Learning</h1>
                              <p className='text-center font-semibold px-10 text-[16px] text-text-color'>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                          </div>

                          <div className='mb-5'>
                              <img src={teacher} alt='' className='mx-auto mb-5'/>
                            <h1 className='text-[25px] font-bold text-center text-link-colol-2 mb-5'>Expert Teachers</h1>
                            <p className='text-center font-semibold px-10 text-[16px] text-text-color'>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                          </div>

                          <div className='mb-5'>
                          <img src={world} alt=''  className='mx-auto mb-5'/>
                            <h1 className='text-[25px] font-bold text-center text-link-colol-3 mb-5'>Strategic Location</h1>
                            <p className='text-center font-semibold px-10 text-[16px] text-text-color'>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                          </div>

                          <div className='mb-5'>
                            <img src={mind} alt='' className='mx-auto mb-5' />
                            <h1 className='text-[25px] font-bold text-center text-link-colol-4 mb-5'>Full Day Programs</h1>
                            <p className='text-center font-semibold px-10 text-[16px] text-text-color'>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                          </div>
               </div>
    </div>
  )
}

export default A_Facility