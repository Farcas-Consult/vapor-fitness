"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wind, Droplets, Heart, Zap, Clock, Users, MapPin, ChevronRight } from "lucide-react";

export default function SteamPage() {
  const benefits = [
    {
      title: "Detoxification",
      description: "Help your body eliminate toxins through sweat in our cleansing steam environment",
    },
    {
      title: "Muscle Recovery",
      description: "Soothe sore muscles and accelerate recovery after intense workouts",
    },
    {
      title: "Respiratory Health",
      description: "Open airways and clear sinuses with moist, warm steam therapy",
    },
    {
      title: "Skin Rejuvenation",
      description: "Improve circulation and promote healthy, glowing skin naturally",
    },
    {
      title: "Stress Relief",
      description: "Relax your mind and body in our peaceful, serene steam sanctuary",
    },
    {
      title: "Weight Management",
      description: "Boost metabolism and support your fitness goals with regular steam sessions",
    },
  ];

  const guidelines = [
    {
      step: "01",
      title: "Hydrate",
      description: "Drink plenty of water before and after your steam session",
    },
    {
      step: "02",
      title: "Remove Jewelry",
      description: "Take off all jewelry and metal items to avoid discomfort",
    },
    {
      step: "03",
      title: "Shower First",
      description: "Take a quick lukewarm shower to prepare your skin",
    },
    {
      step: "04",
      title: "Start Gradual",
      description: "Begin with 10-15 minutes and gradually increase duration",
    },
    {
      step: "05",
      title: "Cool Down",
      description: "Allow your body to cool naturally after your session",
    },
    {
      step: "06",
      title: "Moisturize",
      description: "Apply moisturizer to keep your skin hydrated and healthy",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden group">
        {/* Background Image Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 group-hover:opacity-50 transition-opacity duration-500"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22><rect fill=%22%2301100f%22 width=%221200%22 height=%22800%22/></svg>')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl animate-pulse animation-delay-2"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-4">
            <Wind className="w-4 h-4 text-blue-400 animate-bounce" />
            <span className="text-sm font-semibold text-blue-300">Premium Steam Experience</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            Luxurious Steam Therapy
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1">
            Escape into our world-class steam rooms designed for ultimate relaxation, detoxification, and wellness recovery
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in animation-delay-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book Your Session
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:border-blue-400/30 transition-colors">
              <p className="text-[var(--yellow)] text-2xl font-bold mb-1">42°C</p>
              <p className="text-gray-400 text-sm">Perfect Temperature</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:border-blue-400/30 transition-colors">
              <p className="text-[var(--yellow)] text-2xl font-bold mb-1">30min</p>
              <p className="text-gray-400 text-sm">Ideal Duration</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:border-blue-400/30 transition-colors">
              <p className="text-[var(--yellow)] text-2xl font-bold mb-1">100%</p>
              <p className="text-gray-400 text-sm">Pure Relaxation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Health Benefits</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the transformative power of steam therapy and its incredible benefits for your body and mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-border hover:border-[var(--yellow)] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 group cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center group-hover:bg-[var(--yellow)]/20 transition-colors">
                      {index === 0 && <Zap className="w-5 h-5 text-[var(--yellow)]" />}
                      {index === 1 && <Heart className="w-5 h-5 text-[var(--yellow)]" />}
                      {index === 2 && <Wind className="w-5 h-5 text-[var(--yellow)]" />}
                      {index === 3 && <Droplets className="w-5 h-5 text-[var(--yellow)]" />}
                      {index === 4 && <Heart className="w-5 h-5 text-[var(--yellow)]" />}
                      {index === 5 && <Zap className="w-5 h-5 text-[var(--yellow)]" />}
                    </div>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Guidelines */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-12">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
            </TabsList>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Steam Room Features</h2>
                <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    { icon: Wind, title: "Pure Steam", desc: "Generated from distilled water" },
                    { icon: Droplets, title: "Humidity Control", desc: "Optimal moisture levels maintained" },
                    { icon: Clock, title: "24/7 Available", desc: "Access anytime you want" },
                  ].map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex gap-4 p-4 rounded-lg bg-background border border-border hover:border-[var(--yellow)]/30 transition-colors group cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center group-hover:bg-[var(--yellow)]/20 transition-colors flex-shrink-0">
                          <Icon className="w-6 h-6 text-[var(--yellow)]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-muted rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-border">
                  <p className="text-muted-foreground text-center">
                    [Steam Room Image - To be added]
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Guidelines Tab */}
            <TabsContent value="guidelines" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">How to Use Steam Rooms</h2>
                <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guidelines.map((guideline, index) => (
                  <Card
                    key={index}
                    className="border-border hover:border-[var(--yellow)] transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-[var(--yellow)] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <CardHeader>
                      <div className="text-5xl font-bold text-[var(--yellow)]/30 mb-2">{guideline.step}</div>
                      <CardTitle className="text-foreground">{guideline.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{guideline.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border text-center p-8 hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-[var(--yellow)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground mb-4">10-30 minutes per session</p>
              <p className="text-sm text-muted-foreground">Beginners: Start with shorter sessions and gradually increase</p>
            </Card>
            <Card className="border-border text-center p-8 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-[var(--yellow)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Frequency</h3>
              <p className="text-muted-foreground mb-4">2-3 times per week</p>
              <p className="text-sm text-muted-foreground">Allow rest days between sessions for optimal benefits</p>
            </Card>
            <Card className="border-border text-center p-8 hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 text-[var(--yellow)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground mb-4">Ground Floor, Overland Towers</p>
              <p className="text-sm text-muted-foreground">Easy access and convenient facility location</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[var(--yellow)] via-yellow-200 to-[var(--yellow)]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Ready to Experience Premium Steam Therapy?</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Join our members and discover the transformative benefits of our luxurious steam rooms today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-black/90">
                Book Your Session Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10">
              Call: +254 118 814 597
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
