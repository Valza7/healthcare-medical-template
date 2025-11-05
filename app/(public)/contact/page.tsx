import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our healthcare team. We're here to help with appointments, questions, and support.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-medical-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-medical-blue-900 sm:text-5xl md:text-6xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                We're here to help. Reach out to us for appointments, questions, or general inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Alert */}
        <section className="container py-8">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>For Medical Emergencies</AlertTitle>
            <AlertDescription>
              If you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately.
              Do not use this form for urgent medical needs.
            </AlertDescription>
          </Alert>
        </section>

        <section className="container pb-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 1-2 business days.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appointment">Schedule Appointment</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="medical-records">Medical Records Request</SelectItem>
                          <SelectItem value="insurance">Insurance Question</SelectItem>
                          <SelectItem value="prescription">Prescription Refill</SelectItem>
                          <SelectItem value="feedback">Feedback or Complaint</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">Preferred Contact Method *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Alert variant="info">
                      <MessageSquare className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Note:</strong> For secure health-related questions, please log in to the patient
                        portal and use our secure messaging system.
                      </AlertDescription>
                    </Alert>

                    <Button type="submit" variant="medical" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Main Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-sm text-gray-600">
                        123 Medical Center Drive<br />
                        Suite 100<br />
                        Healthcare City, HC 12345
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-gray-600">
                        Main: (555) 123-4567<br />
                        Fax: (555) 123-4568
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-gray-600">
                        General: info@healthcaremp.com<br />
                        Billing: billing@healthcaremp.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Hours</div>
                      <div className="text-sm text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Department Directory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-medium text-sm">Appointments</div>
                    <div className="text-sm text-gray-600">(555) 123-4567 ext. 1</div>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Billing</div>
                    <div className="text-sm text-gray-600">(555) 123-4567 ext. 2</div>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Medical Records</div>
                    <div className="text-sm text-gray-600">(555) 123-4567 ext. 3</div>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Prescription Refills</div>
                    <div className="text-sm text-gray-600">(555) 123-4567 ext. 4</div>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Patient Advocate</div>
                    <div className="text-sm text-gray-600">(555) 123-4567 ext. 5</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-medical-blue-50 border-medical-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">After Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    For urgent medical needs outside of business hours, call our main number
                    and follow the prompts to reach the on-call provider.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-medical-neutral-50 py-16">
          <div className="container">
            <h2 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8 text-center">
              Find Us
            </h2>
            <div className="aspect-video bg-medical-neutral-300 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-medical-neutral-500" />
                <p className="text-medical-neutral-600">Interactive Map Placeholder</p>
                <p className="text-sm text-medical-neutral-500">Integrate Google Maps or Mapbox here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
