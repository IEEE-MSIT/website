const ChapterHighlights = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block bg-[#A7B77F] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          Chapter Highlights
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-16">
          Explore Our IEEE Societies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* IEEE RAS */}
          <div className="group relative rounded-2xl h-96 p-6 flex flex-col justify-between bg-[#3d8499] text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80"
                alt="Robotics & Automation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 z-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col justify-between h-full" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
              <div>
                <h3 className="font-serif text-3xl font-bold leading-tight">Robotics & Automation Society</h3>
                <p className="text-sm mt-2 text-white/95 line-clamp-4">
                  Advancing the theory and practice of robotics, automation, and intelligent systems through our ROBO TIDING newsletter and cutting-edge workshops.
                </p>
              </div>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 self-start">
                Learn More →
              </button>
            </div>
          </div>
          
          {/* IEEE WIE */}
          <div className="group relative rounded-2xl h-96 p-6 flex flex-col justify-between bg-[#5b6a9a] text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80"
                alt="Women in Engineering"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 z-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col justify-between h-full" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
              <div>
                <h3 className="font-serif text-3xl font-bold leading-tight">Women in Engineering</h3>
                <p className="text-sm mt-2 text-white/95 line-clamp-4">
                  Empowering women in technology through SHESCRIPTS newsletter, mentorship programs, and professional development opportunities.
                </p>
              </div>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 self-start">
                Learn More →
              </button>
            </div>
          </div>
          
          {/* IEEE PES */}
          <div className="group relative rounded-2xl h-96 p-6 flex flex-col justify-between bg-[#8a9a5b] text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&w=800&q=80"
                alt="Power & Energy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 z-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col justify-between h-full" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
              <div>
                <h3 className="font-serif text-3xl font-bold leading-tight">Power & Energy Society</h3>
                <p className="text-sm mt-2 text-white/95 line-clamp-4">
                  Focusing on sustainable energy solutions, power systems, and electrical engineering innovations for a greener future.
                </p>
              </div>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 self-start">
                Learn More →
              </button>
            </div>
          </div>
          
          {/* IEEE Computer Society */}
          <div className="group relative rounded-2xl h-96 p-6 flex flex-col justify-between bg-[#a96e58] text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80"
                alt="Computer Society"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 z-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col justify-between h-full" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
              <div>
                <h3 className="font-serif text-3xl font-bold leading-tight">Computer Society</h3>
                <p className="text-sm mt-2 text-white/95 line-clamp-4">
                  Advancing computing and information technology through programming competitions, AI workshops, and software development projects.
                </p>
              </div>
              <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 self-start">
                Learn More →
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Each chapter provides unique opportunities for learning, networking, and professional development in specialized engineering fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChapterHighlights;
