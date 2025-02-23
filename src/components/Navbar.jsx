import React from "react";
import LogoSVG from "../assets/img/logo.svg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faHammer,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <motion.div
      className="fixed w-full bottom-5 lg:bottom-full lg:top-0 z-50 px-2 lg:px-30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
    >
      <nav className="flex justify-center lg:justify-between py-4 items-center bg-[#141414] w-fit lg:w-full lg:bg-transparent mx-auto rounded-full px-5 mt-4">
        {/* Logo */}
        <img src={LogoSVG} alt="" className="w-16 h-16 hidden lg:block" />
        {/* Menu */}
        <ul className="flex gap-x-4">
          <li className="inline-block">
            <a
              href="#home"
              className="bg-white px-4 py-2 rounded-lg text-[#080808] font-semibold hover:opacity-80"
            >
              <FontAwesomeIcon icon={faHouse} />{" "}
              <span className="hidden lg:inline">Home</span>
            </a>
          </li>
          <li className="inline-block">
            <a
              href="#projects"
              className="bg-white px-4 py-2 rounded-lg text-[#080808] font-semibold hover:opacity-80"
            >
              <FontAwesomeIcon icon={faHammer} />{" "}
              <span className="hidden lg:inline">Projects</span>
            </a>
          </li>
          <li className="inline-block">
            <a
              href="#about"
              className="bg-white px-4 py-2 rounded-lg text-[#080808] font-semibold hover:opacity-80"
            >
              <FontAwesomeIcon icon={faCircleQuestion} />{" "}
              <span className="hidden lg:inline">About</span>
            </a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
