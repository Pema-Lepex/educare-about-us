import React from "react";

interface CommonParagraph1Props {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonParagraph3: React.FC<CommonParagraph1Props> = ({
  children,
  className = "",
}) => {
  return (
    <p
      className={`text-xs sm:text-sm md:text-base 2xl:text-lg ${className}`}
    >
      {children}
    </p>
  );
};

export default CommonParagraph3;
