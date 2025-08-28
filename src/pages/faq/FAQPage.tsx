import { useState, useMemo, useCallback } from 'react';
import { HelpCircle, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQItem from '../../components/ui/FAQItem';
import SITE_CONFIG from '../../config/site';
import { HOME_PATH } from '../../constants/paths';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqData: FAQItem[] = useMemo(() => [
    {
      question: "What is IEEE and what does it stand for?",
      answer: "IEEE stands for the Institute of Electrical and Electronics Engineers. It's the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE offers networking opportunities, technical resources, and professional development.",
      category: "General"
    },
    {
      question: "How can I become a member of IEEE MSIT?",
      answer: "To join IEEE MSIT chapter, you first need to be an IEEE student member. You can register for IEEE membership through their official website, and then join our MSIT student chapter. We also host recruitment drives at the beginning of each academic session.",
      category: "Membership"
    },
    {
      question: "What are the benefits of joining IEEE MSIT?",
      answer: "As an IEEE MSIT member, you'll get access to exclusive workshops, technical seminars, networking events, hackathons, research opportunities, IEEE digital library, career guidance, and a chance to work on real-world projects. You'll also be part of a global community of engineers and technologists.",
      category: "Membership"
    },
    {
      question: "What events and activities does IEEE MSIT organize?",
      answer: "We organize various events including technical workshops, coding competitions, hackathons, guest lectures by industry experts, research paper presentations, project showcases, and social gatherings. We also participate in inter-college competitions and IEEE regional events.",
      category: "Events"
    },
    {
      question: "Is there a membership fee for IEEE MSIT?",
      answer: "Yes, there's an annual IEEE student membership fee which is quite nominal for students. The exact amount varies by region, but it's typically around $27 USD per year for students. This gives you access to all IEEE resources and local chapter activities.",
      category: "Membership"
    },
    {
      question: "Can students from all branches join IEEE MSIT?",
      answer: "Absolutely! While IEEE originated in electrical and electronics engineering, today it welcomes students from all engineering branches including Computer Science, Information Technology, Mechanical, Civil, and other technical fields. Diversity in backgrounds enriches our community.",
      category: "General"
    },
    {
      question: "How often does IEEE MSIT conduct events?",
      answer: "We conduct events regularly throughout the academic year. On average, we organize 2-3 major events per month, including workshops, seminars, competitions, and social gatherings. We also have ongoing projects and study groups that meet weekly.",
      category: "Events"
    },
    {
      question: "What is the selection process for IEEE MSIT executive positions?",
      answer: "Executive positions are filled through a democratic process involving nominations and elections. Interested members can nominate themselves or be nominated by others. The selection is based on leadership skills, commitment to IEEE values, academic performance, and contribution to the chapter.",
      category: "Leadership"
    },
    {
      question: "Does IEEE MSIT provide internship or job placement assistance?",
      answer: "Yes, we provide career guidance through our industry connect programs, alumni networking events, resume building workshops, and interview preparation sessions. We also share internship and job opportunities through our communication channels.",
      category: "Career"
    },
    {
      question: "What are the different societies within IEEE MSIT?",
      answer: "IEEE MSIT has several specialized societies: Computer Society (CS), Robotics and Automation Society (RAS), Power and Energy Society (PES), and Women in Engineering (WIE). Each society focuses on specific technical domains and organizes targeted events and activities.",
      category: "General"
    },
    {
      question: "Can I participate in IEEE competitions and conferences?",
      answer: "Absolutely! IEEE MSIT encourages and supports members to participate in regional, national, and international IEEE competitions, conferences, and technical paper presentations. We provide guidance, resources, and sometimes financial support for worthy participants.",
      category: "Events"
    },
    {
      question: "How can I stay updated with IEEE MSIT activities?",
      answer: "You can stay updated through our official website, social media channels (Instagram, LinkedIn, Twitter), WhatsApp groups, email newsletters, and notice boards on campus. We also have society-specific newsletters like SHESCRIPTS (WIE) and ROBO TIDING (RAS).",
      category: "General"
    },
    {
      question: "What are the leadership development opportunities in IEEE MSIT?",
      answer: "IEEE MSIT offers numerous leadership opportunities including executive committee positions, event organization roles, mentorship programs, technical project leadership, and representation at regional IEEE events. We also conduct leadership workshops and soft skills training.",
      category: "Leadership"
    },
    {
      question: "Does IEEE MSIT collaborate with industry partners?",
      answer: "Yes, we have strong industry partnerships with leading tech companies. These collaborations result in guest lectures, industrial visits, internship opportunities, sponsored events, and real-world project opportunities for our members.",
      category: "Career"
    },
    {
      question: "How can I contribute to IEEE MSIT if I'm a new member?",
      answer: "New members can contribute by attending events, volunteering for activities, joining committees, participating in projects, sharing ideas for events, helping with social media, and bringing innovative suggestions. Every contribution, no matter how small, is valued and recognized.",
      category: "Membership"
    }
  ], []);

  const categories = useMemo(() => {
    const uniqueCategories = ['All', ...new Set(faqData.map(faq => faq.category))];
    return uniqueCategories;
  }, [faqData]);

  const filteredFAQs = useMemo(() => {
    return selectedCategory === 'All' 
      ? faqData 
      : faqData.filter(faq => faq.category === selectedCategory);
  }, [faqData, selectedCategory]);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setOpenIndex(null);
  }, []);

  const handleFAQToggle = useCallback((index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }, [openIndex]);

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              to={HOME_PATH}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">
              How can we help you?
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to common questions about IEEE MSIT, our events, membership, and more. 
              Can't find what you're looking for? Feel free to reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Support
              </a>
              <p className="text-sm text-gray-500">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
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

          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <FAQItem
                  key={`${selectedCategory}-${index}`}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={handleFAQToggle}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No FAQs found for this category.</p>
              </div>
            )}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif text-black mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Reach out to us directly and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm"
              >
                Send us an Email
              </a>
              <a
                href={SITE_CONFIG.social?.whatsapp?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors font-medium text-sm"
              >
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
