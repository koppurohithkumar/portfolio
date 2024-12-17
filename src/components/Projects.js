import React from "react";
import velocity from "../assets/velocity.png";
import shopping from "../assets/shopping.png";

export const Projects = () => {
  const projectsData = [
    {
      id: 1,
      image: velocity,
      name: "VELOCITY",
      description:
        "Explore a wide range of vehicles and drive in comfort with our flexible and affordable car rental options. Whether you're planning a short trip, a business journey, or a family vacation, we have the perfect car for every need.",
      techStack: ["React", "Tailwind"],
      git: "https://github.com/koppurohithkumar/velocity",
      live: "https://koppurohithkumar.github.io/velocity/",
    },
    {
      id: 2,
      image: shopping,
      name: "SHOPPING",
      description:
        "Welcome to Shopping.com, the ultimate online shopping destination where convenience meets variety. From stylish clothing , we offer a vast selection of high-quality products to suit every taste and budget. Our user-friendly website makes it easy to browse, discover new arrivals, and shop your favorites, reliable shipping.",
      techStack: ["React", "Tailwind"],
      git: "https://github.com/koppurohithkumar/shopping",
      live: "https://koppurohithkumar.github.io/shopping/",
    },
  ];
  return (
    <div id="projects" className="mx-5 md:w-[900px] md:mx-auto">
      <h3 className="mx-auto md:mx-0 w-fit my-10 text-3xl font-normal bg-clip-text bg-gradient-to-r from-rose-300 via-slate-500 to-purple-500 text-transparent">
        Projects
      </h3>
      <div className="flex flex-col gap-10">
        {projectsData.map((project) => {
          return (
            <div
              className={`px-5 py-2 flex flex-col ${
                project.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 items-center bg-neutral-900 rounded-3xl`}
            >
              <img className="md:w-[50%] rounded-lg" src={project.image} />
              <div className="text-center flex flex-col gap-3 p-2">
                <h5>{project.name}</h5>
                <p className="font-thin text-xs">{project.description}</p>
                <section className="flex justify-center items-center gap-7">
                  {project.techStack.map((ts) => (
                    <p className="px-2 py-1 text-xs font-medium text-purple-800 bg-neutral-900 rounded-lg">
                      {ts}
                    </p>
                  ))}
                </section>
                <section className="flex justify-center items-center gap-10">
                  <a
                    className="px-2 py-1 text-xs border rounded-lg"
                    href={project.git}
                  >
                    Code
                    <img
                      className="w-5 h-5 ml-2 inline"
                      src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF"
                    />
                  </a>
                  <a
                    className="px-2 py-1 text-xs border rounded-lg"
                    href={project.live}
                  >
                    Live Demo
                    <img
                      className="w-5 h-5 ml-2 inline"
                      src="https://img.icons8.com/?size=100&id=58563&format=png&color=FFFFFF"
                    />
                  </a>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
