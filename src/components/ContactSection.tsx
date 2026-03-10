"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-background border border-border/60 " +
  "focus:ring-2 focus:ring-primary/60 focus:border-primary outline-none " +
  "transition-all placeholder:text-muted-foreground/60 text-sm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@unigyte.com",
    desc: "We respond within 24 hours",
    gradient: "from-primary to-accent",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 8218162680 / +91 8279873325",
    desc: "Mon – Fri, 9 AM – 6 PM IST",
    gradient: "from-secondary to-primary",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Agra, India",
    desc: "Multiple locations across India",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.unigyte.com",
    desc: "Explore our digital presence",
    gradient: "from-primary to-secondary",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const { error } = await supabase.from("contacts").insert([form]);
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
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/40 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-56 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="section-badge bg-primary/10 text-primary mb-4 mx-auto">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space-grotesk font-bold mb-3">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Build Something
            </span>{" "}
            <span className="text-foreground">Great</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Ready to transform your ideas into reality? Reach out — we're just a message away.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="bg-card/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-strong border border-border/50"
          >
            <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold mb-1">Send us a Message</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Your full name" required className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="your.email@example.com" required className={inputClass}
                  />
                </div>
              </div>

              {/* Phone + Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX" className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Service Interest</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className={`${inputClass} text-foreground`}
                  >
                    <option value="">Select a service</option>
                    <option>AI & Robotics</option>
                    <option>IoT & Automation</option>
                    <option>Drone Solutions</option>
                    <option>Custom IT Services</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1.5">Project Details *</label>
                <textarea
                  name="message" rows={4} value={form.message} onChange={handleChange}
                  placeholder="Tell us about your project, requirements, timeline, and goals..."
                  required className={`${inputClass} resize-none`}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full btn-hero group text-sm sm:text-base"
              >
                {loading ? "Sending…" : "Send Message"}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Status alerts */}
            {status === "success" && (
              <div className="mt-5 flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
                <CheckCircle className="h-5 w-5 shrink-0" />
                Message sent successfully! We'll be in touch soon.
              </div>
            )}
            {status === "error" && (
              <div className="mt-5 flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                <AlertCircle className="h-5 w-5 shrink-0" />
                Something went wrong. Please try again or email us directly.
              </div>
            )}
          </motion.div>

          {/* ── Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold mb-2">Contact Information</h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-6">
              Multiple ways to reach us. Choose what works best for you.
            </p>

            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card/80 border border-border/50 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`shrink-0 p-3 rounded-xl bg-gradient-to-br ${info.gradient} text-white shadow-medium`}>
                  <info.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-semibold mb-0.5">{info.title}</h4>
                  <p className="text-foreground text-sm font-medium break-words">{info.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{info.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
