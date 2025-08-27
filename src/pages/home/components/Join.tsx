import { ArrowRight } from 'lucide-react';

const Join = () => {
  return (
    <section id="join" className="py-20 px-6 bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
          Join the <span className="text-[#C84C31]">Future</span> of Technology
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
          Become a part of our vibrant community and get access to exclusive workshops, events, and networking opportunities that will shape your career.
        </p>
        <a 
          href="https://www.ieee.org/membership/join/index.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium shadow-lg hover:shadow-xl"
        >
          Become an IEEE Member
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Join;
