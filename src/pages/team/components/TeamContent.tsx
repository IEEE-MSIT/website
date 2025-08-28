
import MemberCard from '../../../components/ui/MemberCard';

import { execom2025 } from '../../../data/execom2025';
import { execom2024 } from '../../../data/execom2024';

import type { Member } from '../../../components/ui/MemberCard';

interface TeamContentProps {
  activeTab: string;
}

const TeamContent = ({ activeTab }: TeamContentProps) => {
  const renderMember = (member: Member, index: number, year?: number) => (
    <MemberCard key={index} member={member} year={year} />
  );

  const renderChapterSection = (chapterName: string, members: Member[], year?: number) => (
    <div key={chapterName} className="mb-12">
      <h3 className="text-2xl font-serif text-black mb-6 text-center">{chapterName}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((m, i) => renderMember(m, i, year))}
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative">

          {activeTab === 'execom2025' && (
            <div>
              <h2 className="text-3xl font-serif text-black mb-8 text-center">
                Executive Committee 2025
              </h2>
              <div className="mb-16">
                <h3 className="text-2xl font-serif text-primary mb-8 text-center">IEEE Chapters</h3>
                <div className="space-y-12">
                  {Object.entries(execom2025.chapters).map(([chapterName, members]) =>
                    renderChapterSection(chapterName, members as Member[], 2025)
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-primary mb-8 text-center">Committees</h3>
                <div className="space-y-12">
                  {Object.entries(execom2025.committees).map(([committeeName, members]) =>
                    renderChapterSection(committeeName, members as Member[], 2025)
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'execom2024' && (
            <div>
              <h2 className="text-3xl font-serif text-black mb-8 text-center">
                Executive Committee 2024
              </h2>
              <div className="mb-16">
                <h3 className="text-2xl font-serif text-primary mb-8 text-center">IEEE Chapters</h3>
                <div className="space-y-12">
                  {Object.entries(execom2024.chapters).map(([chapterName, members]) =>
                    renderChapterSection(chapterName, members as Member[], 2024)
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-primary mb-8 text-center">Committees</h3>
                <div className="space-y-12">
                  {Object.entries(execom2024.committees).map(([committeeName, members]) =>
                    renderChapterSection(committeeName, members as Member[], 2024)
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamContent;
