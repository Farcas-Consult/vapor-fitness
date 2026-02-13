"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, 
  Users, 
  Award, 
  Dumbbell, 
  Wind, 
  Flame, 
  Hand, 
  BookOpen, 
  Users2, 
  ArrowRight,
  Clock,
  Zap
} from "lucide-react";

export default function Home() {
  const amenities = [
    {
      title: "Steam",
      description: "Relaxation and detoxification in our luxurious steam rooms",
      href: "/steam",
    },
    {
      title: "Sauna",
      description: "Traditional sauna experience for wellness and muscle recovery",
      href: "/sauna",
    },
    {
      title: "Massage",
      description: "Professional massage therapy to relief tension and stress",
      href: "/massage",
    },
    {
      title: "Classes",
      description: "Expert-led fitness classes for all levels and goals",
      href: "/classes",
    },
    {
      title: "Equipment",
      description: "World-class fitness equipment for complete workouts",
      href: "/equipment",
    },
    {
      title: "Trainers",
      description: "Certified professional trainers for personalized guidance",
      href: "/trainers",
    },
  ];

  const whyChooseUs = [
    {
      title: "Women-Focused Space",
      description:
        "A safe, supportive environment created exclusively for women to achieve their fitness goals",
    },
    {
      title: "Premium Facility",
      description:
        "State-of-the-art equipment and amenities designed for maximum comfort and results",
    },
    {
      title: "Expert Support",
      description:
        "Dedicated trainers and staff committed to your success and well-being",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[var(--black)] to-[var(--black)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500/10 opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Fitness Journey
            </h1>
            <p className="text-lg md:text-xl text-yellow-100 max-w-2xl mx-auto">
              Join Overland Fitness, Kenya&apos;s premier ladies-only gym designed to empower women through fitness, wellness, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/contact">
                <Button size="lg" className="bg-[var(--yellow)] text-black hover:bg-yellow-300">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">About Overland Fitness</h2>
                <div className="h-1 w-20 bg-[var(--yellow)] rounded"></div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Overland Fitness is more than just a gym – we&apos;re a community dedicated to empowering women of all fitness levels to achieve their health and wellness goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in the heart of Nairobi at Overland Towers on Kirongothi Street, our facility combines world-class equipment with a supportive atmosphere exclusively for women. We believe fitness is a journey, not a destination.
              </p>
              <Link href="/about">
                <Button variant="default" className="bg-[var(--black)] hover:bg-black/90">
                  Read Our Story
                </Button>
              </Link>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                [About Us Image - To be added]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Overland Fitness</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const icons = [
                <Sparkles key={0} className="h-6 w-6 text-[var(--black)]" />,
                <Award key={1} className="h-6 w-6 text-[var(--black)]" />,
                <Users key={2} className="h-6 w-6 text-[var(--black)]" />,
              ];
              return (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center mb-4">
                      {icons[index]}
                    </div>
                    <CardTitle className="text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Amenities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Premium Amenities</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience world-class facilities and services designed to support your complete fitness and wellness journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const amenityIcons = [
                <Wind key={0} className="h-7 w-7 text-[var(--black)]" />,
                <Flame key={1} className="h-7 w-7 text-[var(--black)]" />,
                <Hand key={2} className="h-7 w-7 text-[var(--black)]" />,
                <BookOpen key={3} className="h-7 w-7 text-[var(--black)]" />,
                <Dumbbell key={4} className="h-7 w-7 text-[var(--black)]" />,
                <Users2 key={5} className="h-7 w-7 text-[var(--black)]" />,
              ];
              return (
                <Link key={index} href={amenity.href}>
                  <Card className="border-border hover:border-[var(--yellow)] transition-colors h-full cursor-pointer hover:shadow-lg">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center mb-4">
                        {amenityIcons[index]}
                      </div>
                      <CardTitle className="text-foreground">{amenity.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{amenity.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--black)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[var(--yellow)] mb-2">500+</p>
              <p className="text-gray-300">Active Members</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--yellow)] mb-2">20+</p>
              <p className="text-gray-300">Fitness Classes</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--yellow)] mb-2">15+</p>
              <p className="text-gray-300">Expert Trainers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--yellow)] mb-2">7+</p>
              <p className="text-gray-300">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[var(--yellow)] to-yellow-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Ready to Transform?</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Join thousands of women who have already started their transformation journey at Overland Fitness. Take the first step today!
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center text-black text-sm">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-black" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">Mon - Fri: 5AM - 10PM</p>
                <p className="text-xs text-black/70">Sat - Sun: 6AM - 8PM</p>
              </div>
            </div>
            <div className="hidden sm:block text-black/40">•</div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-black" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">+254 118 814 597</p>
                <p className="text-xs text-black/70">Call to book your free trial</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
