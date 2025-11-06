
import React from "react";
import { useNavigate } from "react-router";
import { SubmitButton } from "./button";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F2F5F6] text-center px-6">
      <h1 className="text-9xl font-extrabold text-[#013954] drop-shadow-lg">
        404
      </h1>
      <p className="text-lg text-[#4D7487] mt-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <p className="text-sm text-[#99B0BB] max-w-md mt-2">
        It might have been moved or deleted. Check the URL or go back to the homepage.
      </p>
      <SubmitButton className="my-3" onClick={() => navigate("/")}>Go Home</SubmitButton>
    </div>
  );
};

export default PageNotFound;
