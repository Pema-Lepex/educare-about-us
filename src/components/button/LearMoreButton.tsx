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
      type={type}
      className={`
        w-full sm:w-auto       
        mt-4 
        px-6 sm:px-8 md:px-10  
        py-4 sm:py-3 md:py-4
        text-lg sm:text-base md:text-lg  
        border-2 rounded-md 
        font-semibold 
        transition 
        ${className}
      `}
      disabled={loading}
    >
      {loading ? loadingText : children || "Learn More"}
    </button>
  );
};

export default LearnMoreButton;
