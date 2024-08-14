import React from "react";
import Dropdown from "./Dropdown";

type Props = {};

const Form = (props: Props) => {
  return (
    <ul className="flex items-center justify-around px-0 rounded-md bg-gray-100 bg-opacity-85 max-w-2xl w-full h-20">
      <li className="flex items-center justify-center relative px-8">
        <span>Where to?</span>
        <span className="absolute -right-4 h-12 border-r-2 border-white"></span>
      </li>
      <li className="flex items-center justify-center relative">
        <Dropdown />
        <span className="absolute -right-4 h-12 border-r-2 border-white"></span>
      </li>
      <li>
        <button className="bg-blue-400 text-white px-6 py-2 rounded-md">
          Register
        </button>
      </li>
      <li>
        <button className="bg-red-400 text-white px-6 py-2 rounded-md">
          Sign In
        </button>
      </li>
    </ul>
  );
};

export default Form;
