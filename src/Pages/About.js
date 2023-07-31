import React from 'react'
import Facility2 from '../components/Facility2'
import About2 from '../components/About2'
import boys from '../image/feature.jpg'
import world from '../icon/icons8-location-94.png'
import mind from '../icon/icons8-mind-map-94.png'
// import book from '../icon/icons8-book-shelf-94.png'
import teacher from '../icon/icons8-student-male-94.png';
import microphone from '../icon/icons8-microphone-94.png';
import gadget from '../icon/icons8-multiple-devices-94.png';
import NewsLetter from '../components/News-Letter';
import teachers from "../image/teachers/teacher1.avif";
import teachers1 from "../image/teachers/teacher2.avif";
//import teachers2 from "../image/teachers/teacher3.avif";
//import teachers3 from "../image/teachers/teacher4.avif";
import insta from '../icon/icons8-instagram-94.png'
import facebook from '../icon/icons8-facebook-94.png'
import twitter from '../icon/icons8-twitter-circled-94.png'


const About = () => {
  return (
    <div>
      <section className='page_header zig_zag top-24 lg:top-40'>
        <div className='bg-bg-color py-20'>
          <h1 className='text-[40px] font-extrabold mb-5 text-white text-center'>About Jethro Model</h1>
          <p className='text-[18px] pb-16 font-semibold text-white text-center'>Home - About us</p>
        </div>
      </section>
      <Facility2 />
      <About2 />
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
              <img src={world} alt='' className='mx-auto mb-3' />
            </div>

            <div className='mb-8 flex items-center flex-wrap-reverse'>
              <div className='mr-5'>
                <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-3'>Multimedia Class</h2>
                <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
              </div>
              <img src={mind} alt='' className='mx-auto mb-3' />
            </div>

            <div className='mb-8 flex items-center flex-wrap-reverse'>
              <div className='mr-5'>
                <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-5'>Music And Art Class</h2>
                <p className=' text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
              </div>
              <img src={microphone} alt='' className='mx-auto mb-3' />
            </div>
          </div>

          <img src={boys} alt='' className='py-10' />

          <div>
            <div className='mb-8 flex items-center flex-wrap'>
              <img src={teacher} alt='' className='mx-auto mb-3' />
              <div className='ml-5'>
                <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-1'>Expert Teachers</h2>
                <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
              </div>
            </div>

            <div className='mb-8 flex items-center flex-wrap'>
              <img src={gadget} alt='' className='mx-auto mb-3' />
              <div className='ml-5'>
                <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-4'>Multimedia Class</h2>
                <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
              </div>
            </div>

            <div className='mb-8 flex items-center flex-wrap'>
              <img src={mind} alt='' className='mx-auto mb-3' />
              <div className='ml-5'>
                <h2 className='text-center text-3xl font-extrabold mb-3 text-code_war-color'>Music And Art Class</h2>
                <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about_teachers zig_zag'>
        <div className='bg-bg-color-1 py-32'>
          <h1 className='text-[40px] font-[800] mb-5 text-white text-center'>Meet Our Teachers</h1>
          <p className='text-center font-semibold text-white w-[85%] lg:w-[40%] text-[16px] mx-auto mb-20'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
          
          <div className=' lg:flex'>
            <div className="max-w-sm w-full lg:max-w-[40%] lg:flex mx-auto mt-2 mb-2">
              <img className=" w-full rounded-t-lg h-56 md:h-auto md:w-52 md:rounded-none md:rounded-l-lg"  src={teachers} alt='pic'/>
              <div className=" bg-purple-900 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-white flex items-center">
                    <svg className="fill-current text-white w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Staff
                  </p>
                  <div className=" text-white font-bold text-xl mb-2">
                     <div className='flex items-center gap-10'>
                        <i><img src={insta} alt='' className='w-6'/></i>
                        <i><img src={facebook} alt='' className='w-6'/></i>
                        <i><img src={twitter} alt='' className='w-6'/></i>
                      </div>
                  </div>
                  <p className=" text-white text-base">Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                </div>
                <div className="flex items-center">
                  {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
                  <div className="text-sm">
                    <p className=" text-white leading-none">Robot Jhonson</p>
                    <p className=" text-white">Mathematics Teacher</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm w-full lg:max-w-[40%] lg:flex mx-auto mt-2 mb-2">
              <img className=" w-full rounded-t-lg h-56 md:h-auto md:w-52 md:rounded-none md:rounded-l-lg"  src={teachers1} alt='pic'/>
              <div className=" bg-red-700 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-white flex items-center">
                    <svg className="fill-current text-white w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Staff
                  </p>
                  <div className=" text-white font-bold text-xl mb-2">
                      <div className='flex items-center gap-10'>
                        <i><img src={insta} alt='' className='w-6'/></i>
                        <i><img src={facebook} alt='' className='w-6'/></i>
                        <i><img src={twitter} alt='' className='w-6'/></i>
                      </div>
                  </div>
                  <p className=" text-white text-base">Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                </div>
                <div className="flex items-center">
                  {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
                  <div className="text-sm">
                    <p className="text-white leading-none">Broklyn Doel </p>
                    <p className="text-white">Social Studies Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' lg:flex'>
            <div className="max-w-sm w-full lg:max-w-[40%] lg:flex mx-auto mt-2 mb-2">
              <img className=" w-full rounded-t-lg h-56 md:h-auto md:w-52 md:rounded-none md:rounded-l-lg"  src={teachers} alt='pic'/>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-blue-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-white flex items-center">
                    <svg className="fill-current text-white w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Staff
                  </p>
                  <div className="text-white font-bold text-xl mb-2">
                     <div className='flex items-center gap-10'>
                        <i><img src={insta} alt='' className='w-6'/></i>
                        <i><img src={facebook} alt='' className='w-6'/></i>
                        <i><img src={twitter} alt='' className='w-6'/></i>
                      </div>
                  </div>
                  <p className="text-white text-base">Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                </div>
                <div className="flex items-center">
                  {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
                  <div className="text-sm">
                    <p className="text-white leading-none">Robot Jhonson</p>
                    <p className="text-white">Mathematics Teacher</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm w-full lg:max-w-[40%] lg:flex mx-auto mt-2 mb-2">
              <img className=" w-full rounded-t-lg h-56 md:h-auto md:w-52 md:rounded-none md:rounded-l-lg"  src={teachers1} alt='pic'/>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-yellow-500 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-white flex items-center">
                    <svg className="fill-current text-white w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Staff
                  </p>
                  <div className="text-white font-bold text-xl mb-2">
                      <div className='flex items-center gap-10'>
                        <i><img src={insta} alt='' className='w-6'/></i>
                        <i><img src={facebook} alt='' className='w-6'/></i>
                        <i><img src={twitter} alt='' className='w-6'/></i>
                      </div>
                  </div>
                  <p className="text-white text-base">Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                </div>
                <div className="flex items-center">
                  {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
                  <div className="text-sm">
                    <p className="text-white leading-none">Broklyn Doel </p>
                    <p className="text-white">Social Studies Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
    </div>
  )
}

export default About;