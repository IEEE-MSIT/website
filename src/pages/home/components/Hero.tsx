import { ArrowRight, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-background overflow-hidden pt-20">
      <div
        className="w-full max-w-6xl mx-auto px-6 py-8 h-full flex flex-col justify-center"
        style={{
          backgroundImage: `url('/BackgroundLines.37b66c2a.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center my-12">
          <div className="flex items-center justify-center mb-6 gap-4">
            <img
              src="/IEEEWhiteLogowithTransparentBG.png"
              alt="IEEE Logo"
              className=" h-12 md:h-16 bg-black hidden sm:block"
            />
            <h1 className="text-6xl md:text-8xl font-serif text-black mr-4">IEEE MSIT</h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1 text-left">
            <p className="text-lg md:text-xl text-black mb-4 leading-relaxed">
              <strong>IEEE MSIT</strong> is the student branch of the world's largest technology organization, 
              <em className="border-b-2 border-dashed border-ieee-blue"> IEEE</em>, at Maharaja Surajmal Institute of Technology.
            </p>
            
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              We're a community of <strong>engineering students</strong> who organize 
              <em className="border-b-2 border-dashed border-primary"> workshops, hackathons, and tech events</em> to 
              help you learn cutting-edge technology, build amazing projects, and connect with like-minded innovators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#events"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm flex items-center gap-2 w-fit"
              >
                <ArrowRight className="w-4 h-4" /> EXPLORE EVENTS
              </a>
              <a
                href="#join"
                className="border border-gray-400 text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium text-sm flex items-center gap-2 w-fit"
              >
                <Users className="w-4 h-4" /> JOIN OUR COMMUNITY
              </a>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-end justify-center gap-4 text-right">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">What we do:</p>
              <ul className="text-sm space-y-1 text-gray-800">
                <li>• Technical workshops & coding events</li>
                <li>• Student hackathons with real prizes</li>
                <li>• Industry expert talks & networking</li>
                <li>• Skill development programs</li>
              </ul>
            </div>
            <span className="text-xs text-gray-500 italic">
              Part of IEEE Delhi Section • Serving 3,600+ members across Delhi NCR
            </span>
          </div>
        </div>

        <div className="w-full flex justify-center items-end mt-auto relative">
          <img src="/socratica.png" alt="IEEE MSIT Group" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
