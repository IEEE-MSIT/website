import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../../constants/paths';

const TeamHero = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            to={HOME_PATH}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Meet Our Team
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
            Leadership & Achievements
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals driving innovation and excellence at IEEE MSIT. Our
            dedicated team of leaders and achievers working together to create impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
