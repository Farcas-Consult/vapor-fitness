"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hand, Heart, Wind, Droplets, Zap, Users, MapPin, Clock, Star, ChevronRight } from "lucide-react";

export default function MassagePage() {
  const massageTypes = [
    {
      name: "Swedish Massage",
      temp: "Relaxing",
      icon: Hand,
    },
    {
      name: "Deep Tissue",
      temp: "Therapeutic",
      icon: Zap,
    },
    {
      name: "Hot Stone",
      temp: "Rejuvenating",
      icon: Droplets,
    },
  ];

  const testimonials = [
    {
      name: "Amara K.",
      rating: 5,
      text: "Best massage experience! The therapists are incredibly skilled and professional.",
    },
    {
      name: "Priya M.",
      rating: 5,
      text: "I leave feeling completely relaxed and rejuvenated every single time.",
    },
    {
      name: "Lisa J.",
      rating: 5,
      text: "The atmosphere is so calming. Highly recommend for stress relief!",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden group">
        {/* Background Image Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22><rect fill=%22%230f2f2f%22 width=%221200%22 height=%22800%22/></svg>')",
          }}
        ></div>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[var(--yellow)]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[var(--yellow)]/5 blur-3xl animate-pulse animation-delay-2"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/20 border border-[var(--yellow)]/30 mb-4 animate-fade-in">
            <Hand className="w-4 h-4 text-[var(--yellow)] animate-bounce" />
            <span className="text-sm font-semibold text-[var(--yellow)]">Therapeutic Massage Services</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            Healing Touch Therapy
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1">
            Discover the power of professional massage therapy designed to restore balance, relieve tension, and rejuvenate your entire body
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in animation-delay-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book Your Massage
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Main Massage Showcase - Large Image with Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="h-96 lg:h-[500px] rounded-xl bg-muted border-2 border-dashed border-border flex items-center justify-center overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="text-center space-y-2">
                <p className="text-muted-foreground text-lg">[Massage Therapy Image]</p>
                <p className="text-xs text-muted-foreground">Professional massage session</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Transform Your Body & Mind</h2>
                <div className="h-1 w-20 bg-[var(--yellow)] rounded mb-6"></div>
              </div>

              {[
                { icon: Hand, title: "Expert Therapists", desc: "Certified professionals with years of experience" },
                { icon: Heart, title: "Pain Relief", desc: "Targeted therapy for muscle tension and discomfort" },
                { icon: Wind, title: "Stress Reduction", desc: "Melt away daily stress and anxiety" },
                { icon: Droplets, title: "Improved Circulation", desc: "Enhanced blood flow for better health" },
                { icon: Zap, title: "Energy Boost", desc: "Feel revitalized and rejuvenated after each session" },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center group-hover:bg-[var(--yellow)]/20 transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6 text-[var(--yellow)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-[var(--yellow)] transition-colors">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Massage Types Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Massage Collection</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of therapeutic massage services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {massageTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="group cursor-pointer rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-72 bg-muted border-2 border-dashed border-border flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <p className="text-muted-foreground text-center">[{type.name} Image]</p>
                  </div>

                  {/* Card Info */}
                  <Card className="border-border rounded-none hover:border-[var(--yellow)] transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[var(--yellow)]" />
                        </div>
                        <span className="text-xs font-semibold text-[var(--yellow)] uppercase">{type.temp}</span>
                      </div>
                      <CardTitle className="text-foreground text-2xl">{type.name}</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Alternating Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all">
              <p className="text-muted-foreground text-center">[Spa Ambiance Image]</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Serene Spa Environment</h2>
              <p className="text-lg text-muted-foreground">
                Step into our tranquil sanctuary designed specifically for relaxation and healing. Each room is meticulously crafted with soft lighting, calming aromatherapy, and soothing music to enhance your massage experience.
              </p>
              <ul className="space-y-3">
                {[
                  "Climate-controlled treatment rooms",
                  "Premium organic massage oils",
                  "Soft ambient lighting",
                  "Calming thermal beds",
                  "Fresh herbal refreshments",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--yellow)]"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-foreground">Customized Wellness Plans</h2>
              <p className="text-lg text-muted-foreground">
                Our experienced therapists work with you to create personalized massage packages that address your specific needs, whether it's chronic pain relief, sports recovery, or preventative wellness care.
              </p>
              <ul className="space-y-3">
                {[
                  "Personal wellness assessment",
                  "Customized treatment protocols",
                  "Progress tracking & adjustments",
                  "Flexible scheduling options",
                  "Member loyalty rewards",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--yellow)]"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-96 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all order-1 lg:order-2">
              <p className="text-muted-foreground text-center">[Therapist Consultation Image]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Session Details</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border hover:border-[var(--yellow)] transition-all text-center p-8">
              <Clock className="w-12 h-12 text-[var(--yellow)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground mb-2">30-90 minutes per session</p>
              <p className="text-sm text-muted-foreground">Customizable length based on your needs</p>
            </Card>

            <Card className="border-border hover:border-[var(--yellow)] transition-all text-center p-8">
              <Users className="w-12 h-12 text-[var(--yellow)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Frequency</h3>
              <p className="text-muted-foreground mb-2">1-4 times per week</p>
              <p className="text-sm text-muted-foreground">Recommended for optimal wellness benefits</p>
            </Card>

            <Card className="border-border hover:border-[var(--yellow)] transition-all text-center p-8">
              <MapPin className="w-12 h-12 text-[var(--yellow)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground mb-2">Ground Floor, Overland Towers</p>
              <p className="text-sm text-muted-foreground">Easy access and comfortable facilities</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Members Say</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:border-[var(--yellow)] transition-all group">
                <CardHeader>
                  <div className="h-20 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                    <p className="text-xs text-muted-foreground">[Member Photo]</p>
                  </div>
                  <CardTitle className="text-foreground">{testimonial.name}</CardTitle>
                  <div className="flex gap-1 mt-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[var(--yellow)] text-[var(--yellow)]" />
                      ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Facility Gallery</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Explore our state-of-the-art massage therapy facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Treatment Room 1",
              "Treatment Room 2",
              "Relaxation Area",
              "Premium Suite",
            ].map((room, index) => (
              <div
                key={index}
                className="h-64 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                <div className="text-center">
                  <p className="text-muted-foreground">[{room}]</p>
                  <p className="text-xs text-muted-foreground mt-2">Image to be added</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden" style={{backgroundImage: "var(--cta-bg-image, linear-gradient(135deg, #1f2937 0%, #111827 100%))"}}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 animate-pulse animation-delay-2"></div>
        
        {/* Floating Accent Shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full border-4 border-white/20 animate-float"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 rounded-full border-4 border-white/20 animate-float animation-delay-3"></div>
        <div className="absolute top-40 left-10 w-12 h-12 rounded-full border-3 border-white/20 animate-float animation-delay-1"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Experience Healing Massage?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Book your first session today and discover the transformative power of professional therapeutic massage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Book Your Massage Now
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
