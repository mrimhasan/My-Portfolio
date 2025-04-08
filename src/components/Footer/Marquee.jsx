import React from 'react'
import { motion } from 'motion/react'
function Marquee() {
  // Array.from({ length: 5 }, () => "Open to work now") // Slightly slower and readable best for dynamic values 
  // [...Array(5)].map(() => "Open to work now") // slower avoid to use
  const Span = new Array(3).fill("Open to work now") // this is fastes and very simple for static values
  return (
    <>
    <motion.div 
    className='flex justify-around'
    initial={{x:0}}
    animate={{ x: "-100%" }}
    transition={{repeat: Infinity, duration:10, ease: "linear" }}
    >
        {Span.map((item, index )=>{
          return (
            <span key={index}>{item}</span>
          )
        })}
        
    </motion.div>
    <motion.div 
    className='flex justify-around absolute top-0 w-full'
    initial={{x:"100%"}}
    animate={{ x:0 }}
    transition={{ repeat: Infinity, duration:10, ease: "linear" }}
    >
       {Span.map((item, index )=>{
          return (
            <span key={index}>{item}</span>
          )
        })}
    </motion.div>
    <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[5vw] max-w-[100px] bg-gradient-to-r from-[#010101]/60 to-black/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-linear-to-l from-[#010101]/60 to-black/0" />
    </>
  )
}
export default Marquee
