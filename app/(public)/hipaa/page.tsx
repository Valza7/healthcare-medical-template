import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices",
  description: "Our Notice of Privacy Practices as required by HIPAA regulations.",
};

export default function HIPAAPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-medical-blue-900 mb-4">
            Notice of Privacy Practices
          </h1>
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> November 1, 2024
          </p>

          <div className="mb-8">
            <Button variant="medical">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                This Notice Describes How Medical Information About You May Be Used and Disclosed
              </h2>
              <p className="text-gray-700">
                This notice describes the privacy practices of HealthCare Medical Practice and how we may use
                and disclose your protected health information (PHI) to carry out treatment, payment, or healthcare operations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request to inspect and obtain a copy of your health information</li>
                <li><strong>Amendment:</strong> Request corrections to your health information</li>
                <li><strong>Accounting:</strong> Request an accounting of disclosures of your health information</li>
                <li><strong>Restrictions:</strong> Request restrictions on certain uses and disclosures</li>
                <li><strong>Confidential Communications:</strong> Request communication by alternative means or locations</li>
                <li><strong>Notification:</strong> Be notified of a breach of your unsecured PHI</li>
                <li><strong>Copy of This Notice:</strong> Obtain a paper copy of this notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                How We May Use and Disclose Your Health Information
              </h2>

              <h3 className="font-semibold text-lg text-medical-blue-800 mb-2">Treatment</h3>
              <p className="text-gray-700 mb-4">
                We may use and disclose your health information to provide, coordinate, or manage your healthcare
                and related services. This includes coordination of care with other healthcare providers.
              </p>

              <h3 className="font-semibold text-lg text-medical-blue-800 mb-2">Payment</h3>
              <p className="text-gray-700 mb-4">
                We may use and disclose your health information to bill and collect payment for services,
                including to your insurance company or other third-party payer.
              </p>

              <h3 className="font-semibold text-lg text-medical-blue-800 mb-2">Healthcare Operations</h3>
              <p className="text-gray-700 mb-4">
                We may use and disclose your health information for our healthcare operations, including
                quality assessment, staff training, and business management activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Other Uses and Disclosures
              </h2>
              <p className="text-gray-700 mb-3">
                We may also use or disclose your health information for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Appointment reminders and treatment alternatives</li>
                <li>Required by law (public health, law enforcement, etc.)</li>
                <li>Workers' compensation claims</li>
                <li>Serious threats to health or safety</li>
                <li>Research (with proper authorization or de-identification)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Your Authorization Required
              </h2>
              <p className="text-gray-700">
                Other uses and disclosures not described in this notice will be made only with your written authorization.
                You may revoke your authorization at any time by providing written notice, except to the extent we have
                already taken action in reliance on your authorization.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                How to Exercise Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                To exercise any of your rights under this notice, please submit a written request to our Privacy Officer:
              </p>
              <p className="text-gray-700">
                <strong>Privacy Officer</strong><br />
                HealthCare Medical Practice<br />
                123 Medical Center Drive, Suite 100<br />
                Healthcare City, HC 12345<br />
                Phone: (555) 123-4567<br />
                Email: privacy@healthcaremp.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Complaints
              </h2>
              <p className="text-gray-700">
                If you believe your privacy rights have been violated, you may file a complaint with us or with
                the Secretary of the Department of Health and Human Services. You will not be retaliated against
                for filing a complaint.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Changes to This Notice
              </h2>
              <p className="text-gray-700">
                We reserve the right to change this notice. Any changes will be effective for all protected health
                information we maintain. The current notice will always be available on our website and at our facilities.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
