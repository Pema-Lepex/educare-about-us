import React from "react";

interface CommonParagraph1Props {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonParagraph1: React.FC<CommonParagraph1Props> = ({
  children,
  className = "",
}) => {
  return (
    <p
      className={`text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl 6xl:text-6xl ${className}`}
    >
      {children}
    </p>
  );
};

export default CommonParagraph1;
