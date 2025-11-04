import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Brain,
  Baby,
  Bone,
  Eye,
  Users,
  Stethoscope,
  Activity,
  Pill,
  Syringe,
  HeartPulse,
  Microscope,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Services",
  description:
    "Comprehensive medical services including cardiology, neurology, pediatrics, orthopedics, and more. Expert care from board-certified physicians.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart health services including diagnostics, treatment, and preventive care.",
      features: [
        "Electrocardiogram (EKG/ECG)",
        "Echocardiography",
        "Stress Testing",
        "Holter Monitoring",
        "Cardiac Rehabilitation",
        "Hypertension Management",
      ],
      href: "/services/cardiology",
      badge: "Advanced Diagnostics",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert care for neurological conditions affecting the brain, spine, and nervous system.",
      features: [
        "Headache & Migraine Treatment",
        "Epilepsy Management",
        "Multiple Sclerosis Care",
        "Parkinson's Disease Treatment",
        "Stroke Prevention",
        "Memory Disorders",
      ],
      href: "/services/neurology",
      badge: "Specialized Care",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents up to age 18.",
      features: [
        "Well-Child Visits",
        "Vaccinations",
        "Growth & Development Monitoring",
        "Sick Visits",
        "Sports Physicals",
        "Adolescent Medicine",
      ],
      href: "/services/pediatrics",
      badge: "Family Friendly",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Treatment for bone, joint, muscle, and musculoskeletal conditions.",
      features: [
        "Joint Replacement",
        "Sports Medicine",
        "Fracture Care",
        "Arthritis Treatment",
        "Physical Therapy",
        "Spine Care",
      ],
      href: "/services/orthopedics",
      badge: "Advanced Treatment",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Comprehensive eye care services for vision health and eye disease treatment.",
      features: [
        "Eye Examinations",
        "Cataract Surgery",
        "Glaucoma Treatment",
        "Diabetic Eye Care",
        "LASIK Surgery",
        "Contact Lens Fitting",
      ],
      href: "/services/ophthalmology",
      badge: "Vision Care",
    },
    {
      icon: Users,
      title: "Family Medicine",
      description: "Primary care for patients of all ages, from infants to seniors.",
      features: [
        "Annual Physicals",
        "Chronic Disease Management",
        "Preventive Care",
        "Minor Procedures",
        "Health Screenings",
        "Immunizations",
      ],
      href: "/services/family-medicine",
      badge: "All Ages",
    },
    {
      icon: Activity,
      title: "Internal Medicine",
      description: "Comprehensive care for adult patients with focus on prevention and wellness.",
      features: [
        "Diabetes Management",
        "Thyroid Disorders",
        "High Blood Pressure",
        "High Cholesterol",
        "Obesity Management",
        "Preventive Medicine",
      ],
      href: "/services/internal-medicine",
      badge: "Adult Care",
    },
    {
      icon: Pill,
      title: "Pharmacy Services",
      description: "On-site pharmacy for convenient prescription filling and medication management.",
      features: [
        "Prescription Filling",
        "Medication Counseling",
        "Medication Therapy Management",
        "Immunizations",
        "Medication Synchronization",
        "Home Delivery Available",
      ],
      href: "/services/pharmacy",
      badge: "On-Site",
    },
    {
      icon: Microscope,
      title: "Laboratory Services",
      description: "Full-service laboratory for quick and accurate diagnostic testing.",
      features: [
        "Blood Tests",
        "Urinalysis",
        "Drug Testing",
        "Genetic Testing",
        "Allergy Testing",
        "Rapid COVID-19 Testing",
      ],
      href: "/services/laboratory",
      badge: "Fast Results",
    },
    {
      icon: HeartPulse,
      title: "Urgent Care",
      description: "Walk-in care for non-life-threatening medical conditions.",
      features: [
        "Minor Injuries",
        "Flu & Cold Treatment",
        "X-Rays",
        "Wound Care",
        "Sprains & Strains",
        "Extended Hours",
      ],
      href: "/services/urgent-care",
      badge: "Walk-Ins Welcome",
    },
    {
      icon: Stethoscope,
      title: "Preventive Care",
      description: "Proactive healthcare to prevent illness and maintain optimal health.",
      features: [
        "Health Risk Assessments",
        "Cancer Screenings",
        "Cardiovascular Screening",
        "Diabetes Screening",
        "Nutrition Counseling",
        "Smoking Cessation",
      ],
      href: "/services/preventive-care",
      badge: "Wellness Focus",
    },
    {
      icon: Syringe,
      title: "Immunizations",
      description: "Comprehensive vaccination services for all ages.",
      features: [
        "Childhood Vaccines",
        "Adult Immunizations",
        "Travel Vaccines",
        "Flu Shots",
        "COVID-19 Vaccines",
        "Shingles Vaccines",
      ],
      href: "/services/immunizations",
      badge: "All Ages",
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
                Comprehensive Medical Services
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                From preventive care to specialized treatment, we offer a full range of medical
                services delivered by our team of board-certified physicians and healthcare
                professionals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" variant="medical">
                  <Link href="/appointments">
                    <Calendar className="h-5 w-5" />
                    Book an Appointment
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/providers">
                    View Our Providers
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-medical-blue-100 text-medical-blue-600 group-hover:bg-medical-blue-600 group-hover:text-white transition-colors">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <Badge variant="info">{service.badge}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-medical-green-600 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-gray-500 italic">
                          +{service.features.length - 4} more services
                        </li>
                      )}
                    </ul>
                    <Link
                      href={service.href}
                      className="text-medical-blue-600 hover:text-medical-blue-700 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Information */}
        <section className="py-16 md:py-24 bg-medical-neutral-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl mb-6">
                We Accept Most Insurance Plans
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We work with most major insurance providers to make quality healthcare accessible
                and affordable. Contact us to verify your insurance coverage.
              </p>
              <Button asChild variant="medical" size="lg">
                <Link href="/insurance">
                  View Insurance Information
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-medical-blue-600 to-medical-blue-800 text-white">
          <div className="container text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book an appointment today or contact us to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/appointments">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-medical-blue-600"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
