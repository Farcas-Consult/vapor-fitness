"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden group">
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[var(--yellow)]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[var(--yellow)]/5 blur-3xl animate-pulse animation-delay-2"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/20 border border-[var(--yellow)]/30 mb-4 animate-fade-in">
            <Mail className="w-4 h-4 text-[var(--yellow)] animate-bounce" />
            <span className="text-sm font-semibold text-[var(--yellow)]">Get In Touch</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            Contact Us
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1">
            Have questions? Reach out to our team and we&apos;ll respond as soon as possible.
          </p>
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
                      <span className="text-foreground font-semibold">Monday - Friday:</span>
                      <span className="text-[var(--yellow)] font-semibold">5:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground font-semibold">Saturday - Sunday:</span>
                      <span className="text-[var(--yellow)] font-semibold">6:00 AM - 8:00 PM</span>
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

              {/* Map Placeholder */}
              <div className="w-full h-96 rounded-lg border-2 border-dashed border-border bg-muted flex items-center justify-center overflow-hidden group hover:shadow-lg transition-all">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground font-semibold">[Interactive Map]</p>
                  <p className="text-xs text-muted-foreground">Overland Towers, Kirongothi Street, Nairobi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
