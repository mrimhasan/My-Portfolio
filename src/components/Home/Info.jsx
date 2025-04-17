import React, {useRef} from "react";
import {
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
  SiCodingninjas,
} from "react-icons/si";
import { motion, useInView } from "motion/react";
import { Tooltip } from "react-tooltip";
import Languages from "./Languages";

function Info() {
  /**** Multi Ref for tracking div individual *****/
  const ref1 = useRef();
    const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef();
    const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef();
    const isInView3 = useInView(ref3, { once: true });
    
  const toolTips_Id_Content = [
    {
      id: "leetcode",
      content: "leetcode profile",
    },
    {
      id: "cc",
      content: "codechef profile",
    },
    {
      id: "gfg",
      content: "GFG profile",
    },
    {
      id: "cninja",
      content: "coding ninja profile",
    },
  ];
  const Why_I_Choose = `Software applications play a vital role in our daily lives. It's a
          vast universe with different galaxies, each offering unique
          experiences and challenges. These applications are created using just
          a PC with an internet connection. My first interaction with software
          was with a calculator, which I used for solving math problems. I often
          wondered how it worked, was it the battery inside that made it
          function? My curiosity about how software works and how it is made led
          me to this field.As a software engineer, all you need is a PC, an
          internet connection, and a cup of coffee☕—and you can build anything.`
  const cp = `I enjoy problem-solving and regularly practice DSA problems on
            various platforms like LeetCode, CodeChef, Coding Ninjas, and
            GeeksforGeeks. This not only enhances my problem-solving skills and
            analytical thinking but also sharpens my expertise and motivates me
            to take on new challenges.`
  const P_M_B = "p-4  rounded-2xl";
  const text = "text-[1.8em] text-center";

  return (
    <div className=" grid grid-auto-rows-auto grid-cols-1 md:grid-cols-2 col-span-[1fr] mt-[20px] pb-10 ">
      <motion.div
       ref={ref1}
       initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={isInView1 ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={` md:col-span-2 m-2.5 ${P_M_B} backdrop-blur-2xl border-1`}
      >
        <p className={`${text}`}>Why I choose software engineering</p>
        <p className="pt-4 px-2.5 pb-4  text-center text-sm font-normal">
          {Why_I_Choose}
        </p>
      </motion.div>
      <motion.div
      ref={ref3}
      initial={{ opacity: 0, x: -100, scale: 0.8 }}
      animate={isInView3 ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
       className={`bg-[#191919] ${P_M_B} m-2.5 relative overflow-hidden`}>
        <div className="">
          <p className={`${text}`}>As a competitive programmer</p>
          <p className="text-center mt-2.5 text-sm font-normal">
            {cp}
          </p>
        </div>
        {/* Plateform icons */}
        <div className="flex justify-around text-2xl p-4 mt-2">
          <a href="" rel="noopener noreferrer" data-tooltip-id="leetcode">
            <SiLeetcode />
          </a>
          <a href="" rel="noopener noreferrer" data-tooltip-id="cc">
            <SiCodechef />
          </a>
          <a href="" rel="noopener noreferrer" data-tooltip-id="gfg">
            <SiGeeksforgeeks className="" />
          </a>
          <a href="" rel="noopener noreferrer" data-tooltip-id="cninja">
            <SiCodingninjas />
          </a>
        </div>
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-20"
          animate={{
            opacity: [0, 0.3, 0],
            x: ["-100%", "100%"],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <Languages />
      {/* <div>
          <p>Achievment</p>
          <p></p>
          </div> */}
      {/* <div>currently where i am like my journey and gap my weaknes my motivation</div> */}
      <motion.div
        className={` ${P_M_B} h-fit m-2.5 bg-linear-to-b from-slate-800 to bg-[#0e0d0d]`}
        ref={ref2}
        initial={{ opacity: 0, x: -100, scale: 0.8 }}
        animate={isInView2 ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className={`${text}`}>Quote's</p>
        <p className="relative">
          1. The miracle you're waiting for is hidden within the work you are
          avoiding.
          <span className="absolute right-2 italic">-SELF</span>
        </p>
        <p className="relative">
          2. I believe we are here on the planet Earth to live grow up and do
          what we can to make this world a better place for all people to enjoy
          freedom. <span className="absolute right-2 italic">-ROSA PARKS</span>
        </p>
      </motion.div>

      {toolTips_Id_Content.map((item, indx) => (
        <Tooltip
          key={indx}
          id={item.id}
          place="top"
          content={item.content}
          style={{ backgroundColor: "#fff", color: "#010101" }}
        />
      ))}
    </div>
  );
}

export default Info;
/******* backOut animate ****/
// initial={{ opacity: 0, scale: 0 }}
// animate={isView? { opacity: 1, scale: 1 }:{}}
// transition={{
  
//   duration: 0.5,
//   scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
// }}