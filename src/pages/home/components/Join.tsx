import { ArrowRight } from 'lucide-react';

const Join = () => {
  return (
    <section id="join" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
          Join the <span className="text-primary">Future</span> of Technology
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
          Become a part of our vibrant community and get access to exclusive workshops, events, and
          networking opportunities that will shape your career.
        </p>
        <a
          href="https://www.ieee.org/membership/join/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2 w-fit mx-auto"
        >
          <ArrowRight className="w-4 h-4" /> Become an IEEE Member
        </a>
      </div>
    </section>
  );
};

export default Join;
