import React from "react";

export const Footer = () => {
  const lightSocialLinks = [
    {
      img: "https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF",
      url: "https://www.linkedin.com/in/koppurohithkumar/",
    },
    {
      img: "https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF",
      url: "https://github.com/koppurohithkumar?tab=repositories",
    },
  ];
  const ImageRenderer = (links, w, h, gap) => {
    return (
      <div className="h-fit flex" style={{ gap: gap }}>
        {links?.map((link) => {
          return (
            <a href={link.url}>
              <img
                className="hover:scale-125 duration-1000"
                style={{ width: w, height: h }}
                src={link.img}
              />
            </a>
          );
        })}
      </div>
    );
  };
  return (
    <div className="bg-neutral-800 py-3 px-5 md:px-36 flex justify-between items-center ">
      <p className="text-[9px] font-extralight">@koppurohithkumar</p>
      {ImageRenderer(lightSocialLinks, 20, 20, 20)}
    </div>
  );
};
