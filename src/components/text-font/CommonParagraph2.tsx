import React from "react";

interface CommonParagraph1Props {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonParagraph2: React.FC<CommonParagraph1Props> = ({
  children,
  className = "",
}) => {
  return (
    <p
      className={`text-xs sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl ${className}`}
    >
      {children}
    </p>
  );
};

export default CommonParagraph2;
