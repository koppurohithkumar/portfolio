import React from "react";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <div
      id="hero"
      className="py-20 md:py-0 flex flex-col-reverse gap-10 items-center md:w-[900px] md:h-screen md:mx-auto md:grid md:grid-cols-2 md:gap-0 md:items-center"
    >
      <section className="text-center md:text-start">
        <h1 className="text-4xl md:text-5xl font-thin">ROHITH KOPPU</h1>
        <h3 className="mx-auto md:mx-0 my-5 w-fit text-3xl font-normal bg-clip-text bg-gradient-to-r from-rose-300 via-slate-500 to-purple-500 text-transparent">
          Full Stack Developer
        </h3>
        <p className="px-5 md:px-0 mt-3 mb-10 text-sm font-thin">
          I am full stack developer, With 2.5 years of hands-on experience, I
          have honed my skills in front-end technologies like Javascript and
          React ,as well as back-end technologies like Java, Springboot, SQL. My
          goal is to leverage my expertise to create innovative solutions, that
          drive business growth and deliver exceptional user experiences.
        </p>
        <a
          className="my-3 text-xs font-extralight w-fit border border-white p-2 rounded-xl"
          href="#contact"
        >
          Contact Me
        </a>
      </section>
      <section className="flex justify-end">
        <img
          className="w-64 h-64 animate-profile_animation border-2 border-white"
          src={profile}
        />
      </section>
    </div>
  );
}

export default Hero;
