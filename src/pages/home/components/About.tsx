import { Award, Trophy, Camera } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          What We Are
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight">
          A Community of <span className="text-primary">Change-Makers</span>: <span className="text-secondary">Engineers</span>, Designers, and <span className="text-tertiary">Leaders</span>
        </h2>
        
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
          Connecting ambitious minds through workshops, competitions, and research. We celebrate achievements, foster teamwork, and help students prepare for global impact.
        </p>

        {/* Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-serif text-black mb-12">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Region 10 Award */}
            <div className="transform rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-black">Region 10 Award</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Recognized for outstanding contribution to IEEE activities and student engagement in the Asia-Pacific region.
                </p>
              </div>
            </div>

            {/* Darrel Chong Gold */}
            <div className="transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-black">Darrel Chong Gold</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Achieved gold recognition for exceptional leadership and innovation in student branch activities.
                </p>
              </div>
            </div>

            {/* IEEE Day STEM Photo Contest */}
            <div className="transform rotate-2 hover:rotate-0 transition-transform">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-black">IEEE Day STEM Photo Contest</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Winner of the global IEEE Day STEM photography competition showcasing innovation in action.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
