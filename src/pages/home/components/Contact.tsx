const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-[#C84C31] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          Get in Touch
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
          Have questions or want to collaborate? We’d love to hear from you. Reach out to us via email or connect with our team on social media.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="mailto:ieee.msit@gmail.com"
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            Send us an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
