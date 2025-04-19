import React from "react";
import { motion } from "motion/react";

const anchor_class =
  "h-full w-fit text-white text-center font-light cursor-pointer hover:decoration-2 hover:decoration-white hover:underline hover:underline-offset-5 mx-auto max-[400px]:text-xs";

function ProjectCards() {
  const one = (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-[80%] sm:w-[95%] md:w-[85%] max-[400px]:h-60  h-80 border-white border-2 rounded-2xl overflow-hidden mx-auto my-5"
    >
      {/* Card Content */}
      <img
        src="/images/project-images/Screenshot (28).png"
        alt=""
        className="w-full h-[80%]"
      />
      <h4 className="text-white text-center mt-1 text-lg max-[400px]:text-sm">
        Disney+ Clone
      </h4>
      <div className="flex justify-around items-center">
        <a
          className={`${anchor_class}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
        <a
          className={`${anchor_class}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </motion.div>
  );
  return (
    <div className="grid grid-rows-auto grid-cols-1 sm:grid-cols-2 sm:max-w-4xl mx-auto">
      {one}
      {one}
      {one}
      {one}
    </div>
  );
}

export default ProjectCards;
//(reorder animation)
