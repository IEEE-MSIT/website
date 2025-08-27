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
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-6xl md:text-8xl font-serif text-black mr-4">IEEE MSIT</h1>
            <img
              src="/IEEEWhiteLogowithTransparentBG.png"
              alt="IEEE Logo"
              className=" h-12 md:h-16 bg-black hidden sm:block"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1 text-left">
            <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
              We advance technology for{' '}
              <em className="border-b-2 border-dashed border-ieee-blue">humanity at MSIT</em> and
              empower innovators, makers, and leaders through{' '}
              <em className="border-b-2 border-dashed border-ieee-blue">engineering excellence</em>.
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
                <Users className="w-4 h-4" /> JOIN THE SOCIETY
              </a>
            </div>
          </div>

          <div className="flex-1 flex items-end justify-end gap-1">
            <span className="italic">"Building Tomorrow's Tech Leaders" </span>
            <span className="hidden md:block"> by IEEE MSIT</span>
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
