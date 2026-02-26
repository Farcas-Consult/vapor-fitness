"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Heart, Zap, Droplets, Users, Clock, MapPin, ChevronRight, Star, Wind } from "lucide-react";

export default function WellnessPage() {
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

  const saunaBenefits = [
    { icon: Heart, title: "Heart Health", shortDesc: "Improve cardiovascular function" },
    { icon: Zap, title: "Energy Boost", shortDesc: "Enhanced vitality and stamina" },
    { icon: Droplets, title: "Deep Cleanse", shortDesc: "Remove impurities through sweat" },
    { icon: Flame, title: "Metabolism", shortDesc: "Burn calories naturally" },
  ];

  const saunaTypes = [
    { title: "Dry Heat Sauna", shortDesc: "Traditional wellness", temp: "80-90°C", image: "https://overland-fitness.s3.eu-west-1.amazonaws.com/Steam5.jpeg" },
    { title: "Steam", shortDesc: "Moist heat therapy", temp: "40-50°C", image: "https://overland-fitness.s3.eu-west-1.amazonaws.com/Steam7.jpeg" },
    { title: "Steam Sauna", shortDesc: "Moist relaxation", temp: "40-50°C", image: "https://overland-fitness.s3.eu-west-1.amazonaws.com/Steam2.jpeg" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-150 md:h-175 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden flex items-center justify-center"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://overland-fitness.s3.eu-west-1.amazonaws.com/Wellness.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Animated Background Elements */}
        <div 
          className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[var(--yellow)]/15 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[var(--yellow)]/10 blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 25}px, ${-mousePosition.y * 25}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-[var(--yellow)]/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[var(--yellow)]/15 rounded-lg" 
          style={{
            transform: `rotate(${mousePosition.x * 20}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-[var(--yellow)]/10 rounded-full"></div>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/20 border border-[var(--yellow)]/30 mb-4 hover:bg-[var(--yellow)]/30 hover:border-[var(--yellow)]/50 transition-all duration-300 cursor-pointer group">
            <Zap className="w-4 h-4 text-[var(--yellow)] group-hover:animate-spin" />
            <span className="text-sm font-semibold text-[var(--yellow)] group-hover:text-yellow-300 transition-colors">Complete Wellness Services</span>
          </div>

          <h1 
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            Wellness & Recovery
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto group-hover:text-gray-200 transition-colors">
            Experience the ultimate in relaxation and healing with our premium sauna and steam services
          </p>

          <p className="text-sm text-gray-300 mb-4 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[var(--yellow)]" />
            <span className="font-semibold">OPEN FROM 6:00AM - 10:00PM EVERYDAY</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/contact" className="group/btn">
              <Button
                size="lg"
                className="bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all duration-300 hover:scale-110 hover:shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Now
                  <ChevronRight className="ml-1 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-yellow-400 -z-10 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
            </Link>
            <a href="tel:+254118814597" className="group">
              <Button 
                size="lg" 
                
                className="border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Call: +254 118 814 597
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Steam & Sauna</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rejuvenate your body and mind with our premium wellness facilities designed for ultimate relaxation and recovery
            </p>
          </div>

          {/* Sauna & Steam Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-stretch">
            {/* Sauna */}
            <div className="group">
              <div className="relative h-96 rounded-xl overflow-hidden mb-6 border border-border group-hover:border-[var(--yellow)] transition-all duration-300">
                <img
                  src="https://overland-fitness.s3.eu-west-1.amazonaws.com/DrySauna.jpg"
                  alt="Sauna"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="w-6 h-6 text-[var(--yellow)]" />
                    <span className="text-[var(--yellow)] text-sm font-semibold">80-90°C</span>
                  </div>
                  <p className="text-white font-semibold text-lg">Dry Heat Sauna</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Sauna</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience deep, restorative heat in a space crafted for comfort and sophistication. Our sauna eases muscle tension, boosts recovery, and leaves your skin glowing. Train hard if you must but always recover in luxury.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--yellow)]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[var(--yellow)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">15-25 minutes</p>
                    <p className="text-xs text-muted-foreground">Build tolerance gradually</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--yellow)]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[var(--yellow)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">2-3x per week</p>
                    <p className="text-xs text-muted-foreground">For optimal benefits</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steam */}
            <div className="group">
              <div className="relative h-96 rounded-xl overflow-hidden mb-6 border border-border group-hover:border-[var(--yellow)] transition-all duration-300">
                <img
                  src="https://overland-fitness.s3.eu-west-1.amazonaws.com/Steam7.jpeg"
                  alt="Steam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-6 h-6 text-[var(--yellow)]" />
                    <span className="text-[var(--yellow)] text-sm font-semibold">40-50°C</span>
                  </div>
                  <p className="text-white font-semibold text-lg">Moist Heat Steam</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Steam</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Step into a serene steam sanctuary designed for pure relaxation and renewal. The gentle heat detoxifies, improves circulation, and melts away stress. Perfect for every body and fitness level.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--yellow)]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[var(--yellow)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">15-25 minutes</p>
                    <p className="text-xs text-muted-foreground">Gentle and accessible</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--yellow)]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[var(--yellow)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">3-4x per week</p>
                    <p className="text-xs text-muted-foreground">Gentle enough for regular use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-card rounded-xl border border-border p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-10">Key Benefits</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {saunaBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-7 h-7 text-[var(--yellow)]" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.shortDesc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden" style={{backgroundImage: "var(--cta-bg-image, linear-gradient(135deg, #1f2937 0%, #111827 100%))"}}>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Transform Your Wellness?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experience the healing power of our premium sauna and steam services. Book your session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Book a Session
              </Button>
            </Link>
            <Button size="lg"  className="border-white text-white hover:bg-white/10">
              Call: +254 118 814 597
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
