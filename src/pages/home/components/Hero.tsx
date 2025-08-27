import { ArrowRight, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-background overflow-hidden pt-20">
      <div
        className="w-full max-w-6xl mx-auto px-6 py-8 h-full flex flex-col justify-center"
        style={{
          // backgroundImage: `url('/BackgroundLines.37b66c2a.png')`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center my-12">
          <div className="flex items-center justify-center mb-6  flex-wrap-reverse">
            <h1 className="text-6xl md:text-8xl font-serif text-black mr-4">IEEE MSIT</h1>
            <img
              src="/IEEEWhiteLogowithTransparentBG.png"
              alt="IEEE Logo"
              className=" h-12 md:h-16 hidden sm:block bg-primary"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-600 font-medium mb-2">
            Student Technology Club
          </p>
          <p className="text-sm text-gray-500">
            Part of IEEE - The world's largest engineering organization
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1 text-left">
            <p className="text-lg hidden md:text-xl text-black mb-8 leading-relaxed">
              <strong>IEEE MSIT</strong> is the student branch of the{' '}
              <em className="border-b-2 border-dashed border-ieee-blue">
                world's largest technology organization
              </em>
              , IEEE
            </p>
            <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
              We're a community of engineering students who organize{' '}
              <em className="border-b-2 border-dashed border-primary">
                workshops, hackathons, and tech events
              </em>{' '}
              to help you learn{' '}
              <em className="border-b-2 border-dashed border-secondary">
                cutting-edge technology
              </em>
              , build amazing projects, and connect with{' '}
              <em className="border-b-2 border-dashed border-tertiary">
                like-minded innovators
              </em>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#events"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2 w-fit"
              >
                <ArrowRight className="w-4 h-4" /> See Upcoming Events
              </a>
              <a
                href="#join"
                className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors font-medium text-sm flex items-center gap-2 w-fit"
              >
                <Users className="w-4 h-4" /> Join Our Community
              </a>
            </div>
          </div>

          <div className="flex-1 flex items-end justify-end gap-1">
            <span className="text-right text-gray-400 text-sm leading-relaxed">
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
