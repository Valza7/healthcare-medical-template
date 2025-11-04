import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, CheckCircle, Calendar, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Providers",
  description:
    "Meet our team of board-certified physicians and healthcare professionals dedicated to providing exceptional patient care.",
};

export default function ProvidersPage() {
  const providers = [
    {
      name: "Dr. Sarah Johnson",
      credentials: "MD, FACC",
      specialty: "Cardiology",
      subspecialties: ["Interventional Cardiology", "Heart Failure"],
      image: "/images/providers/placeholder.jpg",
      yearsExperience: 15,
      education: [
        { degree: "MD", institution: "Harvard Medical School", year: 2008 },
        {
          degree: "Residency",
          institution: "Massachusetts General Hospital",
          year: 2012,
        },
        {
          degree: "Fellowship",
          institution: "Cleveland Clinic",
          year: 2014,
        },
      ],
      languages: ["English", "Spanish"],
      acceptingNewPatients: true,
      rating: 4.9,
      reviewCount: 127,
    },
    {
      name: "Dr. Michael Chen",
      credentials: "MD, FAAFP",
      specialty: "Family Medicine",
      subspecialties: ["Sports Medicine", "Geriatrics"],
      image: "/images/providers/placeholder.jpg",
      yearsExperience: 12,
      education: [
        { degree: "MD", institution: "Johns Hopkins University", year: 2011 },
        {
          degree: "Residency",
          institution: "Stanford Health Care",
          year: 2014,
        },
      ],
      languages: ["English", "Mandarin", "Cantonese"],
      acceptingNewPatients: true,
      rating: 4.8,
      reviewCount: 203,
    },
    {
      name: "Dr. Emily Rodriguez",
      credentials: "MD, FAAP",
      specialty: "Pediatrics",
      subspecialties: ["Developmental Pediatrics", "Adolescent Medicine"],
      image: "/images/providers/placeholder.jpg",
      yearsExperience: 10,
      education: [
        {
          degree: "MD",
          institution: "University of California, San Francisco",
          year: 2013,
        },
        {
          degree: "Residency",
          institution: "Children's Hospital Los Angeles",
          year: 2016,
        },
      ],
      languages: ["English", "Spanish", "Portuguese"],
      acceptingNewPatients: true,
      rating: 5.0,
      reviewCount: 156,
    },
    {
      name: "Dr. James Williams",
      credentials: "MD, FACS",
      specialty: "Orthopedic Surgery",
      subspecialties: ["Joint Replacement", "Sports Medicine"],
      image: "/images/providers/placeholder.jpg",
      yearsExperience: 18,
      education: [
        { degree: "MD", institution: "Yale School of Medicine", year: 2005 },
        {
          degree: "Residency",
          institution: "Hospital for Special Surgery",
          year: 2010,
        },
        {
          degree: "Fellowship",
          institution: "Mayo Clinic",
          year: 2011,
        },
      ],
      languages: ["English"],
      acceptingNewPatients: false,
      rating: 4.9,
      reviewCount: 98,
    },
    {
      name: "Dr. Priya Patel",
      credentials: "MD, FAAN",
      specialty: "Neurology",
      subspecialties: ["Headache Medicine", "Movement Disorders"],
      image: "/images/providers/placeholder.jpg",
      yearsExperience: 14,
      education: [
        {
          degree: "MD",
          institution: "Columbia University College of Physicians and Surgeons",
          year: 2009,
        },
        {
          degree: "Residency",
          institution: "UCSF Medical Center",
          year: 2013,
        },
        {
          degree: "Fellowship",
          institution: "NYU Langone Health",
          year: 2015,
        },
      ],
      languages: ["English", "Hindi", "Gujarati"],
      acceptingNewPatients: true,
      rating: 4.9,
      reviewCount: 142,
    },
    {
      name: "Dr. David Kim",
      credentials: "MD, MPH",
      specialty: "Internal Medicine",
      subspecialties: ["Diabetes Care", "Preventive Medicine"],
      image: "/images/providers/placeholder.jpg",
      yearsExperience: 11,
      education: [
        {
          degree: "MD",
          institution: "Duke University School of Medicine",
          year: 2012,
        },
        { degree: "MPH", institution: "Harvard T.H. Chan School of Public Health", year: 2010 },
        {
          degree: "Residency",
          institution: "Brigham and Women's Hospital",
          year: 2015,
        },
      ],
      languages: ["English", "Korean"],
      acceptingNewPatients: true,
      rating: 4.8,
      reviewCount: 89,
    },
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
                Meet Our Providers
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Our team of board-certified physicians and healthcare professionals is dedicated to
                providing exceptional, compassionate care. Each provider brings extensive training,
                experience, and a commitment to your health and well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-medical-blue-900 text-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-white/80">Providers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-white/80">Board Certified</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-white/80">Specialties</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-white/80">Languages</div>
              </div>
            </div>
          </div>
        </section>

        {/* Providers Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {providers.map((provider) => (
                <Card key={provider.name} className="group hover:shadow-lg transition-shadow">
                  {/* Provider Image */}
                  <div className="aspect-square bg-medical-neutral-200 flex items-center justify-center">
                    <Users className="h-32 w-32 text-medical-neutral-400" />
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl mb-1">{provider.name}</CardTitle>
                        <div className="text-sm text-medical-blue-600 font-medium">
                          {provider.credentials}
                        </div>
                      </div>
                      {provider.acceptingNewPatients ? (
                        <Badge variant="success">Accepting Patients</Badge>
                      ) : (
                        <Badge variant="warning">Not Accepting</Badge>
                      )}
                    </div>

                    <div className="text-base font-medium text-gray-900">
                      {provider.specialty}
                    </div>
                    {provider.subspecialties.length > 0 && (
                      <div className="text-sm text-gray-600">
                        {provider.subspecialties.join(" • ")}
                      </div>
                    )}
                  </CardHeader>

                  <CardContent>
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{provider.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        ({provider.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Experience */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2 text-sm">
                        <Award className="h-4 w-4 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">
                          {provider.yearsExperience}+ years of experience
                        </span>
                      </div>

                      {/* Education */}
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">
                          {provider.education[0].institution}
                        </span>
                      </div>

                      {/* Languages */}
                      <div className="flex items-start gap-2 text-sm">
                        <Globe className="h-4 w-4 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">
                          {provider.languages.join(", ")}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" size="sm" asChild>
                        <Link href={`/providers/${provider.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          View Profile
                        </Link>
                      </Button>
                      {provider.acceptingNewPatients && (
                        <Button variant="medical" className="flex-1" size="sm" asChild>
                          <Link href="/appointments">
                            <Calendar className="h-4 w-4" />
                            Book
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Providers */}
        <section className="py-16 md:py-24 bg-medical-neutral-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl mb-6">
                Why Choose Our Providers
              </h2>
              <p className="text-lg text-gray-600">
                Our physicians are not just highly qualified—they're passionate about providing
                personalized, compassionate care.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-medical-blue-100 text-medical-blue-600 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Board Certified</h3>
                <p className="text-gray-600 text-sm">
                  All our physicians are board-certified in their specialties
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-medical-green-100 text-medical-green-600 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Patient-Centered</h3>
                <p className="text-gray-600 text-sm">
                  We listen to your concerns and involve you in treatment decisions
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-medical-blue-100 text-medical-blue-600 mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Multilingual</h3>
                <p className="text-gray-600 text-sm">
                  Our team speaks over 10 languages to serve diverse communities
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-medical-green-100 text-medical-green-600 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Experienced</h3>
                <p className="text-gray-600 text-sm">
                  Average of 12+ years of clinical experience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-medical-blue-600 to-medical-blue-800 text-white">
          <div className="container text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-6">
              Ready to Meet Your Provider?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule an appointment with one of our expert physicians today.
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
