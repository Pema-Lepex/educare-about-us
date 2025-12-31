import React from "react";

interface CommonHeader2Props {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonHeader1: React.FC<CommonHeader2Props> = ({ children, className  }) => {
  return (
    <h1
      className={`text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-[9.75rem] 6xl:text-[11rem] font-extrabold ${className}`}
    >{children}
    </h1>
  );
};

export default CommonHeader1;
