// src/components/Footer.tsx
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/full-logo.png"; // using your existing logo

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div>
            <span>
              <img
                         src={logo}
                         alt="Unigyte Logo"
                         className="h-12 w-auto object-contain bg-white p-2 rounded-lg"
                       />
            </span>
          </div>

          {/* <h2 className="text-xl font-bold text-white mb-4">YourCompany</h2> */}
          <p className="text-sm">
            Building modern solutions to help students and professionals grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}Unigyte. All rights reserved.
      </div>
    </footer>
  );
}
