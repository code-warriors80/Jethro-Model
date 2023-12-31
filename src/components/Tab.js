import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import class1 from '../image/gallery/gallery_11.jpg'
import class2 from '../image/gallery/gallery_12.jpg'
import class3 from '../image/gallery/gallery_13.jpg'
import class4 from '../image/gallery/gallery_14.jpg'
import class5 from '../image/gallery/gallery_15.jpg'
import class6 from '../image/gallery/gallery_16.jpg'
import { Zoom } from 'react-reveal'

const Tab = () => {
               const [toggleState, setToggle] = useState(1);

               const toggleTab = (index) => {
                              setToggle(index);
               }

  return (
    <div>
               <div className='block-tabs flex items-center lg:justify-between justify-evenly cursor-pointer mx-auto lg:w-[30%] px-10'>
                              <p className={toggleState === 1 ? 'active-tab text-[18px] font-bold text-link-colol-2' : 'tab text-[18px] font-bold text-link-colol-2'} onClick={() => toggleTab(1)}>Show All</p>
                              <p className={toggleState === 2 ? 'active-tab text-[18px] font-bold text-link-colol-1' : 'tab text-[18px] font-bold text-link-colol-1'}  onClick={() => toggleTab(2)}>Class</p>
                              <p className={toggleState === 3 ? 'active-tab text-[18px] font-bold text-link-colol-3' : 'tab text-[18px] font-bold text-link-colol-3'}  onClick={() => toggleTab(3)}>Event</p>
                              <p className={toggleState === 4 ? 'active-tab text-[18px] font-bold text-link-colol-4 hidden lg:block' : 'tab text-[18px] font-bold text-link-colol-4 hidden lg:block'}  onClick={() => toggleTab(4)}>Playing</p>
                              <p className={toggleState === 5 ? 'active-tab text-[18px] font-bold text-link-colol-5 hidden lg:block' : 'tab text-[18px] font-bold text-link-colol-5 hidden lg:block'}  onClick={() => toggleTab(5)}>Art</p>
               </div>

               <div className={toggleState === 1 ? ' content active-content' : 'tabs'}>
                              <div className='lg:w-[70%] mx-auto py-20'>
                                <ResponsiveMasonry columnsCountBreakPoints={{650: 1, 750: 2, 900: 3}} columnsCount={5} gutter='20px'>
                                <Masonry>
                                   <Zoom left> <img src={class5} alt='' className='p-2'/></Zoom>
                                   <Zoom right> <img src={class2} alt='' className='p-2'/></Zoom>
                                   <Zoom left> <img src={class3} alt='' className='p-2'/></Zoom>
                                   <Zoom right> <img src={class6} alt='' className='p-2'/></Zoom>
                                   <Zoom left> <img src={class1} alt='' className='p-2'/></Zoom>
                                   <Zoom right> <img src={class4} alt=''  className='p-2'/></Zoom>
                                </Masonry>
                                </ResponsiveMasonry>
                              </div>
               </div>
               <div className={toggleState === 2 ? ' content active-content' : 'tabs'}>
                              <div className='lg:w-[70%] mx-auto py-20'>
                              <ResponsiveMasonry columnsCountBreakPoints={{650: 1, 750: 2, 900: 3}} columnsCount={5} gutter='20px'>
                                <Masonry>
                                   <Zoom left> <img src={class4} alt=''  className='p-2'/></Zoom>
                                   <Zoom right> <img src={class5} alt='' className='p-2'/></Zoom>
                                   <Zoom left> <img src={class2} alt='' className='p-2'/></Zoom>
                                   <Zoom right> <img src={class1} alt='' className='p-2'/></Zoom>
                                   <Zoom left> <img src={class3} alt='' className='p-2'/></Zoom>
                                   <Zoom right> <img src={class6} alt='' className='p-2'/></Zoom>
                                </Masonry>
                                </ResponsiveMasonry>
                              </div>
               </div>
               <div className={toggleState === 3 ? ' content active-content' : 'tabs'}>
                              <div className='lg:w-[70%] mx-auto py-20'>
                              <ResponsiveMasonry columnsCountBreakPoints={{650: 1, 750: 2, 900: 3}} columnsCount={5} gutter='20px'>
                                <Masonry>
                                   <Zoom left> <img src={class6} alt='' className='p-2'/></Zoom>
                                   <Zoom right> <img src={class5} alt='' className='p-2'/></Zoom>
                                   <Zoom left> <img src={class4} alt=''  className='p-2'/></Zoom>
                                   <Zoom right> <img src={class3} alt='' className='p-2'/></Zoom>
                                   <Zoom left> <img src={class1} alt='' className='p-2'/></Zoom>
                                    <Zoom right><img src={class2} alt='' className='p-2'/></Zoom>
                                </Masonry>
                                </ResponsiveMasonry>
                              </div>
               </div>
               <div className={toggleState === 4 ? ' content active-content' : 'tabs'}>
                              <div className='lg:w-[70%] mx-auto py-20'>
                              <ResponsiveMasonry columnsCountBreakPoints={{650: 1, 750: 2, 900: 3}} columnsCount={5} gutter='20px'>
                                <Masonry>
                                  <Zoom left><img src={class2} alt='' className='p-2'/></Zoom>
                                  <Zoom right><img src={class6} alt='' className='p-2'/></Zoom>
                                  <Zoom left>  <img src={class3} alt='' className='p-2'/></Zoom>
                                  <Zoom right> <img src={class1} alt='' className='p-2'/></Zoom>
                                  <Zoom left>  <img src={class4} alt=''  className='p-2'/></Zoom>
                                  <Zoom right><img src={class5} alt='' className='p-2'/></Zoom>
                                </Masonry>
                                </ResponsiveMasonry>
                              </div>
               </div>
               <div className={toggleState === 5 ? ' content active-content' : 'tabs'}>
                              <div className='lg:w-[70%] mx-auto py-20'>
                              <ResponsiveMasonry columnsCountBreakPoints={{650: 1, 750: 2, 900: 3}} columnsCount={5} gutter='20px'>
                                <Masonry>
                                  <Zoom left>  <img src={class3} alt='' className='p-2'/></Zoom>
                                  <Zoom right>  <img src={class1} alt='' className='p-2'/></Zoom>
                                  <Zoom left>  <img src={class5} alt='' className='p-2'/></Zoom>
                                  <Zoom right>  <img src={class2} alt='' className='p-2'/></Zoom>
                                  <Zoom left>  <img src={class6} alt='' className='p-2'/></Zoom>
                                  <Zoom right>  <img src={class4} alt=''  className='p-2'/></Zoom>
                                </Masonry>
                                </ResponsiveMasonry>
                              </div>
               </div>
    </div>
  )
}

export default Tab