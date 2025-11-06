import { landing3 } from 'assets';
import React from 'react';

const HomeContent: React.FC = () => {
  return (
    <div
      className="p-10 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${landing3})` }} 
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-xl max-w-2xl mx-auto text-center"> {/* Added a semi-transparent white background for readability */}
        <h1 className="text-5xl font-bold text-gray-900">Welcome to the Home Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is the home page of our application. Here you can find various
          resources and links to navigate through the site. Feel free to explore
          and learn more about what we have to offer!
        </p>
      </div>
    </div>
  );
};

export default HomeContent;