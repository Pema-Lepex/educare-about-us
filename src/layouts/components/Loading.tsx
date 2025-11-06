import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingIndicator: React.FC = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-white bg-opacity-50 z-50">
                <CircularProgress
                    sx={{
                        color: 'var(--kAppColor)',
                        thickness: 6
                    }}
                />
            </div>
        </>
    );
};

export default LoadingIndicator;
