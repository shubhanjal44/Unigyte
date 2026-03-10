import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Cpu, Wifi, Plane, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-tech.jpg';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />

      {/* Gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

      <div className="container mx-auto py-24 sm:py-28 lg:py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* ── Left Content ── */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">

            {/* Badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mx-auto lg:mx-0">
              <Zap className="h-4 w-4 shrink-0" />
              <span>Innovating Across Industries</span>
            </motion.div>

            {/* Headline */}
            <motion.div {...fadeUp(0.1)} className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-space-grotesk font-bold leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Bridging Innovation
                </span>
                <br />
                <span className="text-foreground">with Technology &amp; Growth</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
                Empowering industries with AI, IoT, Robotics, and scalable technology solutions.
                From concept to deployment, we deliver future-ready innovation.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.2)} className="grid grid-cols-3 gap-3 sm:gap-6 pt-2">
              {[
                { val: '7+',   label: 'Domain Expertise', color: 'text-primary' },
                { val: '500+', label: 'Projects Delivered', color: 'text-secondary' },
                { val: '50+',  label: 'Industry Partners', color: 'text-accent' },
              ].map(({ val, label, color }) => (
                <div key={label} className="text-center p-3 sm:p-4 rounded-2xl bg-white/60 backdrop-blur border border-border/50 shadow-soft">
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk ${color}`}>{val}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('#services')}
                className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground shadow-medium px-6 py-3 text-base rounded-xl hover:scale-105 transition-all"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('#about')}
                className="group border-primary/60 text-primary hover:bg-primary/10 px-6 py-3 text-base rounded-xl backdrop-blur hover:scale-105 transition-all"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* ── Right Content – Hero Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Unigyte Technology Solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>

            {/* Floating tech icons – hidden on xs to avoid overflow */}
            <div className="hidden sm:flex absolute top-5 left-5 bg-gradient-to-br from-primary to-primary-dark p-3 sm:p-4 rounded-2xl shadow-glow animate-bounce-slow items-center justify-center">
              <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="hidden sm:flex absolute top-1/3 -right-3 sm:right-4 bg-gradient-to-r from-secondary to-accent p-3 sm:p-4 rounded-2xl shadow-glow animate-bounce-slow [animation-delay:1s] items-center justify-center">
              <Wifi className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="hidden sm:flex absolute bottom-5 left-1/3 bg-gradient-to-r from-accent to-primary p-3 sm:p-4 rounded-2xl shadow-glow animate-bounce-slow [animation-delay:2s] items-center justify-center">
              <Plane className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>

            {/* Glow ring behind image */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
