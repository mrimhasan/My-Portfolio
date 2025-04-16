import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
function MyInfo() {
      const ref = useRef();
      const isInView = useInView(ref, { once: false });
  return (
    <div className=" mx-10 mt-12 grid grid-rows-auto grid-cols-1 min-[700px]:grid-cols-2 text-[#dad3d3] pb-12">
      <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-[700px]:col-span-2">
        <p className=" text-[3em]/10 font-serif">Hello everyone,</p>
        <p className="text-sm/5 mt-3 font-normal text-justify">
          My name is Imran Hasan 24 years old, and I come from the beautiful
          city of Agra—proudly known as the City of Love and the home of the
          majestic Taj Mahal. I’ve completed my Bachelor of Technology
          in Computer Science in 2023, and while I may humbly consider myself an
          "average student" in terms of academic scores, I believe college life
          is about much more than marks—it's about experiences, memories, and
          growth. My college journey was filled with friendship, support, and
          laughter, thanks to my wonderful and encouraging peers. We shared
          countless moments—from late-night coding sessions and challenging
          assignments to chai breaks and college fests. Though grades might
          define part of our academic journey, what truly shaped me were the
          people I met, the skills I gained, and the mindset I developed. I've
          learned that consistency, curiosity, and kindness go a long way.
          Today, I stand here with gratitude and confidence, ready to take the
          next step in my career, eager to learn more, build more, and give back
          even more. Thank you all for being a part of my journey. I'm excited
          for what lies ahead.
        </p>
      </motion.div>
      <div className="place-content-center max-[700px]:order-2">
        <p className="text-sm/5 mt-3 font-extralight">
        I completed my graduation with a <strong>Bachelor of Technology in Computer Science and Engineering</strong> from Dr. Ambedkar Institute of Technology for Handicapped which is affiliated from Dr. APJ Abdul Kalam Technical University. It's sounds like I am with disabilities, <strong>I do not have any disabilities.</strong> The institute allocates 40% of its seats to candidates without disabilities, and I was among them. <strong>I achieved a CGPA of 7.56</strong> in my academics. 
        </p>
      </div>
      <div className="place-items-center place-content-center  max-[700px]:order-1">
        <img 
        src="/images/about-images/aith.png" alt="collegeIMG" 
        className="w-[50%] h-[90%]"
        />
      </div>
      <div className="place-items-center  max-[700px]:order-3">
         <img 
        src="/images/about-images/mdjain.jpg" alt="collegeIMG" 
        className="max-[700px]:mt-5"
        />
      </div>
      <div className="place-content-center  max-[700px]:order-4">
        <p className="text-sm/5 mt-3 font-extralight">
          I completed my intermediate from Mahaveer Digambar Jain Inter College located at hariparwat, Agra.
          Which is a state board government college <strong>I achieved a CGPA of 7.5</strong> in my intermediate.
        </p>
      </div>
    </div>
  );
}

export default MyInfo;
