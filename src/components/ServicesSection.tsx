import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Wifi, 
  Plane, 
  Code, 
  Users, 
  Megaphone, 
  Settings,
  ArrowRight,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Brain,
      title: 'AI & Robotics',
      description: 'Advanced AI training kits, robotics modules, and intelligent automation solutions for next-generation applications.',
      features: ['Machine Learning Models', 'Robotics Platforms', 'AI Integration', 'Custom Algorithms']
    },
    {
      icon: Wifi,
      title: 'IoT & Smart Automation',
      description: 'Comprehensive IoT solutions from smart home projects to industrial automation systems.',
      features: ['Smart Device Integration', 'Industrial IoT', 'Home Automation', 'Real-time Monitoring']
    },
    {
      icon: Plane,
      title: 'Drone Technology',
      description: 'Complete drone training packages and industry-specific aerial solutions for various applications.',
      features: ['Drone Training Programs', 'Aerial Photography', 'Survey & Mapping', 'Custom Applications']
    },
    {
      icon: Code,
      title: 'Software & IT Services',
      description: 'End-to-end software development, custom applications, and comprehensive IT support solutions.',
      features: ['Web Development', 'Mobile Apps', 'Enterprise Software', 'IT Consulting']
    },
    {
      icon: Users,
      title: 'Recruitment & HR',
      description: 'Professional recruitment services, talent management, and comprehensive HR consultancy solutions.',
      features: ['Technical Recruitment', 'HR Strategy', 'Talent Assessment', 'Team Building']
    },
    {
      icon: Megaphone,
      title: 'Strategic Marketing',
      description: 'Digital marketing strategies, branding solutions, and industry-specific marketing campaigns.',
      features: ['Digital Marketing', 'Brand Strategy', 'Content Creation', 'Market Analysis']
    },
    {
      icon: Settings,
      title: 'Hardware Integration',
      description: 'Technical integration services, hardware installation, and ongoing support for complex systems.',
      features: ['System Integration', 'Hardware Setup', 'Technical Support', 'Maintenance Services']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Multi-Domain Expertise
            </span>
            <br />
            <span className="text-foreground">Tailored Solutions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From AI and robotics to comprehensive IT services, we deliver cutting-edge solutions 
            across seven key technology domains to drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.slice(0, 6).map((service, index) => (
            <div key={index} className="service-card group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-xl group-hover:animate-glow">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{service.title}</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Hardware Integration - Highlighted Service */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="service-card group bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-gradient-primary rounded-xl group-hover:animate-glow">
                  <Settings className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Hardware Integration & Support</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Technical integration services, hardware installation, and ongoing support for complex systems.
              </p>

              <div className="space-y-2 mb-6">
                {services[6].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 rounded-3xl p-12">
          <h3 className="text-3xl font-space-grotesk font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our multi-domain expertise can accelerate your digital transformation 
            and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="btn-hero group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('#industries')}
              className="btn-hero-outline"
            >
              View Industries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;