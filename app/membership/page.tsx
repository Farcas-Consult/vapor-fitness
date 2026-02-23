"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Heart, Award, Users, Clock, Sparkles } from "lucide-react";

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const memberships = [
    {
      id: "day-pass",
      name: "Day Pass",
      price: "1,000",
      duration: "1 Day",
      description: "Perfect for trying out our facilities",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Access to all gym facilities",
        "Locker & changing rooms",
        "Water & hydration station",
        "Limited to 1 day",
      ],
      popular: false,
    },
   
   
   
    {
      id: "monthly",
      name: "Monthly Pass",
      price: "5,000",
      duration: "30 Days",
      description: "Most popular option",
      color: "from-yellow-500 to-orange-500",
      features: [
        "Unlimited gym access",
        "All classes included",
        "Monthly trainer sessions",
        "Full locker amenities",
        "Personalized workout plan",
        "Community events",
        "Progress tracking app",
        "Guest privileges (2x/month)",
      ],
      popular: true,
    },
    {
      id: "three-months",
      name: "3 Months",
      price: "13,500",
      duration: "Quarterly",
      description: "Serious commitment discount",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Unlimited gym access",
        "All classes included",
        "Bi-weekly trainer sessions",
        "Premium locker features",
        "Custom nutrition plan",
        "Quarterly body composition",
        "Priority class booking",
        "Guest privileges (4x/month)",
        "Member merchandise gift",
      ],
      popular: false,
    },
    {
      id: "six-months",
      name: "6 Months",
      price: "25,500",
      duration: "Semi-Annual",
      description: "Premium member benefits",
      color: "from-rose-500 to-pink-500",
      features: [
        "Unlimited gym access 24/7",
        "All classes included",
        "Weekly trainer sessions",
        "VIP locker amenities",
        "Comprehensive nutrition plan",
        "Bi-monthly body composition",
        "Priority class booking",
        "Guest privileges (8x/month)",
        "Member merchandise package",
        "Free recovery services",
        "Exclusive workshops",
      ],
      popular: false,
    },
    {
      id: "annual",
      name: "12 Months",
      price: "45,000",
      duration: "Annual",
      description: "Best value annual plan",
      color: "from-amber-500 to-yellow-500",
      features: [
        "Unlimited 24/7 gym access",
        "All classes included",
        "2x weekly trainer sessions",
        "VIP exclusive locker",
        "Complete nutrition & wellness plan",
        "Monthly body composition tracking",
        "Priority class booking",
        "Unlimited guest privileges",
        "Premium merchandise package",
        "Free monthly recovery services",
        "Exclusive member workshops",
        "1 month free when renewing",
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "State-of-the-Art Equipment",
      description: "Latest gym equipment and technology for optimal workouts",
    },
    {
      icon: Heart,
      title: "Expert Trainers",
      description: "Professional certified trainers ready to guide your fitness journey",
    },
    {
      icon: Award,
      title: "Group Classes",
      description: "Diverse classes from yoga to cardio led by experienced instructors",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a supportive community of fitness-minded ladies",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Access according to your membership schedule",
    },
    {
      icon: Sparkles,
      title: "Premium Facilities",
      description: "Sauna, steam room, massage services, and more",
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
            <Sparkles className="w-4 h-4 text-[var(--yellow)] animate-bounce" />
            <span className="text-sm font-semibold text-[var(--yellow)]">Premium Membership Plans</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            Choose Your Fitness Journey
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1">
            Flexible membership plans designed for every fitness level. Start your transformation today at Overland Fitness Ladies Only Gym.
          </p>

          <p className="text-sm text-gray-300 mb-4 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[var(--yellow)]" />
            <span className="font-semibold">OPEN FROM 6:00AM - 10:00PM MON - SUN</span>
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Overland Fitness?</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-lg border border-border/50 bg-background/50 hover:bg-background/80 hover:border-[var(--yellow)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--yellow)]/10 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-block p-3 rounded-lg bg-[var(--yellow)]/10 group-hover:bg-[var(--yellow)]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[var(--yellow)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--yellow)] transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Membership Plans</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              All memberships include access to our world-class facilities, equipment, and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((plan, index) => (
              <div
                key={plan.id}
                className={`group relative animate-fade-in transition-all duration-500`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -inset-0.5 bg-[var(--yellow)]/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                )}
                <Card
                  className={`relative h-full overflow-hidden cursor-pointer transition-all duration-300 border-border hover:border-[var(--yellow)] ${
                    selectedPlan === plan.id ? "ring-2 ring-[var(--yellow)]" : ""
                  } ${plan.popular ? "lg:scale-105 dark:bg-background/95 bg-background" : ""}`}
                  onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 left-0 h-1 bg-[var(--yellow)]"></div>
                  )}

                  {plan.popular && (
                    <Badge className="absolute top-4 left-4 bg-[var(--yellow)] text-black">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className={plan.popular ? "pt-8" : ""}>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-[var(--yellow)]">
                          KES {plan.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{plan.duration}</p>
                    </div>

                    <Link href="/contact" className="block w-full">
                      <Button
                        size="lg"
                        className={plan.popular ? "w-full bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all duration-300 hover:scale-105" : "w-full border-[var(--yellow)]/30 text-foreground hover:bg-[var(--yellow)]/10"}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
                    </Link>

                    <div className="space-y-3 pt-4 border-t border-border">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex gap-3 items-start animate-fade-in"
                          style={{ animationDelay: `${featureIndex * 30}ms` }}
                        >
                          <Check className="w-5 h-5 text-[var(--yellow)] shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Transform Your Fitness?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join our community of strong, inspiring women at Overland Fitness Ladies Only Gym. Choose your perfect membership plan and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Join Today
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
