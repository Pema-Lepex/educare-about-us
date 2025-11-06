import { JSX } from "react";

import { ButtonProps } from "./ButtonProps";
import { CircularProgress } from "@mui/material";
export default function CustomButton({
  children,
  type,
  className,
  loading,
  onClick,
  loadingText,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <>
      <button
      {...props}
        onClick={onClick}
        type={type}
        className={`font-semibold px-6 py-3 rounded-lg shadow-sm  hover:shadow-md transition-all duration-300 ease-in-out ${className}`}
      >
        {loading ? (
          <div className="flex items-center space-x-2 justify-center">
            <CircularProgress
              size={20} 
              thickness={5}
              className="text-white"
            />
            <span>{loadingText}</span>
          </div>
        ) : (
          <>{children || "Submit"}</>
        )}
      </button>
    </>
  );
}
