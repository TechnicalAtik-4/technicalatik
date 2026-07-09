import { motion } from 'motion/react';
import { Film, Bot, Plane, Cat } from 'lucide-react';

const hobbies = [
  {
    name: "Short Films",
    description: "Making and directing",
    icon: <Film size={32} />,
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    hoverIcon: "text-amber-400"
  },
  {
    name: "AI Tools",
    description: "Exploring new tech",
    icon: <Bot size={32} />,
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-cyan-500/30",
    hoverIcon: "text-cyan-400"
  },
  {
    name: "Traveling",
    description: "Dreaming of Maldives ✈️",
    icon: <Plane size={32} />,
    color: "from-teal-500/20 to-emerald-500/10",
    border: "border-teal-500/30",
    hoverIcon: "text-teal-400"
  },
  {
    name: "Mithu 🐱",
    description: "Quality time with my cat",
    icon: <Cat size={32} />,
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-pink-500/30",
    hoverIcon: "text-pink-400"
  }
];

export function Hobbies() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Off the Clock</h2>
          <p className="text-gray-400">Hobbies & Interests when I'm away from the keyboard.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-3xl glass-panel group flex flex-col items-center text-center relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${hobby.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className={`text-gray-500 group-hover:${hobby.hoverIcon} transition-colors duration-300 mb-4 relative z-10`}>
                {hobby.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-1 relative z-10 group-hover:text-white transition-colors">
                {hobby.name}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors relative z-10">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
