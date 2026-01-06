import React from "react";

interface CommonHeader2Props {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonHeader3: React.FC<CommonHeader2Props> = ({ children, className  }) => {
  return (
    <h4
      className={`text-xl sm:text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl 5xl:text-6xl  font-extrabold ${className}`}
    >{children}
    </h4>
  );
};

export default CommonHeader3;
