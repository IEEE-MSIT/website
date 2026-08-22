import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Join = () => {
  return (
    <section id="join" className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Join the <span className="text-primary">Future</span> of Technology
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
            Become a part of our vibrant community and get access to exclusive workshops, events,
            and networking opportunities that will shape your career.
          </p>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 102, 153, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            href="https://www.ieee.org/membership/join/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm inline-flex items-center gap-2 mx-auto shadow-md"
          >
            <ArrowRight className="w-4 h-4" /> Become an IEEE Member
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;
