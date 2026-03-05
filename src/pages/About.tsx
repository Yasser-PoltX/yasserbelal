
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Code, Database, Layers, Server, ShieldCheck, Users, Keyboard, Brain, Eye, MessageSquare, Globe, GitBranch } from 'lucide-react';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "C++", category: "Programming", icon: <Code size={20} /> },
    { name: "OOP", category: "Programming", icon: <Layers size={20} /> },
    { name: "HTML", category: "Web", icon: <Code size={20} /> },
    { name: "PHP", category: "Programming", icon: <Code size={20} /> },
    { name: "MySQL", category: "Database", icon: <Database size={20} /> },
    { name: "Laravel", category: "Framework", icon: <Code size={20} /> },
    { name: "Kali Linux", category: "OS", icon: <Server size={20} /> },
    { name: "Ethical Hacking", category: "Security", icon: <ShieldCheck size={20} /> },
    { name: "Cybersecurity", category: "Security", icon: <ShieldCheck size={20} /> },
    { name: "Networking", category: "Infrastructure", icon: <Server size={20} /> },
    { name: "OSI Model", category: "Networking", icon: <Layers size={20} /> },
    { name: "TCP/IP", category: "Networking", icon: <Globe size={20} /> },
    { name: "Routing", category: "Networking", icon: <Globe size={20} /> },
    { name: "Git", category: "Tools", icon: <GitBranch size={20} /> },
    { name: "GitHub", category: "Tools", icon: <GitBranch size={20} /> },
    { name: "Human Resources", category: "Soft Skills", icon: <Users size={20} /> },
    { name: "Teamwork", category: "Soft Skills", icon: <Users size={20} /> },
    { name: "Communication", category: "Soft Skills", icon: <MessageSquare size={20} /> },
    { name: "Problem-Solving", category: "Soft Skills", icon: <Brain size={20} /> },
    { name: "Analytical Thinking", category: "Soft Skills", icon: <Brain size={20} /> },
    { name: "Attention to Detail", category: "Soft Skills", icon: <Eye size={20} /> },
    { name: "Speed Typing", category: "Soft Skills", icon: <Keyboard size={20} /> },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="section-heading">About Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className={`md:col-span-2 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="galaxy-card p-6 h-full">
              <h2 className="text-2xl font-heading font-bold mb-4 text-white">My Journey</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a Information Technology student and competitive and creative programmer with a passion for learning
                  and experiencing new things. I attend the Faculty of Computers and Informatics at Zagazig University.
                </p>
                <p>
                  My passion for technology began when I first discovered programming, and since then,
                  I've been on a continuous journey of learning and growth. I've developed skills in various
                  programming languages and technologies, with a particular focus on web development and cybersecurity.
                </p>
                <p>
                  I enjoy solving complex problems and building innovative solutions. My experience includes
                  working on various projects that have helped me apply theoretical knowledge to practical scenarios.
                </p>
                <p>
                  Beyond technical skills, I value teamwork and collaboration. Through my involvement with the ICPC
                  community and as a Human Resources team member, I've developed strong communication and leadership abilities.
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="galaxy-card p-6 h-full">
              <h2 className="text-2xl font-heading font-bold mb-4 text-white">Education</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={18} className="text-galaxy-accent" />
                    <h3 className="font-medium text-white">Faculty of Computers and Informatics</h3>
                  </div>
                  <p className="text-sm text-gray-400">Zagazig University</p>
                  <p className="text-sm text-gray-400">Bachelor's degree, 10/2023 - Present</p>
                  <p className="text-sm text-gray-400">GPA: 3.1</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={18} className="text-galaxy-accent" />
                    <h3 className="font-medium text-white">Faqous Military High School</h3>
                  </div>
                  <p className="text-sm text-gray-400">High School Diploma, 09/2022 - 08/2023</p>
                  <p className="text-sm text-gray-400">Grade: 83.05%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mb-12 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-heading font-bold mb-6 text-white">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-galaxy-accent/50 transition-all">
                <CardContent className="flex flex-col items-center justify-center p-4 h-full">
                  <div className="text-galaxy-accent mb-2">
                    {skill.icon}
                  </div>
                  <h3 className="font-medium text-white text-center">{skill.name}</h3>
                  <p className="text-xs text-gray-400 text-center">{skill.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
