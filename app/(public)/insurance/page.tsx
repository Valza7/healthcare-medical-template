import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, CreditCard, DollarSign, FileText, HelpCircle, Phone, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance & Billing",
  description: "Information about insurance plans we accept, billing policies, payment options, and financial assistance.",
};

export default function InsurancePage() {
  const insurancePlans = [
    {
      category: "Commercial Insurance",
      plans: [
        "Aetna",
        "Anthem Blue Cross Blue Shield",
        "Cigna",
        "Humana",
        "UnitedHealthcare",
        "Blue Cross Blue Shield",
      ],
    },
    {
      category: "Medicare",
      plans: [
        "Original Medicare (Parts A & B)",
        "Medicare Advantage Plans",
        "Medicare Supplement Plans",
      ],
    },
    {
      category: "Medicaid",
      plans: [
        "State Medicaid",
        "Medicaid Managed Care Plans",
      ],
    },
    {
      category: "Other",
      plans: [
        "TRICARE",
        "Workers' Compensation",
        "Auto Insurance (PIP)",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-medical-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-medical-blue-900 sm:text-5xl md:text-6xl">
              Insurance & Billing
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              We accept most major insurance plans and offer flexible payment options to make
              quality healthcare accessible and affordable.
            </p>
          </div>
        </section>

        {/* Insurance Plans */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                Insurance Plans Accepted
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We participate with most major insurance carriers
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {insurancePlans.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.plans.map((plan) => (
                        <li key={plan} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                          <span>{plan}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Alert className="max-w-2xl mx-auto">
                <HelpCircle className="h-4 w-4" />
                <AlertTitle>Don't see your insurance?</AlertTitle>
                <AlertDescription>
                  Insurance plans change frequently. Please call us at (555) 123-4567 to verify
                  if we accept your specific plan.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Insurance Verification */}
        <section className="py-16 md:py-24 bg-medical-neutral-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-8 w-8 text-medical-blue-600" />
                    <CardTitle className="text-2xl">Insurance Verification</CardTitle>
                  </div>
                  <CardDescription>
                    To ensure smooth processing, please bring the following to your appointment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Required Documents:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                          <span>Insurance card (front and back)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                          <span>Photo ID (driver's license or state ID)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                          <span>Referral (if required by your plan)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                          <span>Prior authorization (if applicable)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">We Verify:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Coverage and eligibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Copay and deductible amounts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Authorization requirements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Out-of-pocket responsibility</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 sm:text-4xl">
                Payment Options
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We offer convenient payment methods and flexible options
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CreditCard className="h-8 w-8 text-medical-blue-600 mb-2" />
                  <CardTitle>Accepted Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600" />
                      <span>Cash</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600" />
                      <span>Check</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600" />
                      <span>Credit Cards (Visa, MC, Amex, Discover)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600" />
                      <span>Debit Cards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600" />
                      <span>HSA/FSA Cards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600" />
                      <span>Online Payment Portal</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-medical-green-600 mb-2" />
                  <CardTitle>Payment Plans</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  <p className="mb-4">
                    We understand that medical expenses can be challenging. We offer interest-free
                    payment plans for qualified patients.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600" />
                      <span>No interest</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600" />
                      <span>Flexible terms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600" />
                      <span>Easy application</span>
                    </li>
                  </ul>
                  <Button variant="link" className="p-0 h-auto mt-4">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <HelpCircle className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Financial Assistance</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  <p className="mb-4">
                    Financial assistance may be available for qualified patients who are uninsured
                    or underinsured.
                  </p>
                  <p className="mb-4">
                    We work with several programs to help make healthcare affordable for everyone.
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    Apply for Assistance →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Billing FAQs */}
        <section className="py-16 md:py-24 bg-medical-blue-50">
          <div className="container max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-medical-blue-900 text-center mb-12">
              Billing FAQs
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">When will I receive my bill?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  You will receive a bill after your insurance has processed the claim, typically
                  within 30-45 days of your visit. The bill will show what your insurance covered
                  and what you owe.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if I disagree with my bill?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  If you have questions or concerns about your bill, please contact our billing
                  department at (555) 123-4567 ext. 2. We're happy to review your charges and
                  work with you to resolve any issues.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer payment plans?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  Yes, we offer interest-free payment plans for balances over $200. Contact our
                  billing department to set up a plan that works for your budget.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I pay my bill online?</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  Yes! You can pay your bill securely through the patient portal or by calling our
                  billing department. We accept all major credit cards, debit cards, and HSA/FSA cards.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Billing */}
        <section className="py-16 md:py-24">
          <div className="container max-w-2xl text-center">
            <FileText className="h-16 w-16 mx-auto mb-6 text-medical-blue-600" />
            <h2 className="font-serif text-3xl font-bold text-medical-blue-900 mb-4">
              Have Billing Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our billing department is here to help answer your questions and work with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="medical" size="lg" asChild>
                <Link href="tel:5551234567">
                  <Phone className="h-5 w-5" />
                  Call Billing: (555) 123-4567 ext. 2
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/patient-portal">
                  View Bills in Patient Portal
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
