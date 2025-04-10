import React from "react";
import Card from "./Card";
import { motion, useMotionValue, useTransform, useInView } from "motion/react";
import { useState, useRef } from "react";
function Skills() {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });

  const tools_Technologies = [
    {
      name: "Git",
      about: ` is a version control system that is used to track changes to your files. It is a free and open-source software that is available for Windows, macOS, and Linux. Remember, GIT is a software and can be installed on your computer.`,
      image: "/images/T&T-IMG/git.png",
    },
    {
      name: "Github",
      about:
        " is a web-based hosting service for Git repositories. Github is an online platform that allows you to store and share your code with others. It is a popular platform for developers to collaborate on projects and to share code.",
      image: "/images/T&T-IMG/github.png",
    },
    {
      name: "Visual Studio Code",
      about:
        " is an integrated development environment developed by Microsoft for Windows, Linux, macOS and web browsers.Features include support for debugging, intelligent code completion, snippets, and embedded version control with Git.",
      image: "/images/T&T-IMG/vscode.png",
    },
    {
      name: "Stackblitz/Codesandbox",
      about:
        " are cloud-based online IDE, or web IDE. Which is a programming environment accessible through a web browser, offering features like code editing, compiling, debugging, and more, all within a cloud-hosted environment. ",
      image: "/images/T&T-IMG/stackblitz.png",
    },
    {
      name: "Postmen",
      about:
        "API testing uses Postman, a comprehensive API platform, to simplify creating, testing, and documenting APIs by allowing developers to design, test, and automate API testing processes with an intuitive interface. ",
      image: "/images/T&T-IMG/postmen.png",
    },
    {
      name: "Notion",
      about:
        " is a collaboration platform with Markdown and including kanban boards, tasks, wikis and databases. It is a workspace for notetaking, knowledge and data management, as well as project and task management.",
      image: "/images/T&T-IMG/notion.png",
    },
  ];
  return (
    <div className="p-[5%] bg-[#010101] font-semibold  bg-radial from-[#244577] from-1% via-black  to-[#010101]">
      <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2   place-items-center">
        <div className=" pl-4">
          <p className=" text-[4em]/14 font-serif text-[#dad3d3]">
            What I bring
          </p>
          <p className="text-sm/5 mt-3 text-[#dad3d3]">
            Strong foundation in frontend technologies (React.js, TailwindCSS,
            Framer-Motion). Experience in building dynamic, responsive, and
            user-friendly applications. Understanding of API integration, state
            management (Redux), and performance optimization. Currently
            exploring Node.js, Express.js, and MongoDB to enhance my backend
            skills.
          </p>
        </div>
        <div className="">
          <video
            src="/video/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[320px]"
          ></video>
        </div>
      </div>
      <div className="grid min-[512px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-6 place-items-center">
        <Card />
      </div>

      {/* Tools & TECHs CARDs */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="col-span-auto text-center"
      >
        <h1 className="text-[#eef1f3] text-6xl sm:text-8xl tracking-widest w-full mt-20 font-extrabold">
          TOOLS & TECHs
        </h1>
      </motion.div>

      <div className="grid grid-rows-auto grid-cols-1 lg:grid-cols-2 gap-6 mt-[2%] p-2">
        {tools_Technologies.map((items) => {
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          const [hovered, setHovered] = useState(false);

          const rotateX = useTransform(y, [-50, 50], [10, -10]);
          const rotateY = useTransform(x, [-50, 50], [-10, 10]);

          return (
            <motion.div
              key={items.name}
              className="bg-gradient-to-b from-white to-slate-950 h-70 sm:h-60 rounded-2xl p-2 grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 place-items-center cursor-pointer"
              style={{
                rotateX: hovered ? rotateX : 0,
                rotateY: hovered ? rotateY : 0,
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
              <img
                src={items.image}
                alt="tools-image"
                className="h-[80%] sm:h-[60%]"
              />
              <p className="text-white text-[0.8rem] sm:text-[1rem]/5 font-normal">
                <span className="text-sky-600 sm:text-zinc-600 font-extrabold">
                  {items.name}
                </span>{" "}
                {items.about}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default Skills;
