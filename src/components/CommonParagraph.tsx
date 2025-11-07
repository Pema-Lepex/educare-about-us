import React from "react";

interface CommonParagraphProps {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const CommonParagraph: React.FC<CommonParagraphProps> = ({
  children,
  className = "",
}) => {
  return (
    <p
      className={`text-base sm:text-lg md:text-xl ${className}`}
    >
      {children}
    </p>
  );
};

export default CommonParagraph;
