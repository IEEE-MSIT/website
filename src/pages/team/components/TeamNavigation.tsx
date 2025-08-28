interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TeamNavigationProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TeamNavigation = ({ tabs, activeTab, setActiveTab }: TeamNavigationProps) => {
  return (
    <section className="py-12 px-4 md:px-6 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 will-change-transform ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary hover:scale-105'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamNavigation;
