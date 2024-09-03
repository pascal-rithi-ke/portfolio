import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ErrorPage() {
  const [counter, setCounter] = React.useState(5);
  const navigate = useNavigate();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate('/portfolio');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl font-semibold text-gray-800 mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-gray-600 mb-6">
          You will be redirected to the home page in {counter} second{counter !== 1 ? 's' : ''}.
        </p>
        <p className="text-gray-600">
          If you are not redirected automatically, <Link to="/portfolio" className="text-blue-500 hover:underline">click here</Link> to go to the home page.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
