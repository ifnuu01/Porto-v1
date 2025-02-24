import React from "react";
import MonthSVG from "../assets/img/month.svg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const iconSosmed = [
    {
      id: 1,
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/ifnu-umar-03859930a/",
    },
    {
      id: 2,
      icon: faGithub,
      link: "https://github.com/ifnuu01",
    },
    {
      id: 3,
      icon: faInstagram,
      link: "https://www.instagram.com/ifnu_mr/",
    },
  ];

  return (
    <div
      className='bg-[url("./assets/img/home.svg")] bg-cover h-screen scroll-out'
      id="home"
    >
      {/* Mooon */}
      <motion.img
        src={MonthSVG}
        alt="Month SVG"
        className="w-40 absolute top-20 right-40 spin-slow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <div className="flex flex-col justify-center items-center h-full w-full scroll-out">
        <motion.h3
          className="text-white text-xl lg:text-2xl font-roboto font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ifnu Umar
        </motion.h3>
        {/* Typewriter */}
        <motion.h1
          className="text-white text-2xl lg:text-4xl font-roboto font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Typewriter
            options={{
              strings: ["Junior Web Developer", "Network Engineer"],
              autoStart: true,
              loop: true,
              delay: 80,
            }}
          />
        </motion.h1>
        <motion.div
          className="flex mt-4 gap-x-4 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {/* Icon Sosmed */}
          {iconSosmed.map((icon) => (
            <a
              key={icon.id}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414] px-4 lg:px-10 text-white py-2 rounded-lg cursor-pointer hover:bg-[#1f1f1f] transition duration-30"
            >
              <FontAwesomeIcon icon={icon.icon} size="2x" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
