import { GoHomeFill } from "react-icons/go";
import { FaUser, FaUserAstronaut, FaFolder } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import "./Header.css";
import { NavLink } from "react-router-dom";
import MobileStickyNav from "./MobileStickyNav"
const navClass = ({ isActive }) =>
                  `hover:[text-shadow:_0_0_10px_white,_0_0_2px_white] hover:text-white ${
                    isActive
                      ? "[text-shadow:_0_0_10px_white,_0_0_2px_white] text-white"
                      : ""
                  }`
                
export default function Header() {
  return (
    <>
    <MobileStickyNav/>
    <header className="top-0 " >
      <nav className=" bg-[#010101] ">
        <div className="flex justify-evenly items-center w-full pb-3 pt-5 px-2 text-[#f0e7e7]">
          <div
            className="text-4xl w-[62px] h-[50px] bg-white text-center text-black rounded-[100%] ps-[15px] pt-1"
            id="logo"
          >
            <img src="/images/developer.png" alt="Coder image" className="size-[45px] text-amber-50"/>
          </div>
          <div className="hidden md:block md:w-[80%] lg:w-[80%] " id="navItems">
          <ul className="md:flex  md:-space-x-4  ps-8 md:text-sm justify-evenly lg:text-lg ">
            <li className="">
              <NavLink
                to="/"
                className={navClass}
              >
                {({ isActive }) => (
                  <>
                    <GoHomeFill className="inline-block lg:text-3xl md:text-2xl me-1" />
                    <span
                      className={`absolute mt-1 ${
                        isActive ? " border-b-2 border-white" : ""
                      }`}
                    >
                      Home
                    </span>
                  </>
                )}
              </NavLink>
            </li>
            {/* Animate here open and closed folder try to other also */}
            <li className="">
              <NavLink
                to="/projects"
                className={navClass}
              >
                {({ isActive }) => (
                  <>
                    <FaFolder className="inline-block text-2xl me-1" />
                    <span
                      className={`absolute mt-1 ${
                        isActive ? "border-b-2 border-white" : ""
                      }`}
                    >
                      Projects
                    </span>
                  </>
                )}
              </NavLink>
            </li>
            <li className="md:ms-2">
              <NavLink
                to="/skills"
                className={navClass}
              >
                {({ isActive }) => (
                  <>
                    <HiLightBulb className="inline-block md:text-[1.6rem] lg:text-3xl me-1 " />
                    <span
                      className={`absolute mt-1.5 ${
                        isActive ? "border-b-2 border-white" : ""
                      }`}
                    >
                      Skills
                    </span>
                  </>
                )}
              </NavLink>
            </li>
            <li className="md:me-2">
              <NavLink
                to="/about-me"
                className={navClass}
              >
                {({ isActive }) => (
                  <>
                    <FaUser className="inline-block text-2xl me-1" />
                    <span
                      className={`absolute mt-1.5  ${
                        isActive ? "border-b-2 border-white" : ""
                      }`}
                    >
                      About Me
                    </span>
                  </>
                )}
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/beyond-the-code"
                className={navClass}
              >
                {({ isActive }) => (
                  <>
                    <FaUserAstronaut className="inline-block text-2xl me-1" />
                    <span
                      className={`absolute mt-1.5 ${
                        isActive ? "border-b-2 border-white" : ""
                      }`}
                    >
                      Beyond The Code
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </header>
     </>
  );
}
