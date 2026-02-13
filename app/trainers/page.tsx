"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Star, CheckCircle, MapPin, Clock, ChevronRight, Dumbbell } from "lucide-react";

export default function TrainersPage() {
  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Strength & Conditioning",
      experience: "8 years",
      certifications: ["NASM-CPT", "Strength Coach"],
      bio: "Passionate about building strong, confident women through progressive resistance training.",
      rating: 5,
      reviews: 47,
      focus: ["Women Empowerment", "Strength Building", "Posture Correction"],
    },
    {
      id: 2,
      name: "Maria Santos",
      specialty: "Cardio & HIIT",
      experience: "6 years",
      certifications: ["ACE-CPT", "HIIT Specialist"],
      bio: "High-energy trainer dedicated to improving cardiovascular fitness and building endurance.",
      rating: 5,
      reviews: 53,
      focus: ["Cardio Fitness", "Metabolism Boost", "Fat Loss"],
    },
    {
      id: 3,
      name: "Grace Kipchoge",
      specialty: "Functional & Flexibility",
      experience: "7 years",
      certifications: ["ISSA-CPT", "Yoga Teacher"],
      bio: "Holistic trainer focusing on functional movement and mind-body wellness.",
      rating: 5,
      reviews: 41,
      focus: ["Flexibility", "Mobility", "Injury Prevention"],
    },
    {
      id: 4,
      name: "Emma Watson",
      specialty: "Personal Training",
      experience: "9 years",
      certifications: ["NASM-CPT", "Nutrition Specialist"],
      bio: "Results-oriented trainer specializing in personalized workout and nutrition plans.",
      rating: 5,
      reviews: 62,
      focus: ["Body Transformation", "Nutrition", "Goal Achievement"],
    },
    {
      id: 5,
      name: "Lisa Chen",
      specialty: "Weight Loss & Nutrition",
      experience: "5 years",
      certifications: ["ISSN-SNS", "Wellness Coach"],
      bio: "Dedicated to helping women achieve sustainable weight loss and healthy lifestyle changes.",
      rating: 5,
      reviews: 38,
      focus: ["Weight Management", "Nutrition Planning", "Lifestyle Coaching"],
    },
    {
      id: 6,
      name: "Rachel Brown",
      specialty: "Athletic Performance",
      experience: "10 years",
      certifications: ["CSCS", "Athletic Trainer"],
      bio: "Expert in athletic development and sports-specific training for competitive fitness.",
      rating: 5,
      reviews: 55,
      focus: ["Performance Training", "Power Development", "Sport Conditioning"],
    },
  ];

  const testimonials = [
    {
      name: "Amara N.",
      trainer: "Sarah Johnson",
      rating: 5,
      text: "Sarah transformed my entire approach to training. I've never felt stronger and more confident!",
    },
    {
      name: "Zainab M.",
      trainer: "Maria Santos",
      rating: 5,
      text: "Maria's HIIT classes changed my fitness level completely. She's motivating and professional.",
    },
    {
      name: "Maryam K.",
      trainer: "Grace Kipchoge",
      rating: 5,
      text: "Grace helped me understand my body better. The functional training approach is incredible.",
    },
    {
      name: "Rose P.",
      trainer: "Emma Watson",
      rating: 5,
      text: "Emma's personalized approach got me results I thought were impossible. Highly recommend!",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden group">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 group-hover:opacity-60 transition-opacity duration-500"></div>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[var(--yellow)]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[var(--yellow)]/5 blur-3xl animate-pulse animation-delay-2"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--yellow)]/20 border border-[var(--yellow)]/30 mb-4 animate-fade-in">
            <Dumbbell className="w-4 h-4 text-[var(--yellow)] animate-bounce" />
            <span className="text-sm font-semibold text-[var(--yellow)]">Expert Fitness Professionals</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            Meet Our Trainers
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1">
            Our certified, passionate trainers are dedicated to helping you achieve your fitness goals and transform your life
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in animation-delay-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--yellow)] text-black hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book a Session
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              View Specialties
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Trainers Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Professional Team</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certified trainers with diverse expertise ready to guide your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer, index) => (
              <Card
                key={index}
                className="border-border hover:border-[var(--yellow)] transition-all duration-300 hover:shadow-xl overflow-hidden group"
              >
                {/* Trainer Photo Placeholder */}
                <div className="relative h-80 bg-muted border-b-2 border-dashed border-border flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <p className="text-muted-foreground text-lg">[{trainer.name}]</p>
                    <p className="text-xs text-muted-foreground mt-2">Professional trainer image</p>
                  </div>
                </div>

                <CardHeader>
                  <div className="space-y-3">
                    <div>
                      <CardTitle className="text-foreground text-2xl">{trainer.name}</CardTitle>
                      <p className="text-[var(--yellow)] font-semibold text-sm mt-1">{trainer.specialty}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {Array(trainer.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[var(--yellow)] text-[var(--yellow)]" />
                          ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({trainer.reviews} reviews)</span>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-[var(--yellow)]" />
                      {trainer.experience} experience
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Bio */}
                  <p className="text-muted-foreground text-sm italic">{trainer.bio}</p>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-[var(--yellow)]/10 text-[var(--yellow)] border-[var(--yellow)]/30">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div>
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase">Specializations</h4>
                    <div className="space-y-1">
                      {trainer.focus.map((focus, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-[var(--yellow)]" />
                          {focus}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-[var(--yellow)] text-black hover:bg-yellow-300 mt-2">
                    Book with {trainer.name.split(" ")[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Trainers - Alternating Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all">
              <p className="text-muted-foreground text-center">[Trainer Leading class]</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Certified & Experienced</h2>
              <p className="text-lg text-muted-foreground">
                All our trainers hold internationally recognized certifications and bring 5-10 years of hands-on experience in fitness coaching.
              </p>
              <ul className="space-y-3">
                {[
                  "NASM, ACE, ISSA certified professionals",
                  "Continuous professional development",
                  "Specialized training in multiple disciplines",
                  "Track record of member success",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-[var(--yellow)]" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-foreground">Personalized Approach</h2>
              <p className="text-lg text-muted-foreground">
                Each trainer takes time to understand your goals, fitness level, and preferences to create a truly customized training experience.
              </p>
              <ul className="space-y-3">
                {[
                  "One-on-one fitness assessments",
                  "Customized workout programming",
                  "Regular progress evaluations",
                  "Flexible scheduling and modifications",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--yellow)]" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-96 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all order-1 lg:order-2">
              <p className="text-muted-foreground text-center">[One-on-one training session]</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg bg-muted border-2 border-dashed border-border flex items-center justify-center group hover:shadow-xl transition-all">
              <p className="text-muted-foreground text-center">[Motivating trainer moment]</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Passionate & Motivating</h2>
              <p className="text-lg text-muted-foreground">
                Our trainers aren't just professionals&mdash;they're passionate advocates for your success who celebrate every milestone with you.
              </p>
              <ul className="space-y-3">
                {[
                  "Positive and encouraging environment",
                  "Celebration of achievements",
                  "Accountability partnerships",
                  "Long-term success mentorship",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-[var(--yellow)]" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
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
                      <p className="text-sm text-[var(--yellow)] font-semibold mt-1">with {testimonial.trainer}</p>
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
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Training in Action</h2>
            <div className="h-1 w-20 bg-[var(--yellow)] rounded mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              See our trainers making an impact on our members&apos; lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "One-on-One Session 1",
              "Group Training 1",
              "Strength Coaching",
              "Form Correction",
              "Cardio Training",
              "Progress Celebration",
              "Outdoor Session",
              "Member Milestone",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Transform Your Fitness?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Book a session with one of our expert trainers today and start your transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Book Your First Session
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
