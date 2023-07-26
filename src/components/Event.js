import React from 'react'
import { Link } from 'react-router-dom'
import class1 from '../image/class_01.jpg'
import class2 from '../image/class_02.jpg'
import class3 from '../image/class_03.jpg'

const Event = () => {
  return (
               <section className='py-32 px-5 lg:px-10'>
               <h1 className='text-[40px] font-extrabold mb-5 text-link-colol-4 text-center'>Don't Miss Our Event</h1>
               <p className='text-center font-semibold text-text-color w-[85%] lg:w-[40%] text-[16px] mx-auto'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>

               <div className='lg:flex justify-between lg:w-[75%] mx-auto gap-10 mt-16'>
                     <div className='border-2 border-gray-100 border-solid mb-10 lg:mb-0 hover:shadow-lg'>
                           <img src={class1} alt='' className='w-full'/>
                           <div className='text-center px-3 h-0'>
                             <p className='w-20 p-2 bg-link-colol-2 text-white font-bold relative top-[-80px]'>
                               25<span className='block'>March</span>
                             </p>
                           </div>
                           <div className='px-5'>
                               <h2 className='text-link-colol-2 text-[24px] font-extrabold my-3'>Imagination Classes</h2>
                               <p className='font-semibold text-text-color'>08:00 am - 10:00 am</p>
                               <p className='font-semibold text-text-color'>218 New Newyork Road Newyork</p>
                               <p className='pt-3 font-semibold text-text-color'>Dratcaly novate fuly rarched an plication awesome theme education that plication creative theme education.</p>
                               <div className='py-10'>
                                   <Link className='bg-link-colol-2 px-7 py-4 text-white font-semibold'>Join Now</Link>
                               </div>
                           </div>
                     </div>

                     <div className='border-2 border-gray-100 border-solid mb-10 lg:mb-0  hover:shadow-lg'>
                           <img src={class2} alt='' className='w-full'/>
                           <div className='text-center px-3 h-0'>
                             <p className='w-20 p-2 bg-link-colol-1 text-white font-bold relative top-[-80px]'>
                               25<span className='block'>March</span>
                             </p>
                           </div>
                           <div className='px-5'>
                               <h2 className='text-link-colol-1 text-[24px] font-extrabold my-3'>Imagination Classes</h2>
                               <p className='font-semibold text-text-color'>08:00 am - 10:00 am</p>
                               <p className='font-semibold text-text-color'>218 New Newyork Road Newyork</p>
                               <p className='pt-3 font-semibold text-text-color'>Dratcaly novate fuly rarched an plication awesome theme education that plication creative theme education.</p>
                               <div className='py-10'>
                                   <Link className='bg-link-colol-1 px-7 py-4 text-white font-semibold'>Join Now</Link>
                               </div>
                           </div>
                     </div>

                     <div className='border-2 border-gray-100 border-solid  hover:shadow-lg'>
                           <img src={class3} alt='' className='w-full'/>
                           <div className='text-center px-3 h-0'>
                             <p className='w-20 p-2 bg-link-colol-3 text-white font-bold relative top-[-80px]'>
                               25<span className='block'>March</span>
                             </p>
                           </div>
                           <div className='px-5'>
                               <h2 className='text-link-colol-3 text-[24px] font-extrabold my-3'>Imagination Classes</h2>
                               <p className='font-semibold text-text-color'>08:00 am - 10:00 am</p>
                               <p className='font-semibold text-text-color'>218 New Newyork Road Newyork</p>
                               <p className='pt-3 font-semibold text-text-color'>Dratcaly novate fuly rarched an plication awesome theme education that plication creative theme education.</p>
                               <div className='py-10'>
                                   <Link className='bg-link-colol-3 px-7 py-4 text-white font-semibold'>Join Now</Link>
                               </div>
                           </div>
                     </div>
               </div>
       </section>    
  )
}

export default Event