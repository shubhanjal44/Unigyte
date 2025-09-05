import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap, Cpu, Wifi, Plane } from 'lucide-react';
import heroImage from '@/assets/hero-tech.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-float">
              <Zap className="h-4 w-4" />
              <span>Multi-Domain Technology Solutions</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-space-grotesk font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Bridging Innovation,
                </span>
                <br />
                <span className="text-foreground">
                  Technology & Growth
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Empowering industries with cutting-edge AI, IoT, Robotics, and comprehensive technology solutions. From concept to deployment, we deliver innovation that drives results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-space-grotesk">7+</div>
                <div className="text-sm text-muted-foreground">Domain Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary font-space-grotesk">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-space-grotesk">50+</div>
                <div className="text-sm text-muted-foreground">Industry Partners</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#services')}
                className="btn-hero group"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('#about')}
                className="btn-hero-outline group"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image with Floating Elements */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Unigyte Technology Solutions" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -left-4 bg-gradient-primary p-4 rounded-2xl shadow-glow animate-float">
              <Cpu className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="absolute top-1/4 -right-6 bg-gradient-to-r from-secondary to-accent p-4 rounded-2xl shadow-glow animate-float" style={{ animationDelay: '2s' }}>
              <Wifi className="h-8 w-8 text-secondary-foreground" />
            </div>
            <div className="absolute -bottom-6 left-1/4 bg-gradient-to-r from-accent to-primary p-4 rounded-2xl shadow-glow animate-float" style={{ animationDelay: '4s' }}>
              <Plane className="h-8 w-8 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;