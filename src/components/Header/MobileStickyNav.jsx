import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoHomeFill } from "react-icons/go";
import { FaUser, FaUserAstronaut, FaFolder } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const navClass = ({ isActive }) =>
  `flex flex-col items-center justify-center text-xs text-white hover:[text-shadow:_0_0_10px_white,_0_0_2px_white] hover:text-white ${
    isActive
      ? "[text-shadow:_0_0_10px_white,_0_0_2px_white] text-white"
      : ""
  }`;

export default function MobileStickyNav() {
  const [showNav, setShowNav] = useState(false);

  const navItems = [
    { to: "/", icon: <GoHomeFill className="text-xl" />, label: "Home" },
    { to: "/projects", icon: <FaFolder className="text-xl" />, label: "Projects" },
    { to: "/skills", icon: <HiLightBulb className="text-xl" />, label: "Skills" },
    { to: "/about-me", icon: <FaUser className="text-xl" />, label: "About" },
    { to: "/beyond-the-code", icon: <FaUserAstronaut className="text-xl" />, label: "Beyond" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const bottomReached =
        window.innerHeight + scrollPos >= document.documentElement.scrollHeight - 50;

      if (scrollPos > 100 && !bottomReached) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          key="mobile-nav"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[85%] md:hidden z-50"
        >
          {/* Inner container */}
          <div className="relative bg-neutral-950 rounded-lg border border-white flex justify-around py-2">
            {navItems.map(({ to, icon, label }) => (
              <NavLink key={to} to={to} className={navClass}>
                {({ isActive }) => (
                  <div className="flex flex-col items-center">
                    {icon}
                    <span
                      className={`mt-[2px] ${
                        isActive ? "border-b-2 border-white" : ""
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
