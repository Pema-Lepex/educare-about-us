"use client";
import { FC } from "react";
import { ButtonProps } from "./ButtonProps";
import { CircularProgress } from "@mui/material";

const SubmitButton: FC<ButtonProps> = ({
  children,
  type,
  className,
  onClick,
  loading,
  loadingText,
  ...props
}) => {
  return (
    <button
    {...props}
      onClick={onClick}
      type={type}
      disabled={loading}
      className={`bg-primary-500 text-white font-semibold px-9 py-3 rounded-lg shadow-md hover:bg-primary-900 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform ${className}`}
    >
      <span className="flex items-center space-x-2 justify-center">
        {loading ? (
          <>
            <CircularProgress size={20} thickness={5} className="text-white mr-2" />
            {loadingText ? loadingText : " Submitting..."}
          </>
        ) : (
          <>{children || "Submit"}</>
        )}
      </span>
    </button>
  );
};

export default SubmitButton;
