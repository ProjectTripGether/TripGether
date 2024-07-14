import React from "react";

type Props = {};

const Form = (props: Props) => {
  return (
    <div className="flex justify-end mr-[9.5rem]">
      <div className="rounded-md bg-gray-100 bg-opacity-85 max-w-lg min-w-xs w-full h-20">
        <ul className="flex justify-between">
          <li>
            <span>Where to?</span>
          </li>
          <li>
            <span>Travel Type</span>
          </li>
          <li>
            <span>Register</span>
          </li>
          <li>
            <span>Sign In</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Form;
