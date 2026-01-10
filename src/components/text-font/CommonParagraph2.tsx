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
      className={`text-xs sm:text-base md:text-lg lg:text-[1.1rem] xl:text-[1.15rem] 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl ${className}`}
    >
      {children}
    </p>
  );
};

export default CommonParagraph2;
