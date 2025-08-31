import React, { useMemo, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';

const images = [
    {
        "src": {
            "src": "https://lh3.googleusercontent.com/d/1SqwmMUfeomyHxFVhHb-NNsX1hqEoXpJp=s0",
            "alt": "IEEE Workshop - Students collaborating on engineering projects",
            "fallback": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        "dest": "https://res.cloudinary.com/ddmw4spnt/image/upload/v1756643759/ujh6tki6svdwvtotwjzv.jpg"
    },
    {
        "src": {
            "src": "https://lh3.googleusercontent.com/d/1FFqLefXYjuSBi5RbeNbbxiI99yOve1wt=s0",
            "alt": "IEEE Conference - Technical presentation and networking",
            "fallback": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        "dest": "https://res.cloudinary.com/ddmw4spnt/image/upload/v1756643761/vneng9zh5wenljgy1n9x.jpg"
    },
    {
        "src": {
            "src": "https://lh3.googleusercontent.com/d/1OoLFgWwPaW4EQFJ8ZO_qShx51NAbrLwU=s0",
            "alt": "IEEE Research - Circuit board and electronics development",
            "fallback": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        "dest": "https://res.cloudinary.com/ddmw4spnt/image/upload/v1756643762/uadzh5x4yeq0aq73gqmk.jpg"
    },
    {
        "src": {
            "src": "https://lh3.googleusercontent.com/d/10vnVgtN5Y_06XtitV3yZU3LXmR8wRkgV=s0",
            "alt": "IEEE Event - Students presenting projects",
            "fallback": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        "dest": "https://res.cloudinary.com/ddmw4spnt/image/upload/v1756643765/nxzpu1vsl0eqw6ooc44o.jpg"
    },
    {
        "src": {
            "src": "https://lh3.googleusercontent.com/d/1SbPEuCVMxGN3Nnyvd1l3XdKaZq-xnvLM=s0",
            "alt": "IEEE Research - Lab and experiments",
            "fallback": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        "dest": "https://res.cloudinary.com/ddmw4spnt/image/upload/v1756643768/iwudg6h1049clgvr0lda.jpg"
    },
    {
        "src": {
            "src": "https://lh3.googleusercontent.com/d/19xKYe40OQmsMpjB8moYpA1_9NO_SDdCx=s0",
            "alt": "IEEE Competition - Teams at a hackathon",
            "fallback": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        "dest": "https://res.cloudinary.com/ddmw4spnt/image/upload/v1756643770/jwd0cnvzo0xq3ouvrtj4.jpg"
    }
]
type SmartImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  fallback?: string;
};

const buildDriveCandidates = (url: string) => {
  const candidates: string[] = [];
  if (!url) return candidates;
  candidates.push(url);

  const driveIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const idQueryMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  const id = driveIdMatch ? driveIdMatch[1] : idQueryMatch ? idQueryMatch[1] : null;

  if (id) {
    candidates.push(`https://drive.google.com/uc?export=view&id=${id}`);
    candidates.push(`https://drive.google.com/uc?export=download&id=${id}`);
    candidates.push(`https://docs.google.com/uc?export=download&id=${id}`);
    candidates.push(`https://drive.google.com/thumbnail?id=${id}`);
  }

  if (url.includes('/view')) {
    candidates.push(url.replace('/view', '/uc?export=view'));
    candidates.push(url.replace('/view', '/uc?export=download'));
  }

  return Array.from(new Set(candidates));
};

const SmartImage: React.FC<SmartImageProps> = ({ src, fallback, alt, className = '', ...rest }) => {
  const candidates = useMemo(() => buildDriveCandidates(src), [src]);
  const [index, setIndex] = useState(0);
  const [failedFallback, setFailedFallback] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const current = candidates[index] ?? fallback;

  const isCloudinary = typeof current === 'string' && current.includes('res.cloudinary.com');

  const makeCloudinaryUrl = (url: string, width: number) => {
    const marker = '/upload/';
    const i = url.indexOf(marker);
    if (i === -1) return url;
    const before = url.slice(0, i + marker.length);
    const after = url.slice(i + marker.length);
    return `${before}w_${width},f_auto,q_auto/${after}`;
  };

  const cloudinaryWidths = [320, 480, 768, 1024];
  const srcSet = isCloudinary
    ? cloudinaryWidths.map((w) => `${makeCloudinaryUrl(String(current), w)} ${w}w`).join(', ')
    : undefined;

  const preferredSrc = isCloudinary ? makeCloudinaryUrl(String(current), 800) : current;

  const handleError = () => {
    if (index < candidates.length - 1) {
      setIndex((i) => i + 1);
      return;
    }

    if (fallback && current !== fallback && !failedFallback) {
      setIndex(candidates.length);
      return;
    }

    setFailedFallback(true);
  };

  const handleLoad = () => setLoaded(true);

  const combinedClass = `${className} transition-all duration-700 ease-out ${loaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-105'}`.trim();

  return (
    <img
      src={String(preferredSrc)}
      srcSet={srcSet}
      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 320px, 400px"
      alt={alt}
      className={combinedClass}
      onError={handleError}
      onLoad={handleLoad}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      {...rest}
    />
  );
};


const About = () => {
  return (
    <>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              About IEEE MSIT
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight text-balance">
              Community of <span className="text-primary">Change-Makers</span>:{' '}
              <span className="text-secondary">Engineers</span>, Designers, and{' '}
              <span className="text-tertiary">Leaders</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Connecting ambitious minds through workshops, competitions, and research. We celebrate
              achievements, foster teamwork, and help students prepare for global impact.
            </p>           
          </div>
        </div>
        <div className="py-8 overflow-hidden w-full marquee-container">
    <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
            className="w-full h-60"
            direction="left"
          >
            {images.map((img, idx) => (
              <div className="mx-4" key={idx}>
                <SmartImage
      src={img.dest ?? img.src?.src}
      alt={img.src?.alt}
      fallback={img.src?.fallback}
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Marquee>
        </div>
           <div className="text-center mt-12">
          <Link to="/events" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2 mx-auto w-max">
            <Eye className="w-4 h-4" />
            Show More
            <ArrowRight className="w-4 h-4" />
          </Link>        
        </div>
      </section>
    </>
  );
};

export default About;
