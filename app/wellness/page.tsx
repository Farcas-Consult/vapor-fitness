"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Hand, Heart, Zap, Droplets, Users, Clock, MapPin, ChevronRight, Star, Wind } from "lucide-react";

export default function WellnessPage() {


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
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden group">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: "url('https://overland-fitness.s3.eu-west-1.amazonaws.com/Saun2.jpeg')",
          }}
        ></div>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[var(--yellow)]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[var(--yellow)]/5 blur-3xl animate-pulse animation-delay-2"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/20 border border-[var(--yellow)]/30 mb-4 animate-fade-in">
            <Zap className="w-4 h-4 text-[var(--yellow)] animate-bounce" />
            <span className="text-sm font-semibold text-[var(--yellow)]">Complete Wellness Services</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            Wellness & Recovery
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1">
            Experience the ultimate in relaxation and healing with our premium sauna and massage therapy services
          </p>

          <p className="text-sm text-gray-300 mb-4 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[var(--yellow)]" />
            <span className="font-semibold">OPEN FROM 6:00AM - 10:00PM EVERYDAY</span>
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="sauna" className="space-y-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-1 bg-card border border-border p-1 h-auto">
              <TabsTrigger
                value="sauna"
                className="text-lg py-3 data-[state=active]:bg-[var(--yellow)] data-[state=active]:text-black"
              >
                <Flame className="w-5 h-5 mr-2" />
                Sauna & Steam
              </TabsTrigger>
            </TabsList>

            {/* Sauna Tab */}
            <TabsContent value="sauna" className="space-y-16 relative" style={{backgroundImage: "url('https://overland-fitness.s3.eu-west-1.amazonaws.com/DrySauna.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
              <div className="absolute inset-0 bg-background/80"></div>
              <div className="relative z-10">
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {saunaBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border hover:border-[var(--yellow)] transition-all duration-300 hover:shadow-lg group cursor-pointer p-6"
                    >
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="w-14 h-14 rounded-lg bg-[var(--yellow)]/10 flex items-center justify-center group-hover:bg-[var(--yellow)]/20 transition-colors">
                          <Icon className="w-7 h-7 text-[var(--yellow)]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-lg">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm">{benefit.shortDesc}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Sauna Types */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-foreground mb-4">Our Sauna Collection</h2>
                  <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {saunaTypes.map((sauna, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative h-80 rounded-lg overflow-hidden mb-4 border border-border group-hover:border-[var(--yellow)] transition-all duration-300">
                        <img
                          src={sauna.image}
                          alt={sauna.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <p className="text-[var(--yellow)] text-sm font-semibold mb-2">Temperature</p>
                          <p className="text-white text-3xl font-bold">{sauna.temp}</p>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[var(--yellow)] transition-colors">
                        {sauna.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{sauna.shortDesc}</p>
                      <Button variant="ghost" className="text-[var(--yellow)] hover:text-[var(--yellow)] hover:bg-[var(--yellow)]/10 p-0">
                        Discover More <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sauna Features */}
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
            </TabsContent>


          </Tabs>
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
            Experience the healing power of our premium sauna and therapeutic massage services. Book your session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Book a Session
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
