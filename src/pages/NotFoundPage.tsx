import { Link } from 'react-router-dom';
import { HOME_PATH } from '../constants/paths';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-6">
      <h1 className="text-6xl md:text-9xl font-serif text-primary font-bold">404</h1>
      <h2 className="text-2xl md:text-4xl font-serif text-black mt-4 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto mb-8">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        to={HOME_PATH}
        className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium shadow-lg hover:shadow-xl"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
