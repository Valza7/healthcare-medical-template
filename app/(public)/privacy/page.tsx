import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy and how we protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-medical-blue-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> November 2024
            </p>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700">
                HealthCare Medical Practice ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website and use our patient portal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Personal identification information (name, email, phone number, date of birth)</li>
                <li>Health insurance information</li>
                <li>Medical history and health information (Protected Health Information - PHI)</li>
                <li>Payment and billing information</li>
                <li>Communications with our staff</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our healthcare services</li>
                <li>Process appointments and communicate with you</li>
                <li>Bill for services and process payments</li>
                <li>Comply with legal obligations and regulations</li>
                <li>Send you appointment reminders and health information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                HIPAA Compliance
              </h2>
              <p className="text-gray-700">
                As a covered entity under HIPAA, we follow strict standards for protecting your health
                information. Please see our <a href="/hipaa" className="text-medical-blue-600 underline">Notice of Privacy Practices</a> for
                detailed information about how we use and disclose your Protected Health Information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your information,
                including encryption, secure servers, access controls, and regular security assessments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Request corrections to your information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of certain communications</li>
                <li>File a complaint if you believe your privacy rights have been violated</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact our Privacy Officer at:
              </p>
              <p className="text-gray-700 mt-4">
                Email: privacy@healthcaremp.com<br />
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
