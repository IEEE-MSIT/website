import { useState } from 'react';
import { Linkedin, Eye, Share2, Mail, X } from 'lucide-react';

export interface Member {
  name: string;
  position: string;
  branch: string;
  image: string;
  linkedin: string;
  email?: string;
  chapter?: string;
}


interface MemberCardProps {
  member: Member;
  showActions?: boolean;
  year?: number;
}

const MemberCard = ({ member, showActions = true, year }: MemberCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleShare = () => {
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

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary transition-all duration-300 group relative">
        {showActions && (
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary transition-colors"
              onClick={handleShare}
              title="Share profile"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary transition-colors"
              onClick={() => setShowModal(true)}
              title="View details"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        )}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-primary transition-colors">              
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="font-serif text-lg text-black mb-1">{member.name}</h3>
          <p className="text-primary text-sm font-medium mb-1">{member.position}</p>
          <p className="text-gray-500 text-xs mb-4">{member.branch}</p>
          <div className="flex justify-center gap-2">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
              <Linkedin className="w-5 h-5" />
            </a>
            {member.email && (
              <a href={`mailto:${member.email}`} className="text-primary hover:text-primary-dark">
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      {showModal && (
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
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-2xl text-black mb-2">{member.name}</h3>
              <p className="text-primary font-semibold text-base mb-1">{member.position}</p>
              <p className="text-gray-600 text-sm mb-4">{member.branch}</p>
              <div className="flex justify-center gap-3 mb-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors text-primary"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors text-primary"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
              <button
                className="w-full py-2 bg-primary text-white rounded-full font-medium mt-2 flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4" />
                Share Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MemberCard;
