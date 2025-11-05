import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Our commitment to web accessibility and accommodations for patients with disabilities.",
};

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-medical-blue-900 mb-8">
            Accessibility Statement
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-gray-700">
                HealthCare Medical Practice is committed to ensuring digital accessibility for people with disabilities.
                We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Conformance Status
              </h2>
              <p className="text-gray-700">
                The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to
                improve accessibility for people with disabilities. We aim to conform to WCAG 2.1 Level AA standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Accessibility Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Website Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Keyboard navigation support",
                        "Screen reader compatibility",
                        "High contrast color schemes",
                        "Resizable text (up to 200%)",
                        "Alternative text for images",
                        "Clear focus indicators",
                        "Descriptive link text",
                        "Consistent navigation",
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Facility Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Wheelchair accessible entrances",
                        "Accessible parking spaces",
                        "Elevators in multi-story buildings",
                        "Accessible restrooms",
                        "Sign language interpretation",
                        "Large print materials",
                        "Assistive listening devices",
                        "Service animal friendly",
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Accommodations
              </h2>
              <p className="text-gray-700 mb-4">
                We provide accommodations for patients with disabilities, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Sign language interpreters (request 48 hours in advance)</li>
                <li>Language translation services</li>
                <li>Assistance with forms and paperwork</li>
                <li>Alternative format materials (large print, Braille)</li>
                <li>Extended appointment times if needed</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To request accommodations, please call us at (555) 123-4567 at least 48 hours before your appointment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Feedback
              </h2>
              <p className="text-gray-700">
                We welcome your feedback on the accessibility of our website and facilities. Please contact us if you
                encounter accessibility barriers:
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Accessibility Coordinator</strong><br />
                Phone: (555) 123-4567<br />
                Email: accessibility@healthcaremp.com<br />
                Address: 123 Medical Center Drive, Suite 100, Healthcare City, HC 12345
              </p>
              <p className="text-gray-700 mt-4">
                We will respond to your feedback within 5 business days.
              </p>
            </section>

            <p className="text-gray-600 text-sm">
              <strong>Last Updated:</strong> November 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
