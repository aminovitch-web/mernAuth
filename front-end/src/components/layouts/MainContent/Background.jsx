import React from 'react';

export default function Background({ children }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      {children}
    </div>
  );
}
