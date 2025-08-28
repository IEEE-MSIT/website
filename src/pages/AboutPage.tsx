import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../constants/paths';
import About from './home/components/About';
import Achievements from './home/components/Achievements';
import Team from './home/components/Team';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
  <section className="pt-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <Link
              to={HOME_PATH}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      <About />
      <Achievements />
      <Team />
    </div>
  );
};

export default AboutPage;
