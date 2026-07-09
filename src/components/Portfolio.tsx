import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Web Dev', 'Video Editing', 'Brand Design', 'Publishing'];

const projects = [
  {
    id: 1,
    title: "'Jhal' Social Platform",
    description: "A modern social media architecture tailored for Gen-Z users in Bangladesh.",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "'The Aesthetic Choice' Branding",
    description: "Complete e-commerce brand identity. Minimalist, premium, symbol-based logo designs excluding any human or cartoon characters.",
    category: "Brand Design",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Cinematic Gaming Renders & Highlights",
    description: "High-end cinematic visual renders for gaming profiles (Clash of Clans, Free Fire) and professional wedding highlights.",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Digital Activity Book Collection",
    description: "A massive collection of over 100 puzzle and activity books, flawlessly formatted for Amazon KDP utilizing strict 'No Bleed' print layouts.",
    category: "Publishing",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "100K+ YouTube Milestone",
    description: "Scaled and monetized a tech channel to over 100,000 subscribers with high-retention content creation.",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop"
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">My Featured Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent projects, from web architecture to cinematic visual experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-teal-500/20 text-teal-300 border-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.3)]'
                  : 'glass-panel text-gray-400 border-gray-800 hover:border-teal-900/50 hover:text-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                className="glass-panel rounded-3xl overflow-hidden border border-teal-900/30 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] group flex flex-col relative z-10"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder background */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-teal-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0 flex items-center justify-center z-20">
                    <button className="flex items-center gap-2 px-6 py-3 bg-teal-500 rounded-full text-gray-900 font-bold hover:bg-teal-400 transition-colors shadow-[0_0_20px_rgba(20,184,166,0.5)]">
                      View Project <ExternalLink size={18} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative z-30">
                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
