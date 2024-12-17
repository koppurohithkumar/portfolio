import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      logo: "https://img.icons8.com/?size=100&id=7880&format=png&color=FFFFFF",
      type: "Location",
      data: "Bangalore, India",
    },
    {
      logo: "https://img.icons8.com/?size=100&id=53435&format=png&color=FFFFFF",
      type: "Mail",
      data: "koppurohithkumar37@gmail.com<",
    },
  ];
  return (
    <div
      id="contact"
      className="md:w-[900px] h-screen flex flex-col gap-16 justify-center  mx-auto"
    >
      <h3 className="mx-auto md:mx-0 w-fit text-3xl font-normal bg-clip-text bg-gradient-to-r from-rose-300 via-slate-500 to-purple-500 text-transparent">
        Contact
      </h3>
      <div className="flex flex-col gap-10 md:gap-0 items-center justify-center md:grid md:grid-cols-2 ">
        {contactInfo.map((d) => (
          <div className="w-[80%] md:w-full flex items-center gap-10 text-sm">
            <img className="h-5 w-5" src={d.logo} />
            <div>
              <h4 className="mb-2">{d.type}</h4>
              <h5 className="font-thin hover:underline hover:underline-offset-4">
                {d.data}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
