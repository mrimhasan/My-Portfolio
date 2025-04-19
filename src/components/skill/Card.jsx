import React from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function Card() {
  const [expandIMG, setExpandIMG] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [showCard, setShowCard] = useState(false);
  const toggleClass = {
    default:
      "relative bg-gray-900 w-60 h-60 rounded-2xl shadow-2xl overflow-hidden",
    toggle:
      "fixed w-[80%] h-auto sm:w-[600px] sm:h-[420px] grid grid-cols-1 grid-rows-auto lg:grid-cols-2 lg:grid-rows-2 z-20 bg-white rounded-xl shadow-2xl p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ",
  };

  const Skills = [
    {
      id: [0, 0.1],
      name: "React/React-router/Redux",
      content: `React, React Router, and Redux form a powerful stack for building complex web applications. React is a library for building user interfaces, React Router handles navigation between different views, and Redux manages the application's state.`,
      IMG: "/images/skil-images/reactjs.png",
      deep_dive: "",
    },
    {
      id: [1, 1.1],
      name: "Tailwindcss",
      content:
        'Tailwind CSS is an open-source CSS framework. Unlike other frameworks, like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.',
      IMG: "/images/skil-images/tailwind .png",
      deep_dive: "",
    },
    {
      id: [2, 2.1],
      name: "Framer-motion",
      content:
        "Motion (formerly knonw as Framer-motion) is an open-source React animation and gesture library that offers a low-level API for integrating animation and gestures into elements in React applications. Motion is a library that makes constructing complicated animations easier by providing utility animation components as well as hooks.",
      IMG: "/images/skil-images/motion.png",
      deep_dive: "",
    },
    {
      id: [3, 3.1],
      name: "Bootstrap",
      content:
        "Bootstrap (formerly Twitter Bootstrap) is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      IMG: "/images/skil-images/bootstrap.png",
      deep_dive: "",
    },
    {
      id: [4, 4.1],
      name: "HTML",
      content:
        "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language.",
      IMG: "/images/skil-images/html.png",
      deep_dive: "",
    },
    {
      id: [5, 5.1],
      name: "CSS",
      content:
        "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
      IMG: "/images/skil-images/css.png",
      deep_dive: "",
    },
    {
      id: [6, 6.1],
      name: "Scss or Sass",
      content:
        "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. When SassScript is interpreted, it creates blocks of CSS rules for various selectors as defined by the Sass file.",
      IMG: "/images/skil-images/sass.png",
      deep_dive: "",
    },
    {
      id: [7, 7.1],
      name: "C/C++",
      content:
        "C and C++ are powerful, general-purpose programming languages widely used in various applications. C is known for its efficiency and low-level control, making it suitable for system programming and embedded systems. C++ emerged as an extension of C, introducing object-oriented programming features like classes and objects. This makes C++ suitable for complex software development.",
      IMG: "/images/skil-images/pngegg (3).png",
      deep_dive: "",
    },
    {
      id: [8, 8.1],
      name: "Javascript",
      content:
        "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.It has dynamic typing, prototype-based object-orientation, and first-class functions.It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
      IMG: "/images/skil-images/javascript.png",
      deep_dive: "",
    },
    {
      id: [9, 9.1],
      name: "Jquery",
      content:
        "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animations, and Ajax.It is free, open-source software using the permissive MIT License.As of August 2022, jQuery is used by 77% of the 10 million most popular websites",
      IMG: "/images/skil-images/jquery.png",
      deep_dive: "",
    },
    {
      id: [10, 10.1],
      name: "PHP",
      content:
        "PHP is a general-purpose scripting language geared towards web development.PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or a Common Gateway Interface (CGI) executable.",
      IMG: "/images/skil-images/php.png",
      deep_dive: "",
    },
    {
      id: [11, 11.1],
      name: "Nodejs",
      content:
        "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
      IMG: "/images/skil-images/nodejs.png",
      deep_dive: "",
    },
    {
      id: [12, 12.1],
      name: "Expressjs",
      content:
        "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.It has been called the de facto standard server framework for Node.js.",
      IMG: "/images/skil-images/expressjs.png",
      deep_dive: "",
    },
    {
      id: [13, 13.1],
      name: "mongodb",
      content:
        "Mongodb is a NoSQL (non relational) database. NoSQL (Non-Relational Databases): A flexible, schema-less database system that allows storing data in various formats like key-value, document, column-family, and graph.This database uses a document storage format called BSON which is a binary style of JSON document.",
      IMG: "/images/skil-images/mongodb.png",
      deep_dive: "",
    },
    {
      id: [14, 14.1],
      name: "Mysql",
      content:
        "MySQL is an open-source relational database management system (RDBMS). A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data.",
      IMG: "/images/skil-images/mysql.png",
      deep_dive: "",
    },
    {
      id: [15, 15.1],
      name: "OOP",
      content:
        "Object-oriented programming (OOP) is a programming paradigm based on the concept of objects.Objects can contain data (called fields, attributes or properties) and have actions they can perform (called procedures or methods and implemented in code). In OOP, computer programs are designed by making them out of objects that interact with one another.",
      IMG: "/images/skil-images/oop.png",
      deep_dive: "",
    },
  ];
  return (
    <>
      {/* SKILLS CARDs */}
      <AnimatePresence>
        {showCard && (
          // Expended-Card
          <motion.div
            key="expanded"
            className={toggleClass.toggle}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <img
              src={expandIMG}
              alt="framer-motion"
              className=" h-[60%] ml-[70px] mt-[40px]"
            />
            {/* Card Content */}
            <div className="flex flex-col ">
              <div className="flex justify-between ">
                <h1 className="text-2xl font-semibold">What I Bring</h1>
                <button
                  onClick={() => {
                    return setShowCard(false);
                  }}
                  className="cursor-pointer text-gray-500 hover:text-black"
                >
                  ✕
                </button>
              </div>
              <p className="text-black text-[1rem]/tight font-light mt-2 p-2 sm:p-0">
                {Skills[0].content}
              </p>
            </div>
            <div className="col-span-2 p-2">
              <h1 className=" text-normal font-semibold text-xl sm:text-4xl underline underline-offset-4">
                {name}
              </h1>
              <p className="text-black mt-2 text-[0.8rem] sm:text-[1.1rem]/5 font-normal">
                {content}
              </p>
            </div>
          </motion.div>
        )}

        {Skills.map((item) => (
          <motion.div
            key={item.id[0]}
            className={`${toggleClass.default} text-center`}
          >
            <img
              src={item.IMG}
              alt="framer-motion"
              className="w-fit h-[60%] inline-block mt-2"
            />
            {/* Card Content */}
            <p className=" text-white mt-2">{item.name}</p>
            <motion.button
              onClick={() => {
                return (
                  setShowCard(true),
                  setExpandIMG(item.IMG),
                  setContent(item.content),
                  setName(item.name)
                );
              }}
              className="text-white text-xl font-bold border-3 w-[50%] mt-2 inline-block cursor-pointer rounded-lg  hover:bg-linear-to-t from-sky-500 to-indigo-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              Deep Dive
            </motion.button>
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-20"
              animate={{
                opacity: [0, 0.3, 0],
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}

        {showCard && (
          <>
            {/* Background Blur */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                return setShowCard(false);
              }} // Close on click
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
