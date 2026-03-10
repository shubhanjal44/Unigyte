"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/full-logo.png";

const navItems = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Services",   href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact",    href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeId, setActiveId]   = useState("home");
  const menuRef                   = useRef<HTMLDivElement>(null);

  /* ── scroll → blur + active section ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false); // close on scroll
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  /* ── IntersectionObserver for active section highlighting ── */
  useEffect(() => {
    const sectionIds = navItems.map((n) => n.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-background/90 backdrop-blur-lg shadow-soft border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="flex items-center shrink-0"
        >
          <img src={logo} alt="Unigyte Logo" className="h-10 sm:h-12 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className={`relative text-sm font-medium transition-colors pb-0.5 ${
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
          <Button
            onClick={() => scrollTo("#contact")}
            className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl px-5 py-2 text-sm shadow-md hover:opacity-90 hover:scale-105 transition-all"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden animate-slide-down bg-white/95 dark:bg-background/95 backdrop-blur-lg border-t border-border/40 shadow-medium"
        >
          <div className="container mx-auto flex flex-col py-5 gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-muted hover:text-primary"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? "bg-primary" : "bg-border"
                    }`}
                  />
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 px-4">
              <Button
                onClick={() => scrollTo("#contact")}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-xl py-2.5 shadow-md hover:opacity-90 transition"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
