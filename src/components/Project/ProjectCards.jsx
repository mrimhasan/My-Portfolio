import React from "react";
import { motion } from "motion/react";

const anchor_class =
  "h-full w-fit text-white text-center font-light cursor-pointer hover:decoration-2 hover:decoration-white hover:underline hover:underline-offset-5 mx-auto max-[400px]:text-xs";

const cardsInfo = [
  {
    relativeUrl: "/images/project-images/disney.png",
    absoluteUrl: "https://disney-clone-im.vercel.app/",
    githubUrl:"https://github.com/mrimhasan/Disney-Clone",
    name: "Disney+ Clone",
  },
  {
    relativeUrl: "/images/project-images/landingpage.png",
    absoluteUrl:"https://real-estate-pmp0mgn05-imran-hasans-projects-1771f17a.vercel.app",
    githubUrl:"https://github.com/mrimhasan/Real-Estate",
    name: "Estate Landing Page",
  },
  {
    relativeUrl: "/images/project-images/todo.png",
    absoluteUrl: "https://mrimhasan.github.io/Todo-App/",
    githubUrl:"https://github.com/mrimhasan/Todo-App",
    name: "Todo App",
  },
  {
    relativeUrl: "/images/project-images/currency.png",
    absoluteUrl: "https://mrimhasan.github.io/Currency-converter/",
    githubUrl:"https://github.com/mrimhasan/Currency-converter",
    name: "Currency Converter",
  },
  {
    relativeUrl: "/images/project-images/Speech.png",
    absoluteUrl: "https://mrimhasan.github.io/Text-to-Speech-converter/",
    githubUrl:"https://github.com/mrimhasan/Text-to-Speech-converter",
    name: "Text-to-Speech-Converter",
  },
  {
    relativeUrl: "/images/project-images/broom.png",
    absoluteUrl: "https://mrimhasan.github.io/Broom-Web/",
    githubUrl:"https://github.com/mrimhasan/Broom-Web",
    name: "Broom Web",
  },
  {
    relativeUrl: "/images/project-images/notes.png",
    absoluteUrl: "https://mrimhasan.github.io/NoteMakingWebApp/",
    githubUrl:"https://github.com/mrimhasan/NoteMakingWebApp",
    name: "Note Taker",
  },
  {
    relativeUrl: "/images/project-images/game.png",
    absoluteUrl: "https://mrimhasan.github.io/Number-Guessing-Game/",
    githubUrl:"https://github.com/mrimhasan/Number-Guessing-Game",
    name: "Number-Guessing-Game",
  },
];

function ProjectCards() {
  const cards = cardsInfo.map((items, indX) => (
    <motion.div
      key={indX}
      whileHover={{ scale: 1.1 }}
      className="text-white w-[80%] sm:w-[95%] md:w-[85%] max-[400px]:h-60  h-80 border-white border-2 rounded-2xl overflow-hidden mx-auto my-5"
    >
      {/* Card Content */}
      <img
        src={items.relativeUrl}
        alt={items.name}
        className="w-full h-[80%]"
      />
      <h4 className="text-white text-center mt-1 text-lg max-[400px]:text-sm">
        {items.name}
      </h4>
      <div className="flex justify-around items-center">
        <a
          className={`${anchor_class}`}
          target="_blank"
          rel="noopener noreferrer"
          href={items.absoluteUrl}
        >
          Live
        </a>
        <a
          className={`${anchor_class}`}
          target="_blank"
          rel="noopener noreferrer"
          href={items.githubUrl}
        >
          Github
        </a>
      </div>
    </motion.div>
  ));
  return (
    <div className="grid grid-rows-auto grid-cols-1 sm:grid-cols-2 sm:max-w-4xl mx-auto">
      {cards}
    </div>
  );
}

export default ProjectCards;
//(reorder animation)
