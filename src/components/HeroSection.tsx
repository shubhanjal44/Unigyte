import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Cpu, Wifi, Plane, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-tech.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
              <Zap className="h-4 w-4" />
              <span>Innovating Across Industries</span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-space-grotesk font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Bridging Innovation
                </span>
                <br />
                <span className="text-foreground">with Technology & Growth</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Empowering industries with AI, IoT, Robotics, and scalable technology solutions. 
                From concept to deployment, we deliver future-ready innovation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary font-space-grotesk">7+</div>
                <div className="text-sm text-muted-foreground">Domain Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary font-space-grotesk">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent font-space-grotesk">50+</div>
                <div className="text-sm text-muted-foreground">Industry Partners</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('#services')}
                className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground shadow-lg px-6 py-3 text-lg rounded-xl"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('#about')}
                className="group border-primary text-primary hover:bg-primary/10 px-6 py-3 text-lg rounded-xl backdrop-blur"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Unigyte Technology Solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Floating Tech Icons - Fixed positions */}
            <div className="absolute top-6 left-6 bg-gradient-primary p-4 rounded-2xl shadow-glow animate-bounce-slow">
              <Cpu className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="absolute top-1/3 right-6 bg-gradient-to-r from-secondary to-accent p-4 rounded-2xl shadow-glow animate-bounce-slow delay-2000">
              <Wifi className="h-8 w-8 text-secondary-foreground" />
            </div>
            <div className="absolute bottom-6 left-1/3 bg-gradient-to-r from-accent to-primary p-4 rounded-2xl shadow-glow animate-bounce-slow delay-4000">
              <Plane className="h-8 w-8 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
