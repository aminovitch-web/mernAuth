import React from 'react';

export default function Button({ text, onClick, className }) {
  return (
    <button 
      type="submit" 
      onClick={onClick} 
      className={`border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold ${className}`}
    >
      {text}
    </button>
  );
}
