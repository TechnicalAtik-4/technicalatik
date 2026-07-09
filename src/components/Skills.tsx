import { motion } from 'motion/react';
import { Video, Code2, ShieldAlert, Sparkles } from 'lucide-react';

const skills = [
  {
    category: "Video Editing",
    tools: "Premiere Pro, CapCut, Canva",
    percentage: 95,
    icon: <Video size={24} strokeWidth={1.5} />,
    color: "bg-teal-500",
    gradient: "from-teal-500 to-teal-300",
  },
  {
    category: "Website Design",
    tools: "WordPress, HTML, CSS",
    percentage: 85,
    icon: <Code2 size={24} strokeWidth={1.5} />,
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-emerald-300",
  },
  {
    category: "Basic Ethical Hacking",
    tools: "WiFi Security",
    percentage: 60,
    icon: <ShieldAlert size={24} strokeWidth={1.5} />,
    color: "bg-teal-600",
    gradient: "from-teal-600 to-teal-400",
  },
  {
    category: "AI Content Creation",
    tools: "AI Thumbnail Design & Social Media Content",
    percentage: 90,
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    color: "bg-emerald-600",
    gradient: "from-emerald-600 to-emerald-400",
  }
];

export function Skills() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My Arsenal</h2>
          <p className="text-gray-400 max-w-xl">A collection of tools and technologies I use to craft digital experiences and content.</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-3xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gray-950/80 border border-gray-800 text-gray-200`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">{skill.category}</h3>
                    <p className="text-gray-400 font-mono text-sm mt-1">
                      {skill.tools}
                    </p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-2xl font-bold text-gray-200">{skill.percentage}%</span>
                </div>
              </div>
              
              {/* Progress bar container */}
              <div className="h-4 w-full bg-gray-950/80 rounded-full overflow-hidden border border-gray-800/50 mt-4 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.gradient} relative`}
                >
                  {/* Glowing edge effect on the progress bar */}
                  <div className="absolute right-0 top-0 h-full w-4 bg-white/30 blur-sm"></div>
                </motion.div>
              </div>
              
              <div className="text-right sm:hidden mt-2">
                 <span className="text-sm font-bold text-gray-400">{skill.percentage}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
