import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar, Video, Phone, Clock, UserCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule your healthcare appointment online. Choose from in-person visits or telehealth consultations.",
};

export default function AppointmentsPage() {
  const appointmentTypes = [
    {
      icon: Calendar,
      title: "In-Person Visit",
      description: "Traditional office visit with your healthcare provider",
      features: ["Complete physical exam", "Diagnostic testing available", "On-site lab and imaging"],
    },
    {
      icon: Video,
      title: "Telehealth Consultation",
      description: "Video visit from the comfort of your home",
      features: ["Convenient remote care", "No travel required", "Same-day appointments available"],
    },
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Speak with a provider by phone",
      features: ["Quick medical advice", "Prescription refills", "Follow-up questions"],
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-medical-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-medical-blue-900 sm:text-5xl md:text-6xl">
              Book an Appointment
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              Schedule your visit with our healthcare team. We offer flexible scheduling options including in-person, telehealth, and same-day appointments.
            </p>
          </div>
        </section>

        <section className="container py-8">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>For Medical Emergencies</AlertTitle>
            <AlertDescription>
              If you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately.
            </AlertDescription>
          </Alert>
        </section>

        <section className="container pb-16">
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {appointmentTypes.map((type) => (
              <Card key={type.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-medical-blue-100 flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-medical-blue-600" />
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-medical-green-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="medical" className="w-full">
                    Book {type.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
                <CardDescription>
                  To schedule an appointment, please log in to the patient portal. New patients can create an account below.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Existing Patients</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Log in to your patient portal to schedule, reschedule, or cancel appointments.
                    </p>
                    <Button variant="medical" className="w-full" asChild>
                      <Link href="/patient-portal">
                        <UserCircle className="h-4 w-4" />
                        Log In to Patient Portal
                      </Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">New Patients</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Create a patient portal account to schedule your first appointment.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/sign-up">
                        Create Account
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold mb-4">Need Help Booking?</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Call Us</div>
                        <div className="text-sm text-gray-600">(555) 123-4567</div>
                        <div className="text-xs text-gray-500">Mon-Fri: 8 AM - 6 PM</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Same-Day Appointments</div>
                        <div className="text-sm text-gray-600">Available for urgent needs</div>
                        <div className="text-xs text-gray-500">Call to check availability</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
