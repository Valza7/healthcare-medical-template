import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Heart,
  Brain,
  Baby,
  Bone,
  Eye,
  Users,
  Calendar,
  Video,
  Clock,
  Shield,
  Award,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart health services including diagnostics and treatment.",
      href: "/services/cardiology",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert care for neurological conditions and brain health.",
      href: "/services/neurology",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents.",
      href: "/services/pediatrics",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Treatment for bone, joint, and musculoskeletal conditions.",
      href: "/services/orthopedics",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Comprehensive eye care and vision services.",
      href: "/services/ophthalmology",
    },
    {
      icon: Users,
      title: "Family Medicine",
      description: "Primary care for patients of all ages and backgrounds.",
      href: "/services/family-medicine",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Board-Certified Physicians",
      description: "All our doctors are board-certified in their specialties with years of experience.",
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Care",
      description: "Your privacy and data security are our top priorities with full HIPAA compliance.",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Convenient hours including evenings and Saturdays to fit your schedule.",
    },
    {
      icon: Video,
      title: "Telehealth Available",
      description: "Virtual consultations available for your convenience and safety.",
    },
  ];

  const providers = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "/images/providers/placeholder.jpg",
      credentials: "MD, FACC",
      experience: "15+ years",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Family Medicine",
      image: "/images/providers/placeholder.jpg",
      credentials: "MD, FAAFP",
      experience: "12+ years",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "/images/providers/placeholder.jpg",
      credentials: "MD, FAAP",
      experience: "10+ years",
    },
  ];

  const insuranceLogos = [
    "Blue Cross Blue Shield",
    "Aetna",
    "UnitedHealthcare",
    "Cigna",
    "Medicare",
    "Medicaid",
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-medical-blue-50 via-white to-medical-green-50 py-20 md:py-32">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <Badge variant="info" className="mb-4">
                  Now Offering Telehealth Consultations
                </Badge>
                <h1 className="font-serif text-4xl font-bold tracking-tight text-medical-blue-900 sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                  Compassionate Care,{" "}
                  <span className="text-medical-green-600">Advanced Medicine</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                  Experience exceptional healthcare with our team of board-certified physicians.
                  We combine cutting-edge medical technology with personalized, patient-centered
                  care to help you achieve optimal health.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="medical">
                    <Link href="/appointments">
                      <Calendar className="h-5 w-5" />
                      Book an Appointment
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/patient-portal">
                      Patient Portal Login
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-medical-green-600" />
                    <span>HIPAA Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-medical-green-600" />
                    <span>24/7 Patient Portal</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-medical-blue-200 to-medical-green-200 p-8">
                  {/* Placeholder for hero image */}
                  <div className="flex h-full items-center justify-center text-medical-blue-600">
                    <div className="text-center">
                      <Heart className="h-32 w-32 mx-auto mb-4" />
                      <p className="text-sm">Professional Healthcare Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-8 bg-medical-blue-900 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/appointments"
                className="flex items-center gap-4 p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <Calendar className="h-10 w-10" />
                <div>
                  <h3 className="font-semibold text-lg">Schedule Appointment</h3>
                  <p className="text-sm text-white/80">Book online 24/7</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/patient-portal"
                className="flex items-center gap-4 p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <Users className="h-10 w-10" />
                <div>
                  <h3 className="font-semibold text-lg">Patient Portal</h3>
                  <p className="text-sm text-white/80">Access your health records</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-4 p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <Phone className="h-10 w-10" />
                <div>
                  <h3 className="font-semibold text-lg">Contact Us</h3>
                  <p className="text-sm text-white/80">We're here to help</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                Our Medical Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive healthcare services delivered by our expert team of specialists
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-medical-blue-100 text-medical-blue-600 group-hover:bg-medical-blue-600 group-hover:text-white transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
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
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-medical-neutral-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                Why Choose Us
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the difference of patient-centered, high-quality healthcare
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-medical-green-100 text-medical-green-600 mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Providers */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                Meet Our Providers
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Board-certified physicians dedicated to your health and well-being
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {providers.map((provider) => (
                <Card key={provider.name} className="overflow-hidden">
                  <div className="aspect-square bg-medical-neutral-200 flex items-center justify-center">
                    <Users className="h-24 w-24 text-medical-neutral-400" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{provider.name}</CardTitle>
                    <CardDescription className="text-base">
                      {provider.specialty} • {provider.credentials}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <Award className="h-4 w-4" />
                      <span>{provider.experience} experience</span>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/providers">View Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="medical" size="lg">
                <Link href="/providers">
                  View All Providers
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Insurance Accepted */}
        <section className="py-16 md:py-24 bg-medical-blue-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                Insurance Plans We Accept
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We accept most major insurance plans to make quality healthcare accessible
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {insuranceLogos.map((insurance) => (
                <div
                  key={insurance}
                  className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm"
                >
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {insurance}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/insurance">View All Insurance Plans</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                What Our Patients Say
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from those who have experienced our compassionate care
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">Excellent Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      "The staff is incredibly professional and caring. Dr. Johnson took the time
                      to listen to my concerns and provided excellent treatment. Highly recommend!"
                    </p>
                    <p className="text-sm font-medium">— Patient, verified review</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 md:py-24 bg-medical-neutral-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                Our Locations
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Convenient locations to serve you better
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-medical-blue-600" />
                    Main Campus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    123 Medical Center Drive<br />
                    Suite 100<br />
                    Healthcare City, HC 12345
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-medical-blue-600" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-medical-blue-600" />
                      <span>Mon-Fri: 8 AM - 6 PM | Sat: 9 AM - 2 PM</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link href="/locations">Get Directions</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-medical-blue-600" />
                    North Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    456 Health Plaza<br />
                    Building B<br />
                    Healthcare City, HC 12346
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-medical-blue-600" />
                      <span>(555) 123-4568</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-medical-blue-600" />
                      <span>Mon-Fri: 9 AM - 5 PM</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link href="/locations">Get Directions</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-medical-blue-600 to-medical-blue-800 text-white">
          <div className="container text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl mb-6">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of patients who trust us with their health. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/appointments">
                  <Calendar className="h-5 w-5" />
                  Book Appointment Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-medical-blue-600">
                <Link href="/contact">
                  <Phone className="h-5 w-5" />
                  Call (555) 123-4567
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
