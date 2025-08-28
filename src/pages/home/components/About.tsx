import Marquee from 'react-fast-marquee';

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

          {/* <div className="bg-background rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif text-black mb-4">Why Join IEEE MSIT?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-black mb-2">Career-Focused Programs</h4>
                <p className="text-gray-600 text-sm">
                  Resume workshops, interview prep, and direct access to recruitment opportunities
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Cutting-Edge Technology</h4>
                <p className="text-gray-600 text-sm">
                  AI/ML, IoT, Web3, and emerging tech workshops led by industry experts
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Recognition & Awards</h4>
                <p className="text-gray-600 text-sm">
                  Showcase your skills through competitions and get recognized at regional/global levels
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Global Community</h4>
                <p className="text-gray-600 text-sm">
                  Access to IEEE's worldwide network of 400,000+ professionals and researchers
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="py-8 overflow-hidden w-full marquee-container">
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
            className="w-full h-60"
            direction="left"
          >
            <div className="mx-4">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Workshop - Students collaborating on engineering projects"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Workshop';
                }}
              />
            </div>
            <div className="mx-4">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Conference - Technical presentation and networking"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Conference';
                }}
              />
            </div>
            <div className="mx-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Research - Circuit board and electronics development"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Research';
                }}
              />
            </div>
            <div className="mx-4">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Innovation - Computer programming and coding"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Innovation';
                }}
              />
            </div>
            <div className="mx-4">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Technology - AI and Robotics demonstration"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Technology';
                }}
              />
            </div>
            <div className="mx-4">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Engineering - Mechanical and electrical systems"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Engineering';
                }}
              />
            </div>
            <div className="mx-4">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Competition - Hackathon and technical challenges"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Competition';
                }}
              />
            </div>
            <div className="mx-4">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Workshop - Students collaborating on engineering projects"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Workshop';
                }}
              />
            </div>
            <div className="mx-4">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Conference - Technical presentations and networking"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Conference';
                }}
              />
            </div>
            <div className="mx-4">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Competition - Hackathon and technical challenges"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Competition';
                }}
              />
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default About;
