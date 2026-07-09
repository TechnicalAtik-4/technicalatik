import { motion } from 'motion/react';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const words = [
    'Mastering Web Development',
    'Cinematic Video Editing',
    'Advance Viral Filter SEO',
    'Ethical Hacking',
  ];
  const typingText = useTypewriter({ words, typingSpeed: 80, deletingSpeed: 50 });

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-12 px-4 relative overflow-hidden z-10">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center max-w-5xl mx-auto w-full"
      >
        {/* Pre-heading Pill */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 px-6 py-2 rounded-full glass-panel border-teal-500/30 text-teal-300 font-medium text-sm md:text-base flex items-center shadow-[0_0_15px_rgba(20,184,166,0.2)]"
        >
          <span className="mr-2">✨</span> Top Rated Freelancer in Bangladesh
        </motion.div>

        {/* Avatar */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mb-10 group"
        >
          {/* Outer glowing aura ring */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 rounded-full bg-teal-500/20 blur-xl group-hover:bg-teal-400/30 transition-colors duration-500"
          ></motion.div>
          
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full p-[3px] bg-gradient-to-tr from-teal-400 via-emerald-500 to-teal-500/20 relative z-10 shadow-[0_0_50px_rgba(20,184,166,0.4)]">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] p-1">
              <img
                src="https://raw.githubusercontent.com/TechnicalAtik-4/technicalatik/main/png/professional-profile-picture%20Technical%20Atik.png"
                alt="Technical Atik"
                className="w-full h-full rounded-full object-cover border-2 border-teal-900/50"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Technical+Atik&background=0d1117&color=14b8a6&size=256&font-size=0.33`;
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-2xl">
          Hi, I am <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 drop-shadow-[0_0_20px_rgba(45,212,191,0.5)]">
            Technical Atik.
          </span>
        </h1>
        
        {/* Typewriter */}
        <div className="h-10 md:h-14 flex items-center justify-center mb-6">
          <p className="text-2xl md:text-4xl text-gray-300 font-medium">
            <span className="text-teal-300 font-mono border-r-4 border-teal-400 pr-2 animate-pulse drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">{typingText}</span>
          </p>
        </div>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-12 px-4">
          Crafting premium digital experiences, building robust web architectures, and creating high-retention visual content. I transform ideas into scalable, aesthetically perfect realities.
        </p>

        {/* Milestones / Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 w-full px-4">
          {[
            { icon: '🏆', text: '100K+ YouTube Community' },
            { icon: '🚀', text: 'Advance Viral Filter Expert' },
            { icon: '💻', text: 'Full-Stack & Web Architect' }
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (idx * 0.1), duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-3 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.1)] hover:border-teal-400/50 hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] transition-all"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-gray-200 font-medium text-sm md:text-base">{badge.text}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-4"
        >
          <a href="#projects" className="relative group px-10 py-5 rounded-full bg-teal-500 text-gray-900 font-bold text-lg overflow-hidden transition-all shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:shadow-[0_0_50px_rgba(20,184,166,0.8)] hover:scale-105">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">Explore My Universe</span>
          </a>
          <a href="#contact" className="px-10 py-5 rounded-full glass-panel border-2 border-teal-500/50 text-teal-300 font-bold text-lg hover:bg-teal-900/30 hover:border-teal-400 hover:text-white transition-all shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:scale-105">
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center pointer-events-none"
      >
        <span className="text-xs tracking-widest uppercase mb-2 text-teal-500/80">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-teal-500/50 rounded-full flex justify-center p-1"
        >
          <motion.div 
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 bg-teal-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
