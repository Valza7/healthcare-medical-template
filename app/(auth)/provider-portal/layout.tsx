"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { LayoutDashboard, Calendar, MessageSquare, Users, FileText, Pill } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProviderPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/provider-portal/dashboard", icon: LayoutDashboard },
    { name: "Schedule", href: "/provider-portal/schedule", icon: Calendar },
    { name: "Patients", href: "/provider-portal/patients", icon: Users },
    { name: "Messages", href: "/provider-portal/messages", icon: MessageSquare },
    { name: "Orders & Results", href: "/provider-portal/orders", icon: FileText },
    { name: "Prescriptions", href: "/provider-portal/prescriptions", icon: Pill },
  ];

  return (
    <div className="min-h-screen bg-medical-neutral-50">
      <div className="bg-white border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/provider-portal/dashboard" className="font-serif text-xl font-bold text-medical-blue-900">
            Provider Portal
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <div className="flex">
        <aside className="w-64 bg-white border-r min-h-screen">
          <nav className="p-4 space-y-1">
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
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
