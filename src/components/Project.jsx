import React from "react";
import { motion } from "framer-motion";
import LampSVG from "../assets/img/lamp.svg";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Tomato Detection",
      tech: ["Python", "Tensorflow"],
      image: "tomato-detection.png",
      desc: "A website that detects the ripeness of tomatoes with classifications of ripe tomatoes, semi-ripe tomatoes and unripe tomatoes.",
    },
    {
      id: 2,
      title: "Issue Sedunia",
      tech: ["PHP", "HTML", "CSS", "JS"],
      image: "issue-sedunia.png",
      desc: "A social media website built to solve issues related to programs and other things.",
    },
    {
      id: 3,
      title: "Pet Heaven",
      tech: ["PHP", "HTML", "CSS", "JS"],
      image: "pet-heaven.png",
      desc: "An e-commerce website aimed at selling pets (this is just a side project for fun)",
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
            whileHover={{ opacity: 0.8 }}
            className="bg-white rounded-lg shadow-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <div className="flex items-center mt-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-800 mt-2">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
