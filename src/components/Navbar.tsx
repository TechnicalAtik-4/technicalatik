import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Projects', href: '#projects' },
  { name: 'Books', href: '#books' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#0a0a0a]/70 backdrop-blur-md border-teal-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative group relative z-50">
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
            Technical Atik
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 font-medium text-sm relative group hover:text-teal-400 transition-colors duration-300"
            >
              {item.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-teal-400 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <a
            href="#contact"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-teal-600/20 text-teal-300 font-medium border border-teal-500/50 hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)]"
          >
            Hire Me
          </a>
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-teal-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-teal-900/50 flex flex-col shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-teal-400 text-lg font-medium border-b border-gray-800/50 pb-4"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex justify-center mt-4 px-6 py-3 rounded-full bg-teal-600/20 text-teal-300 font-medium border border-teal-500/50 hover:bg-teal-500 hover:text-white transition-all shadow-[0_0_15px_rgba(20,184,166,0.3)]"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
