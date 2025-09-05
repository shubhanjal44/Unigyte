import { Button } from '@/components/ui/button';
import { Target, Users, Award, ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/about-team.jpg';

const AboutSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'Pioneering cutting-edge solutions that transform industries and drive digital evolution.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Building lasting partnerships through dedicated support and measurable results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in every project, service, and interaction.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={aboutImage} 
                alt="Unigyte Team - Technology Experts" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-strong border border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-space-grotesk mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Innovation</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Target className="h-4 w-4" />
              <span>About Unigyte</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Empowering Tomorrow
                </span>
                <br />
                <span className="text-foreground">Through Technology</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Unigyte stands as a beacon of innovation in the technology landscape, delivering comprehensive solutions across multiple domains. Our expertise spans AI & Robotics, IoT & Smart Automation, Drone Technology, and comprehensive IT services.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver integrated solutions combining innovation, technology, and human expertise, fostering long-term partnerships and creating value-driven impact across industries.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a global leader in multi-domain innovation, empowering industries, institutions, and individuals through technology-driven solutions.
                </p>
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection('#services')}
              className="btn-hero group"
            >
              Discover Our Solutions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-space-grotesk font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our innovation and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="service-card text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:animate-glow">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-card-foreground">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;