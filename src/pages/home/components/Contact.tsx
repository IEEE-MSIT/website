import { MapPin, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    // {
    //   icon: Mail,
    //   title: 'Email Us',
    //   details: [
    //     'anupama@msit.in',
    //     'shubhamsharma@ieee.org',
    //     'ishneet@ieee.org',
    //     'tussharaggarwal@ieee.org',
    //   ],
    //   action: 'Send Email',
    // },
    // {
    //   icon: Phone,
    //   title: 'Call Us',
    //   details: [
    //     'Deepak Garg: +91 8287529584',
    //     'Ishika Garg: +91 9958463960',
    //     'Inder Sharma: +91 9971794796',
    //     'Raghav Gupta: +91 9045091370',
    //   ],
    //   action: 'Call Now',
    // },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Maharaja Surajmal Institute of Technology',
        'C-4, Janakpuri, New Delhi - 110058',
        'India',
      ],
      action: 'Get Directions',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['Join our community group for updates', 'Quick responses and announcements'],
      action: 'Join Group',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 pt-40 px-4 md:px-6 bg-gradient-to-br from-primary/5 to-primary/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about IEEE MSIT? Want to join our community or collaborate with us? We'd
            love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-black mb-6">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <IconComponent className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-black mb-2">{info.title}</h4>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600 text-sm">
                                {detail}
                              </p>
                            ))}
                            {info.title === 'Visit Us' && (
                              <div className="mt-4">
                                <div className="rounded-lg overflow-hidden border border-gray-100">
                                  <iframe
                                    title="MSIT location"
                                    src="https://maps.google.com/maps?q=Maharaja%20Surajmal%20Institute%20of%20Technology%20Janakpuri%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-48 md:h-56"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  />
                                </div>
                                <a
                                  href="https://www.google.com/maps/dir/?api=1&destination=Maharaja%20Surajmal%20Institute%20of%20Technology%20Janakpuri%20New%20Delhi"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block mt-3 text-primary font-medium hover:underline"
                                >
                                  Get Directions →
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-[800px] mx-auto">
            <h3 className="text-2xl font-serif text-black mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
