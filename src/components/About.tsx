import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="h-px bg-teal-900/50 flex-grow ml-4 mt-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[50px] rounded-full" />
          
          <div className="flex gap-6 items-start relative z-10">
            <div className="mt-1 hidden sm:block p-3 bg-teal-950/50 rounded-2xl border border-teal-900/50 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
               <Terminal size={24} />
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              I am a self-motivated tech enthusiast with over <span className="text-teal-400 font-medium tracking-wide">2+ years of experience</span> in professional video editing, YouTube content creation, and web technology. I am constantly aiming to grow my skills in ethical hacking, web development, and professional filmmaking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
