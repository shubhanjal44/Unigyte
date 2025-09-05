import { motion } from 'framer-motion';
import { Wrench, Cpu, Cloud, ShieldCheck } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Cpu,
      title: 'AI & Robotics',
      description:
        'Harnessing the power of artificial intelligence and robotics to automate, innovate, and optimize business processes.',
    },
    {
      icon: Cloud,
      title: 'IoT & Automation',
      description:
        'Developing smart solutions that connect devices, streamline operations, and deliver real-time insights.',
    },
    {
      icon: Wrench,
      title: 'Drone Technology',
      description:
        'Designing advanced drone systems for surveillance, logistics, agriculture, and industrial applications.',
    },
    {
      icon: ShieldCheck,
      title: 'Comprehensive IT Services',
      description:
        'Delivering reliable software, cloud, and cybersecurity solutions tailored to business needs.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
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
              Our Services
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that empower industries and shape the digital future.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group service-card p-8 rounded-2xl shadow-strong border border-border/50 hover:shadow-glow hover:-translate-y-2 transition-all duration-300 bg-card/80 backdrop-blur-sm"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
