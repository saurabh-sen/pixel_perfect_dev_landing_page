import Image from 'next/image'
import React, { useState } from 'react'
import hero from '../public/hero.png'

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState('All');

  const filterWork = [
    {
      projectLink : "fsldlfj",
      codeLink : "asjdfls",
      title : "halh",
      description : "asdjlfsldjflsjfsadfsa",
      tags : ["as", "af"]
    },
    {
      projectLink : "fsldlfj",
      codeLink : "asjdfls",
      title : "halh",
      description : "asdjlfsldjflsjfsadfsa",
      tags : ["as", "af"]
    },
    {
      projectLink : "fsldlfj",
      codeLink : "asjdfls",
      title : "halh",
      description : "asdjlfsldjflsjfsadfsa",
      tags : ["as", "af"]
    },
    {
      projectLink : "fsldlfj",
      codeLink : "asjdfls",
      title : "halh",
      description : "asdjlfsldjflsjfsadfsa",
      tags : ["as", "af"]
    },
    {
      projectLink : "fsldlfj",
      codeLink : "asjdfls",
      title : "halh",
      description : "asdjlfsldjflsjfsadfsa",
      tags : ["as", "af"]
    },
    {
      projectLink : "fsldlfj",
      codeLink : "asjdfls",
      title : "halh",
      description : "asdjlfsldjflsjfsadfsa",
      tags : ["as", "af"]
    },
    {
      projectLink : "fsldlfj",
      codeLink : "asjdfls",
      title : "halh",
      description : "asdjlfsldjflsjfsadfsa",
      tags : ["as", "af"]
    },
  ];

  function handleWorkFilter(item) {
    
  }

  return (
    <div className='projects flex flex-col bg-[#eeeeff]'>
      <h2 className="head-text mt-8 text-2xl md:text-5xl font-bold text-center text-black capitalize">My Creative <span className='text-[#313bac]'>Portfolio</span> Section</h2>

      <div className="app__work-filter flex md:flex-row justify-around items-center flex-wrap mt-16 mb-8 md:w-max ml-auto mr-auto ">
        {['UI/UX', 'Firebase', 'Next JS', 'React JS', 'Full Stack App', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text py-2 px-4 rounded-lg bg-white font-bold cursor-pointer transition-all duration-300 ease-linear m-2 hover:bg-[#313bac] hover:text-white flex justify-center items-center text-sm text-left leading-normal text-[#6b7688] ${activeFilter === item ? 'item-active bg-[#313bac] text-white' : ''}`}
          // ADD THIS TO CLASS AGAIN 
          >
            {item}
          </div>
        ))}
      </div>
      <div className="app__work-portfolio flex flex-wrap justify-center items-center" >
        {filterWork.map((work, index) => (
          <div className="app__work_item ml-0 m-4 sm:w-[270px] flex-col sm:m-8 p-4 rounded-lg bg-white text-black cursor-pointer transition-all duration-300 ease-linear app__flex flex justify-center items-center 2xl:w-96 2xl:p-5 2xl:rounded-xl" 
           key={index}
           >
            <div
              className="app__work-img w-full h-56 relative app__flex flex justify-center items-center 2xl:h-80" >
              <Image className='w-full h-full rounded-lg object-cover' src={hero} width={400} height={400} alt={index} />

              <div className="app__work-hover absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[#00000079] rounded-lg opacity-0 transition-all duration-300 ease-linear app__flex flex justify-center items-center hover:opacity-100"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <div className="app__flex flex justify-center items-center w-12 h-12 rounded-[50%] bg-[#00000079] text-white m-4 font-bold cursor-pointer transition-all duration-300 ease-linear" >
                  <svg className='w-1/2 h-1/2' color='white' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill='currentColor' d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                    {/* <AiFillEye className=' text-white' /> */}
                  </div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <div className="app__flex flex justify-center items-center w-12 h-12 rounded-[50%] bg-[#00000079] text-white m-4 font-bold cursor-pointer transition-all duration-300 ease-linear"
                  >
                    <svg className='w-1/2 h-1/2' color='white' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                      <path fill='currentColor' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                    {/* <AiFillGithub className='w-1/2 h-1/2 text-white' /> */}
                  </div>
                </a>
              </div>
            </div>

            <div className="app__work-content p-2 w-full relative flex-col app__flex flex justify-center items-center" >
              <h4 className="bold-text text-sm sm:text-base 2xl:text-4xl font-bold text-black text-left mt-4 leading-normal 2xl:mt-12">{work.title}</h4>
              <p className="p-text text-xs text-left leading-normal text-[#6b7688] 2xl:text-3xl" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag absolute py-2 px-4 rounded-xl bg-white top-[-25px] app__flex flex justify-center items-center" >
                <p className="p-text text-xs text-left leading-normal text-[#6b7688] 2xl:text-3xl" >{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects