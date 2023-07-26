import React, {useState} from 'react'

const Tab = () => {
               const [toggleState, setToggle] = useState(1);

               const toggleTab = (index) => {
                              setToggle(index);
               }
  return (
    <div>
               <div className='block-tabs flex items-center lg:justify-between justify-evenly cursor-pointer mx-auto lg:w-[30%] px-10'>
                              <p className={toggleState === 1 ? 'active-tab text-[18px] font-bold text-link-colol-2' : 'tab text-[18px] font-bold text-link-colol-2'} onClick={() => toggleTab(1)}>Show All</p>
                              <div className={toggleState === 2 ? 'active-tab text-[18px] font-bold text-link-colol-1' : 'tab text-[18px] font-bold text-link-colol-1'}  onClick={() => toggleTab(2)}>Class</div>
                              <div className={toggleState === 3 ? 'active-tab text-[18px] font-bold text-link-colol-3' : 'tab text-[18px] font-bold text-link-colol-3'}  onClick={() => toggleTab(3)}>Event</div>
                              <div className={toggleState === 4 ? 'active-tab text-[18px] font-bold text-link-colol-4 hidden lg:block' : 'tab text-[18px] font-bold text-link-colol-4 hidden lg:block'}  onClick={() => toggleTab(4)}>Playing</div>
                              <div className={toggleState === 5 ? 'active-tab text-[18px] font-bold text-link-colol-5 hidden lg:block' : 'tab text-[18px] font-bold text-link-colol-5 hidden lg:block'}  onClick={() => toggleTab(5)}>Art</div>
               </div>

               <div className={toggleState === 1 ? ' content active-content' : 'tabs'}>
                              <div className='w-[70%] mx-auto py-20'>1</div>
               </div>
               <div className={toggleState === 2 ? ' content active-content' : 'tabs'}>
                              <div className='w-[70%] mx-auto py-20'>2</div>
               </div>
               <div className={toggleState === 3 ? ' content active-content' : 'tabs'}>
                              <div className='w-[70%] mx-auto py-20'>3</div>
               </div>
               <div className={toggleState === 4 ? ' content active-content' : 'tabs'}>
                              <div className='w-[70%] mx-auto py-20'>4</div>
               </div>
               <div className={toggleState === 5 ? ' content active-content' : 'tabs'}>
                              <div className='w-[70%] mx-auto py-20'>5</div>
               </div>
    </div>
  )
}

export default Tab