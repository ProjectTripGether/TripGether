import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex">
        <h1 className="font-bold text-4xl items-center pl-36">Tripgather</h1>
      </div>
      <ul className="flex space-x-7 mr-32">
        <li className="border-b-2">Home</li>
        <li className="border-b-2">Blog</li>
        <li className="border-b-2">Chat</li>
        <li className="border-b-2">Create-Trip-Plan</li>
      </ul>
      <ul className="flex space-x-4 items-center mr-5">
        <li>
          <CiSearch size={35} />
        </li>
        <li>
          <GoBell size={35} />
        </li>
        <li>
          <div className="flex items-center">
            <CgProfile size={50} />
            <IoMdArrowDropdown size={30} />
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
