import React, { useMemo, useState } from 'react';
import Marquee from 'react-fast-marquee';

const images = [
  {
  src: "https://drive.google.com/thumbnail?id=1SqwmMUfeomyHxFVhHb-NNsX1hqEoXpJp&sz=w100",
    alt: "IEEE Workshop - Students collaborating on engineering projects",
  fallback: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
  src: "https://drive.google.com/thumbnail?id=1FFqLefXYjuSBi5RbeNbbxiI99yOve1wt&sz=w100",
    alt: "IEEE Conference - Technical presentation and networking",
  fallback: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
  src: "https://drive.google.com/thumbnail?id=1OoLFgWwPaW4EQFJ8ZO_qShx51NAbrLwU&sz=w100",
    alt: "IEEE Research - Circuit board and electronics development",
  fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
  src: "https://drive.google.com/thumbnail?id=1K2QyTDzKxPUShy_zvn4KMsM-w6SjT3P1&sz=w100",
    alt: "IEEE Innovation - Computer programming and coding",
  fallback: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
  src: "https://drive.google.com/thumbnail?id=1FFqLefXYjuSBi5RbeNbbxiI99yOve1wt&sz=w100",
    alt: "IEEE Technology - AI and Robotics demonstration",
  fallback: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
  src: "https://drive.google.com/thumbnail?id=1lytlyaecLJ__OU8QQK9NmRGwjVKnN3KF&sz=w100",
    alt: "IEEE Engineering - Mechanical and electrical systems",
  fallback: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
  src: "https://drive.google.com/thumbnail?id=1_ILFKiSxAcxeCgOKhFEpmU91eQFdKofZ&sz=w100",
    alt: "IEEE Networking - Professional development and mentorship",
  fallback: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
  src: "https://drive.google.com/thumbnail?id=1_ILFKiSxAcxeCgOKhFEpmU91eQFdKofZ&sz=w100",
    alt: "IEEE Competition - Hackathon and technical challenges",
  fallback: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

type SmartImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  fallback?: string;
};

const buildDriveCandidates = (url: string) => {
  const candidates: string[] = [];
  if (!url) return candidates;
  candidates.push(url);

  // try to extract a Drive file id from common URL patterns
  const driveIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const idQueryMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  const id = driveIdMatch ? driveIdMatch[1] : idQueryMatch ? idQueryMatch[1] : null;

  if (id) {
    candidates.push(`https://drive.google.com/uc?export=view&id=${id}`);
    candidates.push(`https://drive.google.com/uc?export=download&id=${id}`);
    candidates.push(`https://docs.google.com/uc?export=download&id=${id}`);
    candidates.push(`https://drive.google.com/thumbnail?id=${id}`);
  }

  // also try replacing common suffixes
  if (url.includes('/view')) {
    candidates.push(url.replace('/view', '/uc?export=view'));
    candidates.push(url.replace('/view', '/uc?export=download'));
  }

  // dedupe while preserving order
  return Array.from(new Set(candidates));
};

const SmartImage: React.FC<SmartImageProps> = ({ src, fallback, alt, className, ...rest }) => {
  const candidates = useMemo(() => buildDriveCandidates(src), [src]);
  const [index, setIndex] = useState(0);
  const [failedFallback, setFailedFallback] = useState(false);

  const current = candidates[index] ?? fallback;

  const handleError = () => {
    // If there are more candidates, try next
    if (index < candidates.length - 1) {
      setIndex((i) => i + 1);
      return;
    }

    // If we've exhausted candidates and we have a fallback not yet tried, switch to it
    if (fallback && current !== fallback && !failedFallback) {
      setIndex(candidates.length); // will cause current to be fallback
      return;
    }

    // If fallback failed too, avoid looping
    setFailedFallback(true);
  };

  return (
    // no-referrer helps some hosting sources avoid 403s caused by referrer checks
    <img
      src={current}
      alt={alt}
      className={className}
      onError={handleError}
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
                  src={img.src}
                  alt={img.alt}
                  fallback={img.fallback}
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default About;
