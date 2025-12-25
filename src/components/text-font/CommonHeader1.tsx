import React from "react";

interface CommonHeader2Props {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonHeader1: React.FC<CommonHeader2Props> = ({ children, className  }) => {
  return (
    <h1
      className={`text-2xl sm:text-4xl md:text-5xl font-extrabold ${className}`}
    >{children}
    </h1>
  );
};

export default CommonHeader1;
