import { motion } from 'framer-motion';
import { Building2, GraduationCap, Factory, Plane } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Corporate & Enterprises',
      description:
        'Digital transformation solutions designed to optimize operations, enhance productivity, and drive innovation across large-scale enterprises.',
    },
    {
      icon: GraduationCap,
      title: 'Education & Research',
      description:
        'Empowering institutions with cutting-edge technologies that enhance learning, foster collaboration, and enable groundbreaking research.',
    },
    {
      icon: Factory,
      title: 'Manufacturing & Industry',
      description:
        'Smart automation, IoT, and robotics solutions that streamline production processes and ensure sustainable growth.',
    },
    {
      icon: Plane,
      title: 'Defense & Aerospace',
      description:
        'Advanced drone, AI, and automation technologies supporting security, surveillance, and aerospace innovation.',
    },
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering tailored technology solutions across diverse domains.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group service-card p-8 rounded-2xl shadow-strong border border-border/50 hover:shadow-glow hover:-translate-y-2 transition-all duration-300 bg-card/80 backdrop-blur-sm"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                <industry.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
