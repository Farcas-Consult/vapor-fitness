"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Send, AlertCircle } from "lucide-react";
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

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+254 118 814 597",
      description: "Call us during business hours",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@overlandfitness.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Overland Towers, Kirongothi Street",
      description: "Nairobi, Kenya - Ground Floor",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri: 5AM - 10PM",
      description: "Sat-Sun: 6AM - 8PM",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "hover:text-blue-600" },
    { icon: Instagram, label: "Instagram", color: "hover:text-pink-600" },
    { icon: Twitter, label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-700" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden group">
        {/* Background Image Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22><rect fill=%22%23001a1a%22 width=%221200%22 height=%22800%22/></svg>')",
          }}
        ></div>

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
            Have questions? We'd love to hear from you. Reach out to our team and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-[var(--yellow)] transition-all duration-300 hover:shadow-lg group"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center group-hover:bg-[var(--yellow)]/20 transition-colors mb-4">
                      <Icon className="w-6 h-6 text-[var(--yellow)]" />
                    </div>
                    <CardTitle className="text-foreground">{info.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold text-foreground text-lg">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section - Form + Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you shortly.
                </p>
              </div>

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
                  <label className="text-sm font-semibold text-foreground">Phone Number</label>
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
                    placeholder="Tell us more about your inquiry..."
                    className="border-border focus:border-[var(--yellow)] transition-colors min-h-32 resize-none"
                    required
                  />
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600">
                    <Send className="w-5 h-5" />
                    <span className="text-sm font-semibold">Message sent successfully! We'll be in touch soon.</span>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* Quick Contact */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Prefer to call?</p>
                <div className="flex gap-2">
                  <Button
                    asChild
                    className="flex-1 bg-black text-white hover:bg-black/90"
                  >
                    <Link href="tel:+254118814597">Call Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-[var(--yellow)] text-[var(--yellow)] hover:bg-[var(--yellow)]/10"
                  >
                    <Link href="mailto:info@overlandfitness.com">Email Us</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Map & Location */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="w-full h-96 rounded-lg border-2 border-dashed border-border bg-muted flex items-center justify-center overflow-hidden group hover:shadow-xl transition-all">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground font-semibold">[Interactive Map]</p>
                  <p className="text-xs text-muted-foreground">Map location will be displayed here</p>
                </div>
              </div>

              {/* Location Details */}
              <Card className="border-border hover:border-[var(--yellow)] transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <MapPin className="w-5 h-5 text-[var(--yellow)]" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Main Location</h3>
                    <p className="text-muted-foreground">
                      Overland Towers, Kirongothi Street
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Floor & Access</h3>
                    <p className="text-muted-foreground">
                      Ground Floor | Easy Parking
                      <br />
                      Wheelchair Accessible
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Direct Contact */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Direct Contact</h3>
                <div className="space-y-2">
                  <button className="w-full p-3 rounded-lg bg-background border border-border hover:border-[var(--yellow)] transition-all group flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[var(--yellow)]" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground group-hover:text-[var(--yellow)] transition-colors">+254 118 814 597</p>
                    </div>
                  </button>
                  <button className="w-full p-3 rounded-lg bg-background border border-border hover:border-[var(--yellow)] transition-all group flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[var(--yellow)]" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground group-hover:text-[var(--yellow)] transition-colors">info@overlandfitness.com</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Business Hours</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="border-border hover:border-[var(--yellow)] transition-all">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">Weekdays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monday - Friday
                  <br />
                  <span className="text-2xl font-bold text-[var(--yellow)]">5:00 AM - 10:00 PM</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-[var(--yellow)] transition-all">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">Weekends</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Saturday - Sunday
                  <br />
                  <span className="text-2xl font-bold text-[var(--yellow)]">6:00 AM - 8:00 PM</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-muted border border-border text-center">
            <p className="text-sm text-muted-foreground mb-2">⭐ Extended hours available for members</p>
            <p className="text-sm text-muted-foreground">Contact us for special access or private session hours</p>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Follow Us</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Stay updated with our latest news and fitness tips</p>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <button
                  key={index}
                  className={`w-16 h-16 rounded-full bg-background border-2 border-border hover:border-[var(--yellow)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group ${social.color}`}
                >
                  <Icon className="w-8 h-8 text-foreground group-hover:text-[var(--yellow)] transition-colors" />
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { platform: "Facebook", handle: "@OverlandFitness", followers: "5.2K followers" },
              { platform: "Instagram", handle: "@OverlandFitness", followers: "8.9K followers" },
              { platform: "Twitter", handle: "@OverlandFit", followers: "2.1K followers" },
              { platform: "LinkedIn", handle: "Overland Fitness", followers: "1.3K followers" },
            ].map((social, index) => (
              <Card key={index} className="border-border hover:border-[var(--yellow)] transition-all text-center p-6">
                <p className="font-semibold text-foreground mb-1">{social.platform}</p>
                <p className="text-sm text-[var(--yellow)] mb-2">{social.handle}</p>
                <p className="text-xs text-muted-foreground">{social.followers}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What are your membership options?",
                a: "We offer flexible membership plans including monthly unlimited, quarterly passes, and drop-in classes. Contact us for detailed pricing.",
              },
              {
                q: "Do you offer trial classes?",
                a: "Yes! New members can book a complimentary trial class with any of our instructors before committing to a membership.",
              },
              {
                q: "Are your facilities wheelchair accessible?",
                a: "Yes, Overland Fitness is fully wheelchair accessible with dedicated facilities on the ground floor.",
              },
              {
                q: "Can I book private training sessions?",
                a: "Absolutely! We offer personalized one-on-one training sessions with our certified trainers. Contact us to book.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border hover:border-[var(--yellow)] transition-all group">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[var(--yellow)] flex-shrink-0" />
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[var(--yellow)] via-yellow-200 to-[var(--yellow)]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Stay Connected</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Subscribe to our newsletter for fitness tips, class updates, and exclusive member offers
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white border-0 text-foreground"
            />
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join our community of fit, confident women today. Reach out to us now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/classes">
              <Button size="lg" className="bg-[var(--yellow)] text-black hover:bg-yellow-300">
                Explore Classes
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Call: +254 118 814 597
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
