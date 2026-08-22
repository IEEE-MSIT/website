import { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import Button from '../../../components/ui/Button';
import SITE_CONFIG from '../../../config/site';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: 'What is IEEE and what does it stand for?',
      answer:
        "IEEE stands for the Institute of Electrical and Electronics Engineers. It's the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE offers networking opportunities, technical resources, and professional development.",
    },
    {
      question: 'How can I become a member of IEEE MSIT?',
      answer:
        'To join IEEE MSIT chapter, you first need to be an IEEE student member. You can register for IEEE membership through their official website, and then join our MSIT student chapter. We also host recruitment drives at the beginning of each academic session.',
    },
    {
      question: 'What are the benefits of joining IEEE MSIT?',
      answer:
        "As an IEEE MSIT member, you'll get access to exclusive workshops, technical seminars, networking events, hackathons, research opportunities, IEEE digital library, career guidance, and a chance to work on real-world projects. You'll also be part of a global community of engineers and technologists.",
    },
    {
      question: 'What events and activities does IEEE MSIT organize?',
      answer:
        'We organize various events including technical workshops, coding competitions, hackathons, guest lectures by industry experts, research paper presentations, project showcases, and social gatherings. We also participate in inter-college competitions and IEEE regional events.',
    },
    {
      question: 'Is there a membership fee for IEEE MSIT?',
      answer:
        "Yes, there's an annual IEEE student membership fee which is quite nominal for students. The exact amount varies by region, but it's typically around $27 USD per year for students. This gives you access to all IEEE resources and local chapter activities.",
    },
    {
      question: 'Can students from all branches join IEEE MSIT?',
      answer:
        'Absolutely! While IEEE originated in electrical and electronics engineering, today it welcomes students from all engineering branches including Computer Science, Information Technology, Mechanical, Civil, and other technical fields. Diversity in backgrounds enriches our community.',
    },
    {
      question: 'How can IEEE membership help in my career?',
      answer:
        'IEEE membership provides networking opportunities with industry professionals, access to cutting-edge research, professional development resources, certification programs, and career guidance. Many companies value IEEE involvement when hiring, and it demonstrates your commitment to professional growth.',
    },
    {
      question: 'What is the IEEE MSIT executive committee structure?',
      answer:
        'Our executive committee typically includes positions like Chairperson, Vice-Chairperson, Secretary, Treasurer, Technical Head, Event Coordinator, and Public Relations Head. Elections are held annually, and all active members can participate in the democratic process.',
    },
    {
      question: 'How often are meetings and events conducted?',
      answer:
        'We conduct regular monthly meetings and organize events throughout the academic year. Major events happen 2-3 times per semester, while workshops and technical sessions are more frequent. We also have online sessions and webinars to ensure continuous engagement.',
    },
    {
      question: "Can I contribute to IEEE MSIT even if I'm in my first year?",
      answer:
        'Definitely! We encourage participation from students of all years. First-year students can join as volunteers, participate in events, contribute ideas, and gradually take on more responsibilities. Many of our successful leaders started their journey in their first year.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = SITE_CONFIG.social.whatsapp.url;

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
            Got <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about IEEE MSIT chapter, membership, and our
            activities.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all duration-300 group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-black pr-4 group-hover:text-primary transition-colors duration-200">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? 'rotate-180 text-primary'
                      : 'text-gray-400 group-hover:text-primary'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-serif text-black mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help you with any questions
              about IEEE MSIT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact" variant="primary" size="md">
                Contact Us
              </Button>
              <Button
                href={whatsappUrl}
                variant="outline"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
                icon={MessageCircle}
              >
                Join WhatsApp Group
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
