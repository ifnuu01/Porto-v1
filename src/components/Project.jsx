import React from "react";
import { motion } from "framer-motion";
import LampSVG from "../assets/img/lamp.svg";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      tech: "React",
      image: "path/to/image1.jpg",
      desc: "This is a short description of Project 1.",
    },
    {
      id: 2,
      title: "Project 2",
      tech: "Vue",
      image: "path/to/image2.jpg",
      desc: "This is a short description of Project 2.",
    },
    {
      id: 3,
      title: "Project 3",
      tech: "Angular",
      image: "path/to/image3.jpg",
      desc: "This is a short description of Project 3.",
    },
    {
      id: 4,
      title: "Project 4",
      tech: "Svelte",
      image: "path/to/image4.jpg",
      desc: "This is a short description of Project 4.",
    },
    {
      id: 5,
      title: "Project 5",
      tech: "Next.js",
      image: "path/to/image5.jpg",
      desc: "This is a short description of Project 5.",
    },
    {
      id: 6,
      title: "Project 6",
      tech: "Nuxt.js",
      image: "path/to/image6.jpg",
      desc: "This is a short description of Project 6.",
    },
  ];
  return (
    <div
      className="mt-10 px-2 lg:px-30 flex flex-col justify-center items-center h-full"
      id="projects"
    >
      {/* Animasi Lampu */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
        className="relative text-center"
      >
        <h1 className="text-white text-2xl font-bold font-[Roboto] mt-4 absolute left-0 right-0 bottom-5">
          Projects
        </h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ amount: 0.3 }}
          className="rounded-full w-40 h-40 flex justify-center items-center"
        >
          <img
            src={LampSVG}
            alt="Lamp"
            className="w-40 object-cover rounded-full shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Grid Proyek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full p-4 cursor-pointer">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ amount: 0.3 }}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-gray-600">Built with {project.tech}</p>
              <p className="text-gray-800">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
