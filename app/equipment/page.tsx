"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, Check, Zap, Shield, Users, Award, ChevronRight, Gauge, Wind, Heart } from "lucide-react";

export default function EquipmentPage() {
  const equipment = [
    { name: "Dumbbells", range: "2kg - 50kg", icon: Dumbbell, category: "Free Weights" },
    { name: "Barbell Set", range: "Olympic Standard", icon: Dumbbell, category: "Free Weights" },
    { name: "Treadmills", range: "Professional Grade", icon: Zap, category: "Cardio" },
    { name: "Rowing Machine", range: "Full Body Cardio", icon: Heart, category: "Cardio" },
    { name: "Weight Plates", range: "Full Range", icon: Dumbbell, category: "Free Weights" },
    { name: "Cable Machine", range: "Multi-Station", icon: Gauge, category: "Strength" },
    { name: "Leg Press", range: "Heavy Duty", icon: Dumbbell, category: "Strength" },
    { name: "Smith Machine", range: "Guided Arms", icon: Dumbbell, category: "Strength" },
    { name: "Pull-up Bar", range: "Assisted & Free", icon: Dumbbell, category: "Strength" },
    { name: "Stationary Bikes", range: "Spin & Studio", icon: Wind, category: "Cardio" },
    { name: "Kettlebells", range: "4kg - 32kg", icon: Dumbbell, category: "Free Weights" },
    { name: "Yoga Mats", range: "Premium Quality", icon: Wind, category: "Flexibility" },
  ];

  const categories = [
    {
      name: "Free Weights",
      count: 4,
      description: "Elegant collection of premium dumbbells, barbells, and kettlebells for a luxury strength experience",
      icon: Dumbbell,
    },
    {
      name: "Cardio Wellness",
      count: 3,
      description: "Beautifully designed treadmills, bikes, and rowing machines for effortless cardiovascular wellness",
      icon: Zap,
    },
    {
      name: "Advanced Machines",
      count: 3,
      description: "Sophisticated guided machines for graceful, comfortable strength and body sculpting",
      icon: Gauge,
    },
    {
      name: "Recovery & Wellness",
      count: 2,
      description: "Premium yoga mats and recovery tools for luxurious stretching and rejuvenation",
      icon: Wind,
    },
  ];

  const features = [
    {
      title: "Luxury Quality",
      description: "Premium equipment from elite manufacturers selected for elegance and exquisite performance",
      icon: Award,
    },
    {
      title: "Premium Care",
      description: "White-glove maintenance keeps every piece immaculate and perfectly functioning",
      icon: Shield,
    },
    {
      title: "Expert Guidance",
      description: "Our specialists ensure you experience every piece with confidence and comfort",
      icon: Users,
    },
  ];

  const zones = [
    {
      name: "Free Weight Zone",
      image: "[Free Weight Zone]",
      equipment: "Dumbbells, Barbells, Kettlebells, Benches",
    },
    {
      name: "Cardio Zone",
      image: "[Cardio Zone]",
      equipment: "Treadmills, Stationary Bikes, Rowing Machines",
    },
    {
      name: "Strength Zone",
      image: "[Strength Training Zone]",
      equipment: "Cable Machines, Leg Press, Smith Machine",
    },
    {
      name: "Functional Zone",
      image: "[Functional Training Area]",
      equipment: "Kettlebells, Medicine Balls, Battle Ropes",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden group"
        style={{
          backgroundImage: `url('https://overland-fitness.s3.eu-west-1.amazonaws.com/Equipment1.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[var(--yellow)]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[var(--yellow)]/5 blur-3xl animate-pulse animation-delay-2"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/20 border border-[var(--yellow)]/30 mb-4 animate-fade-in">
            <Dumbbell className="w-4 h-4 text-[var(--yellow)] animate-bounce" />
            <span className="text-sm font-semibold text-[var(--yellow)]">Premium Luxury Fitness Experience</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            Elevate Your Fitness Lifestyle
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1">
            Discover our curated collection of premium, beautifully-designed fitness equipment that transforms workouts into luxurious wellness experiences. Every piece selected for elegance, performance, and your comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in animation-delay-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get Your Membership
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#categories">
              <Button size="lg"  className="border-white/30 text-white hover:bg-white/10">
                Explore Equipment
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Luxury Equipment Categories</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our thoughtfully curated selection of premium equipment, each category designed for the ultimate wellness lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-[var(--yellow)] transition-all duration-300 hover:shadow-lg group cursor-pointer"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--yellow)]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[var(--yellow)]" />
                    </div>
                    <CardTitle className="text-foreground">{category.name}</CardTitle>
                    <CardDescription className="text-[var(--yellow)] font-semibold">
                      {category.count} Equipment Types
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Complete Luxury Collection</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Premium equipment meticulously maintained for your comfort and pleasure
            </p>
          </div>

          {/* Equipment List */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {equipment.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-[var(--yellow)] transition-all group cursor-pointer hover:bg-background/50">
                  <Check className="w-5 h-5 text-[var(--yellow)] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.range}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Gallery */}
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Equipment Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => {
              const imageNum = index + 2; // Equipment2 to Equipment13
              return (
                <div
                  key={index}
                  className="h-64 rounded-lg overflow-hidden border border-border hover:border-[var(--yellow)] transition-all duration-300 group cursor-pointer hover:shadow-lg"
                >
                  <img 
                    src={`https://overland-fitness.s3.eu-west-1.amazonaws.com/Equipment${imageNum}.jpeg`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Quality Equipment Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">The Luxury Equipment Difference</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="h-96 rounded-lg overflow-hidden bg-muted border border-border group hover:shadow-xl transition-all">
              <img 
                src="https://overland-fitness.s3.eu-west-1.amazonaws.com/Equipment14.jpeg"
                alt="Equipment Showcase"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              {[
                {
                  title: "Exquisite Design",
                  desc: "Beautifully crafted equipment that elevates your environment, making every workout a luxurious experience",
                },
                {
                  title: "Superior Comfort",
                  desc: "Premium ergonomic design ensures comfort and support, so you can focus on the experience, not discomfort",
                },
                {
                  title: "Effortless Performance",
                  desc: "Flawlessly maintained equipment means you can work out with complete confidence and peace of mind",
                },
                {
                  title: "Pristine Conditions",
                  desc: "Impeccably clean and serviced equipment reflects our commitment to your wellness sanctuary",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--yellow)]/20 transition-colors">
                    <Check className="w-6 h-6 text-[var(--yellow)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Luxury Care Standards</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-[var(--yellow)] transition-all text-center p-8 group"
                >
                  <div className="w-16 h-16 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--yellow)]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[var(--yellow)]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Maintenance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Impeccable Care & Attention</h2>
                <div className="h-1 w-20 bg-[var(--yellow)] rounded mb-6"></div>
              </div>

              <p className="text-lg text-muted-foreground">
                Our dedicated care team treats every piece of equipment with the same attention to detail you deserve. Meticulous maintenance ensures your luxury wellness sanctuary is always pristine and perfectly maintained.
              </p>

              <ul className="space-y-3">
                {[
                  "Daily luxury-level cleaning and sanitization",
                  "Weekly performance checks for optimal comfort",
                  "Monthly premium maintenance and refinement",
                  "Quarterly deep care and detailed servicing",
                  "Annual refresh program to maintain elegance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[var(--yellow)] flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="h-96 rounded-lg overflow-hidden bg-muted border border-border group hover:shadow-xl transition-all order-1 lg:order-2">
              <img 
                src="https://overland-fitness.s3.eu-west-1.amazonaws.com/Equipment12.jpeg"
                alt="Professional Maintenance"
                className="w-full h-full object-cover"
              />
            </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experience Premium Fitness in Luxury</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover how our exquisite equipment collection elevates your wellness lifestyle. Join Overland Fitness and experience fitness as it should be – beautifully, comfortably, and luxuriously.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Get Your Membership
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
