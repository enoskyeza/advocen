import { useState } from 'react';
import { Target, Compass, Users, Scale, Lightbulb, Shield, X, Mail, Phone, GraduationCap, Briefcase } from 'lucide-react';

export default function AboutContent() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Simon Peter T. Kasyate',
      title: 'Public Affairs & Strategic Partnerships Lead',
      image: '/team/simon_peter.png',
      bio: 'An accomplished Public Affairs, Strategic Partnerships, Marketing and Corporate Communications leader with 24+ years of experience driving impact, fostering collaboration, and enhancing organizational visibility.',
      award: 'Award-winning journalist (CNN Africa Journalist of the Year 2004)',
      expertise: [
        'Strategic Advocacy: Involved in deliberate and structured approach to influencing policy, public opinion and decision making processes.',
        'Strategic Communication: Crafting tailored strategies for organizational visibility and stakeholder engagement.',
        'Public Affairs: Advising on government relations, policy, and regulatory environments.',
        'Strategic Partnerships: Fostering alliances for business growth and collaborative impact.',
        'Marketing: Understanding and promoting products, services or ideas to target audiences through strategic planning, creative campaigns and data driven insights to drive engagement.',
        'Sustainability: Guiding organizations on ESG integration and responsibility.',
        'Media & Journalism: Award-winning multimedia journalist with print, radio, TV experience.'
      ],
      experience: [
        'Team Lead Private Consultant, PQ Strategies (U) Ltd: Bespoke consulting on communication, brand, partnerships, sustainability',
        'Deputy Director - Public & Corporate Affairs, Kampala Capital City Authority: Led public affairs strategy, #SmartCity partnerships, advocacy campaigns',
        'Country Lead Program Communication, Mastercard Foundation: Strengthened communication models, reputation, and stakeholder relations',
        'Head, Public and Corporate affairs at Eskom Uganda Ltd and Uganda electricity Generation company Limited',
        'Press and Information Officer, European Union Delegation to Kampala'
      ],
      education: [
        'MBA, Makerere University Business School (2023)',
        'Masters in International Relations, Makerere University (2010)',
        'BA in Social Sciences, Makerere University (2004)'
      ],
      email: 'simonkasyate@advocen.org',
      phone: '+256 771 006396'
    },
    {
      name: 'Dorick Katusiime',
      title: 'Biochemist/Chemist',
      image: '/team/dorick.jpg',
      bio: 'A quality-focused Biochemist/chemist with hands-on experience in chemical analysis and microbiological testing. Proficient in conductivity, titrations and pH embarked with skills in data interpretation, documentation, and supporting product release within regulated laboratory environments.',
      location: 'Nansana, Kampala (U)',
      experience: [
        'ElsMed Healtineer, Clinical Chemistry Laboratory of Mulago Hospital / Volunteership (9/9/2025 - present): Technical Laboratory & Equipment Skills, Application & Training Skills, Problem solving & compliance knowledge and patient care.',
        'Uganda Virus Research Institute (UVRI) / Internship (26/6/2023 - 4/8/2023): Quality assurance tests for HIV, Syphilis and Hepatitis (Internal and external quality laboratory assessment/analysis)',
        'Immunisation public sector unit of Mulago Hospital / Internship (23/6/2022 - 5/8/2022): Vaccine management using the cold chain inventory and quality vaccine management.'
      ],
      education: [
        'Bachelor of Science (Biochemistry, Chemistry), Makerere University (2021-2024)',
        'UACE, Ndejje Senior Secondary School (2019-2020): Biology, Chemistry and Mathematics/ICT',
        'UCE, Seeta High School Green Campus (2015-2018): Division 1 / 11 aggregates'
      ],
      skills: ['Report writing skills', 'Analytical skills', 'Management skills', 'Communication skills', 'Computer skills', 'Leadership skills'],
      email: 'katusiimedorick@advocen.org',
      phone: '0763308263'
    },
    {
      name: 'Sheba Koreta',
      title: 'Research and Advocacy Professional',
      image: 'https://ui-avatars.com/api/?name=Sheba+Koreta&background=1a3a52&color=d4af37&size=300&bold=true',
      bio: 'A dynamic research and advocacy professional passionate about advancing evidence-based policy and inclusive development in Uganda. At Advocen Initiative, she contributes to projects that bridge the gap between research and actionable policy, focusing on governance, health law, and sustainable community development.',
      expertise: [
        'Health Policy and Governance',
        'Human Rights and Social Inclusion',
        'Education and Youth Development',
        'Community Engagement and Public Dialogue',
        'Data Analysis and Policy Research'
      ],
      experience: [
        'Supporting field research and data collection for policy reports',
        'Assisting in policy analysis and stakeholder consultations',
        'Coordinating advocacy campaigns that amplify citizen voices in governance and social policy'
      ],
      education: [
        'Degree in Law',
        'Advocacy fellowships and professional development workshops'
      ],
      email: 'shebakoreta@advocen.org',
      phone: ''
    },
    {
      name: 'Rosemary Kyompa',
      title: 'Management & Project Coordination',
      image: 'https://ui-avatars.com/api/?name=Rosemary+Kyompa&background=1a3a52&color=d4af37&size=300&bold=true',
      bio: 'A highly dedicated and motivated professional with extensive experience in leadership, advocacy and project management. Rosemary brings highly developed analytical and problem-solving skills, effective communication abilities, and the capacity to work independently or in teams to drive organizational success.',
      expertise: [
        'Project Management',
        'Leadership & Interpersonal Skills',
        'Public Relations and Advocacy',
        'Analytical & Strategic Planning',
        'Community Outreach and Program Development',
        'Cross-cultural Communication'
      ],
      experience: [
        'Director of Community Outreach, Ruach Social Enterprise: Developed and managed programs to secure key relationships with students, educators, community organizations and local government',
        'Career Counselor, Reintegration Academy/Prison Education Project: Conducted career and life skills counseling for inmates, achieving 98% success rate across 15 academies',
        'Casualty Adjuster, Mercury Insurance Group: Investigated and evaluated claims, saving over $500,000 through proactive settlement strategies',
        'Office Manager, Cal Poly Pomona: Formulated programs, supervised staff, and coordinated campus events and partnerships'
      ],
      education: [
        'Masters of Public Administration, California State Polytechnic University (2013)',
        'Bachelors of Science in Business Administration (Management, HR, Finance, Real Estate & Law), California State Polytechnic University (2006)'
      ],
      skills: ['Microsoft Office Suite', 'Project Management', 'Public Policy', 'Strategic Planning', 'Advocacy', 'Leadership'],
      email: 'kyomparosemary@advocen.org',
      phone: '+256 703 579 791'
    },
    {
      name: 'Ann',
      title: 'Finance and Administrative Associate — Advocen Initiative',
      image: 'https://ui-avatars.com/api/?name=Ann+Last+Name&background=1a3a52&color=d4af37&size=300&bold=true',
      bio: 'Ann is a results-driven finance and administrative professional with a strong background in organizational management, accounting, and operational efficiency. At Advocen Initiative, she oversees financial planning, budgeting, and internal controls to ensure transparency and accountability across all programs.',
      expertise: [
        'Financial planning and budgeting',
        'Internal controls and accountability',
        'Organizational management and administration',
        'Financial reporting and procurement',
        'Project support and operational efficiency'
      ],
      experience: [
        'Oversees financial planning, budgeting, and internal controls at Advocen Initiative',
        'Manages day-to-day administrative functions and departmental coordination',
        'Supports policy implementation and internal procedures',
        'Contributes to advancing health law, governance, and policy reform through strong financial and administrative systems'
      ],
      education: [],
      skills: ['Accounting', 'Financial reporting', 'Procurement', 'Project support', 'Administration', 'Operational efficiency'],
      email: 'ann@advocen.org',
      phone: ''
    }
  ];

  const approach = [
    'Evidence-Based: Every position we take is grounded in research and reliable data.',
    'Collaborative: We engage governments, academia, and communities to co-create solutions.',
    'Advocacy-Focused: We ensure that research drives policy reform and measurable change.',
    'Health-Centered: We integrate public health and wellbeing into all aspects of development.',
    'Inclusive: Our work promotes equity, participation, and empowerment for all Ugandans.'
  ];

  const values = [
    { title: 'Integrity', description: 'We uphold transparency and accountability in all our work.', icon: Shield },
    { title: 'Equity', description: 'We champion fairness and access to opportunity and care.', icon: Scale },
    { title: 'Innovation', description: 'We embrace new ideas and technology to enhance policy impact.', icon: Lightbulb },
    { title: 'Empowerment', description: 'We strengthen voices and systems that advocate for positive change.', icon: Users }
  ];

  return (
    <div>
      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6 animate-fadeIn">
              <p className="section-subtitle">Who We Are</p>
              <h2 className="section-title">About Advocen Initiatives</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-primary">Advocen Initiatives</strong> is a Uganda-based research and advocacy organization dedicated to advancing evidence-based policy, health law, and inclusive development.
                </p>
                <p>
                  We unite researchers, policy experts, and advocates who believe that sustainable progress begins with credible data, informed debate, and equitable governance.
                </p>
                <p>
                  Our work bridges research and real-world impact — supporting government institutions, civil society, and the private sector to make informed policy decisions that strengthen health systems, empower communities, and promote sustainable use of natural resources.
                </p>
              </div>
            </div>

            {/* Right - Image Collage */}
            <div className="animate-slideIn">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Policy Discussion"
                className="w-full h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-3">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A just, healthy, and prosperous Uganda where policies are guided by evidence, human rights are protected, and sustainable development benefits every citizen.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-3">
                  <Compass className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To generate high-quality research and advocate for policies that strengthen governance, health systems, and community wellbeing across Uganda&apos;s key sectors.
              </p>
              <p className="text-gray-600">
                Through collaboration with policymakers, researchers, and development partners, we transform data into action and evidence into lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Our Team</p>
            <h2 className="section-title mb-6">Meet Our Experts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A dedicated team of professionals committed to advancing evidence-based policy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedMember(member)}
                className="bg-beige p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-gold font-semibold text-sm mb-3">{member.title}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">{member.bio}</p>
                  <button className="bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-gold hover:text-primary transition-colors duration-300">
                    View Full Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-primary text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                <p className="text-gold text-lg mt-1">{selectedMember.title}</p>
              </div>
              <button onClick={() => setSelectedMember(null)} className="hover:bg-white/20 p-2 transition-colors">
                <X className="h-8 w-8" />
              </button>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-1">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-auto shadow-lg"
                  />
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href={`mailto:${selectedMember.email}`} className="hover:text-primary">{selectedMember.email}</a>
                    </div>
                    {selectedMember.phone && (
                      <div className="flex items-center gap-3 text-gray-700">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>{selectedMember.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed">{selectedMember.bio}</p>
                    {selectedMember.award && (
                      <p className="text-gold font-semibold mt-4">{selectedMember.award}</p>
                    )}
                  </div>

                  {selectedMember.expertise && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                        <Lightbulb className="h-6 w-6" />
                        Key Expertise
                      </h3>
                      <ul className="space-y-2">
                        {selectedMember.expertise.map((item, idx) => (
                          <li key={idx} className="text-gray-700 leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedMember.skills && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.skills.map((skill, idx) => (
                          <span key={idx} className="bg-beige px-4 py-2 text-sm text-primary font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Briefcase className="h-6 w-6" />
                      Experience
                    </h3>
                    <ul className="space-y-3">
                      {selectedMember.experience.map((exp, idx) => (
                        <li key={idx} className="text-gray-700 leading-relaxed border-l-4 border-gold pl-4">
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                      <GraduationCap className="h-6 w-6" />
                      Education
                    </h3>
                    <ul className="space-y-2">
                      {selectedMember.education.map((edu, idx) => (
                        <li key={idx} className="text-gray-700 leading-relaxed">
                          • {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Our Approach */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-[4%]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {approach.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Our Values</p>
            <h2 className="section-title">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="bg-primary p-6 w-fit mx-auto mb-4 group-hover:bg-gold transition-colors duration-300">
                    <Icon className="h-10 w-10 text-white group-hover:text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Join Us</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
            <p>
              At Advocen Initiatives, we believe policy can save lives, uplift communities, and protect the planet. Whether you&apos;re a policymaker, researcher, student, or advocate, your contribution matters.
            </p>
            <span className="font-semibold text-primary">
              Together, we can shape a Uganda where progress is informed, equitable, and sustainable.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group relative overflow-hidden bg-primary text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-gold transform origin-left scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100"></span>
              <span className="relative z-10">Partner With Us</span>
            </a>
            <a
              href="/contact"
              className="group relative overflow-hidden bg-gold text-primary px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-primary transform origin-left scale-x-0 transition-transform duration-700 ease-in-out group-hover:scale-x-100"></span>
              <span className="relative z-10 group-hover:text-white">Get Involved</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}