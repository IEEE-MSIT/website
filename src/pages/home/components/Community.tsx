import Marquee from 'react-fast-marquee';

const images = [
  {
    src: 'https://drive.google.com/file/d/1SqwmMUfeomyHxFVhHb-NNsX1hqEoXpJp/view',
    alt: 'IEEE Workshop - Students collaborating on engineering projects',
    fallback: 'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Workshop',
  },
  {
    src: 'https://drive.google.com/file/d/1FFqLefXYjuSBi5RbeNbbxiI99yOve1wt/view',
    alt: 'IEEE Conference - Technical presentation and networking',
    fallback: 'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Conference',
  },
  {
    src: 'https://drive.google.com/file/d/1OoLFgWwPaW4EQFJ8ZO_qShx51NAbrLwU/view',
    alt: 'IEEE Research - Circuit board and electronics development',
    fallback: 'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Research',
  },
  {
    src: 'https://drive.google.com/file/d/1K2QyTDzKxPUShy_zvn4KMsM-w6SjT3P1/view',
    alt: 'IEEE Innovation - Computer programming and coding',
    fallback: 'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Innovation',
  },
  {
    src: 'https://drive.google.com/file/d/1FFqLefXYjuSBi5RbeNbbxiI99yOve1wt/view',
    alt: 'IEEE Technology - AI and Robotics demonstration',
    fallback: 'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Technology',
  },
  {
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'IEEE Engineering - Mechanical and electrical systems',
    fallback: 'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Engineering',
  },
  {
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'IEEE Networking - Professional development and mentorship',
    fallback: 'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Networking',
  },
  {
    src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'IEEE Competition - Hackathon and technical challenges',
    fallback: 'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Competition',
  },
];

const Community = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 leading-tight">
          Whether you're <em className="text-primary">just starting out</em> or{' '}
          <em className="text-tertiary">far along</em>, this is a place for you.
        </h2>

        <div className="mb-12 py-8 h-max transform rotate-2 overflow-hidden w-full">
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
            className="w-full"
            direction="left"
          >
            {images.map((img, idx) => (
              <div className="mx-4" key={idx}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = img.fallback;
                  }}
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            From technical workshops to innovation challenges, IEEE MSIT provides countless
            opportunities for growth, learning, and making meaningful connections in the world of
            technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
