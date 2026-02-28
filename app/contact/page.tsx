"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Send, ChevronRight, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>

        {/* Background Image Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22><rect fill=%22%23122020%22 width=%221200%22 height=%22800%22/></svg>')",
          }}
        ></div>

        {/* Animated Background Elements */}
        <div 
          className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[var(--yellow)]/15 blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[var(--yellow)]/10 blur-3xl animate-pulse animation-delay-2"
          style={{
            transform: `translate(${-mousePosition.x * 25}px, ${-mousePosition.y * 25}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-[var(--yellow)]/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[var(--yellow)]/15 rounded-lg animate-float animation-delay-1" 
          style={{
            transform: `rotate(${mousePosition.x * 20}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-[var(--yellow)]/10 rounded-full animate-float animation-delay-2"></div>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/20 border border-[var(--yellow)]/30 mb-4 animate-fade-in hover:bg-[var(--yellow)]/30 hover:border-[var(--yellow)]/50 transition-all duration-300 cursor-pointer group">
            <Mail className="w-4 h-4 text-[var(--yellow)] animate-bounce group-hover:animate-spin" />
            <span className="text-sm font-semibold text-[var(--yellow)] group-hover:text-yellow-300 transition-colors">Get In Touch</span>
          </div>

          <h1 
            className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            Contact Us
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1 group-hover:text-gray-200 transition-colors">
            Have questions? Reach out to our team and we&apos;ll respond as soon as possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in animation-delay-2">
            <a href="#contact-form" className="group/btn">
              <Button
                size="lg"
                className="bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all duration-300 hover:scale-110 hover:shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <ChevronRight className="ml-1 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-yellow-400 -z-10 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
            </a>
            <a href="tel:+254118814597" className="group">
              <Button 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Call: +254 118 814 597
                <Zap className="ml-2 h-4 w-4 group-hover:text-[var(--yellow)] transition-colors" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info, Hours, Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-[var(--yellow)] transition-all group">
                    <Phone className="w-6 h-6 text-[var(--yellow)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">+254 118 814 597</p>
                      <p className="text-xs text-muted-foreground mt-1">Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-[var(--yellow)] transition-all group">
                    <Mail className="w-6 h-6 text-[var(--yellow)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@overlandfitness.com</p>
                      <p className="text-xs text-muted-foreground mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-[var(--yellow)] transition-all group">
                    <MapPin className="w-6 h-6 text-[var(--yellow)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Overland Towers, Kirongothi Street</p>
                      <p className="text-xs text-muted-foreground mt-1">Nairobi, Kenya - Ground Floor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[var(--yellow)]" />
                  Business Hours
                </h3>
                
                <Card className="border-border bg-card">
                  <CardContent className="pt-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-foreground font-semibold">Opening hours:</span>
                      <span className="text-[var(--yellow)] font-semibold">6:00 AM - 10:00 PM everyday</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Follow Us</h3>
                
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Linkedin, label: "LinkedIn" },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <button
                        key={index}
                        className="w-12 h-12 rounded-full bg-card border border-border hover:border-[var(--yellow)] flex items-center justify-center transition-all hover:scale-110 group"
                        title={social.label}
                      >
                        <Icon className="w-6 h-6 text-foreground group-hover:text-[var(--yellow)] transition-colors" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Form & Map */}
            <div className="space-y-8">
              {/* Contact Form */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="border-border focus:border-[var(--yellow)] transition-colors"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="border-border focus:border-[var(--yellow)] transition-colors"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 7XX XXX XXX"
                      className="border-border focus:border-[var(--yellow)] transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="border-border focus:border-[var(--yellow)] transition-colors"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more..."
                      className="border-border focus:border-[var(--yellow)] transition-colors min-h-32 resize-none"
                      required
                    />
                  </div>

                  {/* Success Message */}
                  {submitted && (
                    <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600">
                      <Send className="w-5 h-5" />
                      <span className="text-sm font-semibold">Message sent successfully!</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>

              {/* Map */}
              <div className="w-full h-96 rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-all">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8216271566936!2d36.80404!3d-1.2874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a03c0f0001%3A0x4d63e9f6f6e9f6e9!2sKirongothi%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
