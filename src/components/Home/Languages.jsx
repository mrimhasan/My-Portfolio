import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const languages = [
  {
    name: "Hindi",
    speaking: "Speaking: Native",
    reading: "Reading: Advance",
    writing: "Writing: Advance",
  },
  {
    name: "English",
    speaking: "Speaking: Intermediate",
    reading: "Reading: Advance",
    writing: "Writing: Advance",
  },
  {
    name: "Urdu",
    speaking: "Speaking: Intermediate",
    reading: "Reading: Intermediate",
    writing: "Writing: Elementry",
  },
  {
    name: "Arabic",
    speaking: "Speaking: Elementry",
    reading: "Reading: Intermediate",
    writing: "Writing: Elementry",
  },
  {
    name: "Japenese (Nihongo)",
    speaking: "Speaking: Elementry",
    reading: "Reading: Learning...",
    writing: "Writing: Learning...",
  },
];

function Languages() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="bg-blue-500 row-span-1 md:row-span-2 p-4 rounded-2xl h-fit m-2.5 text-center "
      ref={ref}
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p className={`text-[1.8em] text-center text-slate-800 font-[Ewert]`}>
        languages known to speak
      </p>
      <p className="mt-2.5 text-[18px] font-extrabold ">
        I can speak, read and write following languages.
      </p>
      {languages.map((language, indx) => (
        <div className={`mt-3 ${indx%4 ? null:'mb-2.5'} text-white`}>
          <p className="text-xl">{language.name}</p>
          <div className="flex justify-around text-sm">
            <span>{language.speaking}</span>
            <span>{language.reading}</span>
            <span>{language.writing}</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Languages;
