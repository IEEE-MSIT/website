import { memo } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
    category: string;
  };
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

const FAQItem = memo(({ faq, index, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-200 group will-change-contents">
      <button
        onClick={() => onToggle(index)}
        className="w-full px-6 py-6 text-left flex items-start justify-between hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-t-xl will-change-transform"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {faq.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-black group-hover:text-primary transition-colors duration-150">
            {faq.question}
          </h3>
        </div>
        <div
          className={`flex-shrink-0 transition-all duration-200 will-change-transform ${
            isOpen ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'
          }`}
        >
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      <div
        id={`faq-answer-${index}`}
        className={`faq-content overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? 'max-h-96 opacity-100 open' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

export default FAQItem;
