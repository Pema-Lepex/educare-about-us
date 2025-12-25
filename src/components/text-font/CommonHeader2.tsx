import React from "react";

interface CommonHeader2Props {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonHeader2: React.FC<CommonHeader2Props> = ({ children, className  }) => {
  return (
    <h2
      className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${className}`}
    >{children}
    </h2>
  );
};

export default CommonHeader2;
