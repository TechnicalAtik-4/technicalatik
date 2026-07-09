import { motion } from 'motion/react';
import { Calendar, MapPin, Heart } from 'lucide-react';

const chapters = [
  {
    id: 1,
    chapter: "Chapter 1",
    date: "January 14, 2002",
    title: "Roots in Dhaka",
    content: "Born as MD Atik Rahman in Nobinogor, Savar, Dhaka, to my loving parents Md. Monjil Sheikh and Rekha.",
    images: [
      "https://raw.githubusercontent.com/TechnicalAtik-4/technicalatik/main/png/When%20I%20was%2014%20days%20old%20Atik.jpeg",
      "https://raw.githubusercontent.com/TechnicalAtik-4/technicalatik/main/png/Two%20years%20old%20Atik.jpeg"
    ],
    alignment: "left"
  },
  {
    id: 2,
    chapter: "Chapter 2",
    title: "School Life & Growing Up",
    content: "Growing up alongside my sister, Moriyom, I developed an early passion for technology. I later completed my HSC in the BMT stream in 2025, paving the way for my tech career.",
    images: [
      "https://raw.githubusercontent.com/TechnicalAtik-4/technicalatik/main/png/my%20school%20life1.jpg"
    ],
    alignment: "right"
  },
  {
    id: 3,
    chapter: "Chapter 3",
    date: "April 15, 2019 (6:40 PM)",
    title: "In Loving Memory of My Father",
    content: "The hardest turning point of my life was losing my father. Originally from Pabna, we lived in Savar Jamgora. After his passing, my mother, sister, and I relocated to our purchased land in Phulpur, Mymensingh, to build a new home and a new life.",
    location: "https://maps.app.goo.gl/QoFuZP3f1eJtXQLc7?g_st=ac",
    images: [
      "https://raw.githubusercontent.com/TechnicalAtik-4/technicalatik/main/png/my%20%20father.jpg"
    ],
    alignment: "left",
    imageStyle: "ring-2 ring-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
  },
  {
    id: 4,
    chapter: "Chapter 4",
    title: "Becoming the #1 Tech Content Creator",
    content: "Through relentless hard work from my base in Mymensingh, I established 'Technical Atik'. I became known as a top freelancer, a devoted tech lover, and Bangladesh's premier tech content creator.",
    images: [
      "https://raw.githubusercontent.com/TechnicalAtik-4/technicalatik/main/png/Technical%20Atik.jpeg"
    ],
    alignment: "right"
  },
  {
    id: 5,
    chapter: "Chapter 5",
    date: "July 26, 2024",
    title: "Marrying My Soulmate",
    content: "I married the love of my life, Jhumur (born July 8, 2004). She became my pillar of strength.",
    images: [
      "https://raw.githubusercontent.com/TechnicalAtik-4/technicalatik/main/png/My%20wedding%20day%20photo.jpeg"
    ],
    alignment: "left",
    icon: <Heart size={16} className="text-rose-500 inline mr-2" />
  },
  {
    id: 6,
    chapter: "Chapter 6",
    date: "March 14, 2026 (11:00 PM)",
    title: "Welcoming Our Son",
    content: "Our lives were blessed with the arrival of our beautiful son, Mohammad Ihan Zarraf. The legacy continues.",
    images: [
      "https://raw.githubusercontent.com/TechnicalAtik-4/technicalatik/main/png/Mohammad%20Ihan%20Zarraf.jpg"
    ],
    alignment: "right",
    imageStyle: "ring-2 ring-teal-400/50 shadow-[0_0_30px_rgba(45,212,191,0.3)]"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">My Journey: The Man Behind Technical Atik</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            A story of love, loss, resilience, and building a digital empire.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/0 via-teal-500/50 to-teal-500/0 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {chapters.map((chapter, index) => {
              const isEven = chapter.alignment === 'right';
              
              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Container */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className={`glass-panel p-8 md:p-10 rounded-3xl border border-teal-900/30 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(20,184,166,0.15)] relative ${
                      isEven ? 'lg:mr-auto' : 'lg:ml-auto'
                    }`}>
                      {/* Timeline Dot (Desktop) */}
                      <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.8)] ${
                        isEven ? '-left-[2.1rem]' : '-right-[2.1rem]'
                      }`} />

                      <div className={`flex flex-col mb-4 ${isEven ? 'items-start' : 'items-start lg:items-end'}`}>
                        <span className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-2 bg-teal-950/50 px-3 py-1 rounded-full border border-teal-900/50">
                          {chapter.chapter}
                        </span>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3 group-hover:text-white transition-colors">
                          {chapter.icon}{chapter.title}
                        </h3>
                        
                        {chapter.date && (
                          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium mb-2">
                            <Calendar size={14} className="text-teal-500" />
                            {chapter.date}
                          </div>
                        )}
                        
                        {chapter.location && (
                          <a 
                            href={chapter.location} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 text-sm font-medium hover:text-teal-400 transition-colors"
                          >
                            <MapPin size={14} className="text-teal-500" />
                            Phulpur, Mymensingh
                          </a>
                        )}
                      </div>
                      
                      <p className={`text-gray-300 leading-relaxed text-base md:text-lg ${isEven ? 'text-left' : 'text-left lg:text-right'}`}>
                        {chapter.content}
                      </p>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="w-full lg:w-1/2">
                    {chapter.images.length > 1 ? (
                      <div className="grid grid-cols-2 gap-4">
                        {chapter.images.map((img, i) => (
                          <div key={i} className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-teal-900/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img 
                              src={img} 
                              alt={`${chapter.title} - ${i + 1}`} 
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden group ${chapter.imageStyle || ''}`}>
                        <div className="absolute inset-0 bg-teal-900/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img 
                          src={chapter.images[0]} 
                          alt={chapter.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
