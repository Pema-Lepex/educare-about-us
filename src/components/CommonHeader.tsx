import React from "react";

interface CommonHeaderProps {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ children, className  }) => {
  return (
    <h2
      className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${className}`}
    >{children}
    </h2>
  );
};

export default CommonHeader;
