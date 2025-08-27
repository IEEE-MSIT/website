import Marquee from 'react-fast-marquee';

const Community = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 leading-tight">
          Whether you're <em className="text-[#C84C31]">just starting out</em> or <em className="text-[#A7B77F]">far along</em>, this is a place for you.
        </h2>
        
        {/* Tilted infinite scrolling carousel */}
        <div className="mb-12 py-8 h-max transform rotate-2 overflow-hidden w-full">
          <Marquee speed={30} gradient={false} pauseOnHover={true} className="w-full">
            <div className="mx-4">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Workshop - Students collaborating on engineering projects"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Workshop";
                }}
              />
            </div>
            <div className="mx-4">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Conference - Technical presentation and networking"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Conference";
                }}
              />
            </div>
            <div className="mx-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Research - Circuit board and electronics development"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Research";
                }}
              />
            </div>
            <div className="mx-4">
              <img 
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Innovation - Computer programming and coding"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Innovation";
                }}
              />
            </div>
            <div className="mx-4">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Technology - AI and Robotics demonstration"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Technology";
                }}
              />
            </div>
            <div className="mx-4">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Engineering - Mechanical and electrical systems"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Engineering";
                }}
              />
            </div>
            <div className="mx-4">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Networking - Professional development and mentorship"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Networking";
                }}
              />
            </div>
            <div className="mx-4">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="IEEE Competition - Hackathon and technical challenges"
                className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Competition";
                }}
              />
            </div>
          </Marquee>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            From technical workshops to innovation challenges, IEEE MSIT provides countless opportunities for growth, learning, and making meaningful connections in the world of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
