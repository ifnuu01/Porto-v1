import React from "react";
import Marquee from "react-fast-marquee";

export default function Tools() {
  const tools = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "JavaScript",
    },
    {
      id: 4,
      name: "PHP",
    },
    {
      id: 5,
      name: "Python",
    },
    {
      id: 6,
      name: "ReactJs",
    },
    {
      id: 7,
      name: "NodeJS",
    },
    {
      id: 8,
      name: "Laravel",
    },
    {
      id: 9,
      name: "Bootstrap",
    },
    {
      id: 10,
      name: "TailwindCSS",
    },
    {
      id: 11,
      name: "MikroTIK",
    },
  ];
  return (
    <div className="mt-4 w-80 lg:w-1/2">
      <h1 className="text-white font-bold text-2xl mt-4 font-[Roboto] text-center">
        ⚒️ Language & Tools ⚒️
      </h1>
      <Marquee
        gradient={false}
        speed={40}
        autoFill
        className="mt-8 lg:max-w-fit"
      >
        {/* Button Tools */}
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="bg-[#141414] text-white font-semibold p-2 rounded-lg cursor-pointer hover:bg-[#1f1f1f] transition duration-30 mr-2"
          >
            {tool.name}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
