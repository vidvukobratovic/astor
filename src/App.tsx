import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <img src="/logo.png" alt="Logo" className="w-32 h-32 mb-6" />
      <h1 className="text-2xl font-semibold mb-4">Site Coming Soon</h1>
      <div className="flex space-x-4">
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default App;
