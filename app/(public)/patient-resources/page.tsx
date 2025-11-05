import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Video, Pill, Stethoscope, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patient Resources",
  description: "Important information for new and existing patients including forms, instructions, and educational resources.",
};

export default function PatientResourcesPage() {
  const newPatientResources = [
    "Patient Registration Form",
    "Medical History Form",
    "Insurance Information Form",
    "HIPAA Privacy Notice",
    "Consent for Treatment",
    "Notice of Privacy Practices",
  ];

  const formsAndDocuments = [
    { title: "Patient Registration Form", format: "PDF" },
    { title: "Medical History Questionnaire", format: "PDF" },
    { title: "Insurance Verification Form", format: "PDF" },
    { title: "Medication List Template", format: "PDF" },
    { title: "Advance Directive Information", format: "PDF" },
    { title: "Authorization for Release of Records", format: "PDF" },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-medical-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-medical-blue-900 sm:text-5xl md:text-6xl">
              Patient Resources
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              Everything you need to prepare for your visit and manage your healthcare.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">New Patients</CardTitle>
                  <CardDescription>
                    Welcome! Here's what you need to get started with our practice.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <h3 className="font-semibold">Before Your First Visit:</h3>
                    <ul className="space-y-2">
                      {newPatientResources.map((resource) => (
                        <li key={resource} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-medical-green-600 flex-shrink-0" />
                          <span>{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="medical" asChild>
                    <Link href="/sign-up">Create Patient Portal Account</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What to Bring</CardTitle>
                  <CardDescription>
                    Please bring the following to your appointment:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Stethoscope className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Photo ID</div>
                        <div className="text-sm text-gray-600">Driver's license or state ID</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Stethoscope className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Insurance Card</div>
                        <div className="text-sm text-gray-600">Front and back</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Pill className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Current Medications</div>
                        <div className="text-sm text-gray-600">List of all medications and dosages</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Medical Records</div>
                        <div className="text-sm text-gray-600">If transferring from another provider</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-medical-neutral-50">
          <div className="container">
            <h2 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8">
              Forms & Documents
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {formsAndDocuments.map((form) => (
                <Card key={form.title}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-base">{form.title}</CardTitle>
                      </div>
                      <FileText className="h-5 w-5 text-medical-blue-600 flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4" />
                      Download {form.format}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8 text-center">
              Video Resources
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {["Using the Patient Portal", "Preparing for Your Appointment", "Understanding Your Lab Results"].map((title) => (
                <Card key={title}>
                  <CardHeader>
                    <div className="aspect-video bg-medical-neutral-200 rounded-md flex items-center justify-center mb-4">
                      <Video className="h-16 w-16 text-medical-neutral-400" />
                    </div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Watch Video</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
