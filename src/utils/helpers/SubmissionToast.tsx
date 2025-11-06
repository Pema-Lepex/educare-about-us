import React from 'react';

interface SubmissionToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

const SubmissionToast: React.FC<SubmissionToastProps> = ({ type, message, onClose }) => {
  const isSuccess = type === 'success';

  const baseClasses = "fixed top-10 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-2xl z-[1000] max-w-sm w-full transition-opacity duration-300 ease-out";
  const successClasses = "bg-green-100 border border-green-400 text-green-700";
  const errorClasses = "bg-red-100 border border-red-400 text-red-700";

  const icon = isSuccess ? '✅' : '❌';
  const title = isSuccess ? 'Success' : 'Error';

  return (
    <div className={`${baseClasses} ${isSuccess ? successClasses : errorClasses}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 text-xl mr-3">{icon}</div>
        <div className="flex-grow">
          <p className="font-bold">{title}</p>
          <p className="text-sm mt-1">{message}</p>
        </div>
        {!isSuccess && (
          <button 
            onClick={onClose} 
            className={`ml-4 text-lg font-semibold ${isSuccess ? 'text-green-700 hover:text-green-900' : 'text-red-700 hover:text-red-900'}`}
            aria-label="Close"
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default SubmissionToast;