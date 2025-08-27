import { chapters } from '../../../data/data';

const ChapterHighlights = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block bg-tertiary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          Chapter Highlights
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-16">
          Explore Our IEEE Societies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chapters.map((chapter, index) => (
            <div key={index} className="group relative rounded-2xl h-96 p-6 flex flex-col justify-between bg-chapter-blue text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src={chapter.image}
                  alt={chapter.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 z-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col justify-between h-full" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
                <div>
                  <h3 className="font-serif text-3xl font-bold leading-tight">{chapter.name}</h3>
                  <p className="text-sm mt-2 text-white/95 line-clamp-4">
                    {chapter.description}
                  </p>
                </div>
                <a href={chapter.link} className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 self-start">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
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