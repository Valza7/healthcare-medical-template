import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Users, TrendingUp, Calendar, Shield, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our healthcare practice, our mission, values, and commitment to exceptional patient care.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and dignity, recognizing the trust you place in us.",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Our board-certified physicians and staff maintain the highest standards of medical practice.",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Your health goals and preferences guide every decision we make together.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We embrace medical advancements while maintaining personalized, human-centered care.",
    },
  ];

  const milestones = [
    { year: "2005", event: "Practice Founded", description: "Started with 3 physicians serving the local community" },
    { year: "2010", event: "Expanded Services", description: "Added specialty care and diagnostic services" },
    { year: "2015", event: "New Facility", description: "Opened state-of-the-art medical center" },
    { year: "2020", event: "Telehealth Launch", description: "Implemented comprehensive telehealth platform" },
    { year: "2024", event: "25+ Providers", description: "Grown to serve 50,000+ patients annually" },
  ];

  const achievements = [
    "Joint Commission Accredited",
    "Patient-Centered Medical Home (PCMH) Recognition",
    "Top-Rated by Patients (4.8/5 Stars)",
    "Healthcare Quality Award",
    "Community Service Excellence",
    "Best Places to Work in Healthcare",
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-medical-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-medical-blue-900 sm:text-5xl md:text-6xl">
                About Our Practice
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                For nearly two decades, we've been providing exceptional healthcare to our community.
                Our mission is simple: deliver compassionate, high-quality medical care that improves lives.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To provide comprehensive, patient-centered healthcare services with compassion, integrity,
                    and clinical excellence. We are committed to improving the health and well-being of every
                    individual and family we serve, treating each patient as we would want to be treated.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted healthcare provider in our community, recognized for clinical
                    excellence, innovative care delivery, and an unwavering commitment to patient satisfaction.
                    We aspire to set the standard for accessible, high-quality healthcare that transforms lives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-medical-neutral-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do, from patient care to community involvement
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-medical-blue-100 text-medical-blue-600 mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story/Timeline */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                Our Journey
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Nearly two decades of growth, innovation, and commitment to our community
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue-600 text-white font-bold">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-medical-blue-200 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="info">{milestone.year}</Badge>
                      <h3 className="font-semibold text-lg">{milestone.event}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements & Accreditations */}
        <section className="py-16 md:py-24 bg-medical-blue-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                Awards & Recognition
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Honored to be recognized for our commitment to excellence
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Award className="h-6 w-6 text-medical-green-600 flex-shrink-0" />
                  <span className="font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-medical-blue-900 mb-2">25+</div>
                <div className="text-gray-600">Healthcare Providers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-medical-blue-900 mb-2">50K+</div>
                <div className="text-gray-600">Patients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-medical-blue-900 mb-2">15+</div>
                <div className="text-gray-600">Medical Specialties</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-medical-blue-900 mb-2">4.8</div>
                <div className="text-gray-600">Patient Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-medical-neutral-50">
          <div className="container text-center">
            <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our providers are board-certified experts dedicated to your health and well-being
            </p>
            <Button asChild variant="medical" size="lg">
              <Link href="/providers">
                <Users className="h-5 w-5" />
                View Our Providers
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-medical-blue-600 to-medical-blue-800 text-white">
          <div className="container text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of patients who trust us with their health. Schedule your appointment today.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/appointments">
                <Calendar className="h-5 w-5" />
                Book an Appointment
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
