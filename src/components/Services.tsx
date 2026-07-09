import { motion } from 'motion/react';
import { Video, MonitorSmartphone, TrendingUp, Ship, Wrench, PenTool, BookOpen } from 'lucide-react';

const services = [
  {
    title: "Cinematic Video Editing",
    description: "High-end video editing, color grading, wedding highlights, and engaging visual transitions.",
    icon: <Video size={32} />
  },
  {
    title: "Web Design & Development",
    description: "Building modern, fully responsive websites, personal portfolios, and dynamic web applications.",
    icon: <MonitorSmartphone size={32} />
  },
  {
    title: "Digital Marketing & SEO",
    description: "Comprehensive marketing strategies featuring my mandatory 'Advance Viral Filter' system, utilizing a strict three-phase auditing process for ultimate content optimization.",
    icon: <TrendingUp size={32} />
  },
  {
    title: "China to BD Product Sourcing",
    description: "Reliable and secure services for importing various e-commerce products and goods directly from China to Bangladesh.",
    icon: <Ship size={32} />
  },
  {
    title: "Technical Troubleshooting",
    description: "Expert tech support, system modification, router configurations, and software/hardware optimization.",
    icon: <Wrench size={32} />
  },
  {
    title: "Minimalist Brand Design",
    description: "Crafting premium, symbol-based minimal logos and brand identities (strictly excluding human or cartoon characters).",
    icon: <PenTool size={32} />
  },
  {
    title: "Amazon KDP Publishing Support",
    description: "Designing and formatting digital activity/puzzle books flawlessly with strict 'No Bleed' print settings.",
    icon: <BookOpen size={32} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="services" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Premium Services I Offer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Delivering high-end digital solutions, from cinematic visuals to seamless web experiences and global product sourcing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-panel p-8 rounded-3xl border border-teal-900/40 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-300 group flex flex-col items-start"
            >
              <div className="mb-6 p-4 rounded-2xl bg-teal-950/50 border border-teal-900/50 text-teal-400 group-hover:scale-110 group-hover:text-teal-300 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
