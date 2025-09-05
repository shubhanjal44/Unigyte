"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const { error } = await supabase.from("contacts").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      },
    ]);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-subtle relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card/90 backdrop-blur-md p-8 rounded-2xl shadow-strong border border-border/50"
          >
            <h2 className="text-3xl font-space-grotesk font-bold mb-2">
              Send us a Message
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we’ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 
                               focus:ring-2 focus:ring-primary/80 focus:border-primary outline-none 
                               transition placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 
                               focus:ring-2 focus:ring-primary/80 focus:border-primary outline-none 
                               transition placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 
                               focus:ring-2 focus:ring-primary/80 focus:border-primary outline-none 
                               transition placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 
                               focus:ring-2 focus:ring-primary/80 focus:border-primary outline-none 
                               transition text-muted-foreground"
                  >
                    <option value="">Select a service</option>
                    <option>AI & Robotics</option>
                    <option>IoT & Automation</option>
                    <option>Drone Solutions</option>
                    <option>Custom IT Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, requirements, timeline, and goals..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 
                             focus:ring-2 focus:ring-primary/80 focus:border-primary outline-none 
                             transition placeholder:text-muted-foreground resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full btn-hero group"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {status === "success" && (
              <p className="text-green-600 mt-4">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-space-grotesk font-bold mb-6">
              Contact Information
            </h3>
            <p className="text-muted-foreground mb-8">
              Multiple ways to reach us. Choose what works best for you.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  value: "info@unigyte.com",
                  desc: "We respond within 24 hours",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  value: "+91 8218162680, +91 8279873325",
                  desc: "Mon – Fri, 9AM – 6PM IST",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  value: "Agra, India",
                  desc: "Multiple locations across India",
                },
                {
                  icon: Globe,
                  title: "Website",
                  value: "www.unigyte.com",
                  desc: "Explore our digital presence",
                },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-card/80 border border-border/50 shadow-soft hover:shadow-strong transition"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{info.title}</h4>
                    <p className="text-foreground">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
