import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div className="btn-primary group">
      <span className="h-full bg-black/10 p-4 group-hover:bg-cyan/70">
        <svg
          className="stroke-[#5FB4A2] group-hover:stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 9l8 4 8-4" />
            <path opacity=".5" d="M0 5l8 4 8-4" />
            <path opacity=".25" d="M0 1l8 4 8-4" />
          </g>
        </svg>
      </span>
      <button className="group-hover:bg-cyan">{children}</button>
    </div>
  );
};

export default PrimaryButton;
