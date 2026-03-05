import { useEffect, useState } from 'react';
import {
  SiTelegram,
  SiLinkedin,
  SiGithub,
  SiCodeforces,
  SiTryhackme,
  SiHackthebox,
  SiX,
  SiInstagram
} from 'react-icons/si';
import {
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className={`mb-12 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="section-heading">Contact Me</h1>
          <p className="text-gray-300 max-w-3xl">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-8">
              <div className="galaxy-card p-8">
                <h2 className="text-2xl font-heading font-bold mb-8 text-white">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Mail size={24} className="text-galaxy-accent mt-1" />
                    <div>
                      <h3 className="font-medium text-white mb-2">Email</h3>
                      <a href="mailto:yasserbelal2005@gmail.com" className="text-gray-300 hover:text-galaxy-accent">
                        yasserbelal2005@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone size={24} className="text-galaxy-accent mt-1" />
                    <div>
                      <h3 className="font-medium text-white mb-2">Phone</h3>
                      <a href="tel:+201028427473" className="text-gray-300 hover:text-galaxy-accent">
                        +20 102 842 7473
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin size={24} className="text-galaxy-accent mt-1" />
                    <div>
                      <h3 className="font-medium text-white mb-2">Location</h3>
                      <p className="text-gray-300">
                        Faqous, Al-Sharqia Governorate, Egypt
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="galaxy-card p-8">
                <h2 className="text-2xl font-heading font-bold mb-6 text-white">Connect with Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://github.com/Yasser-PoltX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="galaxy-card p-6 flex flex-col items-center text-center hover:border-galaxy-accent/50 transition-all group"
                  >
                    <SiGithub size={36} className="text-galaxy-accent mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg font-medium">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/yasser-belal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="galaxy-card p-6 flex flex-col items-center text-center hover:border-galaxy-accent/50 transition-all group"
                  >
                    <SiLinkedin size={36} className="text-galaxy-accent mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg font-medium">LinkedIn</span>
                  </a>

                  <a
                    href="https://t.me/Yasser_PoltX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="galaxy-card p-6 flex flex-col items-center text-center hover:border-galaxy-accent/50 transition-all group"
                  >
                    <SiTelegram size={36} className="text-galaxy-accent mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg font-medium">Telegram</span>
                  </a>

                  <a
                    href="https://codeforces.com/profile/Yaser_PoltX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="galaxy-card p-6 flex flex-col items-center text-center hover:border-galaxy-accent/50 transition-all group"
                  >
                    <SiCodeforces size={36} className="text-galaxy-accent mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg font-medium">Codeforces</span>
                  </a>
                  <a
                    href="https://tryhackme.com/p/yaserPoltX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="galaxy-card p-6 flex flex-col items-center text-center hover:border-galaxy-accent/50 transition-all group"
                  >
                    <SiTryhackme size={36} className="text-galaxy-accent mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg font-medium">TryHackMe</span>
                  </a>
                  <a
                    href="https://academy.hackthebox.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="galaxy-card p-6 flex flex-col items-center text-center hover:border-galaxy-accent/50 transition-all group"
                  >
                    <SiHackthebox size={36} className="text-galaxy-accent mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg font-medium">Hack The Box</span>
                  </a>
                  <a
                    href="https://x.com/Yasser_PoltX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="galaxy-card p-6 flex flex-col items-center text-center hover:border-galaxy-accent/50 transition-all group"
                  >
                    <SiX size={36} className="text-galaxy-accent mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg font-medium">X (Twitter)</span>
                  </a>
                  <a
                    href="https://www.instagram.com/yasser___belal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="galaxy-card p-6 flex flex-col items-center text-center hover:border-galaxy-accent/50 transition-all group"
                  >
                    <SiInstagram size={36} className="text-galaxy-accent mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg font-medium">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
