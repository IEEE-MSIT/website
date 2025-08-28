import { useState } from 'react';
import MemberCard from '../../../components/ui/MemberCard';
import { Link } from 'react-router-dom';
import { Mail, Share2, X, Eye, ArrowRight } from 'lucide-react';
import { execom2025 } from '../../../data/execom2025';

interface Member {
  name: string;
  position: string;
  branch: string;
  image: string;
  linkedin: string;
  email?: string;
}

const Team = () => {
  const [selectedMember] = useState<Member | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleShare = (member: Member) => {
    if (navigator.share) {
      navigator.share({
        title: `${member.name} - ${member.position}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Profile link copied to clipboard!');
    }
  };

  const renderMember = (member: Member, index: number) => (
    <MemberCard key={index} member={member} year={2025} />
  );

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">Executive Committee</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders driving innovation and excellence at IEEE MSIT
          </p>
        </div>
        <div className="min-h-[320px] flex items-center">
          <div className="w-full flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {execom2025.chapters['MAIN IEEE MSIT']
                .slice(0, 3)
                .map((member, idx) => (
                  <div key={idx} className="w-full md:w-80">
                    {renderMember(member, idx)}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/team"
            className="w-max bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2 mx-auto"
          >
            <Eye className="w-4 h-4" />
            Show All Members
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        {showModal && selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white text-gray-600 transition-colors"
                onClick={() => setShowModal(false)}
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-primary">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl text-black mb-2">{selectedMember.name}</h3>
                <p className="text-primary font-semibold text-base mb-1">
                  {selectedMember.position}
                </p>
                <p className="text-gray-600 text-sm mb-4">{selectedMember.branch}</p>
                <div className="flex justify-center gap-3 mb-4">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors text-primary"
                    title="LinkedIn"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors text-primary"
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <button
                  className="w-full py-2 bg-primary text-white rounded-full font-medium mt-2 flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors"
                  onClick={() => handleShare(selectedMember)}
                >
                  <Share2 className="w-4 h-4" />
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
