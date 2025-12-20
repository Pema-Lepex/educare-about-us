import { FC } from "react";
import { ButtonProps } from "./ButtonProps";

const LearnMoreButton: FC<ButtonProps> = ({
  children,
  type = "button",
  className = "",
  onClick,
  loading = false,
  loadingText = "Loading...",
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      type={ type ? type: "button"}
      className={`w-auto  mt-4  px-6 sm:px-8 md:px-10   py-4 sm:py-3 md:py-2 text-lg sm:text-base md:text-lg rounded-md  font-semibold  transition  cursor-pointer  hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${className} `}
      disabled={loading}
    >
      {loading ? loadingText : children || "Learn More"}
    </button>
  );
};

export default LearnMoreButton;
