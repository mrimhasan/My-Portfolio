import React from "react";
import Engineer from "./Engineer";
import Info from "./Info";
import { motion } from "motion/react";
import { MdDownloadForOffline } from "react-icons/md";

function Home() {
  const resumeURL = "https://drive.google.com/file/d/1NbkQUG1aW4Sh9WJ8_DOtaCExQG4IL6-I/view?usp=sharing";
  const Intro  = `I am a passionate Software Engineer dedicated to designing,
            developing, testing, and maintaining high-quality software
            applications. I specialize in writing clean, efficient, and
            maintainable code while ensuring security, performance, and
            scalability. With a strong focus on debugging, optimization, and
            collaboration, I work effectively with frontend, backend, and DevOps
            teams to build robust and scalable solutions.`
  return (
    <div className="px-[5%] bg-[#010101] pt-[5%] font-semibold text-[#dad3d3] bg-radial from-[#244577] from-1% via-black  to-[#010101] bg-linear-rl">
      <div className=" grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-y-[4%] sm:gap-x-[1%] p-2 place-items-center">
        <div className=" rounded-[10px] p-4">
          {/*intro*/}
          <p>
            <span className="text-[3em]/12">Hi,</span> I'm
          </p>
          <p className=" text-[2em]/7 sm:text-[4em]/14 font-serif">
            Imran Hasan{" "}
          </p>
          <Engineer />
          <p className="text-sm/5 text-justify">
            {Intro}
          </p>
          <motion.div
            className="relative flex  justify-start overflow-hidden w-fit p-1 rounded-lg mt-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            {/* Rotating Conic Gradient Border */}
            <motion.div
              className="absolute inset-[-90px] rounded-lg bg-conic from-white via-slate-600 to-black"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/*Resume Button */}
            <a href={resumeURL} target="_blank">
              <button className="relative px-6 py-2 text-white bg-black cursor-pointer rounded-lg shadow-md hover:bg-linear-to-t from-sky-500 to-indigo-500">
                <MdDownloadForOffline className="inline-block text-xl mb-1 mr-1" />
                Resume
              </button>
            </a>
          </motion.div>
        </div>
        <div className="bg-[#191919]  rounded-[100%] w-[350px] h-[350px] overflow-hidden">
          <img src="/images/imran.jpeg" alt="AuthorImage" className="size-auto" />
        </div>
      </div>
      <Info />
    </div>
  );
}
// rounded-[100%] w-[300px] h-[300px] in image
// rounded-[50%] w-[80%] sm:w-[300px] sm:h-[300px] h-[240px] overflow-clip
export default Home;
