import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { chapters } from '../../../data/data';

const ChapterHighlights = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            Chapter Highlights
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
            Choose Your <span className="text-orange-500">Engineering</span> House
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Which chapter calls to your engineering spirit? Each house has its own noble traditions
            and specialized expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="h-full"
            >
              <Link to={chapter.path || '#'} className="block h-full">
                <div
                  className={`group relative bg-gradient-to-b ${chapter.bgColor} text-white shadow-2xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-4 ${chapter.borderColor} h-[480px]`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)',
                  }}
                >
                  <div
                    className="absolute inset-0 border-2 border-yellow-400/40 m-3"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)',
                    }}
                  ></div>

                  <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-15 transition-opacity duration-300">
                    <img
                      src={chapter.image}
                      alt={chapter.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/10 to-black/40"></div>

                  <div
                    className="relative z-10 flex flex-col h-full p-6 pt-8"
                    style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}
                  >
                    <div className="text-center mb-6">
                      <div
                        className={`${chapter.accentColor} rounded-full p-4 inline-block mb-4 shadow-lg border-4 border-white/30 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <img
                          src={chapter.logo}
                          alt={`${chapter.shortName} Crest`}
                          className="h-16 w-auto"
                        />
                      </div>

                      <h3 className="font-serif text-4xl font-bold mb-2 tracking-wider">
                        {chapter.shortName}
                      </h3>
                      <div className={`h-1 w-16 ${chapter.accentColor} mx-auto mb-3`}></div>
                      <p className="text-xs font-semibold tracking-widest uppercase opacity-80 mb-4">
                        {chapter.motto}
                      </p>
                    </div>

                    <div className="text-center mb-16">
                      <p
                        className={`text-sm ${chapter.textColor} line-clamp-3 leading-relaxed italic px-2`}
                      >
                        "{chapter.description}"
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Each house represents a noble tradition of engineering excellence. Choose your path and
            join a brotherhood of innovators, researchers, and future leaders.
          </p>
          <div className="text-center mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/chapters/wie"
                className="w-max bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary-hover shadow-md hover:shadow-lg transition-all font-medium text-sm flex items-center gap-2 mx-auto"
              >
                Explore All Chapters
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChapterHighlights;
