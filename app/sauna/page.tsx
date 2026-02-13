"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Heart, Zap, Droplets, Users, Clock, ChevronRight, Star } from "lucide-react";

export default function SaunaPage() {
  const benefits = [
    { icon: Heart, title: "Heart Health", shortDesc: "Improve cardiovascular function" },
    { icon: Zap, title: "Energy Boost", shortDesc: "Enhanced vitality and stamina" },
    { icon: Droplets, title: "Deep Cleanse", shortDesc: "Remove impurities through sweat" },
    { icon: Flame, title: "Metabolism", shortDesc: "Burn calories naturally" },
  ];

  const saunaExperience = [
    {
      title: "Dry Heat Sauna",
      shortDesc: "Traditional wellness",
      temp: "80-90°C",
    },
    {
      title: "Infrared Sauna",
      shortDesc: "Deep penetration",
      temp: "45-65°C",
    },
    {
      title: "Steam Sauna",
      shortDesc: "Moist relaxation",
      temp: "40-50°C",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Large Image */}
      <section className="relative h-screen overflow-hidden group">
        {/* Background Image Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 1000%22><rect fill=%22%22 width=%221200%22 height=%221000%22/></svg>')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/20 border border-[var(--yellow)]/30 mb-4 animate-fade-in">
            <Flame className="w-4 h-4 text-[var(--yellow)] animate-bounce" />
            <span className="text-sm font-semibold text-[var(--yellow)]">Traditional Sauna Wellness</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in animation-delay-1 max-w-4xl">
            Experience The Heat
          </h1>

          <p className="text-2xl text-gray-200 max-w-2xl animate-fade-in animation-delay-2">
            Traditional sauna therapy for ultimate wellness and revival
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-fade-in animation-delay-3">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg px-8"
              >
                Book Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
              Explore
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Benefits Grid with Large Images */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Why Choose Our Sauna</h2>
            <div className="h-1 w-24 bg-[var(--yellow)] rounded mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Large Featured Image - Left */}
            <div className="group relative h-96 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-muted flex items-center justify-center border-2 border-dashed border-border group-hover:border-[var(--yellow)] transition-colors">
                <p className="text-muted-foreground text-center text-lg">[Sauna Experience Image]</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Premium Experience</h3>
                  <p className="text-gray-200">Designed for ultimate wellness</p>
                </div>
              </div>
            </div>

            {/* Benefits Cards - Right */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="border-border hover:border-[var(--yellow)] transition-all duration-300 hover:shadow-lg group cursor-pointer p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center group-hover:bg-[var(--yellow)]/20 transition-colors flex-shrink-0">
                        <Icon className="w-7 h-7 text-[var(--yellow)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.shortDesc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sauna Types - Image Focused Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Sauna Collection</h2>
            <div className="h-1 w-24 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our variety of sauna experiences tailored to your wellness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {saunaExperience.map((sauna, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-80 rounded-lg overflow-hidden mb-4 border border-border group-hover:border-[var(--yellow)] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 to-red-900/40 flex items-center justify-center">
                    <p className="text-muted-foreground text-center text-lg">[Sauna Type Image]</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-[var(--yellow)] text-sm font-semibold mb-2">Temperature</p>
                    <p className="text-white text-3xl font-bold">{sauna.temp}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[var(--yellow)] transition-colors">{sauna.title}</h3>
                <p className="text-muted-foreground mb-4">{sauna.shortDesc}</p>
                <Button variant="ghost" className="text-[var(--yellow)] hover:text-[var(--yellow)] hover:bg-[var(--yellow)]/10 p-0">
                  Discover More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Facility Highlights</h2>
            <div className="h-1 w-24 bg-[var(--yellow)] rounded"></div>
          </div>

          {/* Feature 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="h-96 rounded-lg border-2 border-dashed border-border flex items-center justify-center bg-muted hover:border-[var(--yellow)] transition-colors group">
              <p className="text-muted-foreground text-center text-lg group-hover:text-[var(--yellow)] transition-colors">[Facility Image 1]</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-foreground">State-of-the-Art Design</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our sauna rooms feature modern design combined with traditional sauna principles. Each room is meticulously maintained for your comfort and safety.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <Star className="w-5 h-5 text-[var(--yellow)]" />
                  Premium wood construction
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Star className="w-5 h-5 text-[var(--yellow)]" />
                  Advanced temperature control
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Star className="w-5 h-5 text-[var(--yellow)]" />
                  Hygiene-focused maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-4xl font-bold text-foreground">Expert Guidance</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our trained staff is available to help you maximize your sauna experience. Get personalized recommendations based on your wellness goals and experience level.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <Users className="w-5 h-5 text-[var(--yellow)]" />
                  Expert staff assistance
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Clock className="w-5 h-5 text-[var(--yellow)]" />
                  Personalized session guidance
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Heart className="w-5 h-5 text-[var(--yellow)]" />
                  Health & safety focus
                </li>
              </ul>
            </div>
            <div className="h-96 rounded-lg border-2 border-dashed border-border flex items-center justify-center bg-muted hover:border-[var(--yellow)] transition-colors group order-1 md:order-2">
              <p className="text-muted-foreground text-center text-lg group-hover:text-[var(--yellow)] transition-colors">[Facility Image 2]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border text-center p-8 hover:shadow-lg hover:border-[var(--yellow)] transition-all group">
              <div className="w-16 h-16 rounded-full bg-[var(--yellow)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--yellow)]/20 transition-colors">
                <Clock className="w-8 h-8 text-[var(--yellow)]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Duration</h3>
              <p className="text-muted-foreground mb-2">15-25 minutes</p>
              <p className="text-sm text-muted-foreground">Build tolerance gradually</p>
            </Card>

            <Card className="border-border text-center p-8 hover:shadow-lg hover:border-[var(--yellow)] transition-all group">
              <div className="w-16 h-16 rounded-full bg-[var(--yellow)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--yellow)]/20 transition-colors">
                <Flame className="w-8 h-8 text-[var(--yellow)]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Temperature</h3>
              <p className="text-muted-foreground mb-2">80-90°C (Dry Sauna)</p>
              <p className="text-sm text-muted-foreground">Adjustable based on preference</p>
            </Card>

            <Card className="border-border text-center p-8 hover:shadow-lg hover:border-[var(--yellow)] transition-all group">
              <div className="w-16 h-16 rounded-full bg-[var(--yellow)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--yellow)]/20 transition-colors">
                <Users className="w-8 h-8 text-[var(--yellow)]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Frequency</h3>
              <p className="text-muted-foreground mb-2">2-3x per week</p>
              <p className="text-sm text-muted-foreground">Allow recovery days between sessions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Member Stories</h2>
            <div className="h-1 w-24 bg-[var(--yellow)] rounded mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="border-border hover:border-[var(--yellow)] transition-all hover:shadow-lg group">
                <CardHeader>
                  <div className="h-20 W-20 rounded-full bg-muted mb-4 flex items-center justify-center border-2 border-border group-hover:border-[var(--yellow)] transition-colors">
                    <p className="text-muted-foreground">[Member Photo]</p>
                  </div>
                  <CardTitle className="text-foreground">Member {index + 1}</CardTitle>
                  <CardDescription>Wellness Enthusiast</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    "The sauna experience at Overland Fitness has completely transformed my wellness routine. I feel rejuvenated after every session!"
                  </p>
                  <div className="flex text-[var(--yellow)]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--yellow)]" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center overflow-hidden" style={{backgroundImage: "var(--cta-bg-image, linear-gradient(135deg, #1f2937 0%, #111827 100%))"}}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 animate-pulse animation-delay-2"></div>
        
        {/* Floating Accent Shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full border-4 border-white/10 animate-float"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 rounded-full border-4 border-white/10 animate-float animation-delay-3"></div>
        <div className="absolute top-40 left-10 w-12 h-12 rounded-full border-3 border-white/10 animate-float animation-delay-1"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Experience Sauna Bliss</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Book your sauna session today and discover the transformative power of heat therapy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8">
                Book Your Session
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
