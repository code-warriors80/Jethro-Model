import React from 'react'
import img from '../image/class_01.jpg'
import img1 from '../image/class_02.jpg'
import img2 from '../image/class_03.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Teachers = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
<section className='special'>
                <div className='py-32 '>
                <h1 className='text-[40px] font-extrabold mb-5 text-link-colol-4 text-center'>Meet Our Teachers</h1>
                    <p className='text-center font-semibold text-black w-[85%] lg:w-[40%] text-[16px] mx-auto mb-20'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                    <Carousel responsive={responsive}   swipeable={true} draggable={true}
                      infinite={true}
                       className='flex items-center justify-between w-[70%] mx-auto'>
                        <div>
                            <img src={img} alt='' className='w-[250px] h-[250px] rounded-full mb-5 mx-auto'/>
                            <h2 className='text-center text-[24px] text-link-colol-2'>Alex Kshe</h2>
                            <p className='font-semibold text-text-color text-center'>Math Teacher</p>
                        </div>

                        <div>
                        <img src={img1} alt='' className='w-[250px] h-[250px] rounded-full mb-5 mx-auto'/>
                            <h2 className='text-center text-[24px] text-link-colol-4'>Alex Ude</h2>
                            <p className='font-semibold text-text-color text-center'>English Teacher</p>
                        </div>

                        <div>
                        <img src={img2} alt='' className='w-[250px] h-[250px] rounded-full mb-5 mx-auto'/>
                            <h2 className='text-center text-[24px] text-link-colol-1'>Healex Jhonson</h2>
                            <p className='font-semibold text-text-color text-center'>Art Teacher</p>
                        </div>

                        <div>
                        <img src={img} alt='' className='w-[250px] h-[250px] rounded-full mb-5 mx-auto'/>
                            <h2 className='text-center text-[24px] text-link-colol-3'>Gray Jhonson</h2>
                            <p className='font-semibold text-text-color text-center'>CCA Teacher</p>
                        </div>
                    
                </Carousel>
                </div>
               </section>
  )
}

export default Teachers