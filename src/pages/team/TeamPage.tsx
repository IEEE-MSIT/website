import TeamHero from './components/TeamHero';
import TeamContent from './components/TeamContent';


const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <TeamHero />
      <TeamContent activeTab={'execom2025'} />
    </div>
  );
};

export default TeamPage;
