import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const handleDownloadCV = () => {
    window.open('/assit/Yasser-Belal-Salah-Shehata-Resume-2025-11-05.pdf', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black/40 backdrop-blur-md border-b border-white/10' : 'py-4 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-heading text-xl font-bold text-white cosmic-glow">Yasser Belal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-300 hover:text-galaxy-accent ${location.pathname === link.path ? 'nav-link-active' : 'text-white/80'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleDownloadCV}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-galaxy-accent/20 text-galaxy-accent hover:bg-galaxy-accent/30 transition-colors duration-300"
          >
            <Download size={16} />
            <span>CV</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-[60px] left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/10 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 px-4 w-full transition-colors duration-300 hover:text-galaxy-accent ${location.pathname === link.path ? 'text-galaxy-accent' : 'text-white/80'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleDownloadCV}
            className="flex items-center justify-center space-x-2 py-2 px-4 w-full rounded-md bg-galaxy-accent/20 text-galaxy-accent hover:bg-galaxy-accent/30 transition-colors duration-300"
          >
            <Download size={16} />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
