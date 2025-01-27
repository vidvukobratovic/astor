import React from "react";
import SocialLinks from "./components/SocialLinks";
import { appConfig } from "./config/appConfig";

const App: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <img
        src="/astor logo mini.png"
        alt="Logo"
        className="w-2/3 max-w-lg h-auto mb-10" 
      />
      <h1 className="text-3xl font-spaceMono font-semibold mb-4 -mt-4">
        {appConfig.comingSoonText}
      </h1>
      <div className="mb-6">
        <SocialLinks />
      </div>
      <p className="absolute bottom-8 text-gray-600 text-sm">
        {appConfig.contact}
      </p>
    </div>
  );
};

export default App;
