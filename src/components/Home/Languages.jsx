import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
function Languages() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="bg-blue-500 row-span-1 md:row-span-2 p-4 rounded-2xl h-fit m-2.5 text-center"
      ref={ref}
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className={`text-[1.8em] text-center text-slate-800 font-[Ewert]`}>
        languages known to speak
      </p>
      <p className="mt-2.5 text-[18px] font-extrabold ">
        I can speak, read and write following languages.
      </p>
      <div className="mt-3 text-neutral-200">
        <p className="text-xl">Hindi</p>
        <div className="flex justify-around text-sm">
          <span>Speaking: Native</span>
          <span>Reading: Advance</span>
          <span>Writing: Advance</span>
        </div>
      </div>
      <div className="mt-3  text-neutral-200">
        <p className="text-xl">English</p>
        <div className="flex justify-around text-sm">
          <span>Speaking: Intermediate</span>
          <span>Reading: Advance</span>
          <span>Writing: Advance</span>
        </div>
      </div>
      <div className="mt-3  text-neutral-200">
        <p className="text-xl">Urdu</p>
        <div className="flex justify-around text-sm">
          <span>Speaking: Intermediate</span>
          <span>Reading: Intermediate</span>
          <span>Writing: Elementry</span>
        </div>
      </div>
      <div className="mt-3  text-neutral-200 text-sm">
        <p className="text-xl">Arabic</p>
        <div className="flex justify-around">
          <span>Speaking: Elementry</span>
          <span>Reading: Intermediate</span>
          <span>Writing: Elementry</span>
        </div>
      </div>
      <div className="mt-3 mb-2.5  text-neutral-200">
        <p className="text-xl">Japenese (Nihongo)</p>
        <div className="flex justify-around text-sm">
          <span>Speaking: Elementry</span>
          <span>Reading: Learning...</span>
          <span>Writing: Learning...</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Languages;
