import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ProjectCards from "./ProjectCards";
import ContactForm from "./ContactForm";

const textLines = [
  "I’ve worked on several projects in Web Development, which have helped me sharpen both my technical and problem-solving skills.",
  "From designing responsive UIs using HTML, CSS, Tailwind, and Bootstrap, to developing interactive and dynamic components with JavaScript and React.js, I’ve been actively involved in bringing ideas to life.",
  "I’ve also worked with backend tools like PHP and MySQL to build complete, full-stack web applications.",
  "Some of my projects include a portfolio website, a Disney+ clone, and even a real estate listings app — each one pushing me to learn something new, be it animations with Framer Motion, state management with Redux, or connecting to external REST APIs.",
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ScrollFadeInText = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="max-w-5xl mx-auto mt-5 px-4">
      {textLines.map((line, index) => (
        <motion.p
          key={index}
          custom={index}
          variants={fadeInVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-4 text-sm sm:text-lg/6 font-medium text-neutral-200 max-[400px]:text-justify max-[400px]:tracking-tight"
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

const ProjectInfo = () => {
  return (
    <>
      <img
        src="/images/project-images/imran.gif"
        alt="project-IMG"
        className="w-full h-[65vh] md:h-[80vh]"
      />
      <div
        className="p-[2%_4%] bg-[#010101]  bg-radial from-[#244577] from-1% via-black  to-[#010101] bg-center bg-fixed"
        style={{ backgroundSize: "110% 150%" }}
      >
        <ScrollFadeInText />
        {/* Cards */}
        <ProjectCards />
        <p className="sm:text-2xl/7 font-light text-white max-w-5xl mx-auto text-justify tracking-tight">
          These projects taught me the importance of writing clean, maintainable
          code and delivering user-focused solutions. I’m now excited to
          contribute my skills in a professional environment, collaborate with
          great teams, and continue growing as a developer👨‍💻.
        </p>
        <ContactForm/>
      </div>
    </>
  );
};

export default ProjectInfo;
