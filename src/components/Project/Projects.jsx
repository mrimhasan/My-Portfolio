import React from "react";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";

function TiltShineCard() {
  const [hovered, setHovered] = useState(false);

  // Track mouse position for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <>
    <img 
    src="/images/project-images/imran.gif"
    alt="project-IMG" 
    className="w-full h-[50vh] md:h-[80vh]"/>
    <div className="p-[2%_4%] text-neutral-300 bg-[#010101] font-semibold  bg-radial from-[#244577] from-1% via-black  to-[#010101]">
      
      <p className="">
        I’ve worked on several projects in Web Development, which have helped me
        sharpen both my technical and problem-solving skills. From designing
        responsive UIs using HTML, CSS, Tailwind, and Bootstrap, to developing
        interactive and dynamic components with JavaScript and React.js, I’ve
        been actively involved in bringing ideas to life. I’ve also worked with
        backend tools like PHP and MySQL to build complete, full-stack web
        applications. Some of my projects include a portfolio website, a Disney+
        clone, and even a real estate listings app — each one pushing me to
        learn something new, be it animations with Framer Motion, state
        management with Redux, or connecting to external REST APIs.
      </p>
      <motion.div
        className="relative w-80 h-48 bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center"
        style={{
          perspective: 1000,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={(e) => {
          const { width, height, left, top } =
            e.currentTarget.getBoundingClientRect();
          const mouseX = e.clientX - left - width / 2;
          const mouseY = e.clientY - top - height / 2;
          x.set(mouseX);
          y.set(mouseY);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
          setHovered(false);
        }}
      >
        {/* Card Content */}
        <h2 className="text-white text-xl font-bold z-10">
          Tilt Shine Card (reorder animation)
        </h2>

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
      <p className="text-2xl/7 font-light">
        These projects taught me the importance of writing clean, maintainable
        code and delivering user-focused solutions. I’m now excited to
        contribute my skills in a professional environment, collaborate with
        great teams, and continue growing as a developer.
      </p>
    </div>
    </>
  );
}

// on hover
// animate={{
//   opacity: hovered ? [0, 0.3, 0] : 0,
//   x: hovered ? ["-100%", "100%"] : 0,
// }}
function Projects() {
  return (
    <div>
      <TiltShineCard />
    </div>
  );
}

export default Projects;
