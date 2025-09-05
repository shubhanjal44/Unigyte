import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'AI & Robotics',
      'IoT & Smart Automation', 
      'Drone Technology',
      'Software & IT Services'
    ],
    solutions: [
      'Recruitment & HR',
      'Strategic Marketing',
      'Hardware Integration',
      'Custom Development'
    ],
    industries: [
      'Education & EdTech',
      'Manufacturing',
      'Agriculture & AgriTech',
      'Security & Surveillance'
    ],
    company: [
      'About Us',
      'Our Vision',
      'Careers',
      'Contact'
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-card to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-5 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 font-space-grotesk font-bold text-2xl">
              <div className="p-2 bg-gradient-primary rounded-xl">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Unigyte
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Empowering industries with cutting-edge AI, IoT, Robotics, and comprehensive technology 
              solutions. From concept to deployment, we deliver innovation that drives results.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@unigyte.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>India • Multiple Locations</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-space-grotesk">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('#services')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-space-grotesk">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('#services')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-space-grotesk">Industries</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.industries.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('#industries')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => scrollToSection('#industries')}
                  className="text-primary hover:text-primary-dark transition-colors duration-200 text-sm font-medium"
                >
                  View All Industries →
                </button>
              </li>
            </ul>

            <h3 className="font-semibold text-foreground mb-4 font-space-grotesk">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => {
                const sectionMap: { [key: string]: string } = {
                  'About Us': '#about',
                  'Our Vision': '#about',
                  'Careers': '#contact',
                  'Contact': '#contact'
                };
                
                return (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(sectionMap[link] || '#home')}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Unigyte. All rights reserved. | Bridging Innovation, Technology & Growth
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">Privacy Policy</button>
              <button className="hover:text-primary transition-colors">Terms of Service</button>
              <button className="hover:text-primary transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;