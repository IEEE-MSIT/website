import { useState, useEffect } from 'react';
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

const MemberCard = ({ member, showActions = true }: MemberCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const isValidLinkedIn = (url?: string) => {
    if (!url) return false;
    try {
      const u = url.trim();
      return /^(https?:)?\/\//.test(u) || u.startsWith('www.') ? /linkedin\.com/i.test(u) : /linkedin\.com/i.test(u);
    } catch {
      return false;
    }
  };

  const getInitials = (name = '') => {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleMissingLinkedIn = () => {
    alert('LinkedIn profile not available for this member. Check upcoming members or view full team.');
  };

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
  const buildDriveCandidates = (url?: string) => {
    const candidates: string[] = [];
    if (!url) return candidates;
    candidates.push(url);

    const driveIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const idQueryMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    const id = driveIdMatch ? driveIdMatch[1] : idQueryMatch ? idQueryMatch[1] : null;

    if (id) {
      candidates.push(`https://drive.google.com/uc?export=view&id=${id}`);
      candidates.push(`https://drive.google.com/uc?export=download&id=${id}`);
      candidates.push(`https://docs.google.com/uc?export=download&id=${id}`);
      candidates.push(`https://drive.google.com/thumbnail?id=${id}`);
    }

    if (url.includes('/view')) {
      candidates.push(url.replace('/view', '/uc?export=view'));
      candidates.push(url.replace('/view', '/uc?export=download'));
    }

    return Array.from(new Set(candidates));
  };

  const candidates = buildDriveCandidates(member.image);
  const [imgIndex, setImgIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);
  const [preloaded, setPreloaded] = useState(false);

  const currentImg = candidates[imgIndex] ?? member.image;

  const handleImgError = () => {
    if (imgIndex < candidates.length - 1) {
      setImgIndex((i) => i + 1);
      return;
    }
    setImgFailed(true);
  };

  useEffect(() => {
    let cancelled = false;
    setPreloaded(false);

    const srcToLoad = String(currentImg || '');
    if (!srcToLoad) return;

    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = srcToLoad;
    img.onload = () => {
      if (!cancelled) setPreloaded(true);
    };
    img.onerror = () => {
      if (!cancelled) setPreloaded(false);
    };

    const next = candidates[imgIndex + 1];
    if (next) {
      const n = new window.Image();
      n.crossOrigin = 'anonymous';
      n.src = String(next);
    }

    return () => {
      cancelled = true;
    };
  }, [currentImg, imgIndex, candidates]);

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
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-primary transition-colors flex items-center justify-center bg-gray-50 text-gray-700">
            {(member.image && member.image !== '#') ? (
              <img src={String(currentImg)} alt={member.name} className="w-full h-full object-cover" onError={handleImgError} loading={preloaded ? 'eager' : 'lazy'} />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                {getInitials(member.name)}
              </div>
            )}
          </div>
          <h3 className="font-serif text-lg text-black mb-1">{member.name}</h3>
          <p className="text-primary text-sm font-medium mb-1">{member.position}</p>
          <p className="text-gray-500 text-xs mb-4">{member.branch}</p>
          <div className="flex justify-center gap-2">
            {isValidLinkedIn(member.linkedin) ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark"
                aria-label={`Open ${member.name}'s LinkedIn profile`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            ) : (
              <button
                onClick={handleMissingLinkedIn}
                className=" text-gray-400 cursor-not-allowed"
                title="LinkedIn not available"
                aria-disabled
              >
                <Linkedin className="w-4 h-4" />
              </button>
            )}
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
              <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-primary flex items-center justify-center bg-gray-50 text-gray-700">
                {(member.image && member.image !== '#') ? (
                  <img src={String(currentImg)} alt={member.name} className="w-full h-full object-cover" onError={handleImgError} loading={preloaded ? 'eager' : 'lazy'} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-semibold">
                    {getInitials(member.name)}
                  </div>
                )}
              </div>
              <h3 className="font-serif text-2xl text-black mb-2">{member.name}</h3>
              <p className="text-primary font-semibold text-base mb-1">{member.position}</p>
              <p className="text-gray-600 text-sm mb-4">{member.branch}</p>
              <div className="flex justify-center gap-3 mb-4">
                {isValidLinkedIn(member.linkedin) ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors text-primary"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                ) : (
                  <button
                    onClick={handleMissingLinkedIn}
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-400 cursor-not-allowed"
                    title="LinkedIn not available"
                    aria-disabled
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                )}
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
