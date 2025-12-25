import React from "react";

interface CommonHeader2Props {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonHeader3: React.FC<CommonHeader2Props> = ({ children, className  }) => {
  return (
    <h4
      className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${className}`}
    >{children}
    </h4>
  );
};

export default CommonHeader3;
