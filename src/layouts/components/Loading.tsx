import React from 'react';

const LoadingIndicator: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-white bg-opacity-50 z-50">
            <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
        </div>
    );
};

export default LoadingIndicator;
