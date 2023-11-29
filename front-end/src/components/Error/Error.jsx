import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigate]); 

  return (
    <div class="flex justify-center items-center h-screen bg-gray-300">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1>Page not Found</h1>
            <hr/>
            <h3>You will be redirected in home page in 3 secondes ..</h3>
        </div>
    </div>
  );
}
