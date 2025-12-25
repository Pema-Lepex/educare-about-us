import React from "react";

interface CommonHeader2Props {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonHeader4: React.FC<CommonHeader2Props> = ({ children, className  }) => {
  return (
    <h4
      className={`text-sm sm:text-lg md:text-2xl font-extrabold ${className}`}
    >{children}
    </h4>
  );
};

export default CommonHeader4;
