import { motion } from 'framer-motion';
import { Building2, GraduationCap, Factory, Plane, ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Corporate & Enterprises',
    description: 'Digital transformation solutions designed to optimize operations, enhance productivity, and drive innovation across large-scale enterprises.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: GraduationCap,
    title: 'Education & Research',
    description: 'Empowering institutions with cutting-edge technologies that enhance learning, foster collaboration, and enable groundbreaking research.',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Industry',
    description: 'Smart automation, IoT, and robotics solutions that streamline production processes and ensure sustainable growth.',
    gradient: 'from-accent to-secondary',
  },
  {
    icon: Plane,
    title: 'Defense & Aerospace',
    description: 'Advanced drone, AI, and automation technologies supporting security, surveillance, and aerospace innovation.',
    gradient: 'from-primary to-secondary',
  },
];

const IndustriesSection = () => (
  <section id="industries" className="py-20 sm:py-28 relative overflow-hidden">
    {/* Soft gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/40 pointer-events-none" />
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="container mx-auto relative z-10">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14 sm:mb-16"
      >
        <span className="section-badge bg-accent/10 text-accent mb-5 mx-auto">Our Reach</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Industries We Serve
          </span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Delivering tailored technology solutions across diverse domains.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col p-6 sm:p-7 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-300 cursor-default"
          >
            {/* Icon with ring */}
            <div className="relative self-start mb-5">
              <div className={`w-13 h-13 flex items-center justify-center rounded-xl bg-gradient-to-br ${industry.gradient} group-hover:scale-110 transition-transform shadow-medium p-3`}>
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              {/* Pulse ring on hover */}
              <span className="absolute inset-0 rounded-xl bg-primary/20 group-hover:animate-pulse-ring" />
            </div>

            {/* Number label */}
            <div className="text-xs font-bold text-primary/40 font-space-grotesk mb-2 tracking-widest">
              {String(index + 1).padStart(2, '0')}
            </div>

            <h3 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">{industry.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm flex-1">{industry.description}</p>

            <div className="mt-4 flex items-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Explore <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
