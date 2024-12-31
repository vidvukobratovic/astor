import React from "react";
import SocialLinks from "./components/SocialLinks";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <img src="astor big.jpg" alt="Logo" className="w-64 h-64 mb-6" />
      <h1 className="text-2xl font-semibold mb-4">Site Coming Soon</h1>
      <SocialLinks />
    </div>
  );
};

export default App;
