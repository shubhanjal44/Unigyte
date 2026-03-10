import { motion } from 'framer-motion';
import { Cpu, Cloud, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'AI & Robotics',
    description: 'Harnessing the power of artificial intelligence and robotics to automate, innovate, and optimize business processes.',
    gradient: 'from-primary to-accent',
    delay: 0,
  },
  {
    icon: Cloud,
    title: 'IoT & Automation',
    description: 'Developing smart solutions that connect devices, streamline operations, and deliver real-time insights.',
    gradient: 'from-secondary to-primary',
    delay: 0.1,
  },
  {
    icon: Wrench,
    title: 'Drone Technology',
    description: 'Designing advanced drone systems for surveillance, logistics, agriculture, and industrial applications.',
    gradient: 'from-accent to-secondary',
    delay: 0.2,
  },
  {
    icon: ShieldCheck,
    title: 'Comprehensive IT Services',
    description: 'Delivering reliable software, cloud, and cybersecurity solutions tailored to business needs.',
    gradient: 'from-primary to-secondary',
    delay: 0.3,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 sm:py-28 bg-background relative overflow-hidden">
    {/* Decorative orbs */}
    <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

    <div className="container mx-auto relative z-10">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14 sm:mb-16"
      >
        <span className="section-badge bg-primary/10 text-primary mb-5 mx-auto">What We Offer</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Innovative solutions that empower industries and shape the digital future.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: service.delay }}
            className="group flex flex-col p-6 sm:p-7 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-300 cursor-default"
          >
            {/* Icon */}
            <div className={`w-13 h-13 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} mb-5 group-hover:scale-110 transition-transform shadow-medium p-3 self-start`}>
              <service.icon className="w-6 h-6 text-white" />
            </div>

            {/* Number badge */}
            <div className="text-xs font-bold text-primary/40 font-space-grotesk mb-2 tracking-widest">
              {String(index + 1).padStart(2, '0')}
            </div>

            <h3 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm flex-1">{service.description}</p>

            {/* Hover arrow nudge */}
            <div className="mt-4 flex items-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
