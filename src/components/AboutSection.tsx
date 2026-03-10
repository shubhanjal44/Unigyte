import { Button } from '@/components/ui/button';
import { Target, Users, Award, ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/about-team.jpg';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'Pioneering cutting-edge solutions that transform industries and drive digital evolution.',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Building lasting partnerships through dedicated support and measurable results.',
      gradient: 'from-secondary to-primary',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in every project, service, and interaction.',
      gradient: 'from-accent to-secondary',
    },
  ];

  const cardVariant = (i: number) => ({
    initial:    { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport:   { once: true },
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  });

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/60 via-background to-muted/40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* ── Top two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Extra bottom padding on mobile so stat card doesn't clip out */}
            <div className="relative rounded-3xl overflow-hidden shadow-strong pb-0 sm:pb-0">
              <img
                src={aboutImage}
                alt="Unigyte Team - Technology Experts"
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating stat card – inline on xs, absolute on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="
                mt-4 mx-auto w-fit
                sm:absolute sm:mt-0 sm:-bottom-6 sm:-right-6
                bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-glow border border-border/50
              "
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary font-space-grotesk mb-1">5+</div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">Years of Innovation</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 sm:space-y-8 mt-4 sm:mt-10 lg:mt-0"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Target className="h-4 w-4 shrink-0" />
              <span>About Unigyte</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Empowering Tomorrow
              </span>
              <br />
              <span className="text-foreground">Through Technology</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Unigyte stands as a beacon of innovation in the technology landscape, delivering
              comprehensive solutions across multiple domains. Our expertise spans AI &amp; Robotics,
              IoT &amp; Smart Automation, Drone Technology, and comprehensive IT services.
            </p>

            {/* Mission + Vision */}
            <div className="space-y-5">
              {[
                {
                  title: 'Our Mission',
                  body: 'To deliver integrated solutions combining innovation, technology, and human expertise, fostering long-term partnerships and creating value-driven impact across industries.',
                },
                {
                  title: 'Our Vision',
                  body: 'To be a global leader in multi-domain innovation, empowering industries, institutions, and individuals through technology-driven solutions.',
                },
              ].map(({ title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.15 }}
                  className="pl-4 border-l-2 border-primary/40 space-y-1"
                >
                  <h3 className="text-base font-semibold text-foreground">{title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('#services')}
              className="btn-hero group"
            >
              Discover Our Solutions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* ── Core Values ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24 sm:mt-32"
        >
          <div className="text-center mb-12">
            <span className="section-badge bg-primary/10 text-primary mb-4">Our Values</span>
            <h3 className="text-2xl sm:text-3xl font-space-grotesk font-bold mb-3">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              The principles that guide our innovation and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div key={index} {...cardVariant(index)}>
                <div className="service-card text-center group hover:shadow-glow h-full flex flex-col items-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-2xl mb-5 group-hover:scale-110 transition-transform shadow-medium`}>
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-card-foreground">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
