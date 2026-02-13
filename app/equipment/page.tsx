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
    { name: "Stationary Bikes", range: "Spin & Studio", icon: Wind, category: "Cardio" },
    { name: "Rowing Machine", range: "Full Body Cardio", icon: Heart, category: "Cardio" },
    { name: "Cable Machine", range: "Multi-Station", icon: Gauge, category: "Strength" },
    { name: "Leg Press", range: "Heavy Duty", icon: Dumbbell, category: "Strength" },
    { name: "Smith Machine", range: "Guided Arms", icon: Dumbbell, category: "Strength" },
    { name: "Pull-up Bar", range: "Assisted & Free", icon: Dumbbell, category: "Strength" },
    { name: "Weight Plates", range: "Full Range", icon: Dumbbell, category: "Free Weights" },
    { name: "Kettlebells", range: "4kg - 32kg", icon: Dumbbell, category: "Free Weights" },
    { name: "Yoga Mats", range: "Premium Quality", icon: Wind, category: "Flexibility" },
  ];

  const categories = [
    {
      name: "Free Weights",
      count: 4,
      description: "Complete range from light to heavy dumbbells, barbells, and kettlebells for strength training",
      icon: Dumbbell,
    },
    {
      name: "Cardio Equipment",
      count: 3,
      description: "State-of-the-art treadmills, bikes, and rowing machines for cardiovascular fitness",
      icon: Zap,
    },
    {
      name: "Strength Machines",
      count: 3,
      description: "Advanced guided machines for safe, effective strength and muscle building",
      icon: Gauge,
    },
    {
      name: "Flexibility & Recovery",
      count: 2,
      description: "Yoga mats, foam rollers, and stretching equipment for recovery and flexibility",
      icon: Wind,
    },
  ];

  const features = [
    {
      title: "Premium Quality",
      description: "All equipment from industry-leading manufacturers",
      icon: Award,
    },
    {
      title: "Regular Maintenance",
      description: "Professional servicing ensures optimal performance",
      icon: Shield,
    },
    {
      title: "Expert Staff",
      description: "Trained staff to assist with proper equipment use",
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

  const testimonials = [
    {
      name: "Amara K.",
      text: "The equipment here is top-notch! Everything is well-maintained and modern. Best gym setup in Nairobi!",
      equipment: "Strength Machines",
    },
    {
      name: "Priya M.",
      text: "Love the variety of cardio equipment. The treadmills and bikes are next level. Never crowded enough to wait.",
      equipment: "Cardio Equipment",
    },
    {
      name: "Lisa J.",
      text: "The free weight section is incredibly well-organized. All the weights I need from light to heavy.",
      equipment: "Free Weights",
    },
    {
      name: "Zainab N.",
      text: "Staff are always maintaining the equipment. Everything is clean and works perfectly every time.",
      equipment: "Full Facility",
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
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22><rect fill=%22%23151515%22 width=%221200%22 height=%22800%22/></svg>')",
          }}
        ></div>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[var(--yellow)]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[var(--yellow)]/5 blur-3xl animate-pulse animation-delay-2"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/20 border border-[var(--yellow)]/30 mb-4 animate-fade-in">
            <Dumbbell className="w-4 h-4 text-[var(--yellow)] animate-bounce" />
            <span className="text-sm font-semibold text-[var(--yellow)]">State-of-the-Art Equipment</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            Premium Fitness Equipment
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1">
            Explore our comprehensive collection of professionally-maintained, top-tier fitness equipment designed to help you achieve your goals
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
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Explore Equipment
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Equipment Categories</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our diverse range of equipment organized by fitness category
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Complete Equipment List</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              All items professionally maintained and ready for use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-[var(--yellow)] transition-all duration-300 overflow-hidden group"
                >
                  {/* Equipment Image Placeholder */}
                  <div className="h-56 bg-muted border-b-2 border-dashed border-border flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <p className="text-muted-foreground text-center">[{item.name} Image]</p>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[var(--yellow)]" />
                      </div>
                      <span className="text-xs font-bold bg-[var(--yellow)]/10 text-[var(--yellow)] px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <CardTitle className="text-foreground text-xl">{item.name}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--yellow)]" />
                      <p className="text-muted-foreground">{item.range}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility Zones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Training Zones</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Explore our specialized zones, each designed for specific training goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {zones.map((zone, index) => (
              <Card key={index} className="border-border hover:border-[var(--yellow)] transition-all group overflow-hidden">
                {/* Zone Image Placeholder */}
                <div className="h-72 bg-muted border-b-2 border-dashed border-border flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <p className="text-muted-foreground text-center">{zone.image}</p>
                </div>

                <CardHeader>
                  <CardTitle className="text-foreground text-2xl">{zone.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Equipment Available:</h4>
                    <p className="text-muted-foreground text-sm">{zone.equipment}</p>
                  </div>
                  <Button variant="outline" className="w-full border-[var(--yellow)] text-[var(--yellow)] hover:bg-[var(--yellow)]/10">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quality Equipment Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Quality Equipment Matters</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="h-96 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all">
              <p className="text-muted-foreground text-center">[Equipment Showcase Image]</p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {[
                {
                  title: "Safety & Durability",
                  desc: "Premium equipment is built with safety standards and longevity in mind, reducing injury risk",
                },
                {
                  title: "Consistent Performance",
                  desc: "Professional-grade equipment maintains consistent resistance and stability for reliable workouts",
                },
                {
                  title: "Better Results",
                  desc: "Quality equipment allows for precise movements and proper form, leading to faster progress",
                },
                {
                  title: "Optimal Maintenance",
                  desc: "Regular professional servicing ensures every machine works perfectly every time",
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Equipment Standards</h2>
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
                <h2 className="text-4xl font-bold text-foreground mb-4">Professional Maintenance</h2>
                <div className="h-1 w-20 bg-[var(--yellow)] rounded mb-6"></div>
              </div>

              <p className="text-lg text-muted-foreground">
                Our dedicated maintenance team ensures every piece of equipment is in peak condition. Regular inspections, cleaning, and servicing guarantee optimal performance and safety.
              </p>

              <ul className="space-y-3">
                {[
                  "Daily equipment cleaning and sanitization",
                  "Weekly performance checks and adjustments",
                  "Monthly professional maintenance and repairs",
                  "Quarterly deep servicing and calibration",
                  "Annual equipment replacement schedule",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[var(--yellow)] flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="h-96 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all order-1 lg:order-2">
              <p className="text-muted-foreground text-center">[Maintenance & Care Image]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Members Love About Our Equipment</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:border-[var(--yellow)] transition-all group">
                <CardHeader>
                  <CardTitle className="text-foreground">{testimonial.name}</CardTitle>
                  <CardDescription className="text-[var(--yellow)] font-semibold">
                    {testimonial.equipment}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Equipment Gallery</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Close-up views of our premium equipment collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Dumbbells Collection",
              "Barbell Rack",
              "Treadmill Row",
              "Leg Press Machine",
              "Cable Station",
              "Cardio Machines",
              "Kettlebell Display",
              "Free Weight Area",
            ].map((item, index) => (
              <div
                key={index}
                className="h-64 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                <div className="text-center">
                  <p className="text-muted-foreground">[{item}]</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Train With Premium Equipment?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experience the difference quality equipment makes. Join Overland Fitness today and access our complete range of state-of-the-art equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Get Your Membership
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
