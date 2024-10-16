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
    <div className="flex items-center justify-center h-screen">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-4">The page you are looking for does not exist.</p>
        <p className="text-lg mb-4">Redirecting to home in {count} seconds...</p>
        <button 
          onClick={handleRedirect} 
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Go to Home Now
        </button>
      </div>
    </div>
  );
}

export default NotFound404;
