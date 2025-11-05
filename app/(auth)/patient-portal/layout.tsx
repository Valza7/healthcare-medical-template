"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  FileText,
  Pill,
  Activity,
  CreditCard,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function PatientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/patient-portal/dashboard", icon: LayoutDashboard },
    { name: "Appointments", href: "/patient-portal/appointments", icon: Calendar },
    { name: "Messages", href: "/patient-portal/messages", icon: MessageSquare },
    { name: "Medical Records", href: "/patient-portal/medical-records", icon: FileText },
    { name: "Medications", href: "/patient-portal/medications", icon: Pill },
    { name: "Health Tracking", href: "/patient-portal/health-tracking", icon: Activity },
    { name: "Bills & Payments", href: "/patient-portal/bills", icon: CreditCard },
    { name: "Profile & Settings", href: "/patient-portal/profile", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-medical-neutral-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link href="/patient-portal/dashboard" className="font-serif text-xl font-bold text-medical-blue-900">
              Patient Portal
            </Link>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-20 w-64 bg-white border-r transform transition-transform lg:translate-x-0 lg:static",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="pt-20 lg:pt-4 p-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-medical-blue-50 text-medical-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {children}
        </main>
      </div>
    </div>
  );
}
