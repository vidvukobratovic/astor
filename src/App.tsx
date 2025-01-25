import React from "react";
import SocialLinks from "./components/SocialLinks";
import { appConfig } from "./config/appConfig";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <img 
        src="astor big.jpg" 
        alt="Logo" 
        // className="w-64 h-64 mb-6"
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
      />
      <h1 className="text-3xl font-spaceMono font-semibold mb-4">
        {appConfig.comingSoonText}
      </h1>
      <SocialLinks />
      <p className="absolute bottom-4 text-gray-600 text-sm">
        {appConfig.contact}
      </p>
    </div>
  );
};

export default App;

