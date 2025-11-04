import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-medical-neutral-900 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-blue-600 text-white font-bold">
                <span className="text-xl">H+</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold">HealthCare</span>
                <span className="text-xs text-gray-400">Medical Practice</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Providing compassionate, patient-centered healthcare services with the latest medical technology and expertise.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/appointments" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/patient-portal" className="text-gray-300 hover:text-white transition-colors">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="/providers" className="text-gray-300 hover:text-white transition-colors">
                  Our Providers
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-gray-300 hover:text-white transition-colors">
                  Insurance & Billing
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Patient Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/patient-resources" className="text-gray-300 hover:text-white transition-colors">
                  New Patient Information
                </Link>
              </li>
              <li>
                <Link href="/patient-resources#forms" className="text-gray-300 hover:text-white transition-colors">
                  Patient Forms
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Health Library
                </Link>
              </li>
              <li>
                <Link href="/referring-physicians" className="text-gray-300 hover:text-white transition-colors">
                  For Referring Physicians
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Practices
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-gray-300 hover:text-white transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-medical-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-300">Main: (555) 123-4567</div>
                  <div className="text-gray-400">Fax: (555) 123-4568</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-medical-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@healthcaremp.com" className="text-gray-300 hover:text-white transition-colors">
                  info@healthcaremp.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-medical-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  123 Medical Center Drive<br />
                  Suite 100<br />
                  Healthcare City, HC 12345
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} HealthCare Medical Practice. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/hipaa" className="hover:text-white transition-colors">
                HIPAA Notice
              </Link>
              <Link href="/nondiscrimination" className="hover:text-white transition-colors">
                Nondiscrimination
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>
              <strong>Important:</strong> This patient portal is not for emergencies.
              If you are experiencing a medical emergency, call 911 or go to the nearest emergency room.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
