import { motion } from 'motion/react';
import { Mail, MapPin, Send, Youtube, Linkedin, Facebook, Instagram, Twitter, Twitch, Ghost, Phone } from 'lucide-react';

const socialLinks = [
  { name: 'YouTube', url: 'https://www.youtube.com/@TechnicalAtikVlog', icon: <Youtube size={22} /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/technicalatik4/', icon: <Linkedin size={22} /> },
  { name: 'Facebook', url: 'https://www.facebook.com/TechnicalAtik4', icon: <Facebook size={22} /> },
  { name: 'Instagram', url: 'https://www.instagram.com/technicalatik4', icon: <Instagram size={22} /> },
  { name: 'X (Twitter)', url: 'https://x.com/technicalatik4', icon: <Twitter size={22} /> },
  { name: 'Twitch', url: 'https://www.twitch.tv/technicalatik4', icon: <Twitch size={22} /> },
  { name: 'Snapchat', url: 'https://www.snapchat.com/@technicalatik4', icon: <Ghost size={22} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.5 } }
};

export function Contact() {
  const headline = "Let's Build Something Extraordinary";

  return (
    <section id="contact" className="py-24 px-4 relative mt-12 overflow-hidden">
      {/* Decorative gradient line at the top of footer area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.05 } }
            }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-wrap justify-center gap-x-3"
          >
            {headline.split(" ").map((word, index) => (
              <motion.span 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                }}
                className={word === "Extraordinary" ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300 drop-shadow-[0_0_15px_rgba(20,184,166,0.4)]" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Whether you have a project in mind, need a top freelancer for video editing and web development, or just want to say hi, my inbox is always open. Let's connect!
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-6 md:p-12 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Form */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Send className="text-teal-400" size={24} /> Send a Message
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border border-teal-900/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-300 shadow-[0_0_0_rgba(20,184,166,0)] focus:shadow-[0_0_20px_rgba(20,184,166,0.15)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full bg-transparent border border-teal-900/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-300 shadow-[0_0_0_rgba(20,184,166,0)] focus:shadow-[0_0_20px_rgba(20,184,166,0.15)]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Tell me about your amazing project..."
                    className="w-full bg-transparent border border-teal-900/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-300 shadow-[0_0_0_rgba(20,184,166,0)] focus:shadow-[0_0_20px_rgba(20,184,166,0.15)] resize-none"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative overflow-hidden bg-teal-600/20 border border-teal-500/50 text-teal-300 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]"
                >
                  <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Right Column: Direct Info & Social Grid */}
            <div className="flex flex-col justify-between">
              <div className="mb-12 lg:mb-0">
                <h3 className="text-2xl font-semibold text-white mb-6">Direct Connect</h3>
                <div className="space-y-6">
                  <a href="https://wa.me/8801600731627" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-teal-400 group-hover:text-white group-hover:bg-teal-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.8)] border border-teal-900/50">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                      <p className="text-lg text-gray-200 group-hover:text-teal-300 transition-colors">+8801600731627</p>
                    </div>
                  </a>
                  
                  <a href="mailto:technicalatik4@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-teal-400 group-hover:text-white group-hover:bg-teal-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.8)] border border-teal-900/50">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <p className="text-lg text-gray-200 group-hover:text-teal-300 transition-colors">technicalatik4@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 border border-teal-900/50">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p className="text-lg text-gray-200">Uttara, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-6 mt-12 lg:mt-0">Socials</h3>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-wrap gap-4"
                >
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.name}
                      title={link.name}
                      className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-500/20 transition-all hover:border-teal-400 drop-shadow-none hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.8)] border border-teal-900/50"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Technical Atik. Crafted with precision & passion.</p>
        </div>
      </div>
    </section>
  );
}
