import { useState, useMemo, useCallback } from 'react';
import { HelpCircle, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQItem from '../components/ui/FAQItem';
import SITE_CONFIG from '../config/site';
import { HOME_PATH } from '../constants/paths';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqData: FAQItem[] = useMemo(
    () => [
      {
        question: 'What is IEEE and what does it stand for?',
        answer:
          "IEEE stands for the Institute of Electrical and Electronics Engineers. It's the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE offers networking opportunities, technical resources, and professional development.",
        category: 'General',
      },
      {
        question: 'How can I become a member of IEEE MSIT?',
        answer:
          'To join IEEE MSIT chapter, you first need to be an IEEE student member. You can register for IEEE membership through their official website, and then join our MSIT student chapter. We also host recruitment drives at the beginning of each academic session.',
        category: 'Membership',
      },
      {
        question: 'What are the benefits of joining IEEE MSIT?',
        answer:
          "As an IEEE MSIT member, you'll get access to exclusive workshops, technical seminars, networking events, hackathons, research opportunities, IEEE digital library, career guidance, and a chance to work on real-world projects. You'll also be part of a global community of engineers and technologists.",
        category: 'Membership',
      },
      {
        question: 'What events and activities does IEEE MSIT organize?',
        answer:
          'We organize various events including technical workshops, coding competitions, hackathons, guest lectures by industry experts, research paper presentations, project showcases, and social gatherings. We also participate in inter-college competitions and IEEE regional events.',
        category: 'Events',
      },
      {
        question: 'Is there a membership fee for IEEE MSIT?',
        answer:
          "Yes, there's an annual IEEE student membership fee which is quite nominal for students. The exact amount varies by region, but it's typically around $27 USD per year for students. This gives you access to all IEEE resources and local chapter activities.",
        category: 'Membership',
      },
      {
        question: 'Can students from all branches join IEEE MSIT?',
        answer:
          'Absolutely! While IEEE originated in electrical and electronics engineering, today it welcomes students from all engineering branches including Computer Science, Information Technology, Mechanical, Civil, and other technical fields. Diversity in backgrounds enriches our community.',
        category: 'General',
      },
      {
        question: 'How can IEEE membership help in my career?',
        answer:
          'IEEE membership provides networking opportunities with industry professionals, access to cutting-edge research, professional development resources, certification programs, and career guidance. Many companies value IEEE involvement when hiring, and it demonstrates your commitment to professional growth.',
        category: 'Career',
      },
      {
        question: 'What is the IEEE MSIT executive committee structure?',
        answer:
          'Our executive committee typically includes positions like Chairperson, Vice-Chairperson, Secretary, Treasurer, Technical Head, Event Coordinator, and Public Relations Head. Elections are held annually, and all active members can participate in the democratic process.',
        category: 'Organization',
      },
      {
        question: 'How often are meetings and events conducted?',
        answer:
          'We conduct regular monthly meetings and organize events throughout the academic year. Major events happen 2-3 times per semester, while workshops and technical sessions are more frequent. We also have online sessions and webinars to ensure continuous engagement.',
        category: 'Events',
      },
      {
        question: "Can I contribute to IEEE MSIT even if I'm in my first year?",
        answer:
          'Definitely! We encourage participation from students of all years. First-year students can join as volunteers, participate in events, contribute ideas, and gradually take on more responsibilities. Many of our successful leaders started their journey in their first year.',
        category: 'General',
      },
      {
        question: 'How do I access IEEE digital resources and library?',
        answer:
          'As an IEEE member, you get free access to IEEE Xplore Digital Library, which contains millions of technical documents including research papers, conference proceedings, and standards. You can access it through the IEEE website using your member credentials.',
        category: 'Resources',
      },
      {
        question: 'What chapters are available at IEEE MSIT?',
        answer:
          'IEEE MSIT hosts multiple technical chapters including Computer Society, Women in Engineering (WIE), Power & Energy Society (PES), Robotics & Automation Society (RAS), Industry Applications Society, and Communications Society. Each chapter focuses on specific technical domains.',
        category: 'Organization',
      },
      {
        question: 'How can I volunteer for IEEE MSIT events?',
        answer:
          'You can volunteer by contacting our executive committee, joining our WhatsApp group for announcements, or reaching out during our recruitment drives. We always welcome enthusiastic volunteers for various roles including event management, technical coordination, and publicity.',
        category: 'Volunteering',
      },
      {
        question: 'Does IEEE MSIT provide certification courses?',
        answer:
          'Yes, we regularly organize certification workshops and training sessions in collaboration with industry partners. These cover topics like programming languages, emerging technologies, soft skills, and professional development. Members get priority access and discounted rates.',
        category: 'Learning',
      },
      {
        question: 'How can I submit a technical paper or present my research?',
        answer:
          'IEEE MSIT regularly organizes paper presentation sessions and research symposiums. You can submit your abstracts during our call for papers announcements. We also help students submit papers to IEEE conferences and journals with mentorship from faculty advisors.',
        category: 'Research',
      },
    ],
    []
  );

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(faqData.map((faq) => faq.category)))],
    [faqData]
  );

  const filteredFAQs = useMemo(
    () =>
      selectedCategory === 'All'
        ? faqData
        : faqData.filter((faq) => faq.category === selectedCategory),
    [faqData, selectedCategory]
  );

  const whatsappUrl = useMemo(() => SITE_CONFIG.social.whatsapp.url, []);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setOpenIndex(null);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <Link
            to={HOME_PATH}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
              Got <span className="text-primary">Questions?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find comprehensive answers to all your questions about IEEE MSIT chapter, membership,
              events, and opportunities.
            </p>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {}
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-black mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 will-change-transform ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <FAQItem
                  key={`${selectedCategory}-${faq.category}-${index}`}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={toggleFAQ}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No FAQs found for this category.</p>
              </div>
            )}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-serif text-black mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our team is here to help you with any questions
                about IEEE MSIT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={`${HOME_PATH}#contact`}>
                  <a className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2 w-fit">
                    Contact Us
                  </a>
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors font-medium text-sm flex items-center gap-2 w-fit"
                >
                  <MessageCircle className="w-4 h-4" />
                  Join WhatsApp Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
