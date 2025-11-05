import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Fax, FileText, Download, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "For Referring Physicians",
  description: "Information for healthcare providers referring patients to our practice.",
};

export default function ReferringPhysiciansPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-medical-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-medical-blue-900 sm:text-5xl md:text-6xl">
              For Referring Physicians
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              Thank you for entrusting us with your patients' care. We value our partnership and are committed to seamless coordination.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Referral Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">How to Refer a Patient:</h3>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li className="text-gray-700">Complete the referral form (download below)</li>
                    <li className="text-gray-700">Include relevant medical records and test results</li>
                    <li className="text-gray-700">Fax to (555) 123-4568 or submit via secure portal</li>
                    <li className="text-gray-700">We'll contact the patient within 24-48 hours</li>
                  </ol>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-3">Required Information:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-medical-blue-600">•</span>
                      <span className="text-gray-700">Patient demographics and contact information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-medical-blue-600">•</span>
                      <span className="text-gray-700">Reason for referral and clinical question</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-medical-blue-600">•</span>
                      <span className="text-gray-700">Relevant medical history and current medications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-medical-blue-600">•</span>
                      <span className="text-gray-700">Recent lab results and diagnostic imaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-medical-blue-600">•</span>
                      <span className="text-gray-700">Insurance and authorization information</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-medical-blue-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>Phone: (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fax className="h-4 w-4 text-gray-500" />
                    <span>Fax: (555) 123-4568</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>referrals@healthcaremp.com</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-medical-green-600" />
                    Turnaround Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Routine Referrals</div>
                    <div className="text-gray-600">2-4 weeks</div>
                  </div>
                  <div>
                    <div className="font-medium">Urgent Referrals</div>
                    <div className="text-gray-600">1-3 business days</div>
                  </div>
                  <div>
                    <div className="font-medium">Consultation Reports</div>
                    <div className="text-gray-600">Within 48 hours of visit</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Download Forms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-medical-blue-600" />
                    <div>
                      <div className="font-medium">Referral Form</div>
                      <div className="text-sm text-gray-600">Printable PDF form</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-medical-blue-600" />
                    <div>
                      <div className="font-medium">Fax Cover Sheet</div>
                      <div className="text-sm text-gray-600">HIPAA-compliant cover sheet</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
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
