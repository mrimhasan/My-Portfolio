import React from 'react'
import {motion} from "motion/react"
import { div } from 'motion/react-client'
function ProjectCards() {
    const one = <motion.div 
    whileHover={{scale:1.1}}
    className='w-90 h-80 border-white border-2 rounded-2xl shadow-lg overflow-hidden mx-auto my-5'>
     
          {/* Card Content */}
          <img 
          src="/images/project-images/Screenshot (28).png" alt="" 
          className='w-full h-[80%] '
          />
         <div className='flex justify-around items-center text-white '>
            <button className='border-white  h-full w-full my-5'>Live</button>
            <button className='border-white  h-full w-full'>Github</button>
         </div>
       
    </motion.div>
  return (
    <div className=' grid grid-rows-auto grid-cols-2'>
    {one}
    {one}
    {one}
    {one}
    </div>
  )
}

export default ProjectCards
//(reorder animation)