import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-medical-blue-900 mb-8">
            Terms and Conditions
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> November 2024
            </p>

            <p className="text-gray-700 mb-6">
              Please read these Terms and Conditions carefully before using the HealthCare Medical Practice
              website and patient portal.
            </p>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-700">
                By accessing and using this website, you accept and agree to be bound by these Terms and Conditions.
                If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Use of Services
              </h2>
              <p className="text-gray-700 mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not share your account with others</li>
                <li>Use the services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Medical Disclaimer
              </h2>
              <p className="text-gray-700">
                This website provides general health information and should not replace professional medical advice.
                Always seek the advice of your physician or qualified healthcare provider for any medical concerns.
                In case of emergency, call 911 or go to the nearest emergency room.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Patient Portal Terms
              </h2>
              <p className="text-gray-700 mb-3">The patient portal is provided for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Accessing your medical records</li>
                <li>Scheduling and managing appointments</li>
                <li>Communicating with your healthcare team (non-urgent matters only)</li>
                <li>Viewing test results and health information</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Important:</strong> The patient portal should NOT be used for medical emergencies
                or urgent health concerns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700">
                All content on this website, including text, graphics, logos, and software, is the property
                of HealthCare Medical Practice and protected by copyright laws. You may not reproduce,
                distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700">
                HealthCare Medical Practice shall not be liable for any indirect, incidental, special,
                or consequential damages arising from your use of our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="text-gray-700 mt-4">
                Email: legal@healthcaremp.com<br />
                Phone: (555) 123-4567<br />
                Address: 123 Medical Center Drive, Suite 100, Healthcare City, HC 12345
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
