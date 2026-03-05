
import { useEffect, useState } from 'react';
import { CalendarDays, User, Briefcase, ExternalLink, Award } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  certificateUrl?: string;
}

const Experience = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const certificates = [
    {
      title: "Computer Network Fundamentals",
      url: "https://maharatech.gov.eg/mod/customcert/view.php?id=994&downloadown=1",
      description: "Networking - OSI Model, Internet Protocol Suite (TCP/IP), Routing, Transmission Media",
    },
    {
      title: "Git and GitHub",
      url: "https://www.udemy.com/certificate/UC-bf9bfa00-dc06-4672-91c0-ab366921f300/",
      description: "Git - GitHub",
    },
    {
      title: "The Open University Digital & Computing",
      url: "https://www.open.edu/openlearn/digital-computing/simple-coding/content-section-0",
      description: "Introductory level, Hardware, Software, Simple coding",
    },
    {
      title: "AUC 101 Foundations of English",
      url: "https://openlearn.aucegypt.edu/",
      description: "English - Teaching English as a Second Language",
    },
  ];

  const experiences: ExperienceItem[] = [
    {
      title: "Human Resources Team Member",
      company: "GDG On-Campus Zagazig",
      period: "03/2025 - 07/2025",
      location: "GDG On-Campus Zagazig",
      responsibilities: [
        "Worked as a Human Resources Team Member supporting recruitment and organizational tasks.",
        "Assisted in coordinating interviews, managing candidate communications, and maintaining HR records.",
      ],
      certificateUrl: "https://drive.google.com/file/d/18V7_4kCB_3IW4V4IhBrT-4BZISE___NJ/view?usp=sharing",
    },
    {
      title: "Human Resources Team Member",
      company: "ICPC Zagazig Community",
      period: "01/2025 - present",
      location: "ICPC Zagazig Community",
      responsibilities: [
        "Worked as a Human Resources Team Member supporting recruitment and organizational tasks.",
        "Assisted in coordinating interviews, managing candidate communications, and maintaining HR records.",
        "Collaborated with team members to organize training sessions and onboarding activities for new interns.",
        "Monitored and evaluated mentors' performance and created Google Forms to assess the effectiveness of training sessions.",
        "Utilized Google Sheets to manage and analyze evaluation data, contributing to continuous improvement efforts within the ICPC community.",
      ],
      certificateUrl: "https://drive.google.com/file/d/16u4jxwKkMbfmkHZZRCQsEOgrosupeVRX/view?usp=sharing",
    },
    {
      title: "Member",
      company: "IEEE ZSB CS",
      period: "11/2024 - 09/2025",
      location: "IEEE ZSB CS",
      responsibilities: [
        "Started a journey into cybersecurity, learning the basics of network security, ethical hacking, penetration testing, and security protocols.",
        "Took in team activities, improving teamwork, collaboration, and communication skills.",
      ],
      certificateUrl: "https://drive.google.com/file/d/1yOY_NhQSJRHkE4x0B7ZokbCFoU4iFy6s/view?usp=sharing",
    },
    {
      title: "Trainee",
      company: "ICPC Zagazig Community",
      period: "10/2024 - 11/2024",
      location: "ICPC Zagazig Community",
      responsibilities: [
        "A community focused on training students on problem-solving",
        "Solved programming problems on different topics",
        "Participated in training sessions to enhance problem-solving and competitive programming skills.",
        "Collaborated with peers and mentors to solve algorithmic challenges in preparation for ICPC competitions.",
        "Engaged in remote activities to support the growth and engagement of the ICPC community.",
      ],
      certificateUrl: "https://drive.google.com/file/d/1nliHmFB12YhrbgWgWT_VFljzCnHrOEOP/view?usp=drive_link",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className={`mb-12 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="section-heading">Experience</h1>
          <p className="text-gray-300 max-w-3xl">
            My professional journey and roles that have shaped my career path and skills development.
          </p>
        </div>

        <div className="relative ml-4">
          {/* Timeline Line */}
          <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-galaxy-accent/30" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-12 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-galaxy-dark border-2 border-galaxy-accent flex items-center justify-center z-10">
                  <Briefcase size={16} className="text-galaxy-accent" />
                </div>

                {/* Content */}
                <div className="galaxy-card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-white">{exp.title}</h2>
                      <div className="flex items-center text-galaxy-accent mt-1">
                        <User size={16} className="mr-1" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-gray-400">
                      <CalendarDays size={16} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-300">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-galaxy-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.certificateUrl && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-galaxy-accent hover:text-galaxy-glow transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={14} />
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className={`mt-16 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${(experiences.length + 1) * 150}ms` }}>
          <h2 className="section-heading">Certificates</h2>
          <p className="text-gray-300 max-w-3xl mb-8">
            Professional certifications and courses that have enhanced my knowledge and expertise.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`galaxy-card p-6 transition-all duration-700 hover:border-galaxy-accent/50 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(experiences.length + index + 2) * 150}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Award size={20} className="text-galaxy-accent flex-shrink-0" />
                  <h3 className="font-medium text-white">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-galaxy-accent transition-colors inline-flex items-center gap-1"
                    >
                      {cert.title}
                      <ExternalLink size={14} className="text-galaxy-accent" />
                    </a>
                  </h3>
                </div>
                <p className="text-sm text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
