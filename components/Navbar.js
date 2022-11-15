import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar({ title, menu, showMenu, setShowMenu }) {
  return (
    <div className="bg-black w-full flex justify-between items-center py-4 px-24">
      <h1 className="text-lg text-white font-medium">{title}</h1>
      {menu && (
        <div
          className="sm:hidden text-md text-white"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      )}
    </div>
  );
}

export default Navbar;
