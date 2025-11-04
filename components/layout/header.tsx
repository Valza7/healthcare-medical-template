"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Calendar,
  UserCircle,
  Menu,
  X,
  Shield,
  Clock,
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Providers", href: "/providers" },
    { name: "Locations", href: "/locations" },
    { name: "Insurance & Billing", href: "/insurance" },
    { name: "Patient Resources", href: "/patient-resources" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Emergency Banner */}
      <div className="bg-destructive text-destructive-foreground px-4 py-2 text-center text-sm font-medium">
        <strong>Emergency?</strong> Call 911 or visit the nearest emergency room.
        Do not use the patient portal for emergencies.
      </div>

      {/* Top Bar */}
      <div className="border-b bg-medical-blue-50">
        <div className="container flex h-12 items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-medical-blue-700">
              <Phone className="h-4 w-4" />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <div className="hidden items-center gap-2 text-medical-blue-700 md:flex">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 8 AM - 6 PM | Sat: 9 AM - 2 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-medical-green-600" />
            <span className="text-xs text-medical-green-700 font-medium">
              HIPAA Secure
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className="container flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-blue-600 text-white font-bold">
            <span className="text-xl">H+</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-medical-blue-900">
              HealthCare
            </span>
            <span className="text-xs text-medical-blue-600">Medical Practice</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-medical-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link href="/appointments">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
          </Button>
          <Button asChild variant="medical" size="sm">
            <Link href="/patient-portal">
              <UserCircle className="h-4 w-4" />
              Patient Portal
            </Link>
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white" role="navigation">
          <div className="container space-y-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-medical-blue-50 hover:text-medical-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 sm:hidden">
              <Button asChild className="w-full" variant="outline">
                <Link href="/appointments">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
