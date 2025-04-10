import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const url = "https://img.freepik.com/free-photo/full-shot-ninja-wearing-equipment_23-2150960932.jpg?t=st=1743015566~exp=1743019166~hmac=2935f789b1b56da64cb30c3054f3462af57c30f57e3eb37faf63a3db6e4c1557&w=996"

const imgs = [
  "/images/beyound/zenitsu.mp4",
  url,
  url,
  url,
  url,
  url,
  url
];
const videos = [
  "/images/beyound/zenitsu.mp4",
  "/images/beyound/zenitsu.mp4",
  "/images/beyound/zenitsu.mp4",
  "/images/beyound/zenitsu.mp4"
]
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export default function BeyondTheCode(){
  const [imgIndex, setImgIndex] = useState(0);
  const [vdoIndex, setIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <>
    <div className="relative overflow-hidden bg-neutral-950 py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
    
    {/* vdo div */}
    <motion.div
    animate={{
      translateX: `-${vdoIndex * 100}%`,
    }}
    transition={SPRING_OPTIONS}
     className="relative h-screen w-full overflow-hidden">
       <Video setVdoIndex={setVdoIndex}/>
       <div className="relative z-10 text-white p-10">
         <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
       </div>
     </motion.div>
     </>
  );
};

const Video = ({vdoInex}) => {
  return(
    <>
    {videos.map((item, indx)=>{
      console.log("vdo")
      return(
        <video
        key={indx}
         autoPlay
         loop
         muted
         playsInline
         className="absolute top-0 left-0 w-full h-full object-cover z-0"
       >
         <source src={item} type="video/mp4" />
         Your browser does not support the video tag.
       </video>
      )
    })
    }
    </>
  )
}

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
//export default BeyondTheCode
