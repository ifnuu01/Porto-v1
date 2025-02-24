import React from "react";
import profile from "../assets/img/ifnu.jpg";
import Tools from "./Tools";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="relative px-2 lg:px-30 mt-10 flex flex-col justify-center items-center bg-[url('./assets/img/bg.svg')] bg-cover h-screen"
      id="about"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="z-20 flex flex-col justify-center items-center h-full w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* About */}
        <motion.div
          className="mt-4"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={profile} alt="Profile" className="w-40 h-40 rounded-full" />
        </motion.div>
        <motion.h1
          className="text-white text-2xl font-bold font-[Roboto] mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ifnu Umar
        </motion.h1>
        <motion.p
          className="text-white text-base mt-4 w-80 lg:w-1/2 text-justify font-[Roboto]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          I am an Informatics Engineering student who has an interest in
          networking and web development. Skilled in building web applications
          and managing network systems, always eager to learn and explore new
          technologies.
        </motion.p>
        <Tools />
      </motion.div>
      {/* Earth */}
    </motion.div>
  );
}
