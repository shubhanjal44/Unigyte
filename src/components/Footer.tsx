import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/full-logo.png";

const quickLinks = [
  { label: "Home",       href: "#home" },
  { label: "About Us",   href: "#about" },
  { label: "Services",   href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact",    href: "#contact" },
];

const resources = [
  { label: "Blog",             href: "#" },
  { label: "FAQ",              href: "#" },
  { label: "Privacy Policy",   href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socials = [
  { icon: Facebook,  href: "https://facebook.com",  label: "Facebook" },
  { icon: Twitter,   href: "https://twitter.com",   label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin,  href: "https://linkedin.com",  label: "LinkedIn" },
];

const scrollTo = (href: string) => {
  if (href.startsWith("#")) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.open(href, "_blank", "noopener noreferrer");
  }
};

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-0.5 w-full bg-gradient-to-r from-primary via-accent to-secondary" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
              className="inline-block"
            >
              <img
                src={logo}
                alt="Unigyte Logo"
                className="h-11 w-auto object-contain bg-white/10 p-2 rounded-xl"
              />
            </a>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Building future-ready technology solutions that empower industries, institutions,
              and individuals across the globe.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className="text-sm flex items-center gap-1.5 hover:text-white hover:gap-2 transition-all group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Resources</h3>
            <ul className="space-y-3">
              {resources.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm flex items-center gap-1.5 hover:text-white transition-all group"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Start a Project</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Have an idea? Let's discuss how we can bring it to life.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-md"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-5 text-xs text-gray-500">
              📧 info@unigyte.com<br />
              📞 +91 8218162680
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Unigyte. All rights reserved.</p>
          <p className="text-center">
            Crafted with ❤️ by the Unigyte Team
          </p>
        </div>
      </div>
    </footer>
  );
}
