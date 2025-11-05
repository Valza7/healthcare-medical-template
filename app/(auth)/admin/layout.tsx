"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { LayoutDashboard, Users, Calendar, FileText, Settings, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Patients", href: "/admin/patients", icon: Users },
    { name: "Providers", href: "/admin/providers", icon: Users },
    { name: "Appointments", href: "/admin/appointments", icon: Calendar },
    { name: "Content", href: "/admin/content", icon: FileText },
    { name: "Reports", href: "/admin/reports", icon: BarChart },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-medical-neutral-50">
      <div className="bg-white border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/admin/dashboard" className="font-serif text-xl font-bold text-medical-blue-900">
            Admin Dashboard
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
