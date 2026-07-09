import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Senior Operator",
    company: "Jacket Factory",
    period: "2022 - Present (4 Years)",
    description: "Working as a Senior Operator, managing production efficiency, operating machinery, and maintaining high-quality manufacturing standards.",
    icon: <Briefcase size={20} />
  },
  {
    role: "Video Editor (Freelance)",
    period: "2023 - Present",
    description: "Edited 50+ wedding highlight videos and Islamic Waz content. Specialized in engaging thumbnails and transitions.",
    icon: <Briefcase size={20} />
  },
  {
    role: "Marketing Assistant",
    company: "Tandex Fashion",
    period: "Jan 2024 - Present",
    description: "Supporting digital marketing, basic product photography, and ad design.",
    icon: <Briefcase size={20} />
  }
];

export function Experience() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-bold text-white">Experience</h2>
        </motion.div>

        <div className="relative border-l border-teal-900/50 ml-4 md:ml-8 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-1 p-2 bg-gray-950 border-2 border-teal-500 rounded-full text-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.3)]">
                {exp.icon}
              </div>

              <div className="glass-panel rounded-2xl p-6 md:p-8 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-100 group-hover:text-teal-400 transition-colors">
                      {exp.role}
                    </h3>
                    {exp.company && (
                      <span className="text-teal-500 font-medium text-sm md:text-base mt-1 block">
                        @ {exp.company}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-mono bg-gray-950 px-3 py-1.5 rounded-full border border-gray-800 self-start md:self-auto">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
