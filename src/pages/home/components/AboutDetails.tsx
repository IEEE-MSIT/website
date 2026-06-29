import {
  CheckCircle2,
  Target,
  Lightbulb,
  Globe,
  Users,
  Shield,
  Briefcase,
  Zap,
} from 'lucide-react';

const AboutDetails = () => {
  const benefits = [
    'Access to technical workshops, seminars, and hands-on learning sessions.',
    'Opportunities to participate in hackathons, competitions, and innovation challenges.',
    'Networking with industry professionals, researchers, and fellow students.',
    'Exposure to emerging technologies and industry trends.',
    'Leadership and team-building opportunities through chapter activities.',
    'Collaboration on impactful projects and research initiatives.',
    'Professional development through mentorship and skill-building programs.',
    'Membership in a global community of engineers, technologists, and innovators.',
  ];

  const values = [
    {
      title: 'Trust',
      description:
        'Acting with integrity, transparency, and ethical responsibility in all endeavors.',
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Growth and Nurturing',
      description:
        'Encouraging continuous learning, professional development, and personal growth.',
      icon: <Zap className="w-6 h-6 text-secondary" />,
    },
    {
      title: 'Global Community Building',
      description:
        'Fostering collaboration and connection across cultures, disciplines, and geographic boundaries.',
      icon: <Globe className="w-6 h-6 text-accent" />,
    },
    {
      title: 'Partnership',
      description:
        'Working together with members, volunteers, industry, academia, and society to achieve shared goals.',
      icon: <Users className="w-6 h-6 text-accent" />,
    },
    {
      title: 'Service and Professionalism',
      description:
        'Delivering value through excellence, dedication, and commitment to advancing technology and humanity.',
      icon: <Briefcase className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-white relative z-20">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Why Join Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">Why Join IEEE MSIT?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              IEEE MSIT is more than a technical society—it's a community of innovators, builders,
              researchers, and future leaders. By becoming a member, students gain opportunities to
              learn beyond the classroom, collaborate with like-minded peers, and develop the
              technical and professional skills needed to thrive in a rapidly evolving world.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-black mb-6">Benefits of Joining</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-8 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Lightbulb className="w-48 h-48 text-blue-600" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-black">IEEE Vision</h3>
              </div>
              <p className="text-xl text-gray-800 font-medium leading-relaxed">
                Advancing technology for the benefit of humanity.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Target className="w-48 h-48 text-purple-600" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-black">IEEE Mission</h3>
              </div>
              <p className="text-xl text-gray-800 font-medium leading-relaxed">
                IEEE's core purpose is to foster technological innovation and excellence for the
                benefit of humanity.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">IEEE Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The fundamental beliefs that guide our behavior and decision-making.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-black mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
