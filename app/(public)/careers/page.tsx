import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Heart, TrendingUp, Users, DollarSign, GraduationCap, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our healthcare team. Explore career opportunities and learn why HealthCare Medical Practice is a great place to work.",
};

export default function CareersPage() {
  const openPositions = [
    {
      title: "Registered Nurse (RN)",
      department: "Cardiology",
      type: "Full-time",
      location: "Main Campus",
      posted: "3 days ago",
    },
    {
      title: "Medical Assistant",
      department: "Family Medicine",
      type: "Full-time",
      location: "North Location",
      posted: "1 week ago",
    },
    {
      title: "Front Desk Coordinator",
      department: "Administration",
      type: "Full-time",
      location: "Main Campus",
      posted: "2 weeks ago",
    },
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Salaries", description: "Market-leading compensation packages" },
    { icon: Heart, title: "Health Benefits", description: "Medical, dental, vision insurance" },
    { icon: GraduationCap, title: "Continuing Education", description: "CME credits and tuition assistance" },
    { icon: TrendingUp, title: "Career Growth", description: "Clear advancement opportunities" },
    { icon: Users, title: "Team Environment", description: "Collaborative, supportive culture" },
    { icon: Clock, title: "Work-Life Balance", description: "Flexible scheduling options" },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-medical-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-medical-blue-900 sm:text-5xl md:text-6xl">
              Careers
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              Join our team of healthcare professionals dedicated to providing exceptional patient care.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl mb-6">
                Why Work With Us
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-medical-blue-100 text-medical-blue-600 mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-medical-neutral-50">
          <div className="container">
            <h2 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8">
              Open Positions
            </h2>

            <div className="space-y-4">
              {openPositions.map((position) => (
                <Card key={position.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-3">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Posted {position.posted}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge>{position.type}</Badge>
                        <Button variant="medical">Apply Now</Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-medical-blue-600 to-medical-blue-800 text-white">
          <div className="container text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-6">
              Don't See Your Position?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented healthcare professionals. Send us your resume.
            </p>
            <Button size="lg" variant="secondary">
              Submit General Application
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
