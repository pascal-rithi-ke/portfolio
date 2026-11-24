import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound404 = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 1) {
          navigate('/');
          return prevCount;
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold mb-4">404 · Page not found</h1>
        <p className="text-lg mb-4">The page you are looking for does not exist.</p>
        <p className="text-lg mb-4 text-gray-600">Redirecting to home in {count}s…</p>
        <button 
          onClick={handleRedirect} 
          className="mt-4 px-6 py-3 rounded-lg border border-black bg-black text-white font-semibold hover:bg-gray-500 hover:border-gray-500 transition-colors duration-300"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

export default NotFound404;
