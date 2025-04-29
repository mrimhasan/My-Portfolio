import React from "react";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import Marquee from "./Marquee";

function Footer() {
  const toolTip = [
    {
      id: "github-tooltip",
      content: "GitHub Profile",
    },
    {
      id: "linkedin-tooltip",
      content: "LinkedIn Profile",
    },
    {
      id: "gmail-tooltip",
      content: "Gmail",
    },
    {
      id: "insta-tooltip",
      content: "Instagram Profile",
    },
  ];
  const URLs_and_icons = [
    {
      url: "https://github.com/mrimhasan",
      icon: <ImGithub data-tooltip-id="github-tooltip" />,
    },
    {
      url: "https://www.linkedin.com/in/imran-hasan-5a239b222/",
      icon: (
        <FaLinkedin
          className="hover:text-[#0077B5] hover:bg-white rounded-[2px]"
          data-tooltip-id="linkedin-tooltip"
        />
      ),
    },
    {
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=imran8.hasan@gmail.com&su=Hello&body=I want to contact you.",
      icon: (
        <SiGmail
          className="hover:text-red-800 hover:bg-amber-50 rounded-[2px]"
          data-tooltip-id="gmail-tooltip"
        />
      ),
    },
    {
      url: "https://www.instagram.com/mr._laraib/",
      icon: (
        <FaSquareInstagram
          className="hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-[2px]"
          data-tooltip-id="insta-tooltip"
        />
      ),
    },
  ];

  return (
    <>
      <div className=" text-[10px] sm:text-[15px] md:text-2xl bg-[#010101] text-[#fff] w-[100%] overflow-hidden relative ">
        <Marquee />
      </div>
      <footer className="bg-[rgb(0,0,0)] text-white text-center py-6 m-0">
        <p>Connect with me:</p>
        <div className="flex justify-center gap-6 mt-3 text-3xl">
          {URLs_and_icons.map((items, indx) => (
            <a
              key={indx}
              href={items.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {items.icon}
            </a>
          ))}
        </div>
        <p className="mt-4 px-1">
          © 2025 Imran Hasan. Built with ❤️ using React & TailwindCSS.
        </p>
        {/* Tool tips */}
        {toolTip.map((items, indx) => (
          <Tooltip
            key={indx}
            id={items.id}
            place="top"
            content={items.content}
            style={{ backgroundColor: "#fff", color: "#010101" }}
          />
        ))}
      </footer>
    </>
  );
}

export default Footer;
