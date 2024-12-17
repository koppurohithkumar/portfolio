import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    { id: "#hero", title: "Home" },
    { id: "#about", title: "About" },
    { id: "#experience", title: "Experience" },
    { id: "#projects", title: "Projects" },
    { id: "#contact", title: "Contact" },
  ];
  return (
    <div className="w-full p-5 fixed text-white bg-black/30 text-xs font-light flex justify-between items-center">
      <h3>Rohith.dev</h3>
      <div className="flex items-center mx-7 md:hidden">
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={
            !isOpen
              ? "https://img.icons8.com/?size=100&id=aoYTy8DccxdA&format=png&color=FFFFFF"
              : "https://img.icons8.com/?size=100&id=EAp977NUPkpE&format=png&color=FFFFFF"
          }
          className="w-7 h-7 absolute"
        />
        {isOpen && (
          <ul className=" absolute w-44 p-2 right-0 top-14 flex flex-col gap-5 items-center bg-black/30">
            {menu.map((item) => (
              <li>
                <a className="" href={item.id}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className="hidden md:flex md:justify-end md:gap-5">
        {menu.map((item) => (
          <li>
            <a className="" href={item.id}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
