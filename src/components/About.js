import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="py-10 md:py-0 md:w-[900px] md:h-screen md:mx-auto md:grid md:grid-cols-2 md:gap-20 md:items-center"
    >
      <img className="rounded-2xl" src={about}></img>
      <section className="text-center md:text-start">
        <h3 className="mt-5 md:mt-0 mx-auto md:mx-0 w-fit mb-5 text-3xl font-normal bg-clip-text bg-gradient-to-r from-rose-300 via-slate-500 to-purple-500 text-transparent">
          About Me
        </h3>
        <p className="px-5 md:px-0 text-sm font-thin">
          I am a Java Full Stack Developer with 2.6 years of experience,
          specializing in building robust, scalable web applications. My
          expertise spans both front-end and back-end development, with strong
          proficiency in Java, React, and related technologies. I hold a degree
          in Mechatronics from Lovely Professional University, which has
          provided me with a solid foundation in both engineering principles and
          software development. Throughout my career, I have worked on diverse
          projects, utilizing frameworks like Spring Boot for backend
          development and React for creating dynamic, user-friendly interfaces.
          I am passionate about problem-solving and continuously strive to
          enhance my skills.
        </p>
      </section>
    </div>
  );
};

export default About;
