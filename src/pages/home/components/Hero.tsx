import React, { useRef } from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EVENTS_PATH } from '../../../constants/paths';

const Hero = () => {
  const topImgRef = useRef<HTMLImageElement | null>(null);
  const glassOverlayRef = useRef<HTMLDivElement | null>(null);
  const magnifierRef = useRef<HTMLImageElement | null>(null);

  const handlePointerMove = (e: React.MouseEvent) => {
    const img = topImgRef.current;
    const glassOverlay = glassOverlayRef.current;
    const magnifier = magnifierRef.current;
    
    if (!img) return;
    
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    img.style.setProperty('--cx', `${x}px`);
    img.style.setProperty('--cy', `${y}px`);
    img.style.setProperty('--r', `200px`);
    
    if (glassOverlay) {
      glassOverlay.style.setProperty('--gx', `${x}px`);
      glassOverlay.style.setProperty('--gy', `${y}px`);
      glassOverlay.style.setProperty('--gr', `120px`);
    }
    
    if (magnifier) {
      magnifier.style.setProperty('--mx', `${x}px`);
      magnifier.style.setProperty('--my', `${y}px`);
      magnifier.style.setProperty('--mr', `80px`);
    }
  };

  const handlePointerLeave = () => {
    const img = topImgRef.current;
    const glassOverlay = glassOverlayRef.current;
    const magnifier = magnifierRef.current;
    
    if (img) {
      img.style.setProperty('--cx', `-9999px`);
      img.style.setProperty('--cy', `-9999px`);
    }
    
    if (glassOverlay) {
      glassOverlay.style.setProperty('--gx', `-9999px`);
      glassOverlay.style.setProperty('--gy', `-9999px`);
    }
    
    if (magnifier) {
      magnifier.style.setProperty('--mx', `-9999px`);
      magnifier.style.setProperty('--my', `-9999px`);
    }
  };

  return (
    <section className="relative min-h-[80vh] bg-background overflow-hidden pt-20">
      <div
        className="w-full max-w-6xl mx-auto px-6 py-8 h-full flex flex-col justify-center"
        style={
          {
            backgroundImage: `url('/BackgroundLines.37b66c2a.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        }
      >
        <div className="text-center my-12">
          <div className="flex items-center justify-center mb-6  flex-wrap gap-4">
            <img
              src="/IEEEWhiteLogowithTransparentBG.png"
              alt="IEEE Logo"
              className=" h-12 mt-2 md:h-16 block bg-primary"
            />
            <h1 className="text-6xl md:text-8xl text-balance font-serif text-black mr-4">
              IEEE MSIT
            </h1>
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
              <em className="border-b-2 border-dashed border-secondary">cutting-edge technology</em>
              , build amazing projects, and connect with{' '}
              <em className="border-b-2 border-dashed border-tertiary">like-minded innovators</em>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={EVENTS_PATH}
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2 w-fit"
              >
                <ArrowRight className="w-4 h-4" /> See Upcoming Events
              </Link>
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

        <div
          className="w-full flex justify-center items-end mt-auto relative"
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
        >
          <div className="relative w-full rounded-2xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/ddmw4spnt/image/upload/w_768,f_auto,q_auto/v1756643762/uadzh5x4yeq0aq73gqmk.jpg"
              alt="IEEE MSIT Group"
              className="w-full h-auto block grayscale object-cover"
            />

            <img
              ref={topImgRef}
              src="https://res.cloudinary.com/ddmw4spnt/image/upload/w_768,f_auto,q_auto/v1756643762/uadzh5x4yeq0aq73gqmk.jpg"
              alt="IEEE MSIT Group - color"
              className="w-full h-auto block absolute inset-0 pointer-events-none object-cover"
              style={{
                WebkitMaskImage:
                  'radial-gradient(circle var(--r,200px) at var(--cx, -9999px) var(--cy, -9999px), rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
                maskImage:
                  'radial-gradient(circle var(--r,200px) at var(--cx, -9999px) var(--cy, -9999px), rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
                transition: 'mask-position 0.1s ease-out, -webkit-mask-position 0.1s ease-out',
              }}
            />

            <div
              ref={glassOverlayRef}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle var(--gr,120px) at var(--gx, -9999px) var(--gy, -9999px), rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
                backdropFilter: 'blur(0px)',
                WebkitBackdropFilter: 'blur(0px)',
                boxShadow: 'inset 0 0 60px rgba(255,255,255,0.1)',
                transition: 'background 0.1s ease-out, backdrop-filter 0.2s ease-out',
                WebkitMaskImage:
                  'radial-gradient(circle var(--gr,120px) at var(--gx, -9999px) var(--gy, -9999px), rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 70%)',
                maskImage:
                  'radial-gradient(circle var(--gr,120px) at var(--gx, -9999px) var(--gy, -9999px), rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 70%)',
              }}
            />

            <img
              ref={magnifierRef}
              src="https://res.cloudinary.com/ddmw4spnt/image/upload/w_1200,f_auto,q_auto/v1756643762/uadzh5x4yeq0aq73gqmk.jpg"
              alt="IEEE MSIT Group - magnified"
              className="w-full h-auto block absolute inset-0 pointer-events-none object-cover"
              style={{
                transform: 'scale(1.3)',
                transformOrigin: 'var(--mx, -9999px) var(--my, -9999px)',
                filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
                WebkitMaskImage:
                  'radial-gradient(circle var(--mr,80px) at var(--mx, -9999px) var(--my, -9999px), rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,0) 100%)',
                maskImage:
                  'radial-gradient(circle var(--mr,80px) at var(--mx, -9999px) var(--my, -9999px), rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,0) 100%)',
                transition: 'transform-origin 0.05s linear, mask-position 0.05s linear, -webkit-mask-position 0.05s linear',
              }}
            />

            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background: 'radial-gradient(circle var(--gr,120px) at var(--gx, -9999px) var(--gy, -9999px), transparent 0%, transparent 90%, rgba(255,255,255,0.2) 95%, transparent 100%)',
                transition: 'background 0.1s ease-out',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
