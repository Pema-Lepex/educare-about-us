import React from "react";

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className || ""}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M0 0h24v24H0z" />{" "}
      <circle cx="12" cy="12" r="1" /> <circle cx="12" cy="19" r="1" />{" "}
      <circle cx="12" cy="5" r="1" />
    </svg>
  );
};

export default MenuIcon;
