import { 
  GraduationCap, 
  Code2, 
  Factory, 
  Truck, 
  Wheat, 
  Shield, 
  Megaphone,
  ArrowRight
} from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: 'Education & EdTech',
      description: 'Transforming learning experiences with interactive platforms, AI tutoring, and smart classroom solutions.',
      stats: '50+ Educational Institutions',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Code2,
      title: 'IT & Software Development',
      description: 'Accelerating digital transformation with custom software, cloud solutions, and DevOps optimization.',
      stats: '100+ Software Projects',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Factory,
      title: 'Manufacturing & Automation',
      description: 'Streamlining operations with IoT sensors, robotic automation, and predictive maintenance systems.',
      stats: '25+ Manufacturing Partners',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Truck,
      title: 'Logistics & Transportation',
      description: 'Optimizing supply chains with GPS tracking, route optimization, and automated inventory management.',
      stats: '30+ Logistics Solutions',
      color: 'from-indigo-500 to-blue-500'
    },
    // {
    //   icon: Wheat,
    //   title: 'Agriculture & AgriTech',
    //   description: 'Revolutionizing farming with drone monitoring, soil analysis, and precision agriculture technologies.',
    //   stats: '75+ Agricultural Projects',
    //   color: 'from-green-500 to-lime-500'
    // },
    {
      icon: Shield,
      title: 'Security & Surveillance',
      description: 'Enhancing safety with smart cameras, facial recognition, and comprehensive monitoring systems.',
      stats: '40+ Security Installations',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Megaphone,
      title: 'Marketing & Advertising',
      description: 'Driving growth with data analytics, automated campaigns, and personalized customer experiences.',
      stats: '60+ Marketing Campaigns',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Factory className="h-4 w-4" />
            <span>Industries We Serve</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transforming Industries
            </span>
            <br />
            <span className="text-foreground">Across Sectors</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse expertise enables us to deliver specialized solutions across multiple industries, 
            driving innovation and efficiency where it matters most.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="group relative overflow-hidden">
              {/* Industry Card */}
              <div className="service-card h-full relative z-10">
                <div className="flex flex-col h-full">
                  
                  {/* Icon Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${industry.color} group-hover:animate-glow`}>
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="pt-4 mt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-medium">
                        {industry.stats}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border/50 rounded-3xl p-12 shadow-soft">
            <h3 className="text-3xl font-space-grotesk font-bold mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our adaptable solutions and cross-industry expertise allow us to serve sectors beyond 
              those listed. Let's discuss your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-hero group"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;