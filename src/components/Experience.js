import React from "react";

function Experience() {
  const experience = [
    {
      year: "JAN/2022 - MAY/2022",
      heading: "Trainee - capgemini",
      project: "Hotel Management System",
      description:
        "A Hotel Management System built with Java Full Stack and React is a comprehensive web application designed to streamline hotel operations and enhance user experience. The backend, powered by Java and frameworks like Spring Boot, handles business logic such as room and booking management, user authentication, and payment processing, while connecting to a relational database for data storage. The frontend, built using React, offers a dynamic and responsive interface for both customers and hotel staff, enabling easy room booking, profile management, and administrative tasks like managing room availability and generating reports. With secure login, role-based access control, and seamless integration between frontend and backend, this system improves hotel operations, making it more efficient for both users and administrators.",
      skills: [
        "Java",
        "Springboot",
        "MicroServices",
        "Javascript",
        "React",
        "HTML",
        "CSS",
      ],
    },
    {
      year: "JUNE/2022 - MAY/2024",
      heading: "Analyst - capgemini",
      project: "MAATR",
      description:
        "As a React Frontend Developer on the project, I was responsible for designing and implementing responsive, user-friendly interfaces that aligned with project requirements and client expectations. My role involved collaborating closely with UX/UI designers to create seamless, intuitive experiences, while ensuring the frontend was optimized for performance and scalability. I utilized React and related technologies such as Redux and React Router to manage application state and facilitate smooth navigation. Additionally, I integrated APIs, wrote clean, reusable code, and conducted thorough testing to ensure functionality across different browsers and devices. My work contributed to the successful delivery of a high-quality, interactive web application.",
      skills: ["HTML", "CSS", "Javascript", "React", "Tailwind CSS", "Redux"],
    },
    {
      year: "JUNE/2024 - PRESENT",
      heading: "Sr Analyst - capgemini",
      project: "MAATR",
      description:
        "I was responsible for leading the development of user interfaces that deliver a seamless and intuitive experience. My role involved collaborating closely with cross-functional teams, including UX/UI designers and backend developers, to translate business requirements into responsive and dynamic web applications. I utilized React and other modern frontend technologies to design and implement scalable components, ensuring optimal performance and a high-quality user experience.",
      skills: ["HTML", "CSS", "Javascript", "React", "Tailwind CSS", "Redux"],
    },
  ];
  return (
    <div
      id="experience"
      className="md:w-[900px] md:mx-auto md:flex md:flex-col md:justify-center"
    >
      <h3 className="mx-auto md:mx-0 w-fit mb-5 text-3xl font-normal bg-clip-text bg-gradient-to-r from-rose-300 via-slate-500 to-purple-500 text-transparent">
        Experience
      </h3>
      {experience.map((e) => (
        <section className=" my-16 md:my-7 flex flex-col gap-5 md:gap-36 md:flex-row items-center md:items-start text-center md:text-start text-sm">
          <div className="w-56 flex flex-col items-center gap-5">
            <p className="text-neutral-400">{e.year}</p>
            <h5 className="text-xs">{e.heading}</h5>
          </div>
          <div className="px-5 md:px-0 md:w-[60%]">
            <div className="flex flex-col gap-5">
              {e.project && <h6>{e.project}</h6>}
              <p className="font-thin text-xs">{e.description}</p>
              <div className="flex justify-center md:justify-start flex-wrap gap-2">
                {e.skills.map((s) => (
                  <p className="px-2 py-1 text-xs font-medium text-purple-800 bg-neutral-900 rounded-lg">
                    {s}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Experience;
