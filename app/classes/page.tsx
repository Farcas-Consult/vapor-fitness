"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, Heart, Zap, Wind, Users, Clock, MapPin, Star, Flame, ChevronRight } from "lucide-react";

export default function ClassesPage() {
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

  const schedule = [
    { day: "Monday", classes: "Power Cardio (6AM), Pilates Core (12PM), Yoga Flow (6PM)" },
    { day: "Tuesday", classes: "Strength Training (7AM), Dance Fitness (5PM), HIIT Bootcamp (6:30PM)" },
    { day: "Wednesday", classes: "Yoga Flow (6AM), Power Cardio (12PM), Pilates Core (6PM)" },
    { day: "Thursday", classes: "HIIT Bootcamp (7AM), Dance Fitness (12PM), Strength Training (6PM)" },
    { day: "Friday", classes: "Power Cardio (6AM), Yoga Flow (11AM), Dance Fitness (5PM)" },
    { day: "Saturday", classes: "Pilates Core (9AM), Strength Training (10AM), HIIT Bootcamp (11AM)" },
    { day: "Sunday", classes: "Yoga Flow (8AM), Dance Fitness (10AM), Pilates Core (11AM)" },
  ];

  const testimonials = [
    {
      name: "Fatima A.",
      class: "Power Cardio",
      rating: 5,
      text: "The energy in these classes is incredible! I've never felt more motivated to push myself.",
    },
    {
      name: "Zainab M.",
      class: "Pilates Core",
      rating: 5,
      text: "Transformed my posture and core strength in just 8 weeks. Highly professional instructors!",
    },
    {
      name: "Maryam K.",
      class: "Yoga Flow",
      rating: 5,
      text: "Finally found a stress-free way to stay fit. The classes are calming yet challenging.",
    },
    {
      name: "Rose N.",
      class: "Strength Training",
      rating: 5,
      text: "The personalized guidance and supportive environment makes all the difference.",
    },
  ];

  const instructors = [
    {
      name: "Instructor Sarah",
      specialty: "Power Cardio & HIIT",
      experience: "8 years",
      certification: "Aerobic Fitness Certified",
    },
    {
      name: "Instructor Maria",
      specialty: "Pilates & Yoga",
      experience: "10 years",
      certification: "Pilates & Yoga Master",
    },
    {
      name: "Instructor Grace",
      specialty: "Strength & Dance",
      experience: "6 years",
      certification: "Personal Training & Dance Fitness",
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
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22><rect fill=%22%23122020%22 width=%221200%22 height=%22800%22/></svg>')",
          }}
        ></div>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[var(--yellow)]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[var(--yellow)]/5 blur-3xl animate-pulse animation-delay-2"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/20 border border-[var(--yellow)]/30 mb-4 animate-fade-in">
            <Flame className="w-4 h-4 text-[var(--yellow)] animate-bounce" />
            <span className="text-sm font-semibold text-[var(--yellow)]">Dynamic Group Classes</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            Transform Your Fitness
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1">
            Join our energetic, supportive classes led by certified instructors. Find your passion and achieve your goals with our diverse range of fitness programs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in animation-delay-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Enroll Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              View Schedule
            </Button>
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
                  {/* Image Placeholder */}
                  <div className="h-56 bg-muted border-b-2 border-dashed border-border flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <p className="text-muted-foreground text-center">[{fitnessClass.name} Class Image]</p>
                  </div>

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

      {/* Instructors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Instructors</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our certified, experienced instructors are passionate about your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="border-border hover:border-[var(--yellow)] transition-all group overflow-hidden">
                {/* Photo Placeholder */}
                <div className="h-64 bg-muted border-b-2 border-dashed border-border flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <p className="text-muted-foreground text-center">[{instructor.name}]</p>
                </div>

                <CardHeader>
                  <CardTitle className="text-foreground">{instructor.name}</CardTitle>
                  <CardDescription className="text-[var(--yellow)] font-semibold">
                    {instructor.specialty}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Experience</p>
                    <p className="text-foreground">{instructor.experience}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Certification</p>
                    <p className="text-foreground text-sm">{instructor.certification}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Features - Alternating Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all">
              <p className="text-muted-foreground text-center">[Group Class in Action]</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Supportive Community</h2>
              <p className="text-lg text-muted-foreground">
                Join a welcoming community of women committed to their fitness goals. Our classes create a supportive, judgment-free environment where everyone is encouraged to do their best.
              </p>
              <ul className="space-y-3">
                {[
                  "Inclusive and welcoming atmosphere",
                  "Modifications for all fitness levels",
                  "Motivating group energy",
                  "Lasting friendships and support network",
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
              <h2 className="text-3xl font-bold text-foreground">Expert Guidance & Progress</h2>
              <p className="text-lg text-muted-foreground">
                Our instructors provide detailed form corrections, progress tracking, and personalized modifications during every class. You'll see measurable improvements in strength, endurance, and confidence.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized form corrections",
                  "Flexible progression options",
                  "Performance tracking & goals",
                  "One-on-one consultant sessions available",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--yellow)]"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-96 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all order-1 lg:order-2">
              <p className="text-muted-foreground text-center">[Instructor Providing Guidance]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Member Success Stories</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:border-[var(--yellow)] transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-foreground">{testimonial.name}</CardTitle>
                      <p className="text-sm text-[var(--yellow)] font-semibold mt-1">{testimonial.class}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[var(--yellow)] text-[var(--yellow)]" />
                        ))}
                    </div>
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

      {/* Class Experience Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Class Experience Gallery</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Get a glimpse of the energy and atmosphere in our classes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Class In Progress 1",
              "Class In Progress 2",
              "Warm-up Session",
              "Cool-down Stretch",
              "Group Challenge",
              "Celebration Moment",
              "Training Session",
              "Community Support",
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

      {/* Pricing / Class Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Class Packages</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border hover:border-[var(--yellow)] transition-all">
              <CardHeader>
                <CardTitle className="text-foreground">Drop-In</CardTitle>
                <CardDescription>Pay per class</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-[var(--yellow)]">KES 500</p>
                  <p className="text-sm text-muted-foreground">per class</p>
                </div>
                <Button className="w-full bg-[var(--yellow)] text-black hover:bg-yellow-300">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-[var(--yellow)] transition-all ring-2 ring-[var(--yellow)]/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground">Monthly</CardTitle>
                    <CardDescription>Most Popular</CardDescription>
                  </div>
                  <span className="text-xs bg-[var(--yellow)] text-black px-2 py-1 rounded font-semibold">
                    Best Value
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-[var(--yellow)]">KES 4,500</p>
                  <p className="text-sm text-muted-foreground">unlimited classes</p>
                </div>
                <Button className="w-full bg-[var(--yellow)] text-black hover:bg-yellow-300">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-[var(--yellow)] transition-all">
              <CardHeader>
                <CardTitle className="text-foreground">Quarterly</CardTitle>
                <CardDescription>3 months</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-[var(--yellow)]">KES 12,000</p>
                  <p className="text-sm text-muted-foreground">unlimited classes</p>
                </div>
                <Button className="w-full bg-[var(--yellow)] text-black hover:bg-yellow-300">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
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
                Enroll Now
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
