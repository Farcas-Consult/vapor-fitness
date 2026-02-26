"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, Heart, Zap, Wind, Users, Clock, MapPin, Flame, ChevronRight } from "lucide-react";

export default function ClassesPage() {
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
  const classes = [
    {
      id: 1,
      name: "Power Cardio",
      icon: Flame,
      level: "Intermediate",
      duration: "45 min",
      description: "High-intensity cardiovascular training to boost your endurance and burn maximum calories while having fun with energetic music.",
      benefits: ["Improved cardiovascular health", "Increased stamina", "Maximum calorie burn", "Full-body workout"],
    },
    {
      id: 2,
      name: "Pilates Core",
      icon: Zap,
      level: "All Levels",
      duration: "50 min",
      description: "Strengthen your core with precision pilates movements designed to develop lean, toned muscles and improve posture.",
      benefits: ["Core strength", "Better posture", "Flexibility", "Mind-body connection"],
    },
    {
      id: 3,
      name: "Yoga Flow",
      icon: Wind,
      level: "Beginner",
      duration: "60 min",
      description: "Flowing yoga sequences that combine movement with mindfulness, perfect for stress relief and body awareness.",
      benefits: ["Stress relief", "Flexibility", "Mental clarity", "Balance improvement"],
    },
    {
      id: 4,
      name: "Strength Training",
      icon: Dumbbell,
      level: "Advanced",
      duration: "55 min",
      description: "Build lean muscle and increase your strength with guided weight training exercises using proper form and progression.",
      benefits: ["Muscle building", "Increased strength", "Bone health", "Metabolic boost"],
    },
    {
      id: 5,
      name: "Dance Fitness",
      icon: Heart,
      level: "All Levels",
      duration: "50 min",
      description: "Get fit while having a blast! Dance to upbeat music in our fun, energetic class that doesn't feel like exercise.",
      benefits: ["Fun workout", "Cardio fitness", "Coordination", "Confidence boost"],
    },
    {
      id: 6,
      name: "HIIT Bootcamp",
      icon: Zap,
      level: "Intermediate",
      duration: "40 min",
      description: "High-intensity interval training combining cardio and strength for a complete body transformation in minimal time.",
      benefits: ["Fast results", "Full-body workout", "Calorie burn", "Time efficient"],
    },
  ];

  const galleryImages = [
    {
      src: "https://overland-fitness.s3.eu-west-1.amazonaws.com/Class1.jpeg",
      alt: "Power Cardio Class",
    },
    {
      src: "https://overland-fitness.s3.eu-west-1.amazonaws.com/Class2.jpeg",
      alt: "Pilates Core Class",
    },
    {
      src: "https://overland-fitness.s3.eu-west-1.amazonaws.com/Class3.jpeg",
      alt: "Yoga Flow Class",
    },
    {
      src: "https://overland-fitness.s3.eu-west-1.amazonaws.com/Class4.jpeg",
      alt: "Strength Training Class",
    },
    {
      src: "https://overland-fitness.s3.eu-west-1.amazonaws.com/Class5.jpeg",
      alt: "Dance Fitness Class",
    },
  ];

  const schedule = [
    { day: "Monday", classes: "Power Cardio (6AM), Pilates Core (12PM), Yoga Flow (6PM)" },
    { day: "Tuesday", classes: "Strength Training (7AM), Dance Fitness (5PM), HIIT Bootcamp (6:30PM)" },
    { day: "Wednesday", classes: "Yoga Flow (6AM), Power Cardio (12PM), Pilates Core (6PM)" },
    { day: "Thursday", classes: "HIIT Bootcamp (7AM), Dance Fitness (12PM), Strength Training (6PM)" },
    { day: "Friday", classes: "Power Cardio (6AM), Yoga Flow (11AM), Dance Fitness (5PM)" },
    { day: "Saturday", classes: "Pilates Core (9AM), Strength Training (10AM), HIIT Bootcamp (11AM)" },
    { day: "Sunday", classes: "Yoga Flow (8AM), Dance Fitness (10AM), Pilates Core (11AM)" },
  ];

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
            <Flame className="w-4 h-4 text-[var(--yellow)] animate-bounce group-hover:animate-spin" />
            <span className="text-sm font-semibold text-[var(--yellow)] group-hover:text-yellow-300 transition-colors">Dynamic Group Classes</span>
          </div>

          <h1 
            className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            Transform Your Fitness
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1 group-hover:text-gray-200 transition-colors">
            Join our energetic, supportive classes led by certified instructors. Find your passion and achieve your goals with our diverse range of fitness programs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in animation-delay-2">
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
            <Button 
              size="lg" 
              
              className="border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              View Schedule
              <Zap className="ml-2 h-4 w-4 group-hover:text-[var(--yellow)] transition-colors" />
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="pt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--yellow)]/30 hover:bg-white/10 transition-all duration-300 group/stat cursor-pointer">
              <div className="text-3xl font-bold text-[var(--yellow)] group-hover/stat:text-yellow-300 transition-colors">6+</div>
              <p className="text-sm text-gray-400 mt-1">Classes</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--yellow)]/30 hover:bg-white/10 transition-all duration-300 group/stat cursor-pointer">
              <div className="text-3xl font-bold text-[var(--yellow)] group-hover/stat:text-yellow-300 transition-colors">24/7</div>
              <p className="text-sm text-gray-400 mt-1">Access</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--yellow)]/30 hover:bg-white/10 transition-all duration-300 group/stat cursor-pointer">
              <div className="text-3xl font-bold text-[var(--yellow)] group-hover/stat:text-yellow-300 transition-colors">100%</div>
              <p className="text-sm text-gray-400 mt-1">Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Classes</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of expertly-designed fitness classes for every level and goal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((fitnessClass, index) => {
              const Icon = fitnessClass.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-[var(--yellow)] transition-all duration-300 hover:shadow-lg overflow-hidden group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center group-hover:bg-[var(--yellow)]/20 transition-colors">
                        <Icon className="w-6 h-6 text-[var(--yellow)]" />
                      </div>
                      <span className="text-xs font-bold bg-[var(--yellow)]/10 text-[var(--yellow)] px-3 py-1 rounded-full">
                        {fitnessClass.level}
                      </span>
                    </div>
                    <CardTitle className="text-foreground">{fitnessClass.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {fitnessClass.duration}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{fitnessClass.description}</p>
                    <div className="pt-2 border-t border-border">
                      <h4 className="text-xs font-semibold text-foreground mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {fitnessClass.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--yellow)]"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Classes Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Class Gallery</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See our classes in action</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Weekly Schedule</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Classes available throughout the week at convenient times</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {schedule.map((item, index) => (
              <Card key={index} className="border-border hover:border-[var(--yellow)] transition-all group cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-[var(--yellow)] text-lg">{item.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.classes}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-lg bg-muted border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">📅 Full Schedule Available</h3>
            <p className="text-muted-foreground mb-6">
              View detailed class times, instructor information, and book your spot online through our member portal.
            </p>
            <Button className="bg-[var(--yellow)] text-black hover:bg-yellow-300">
              View Full Schedule
            </Button>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Join Our Classes?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Take the first step toward your fitness transformation. Enroll in a class today and start your journey with our supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Book Now
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
