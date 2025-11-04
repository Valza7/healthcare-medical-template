import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Calendar,
  MessageSquare,
  FileText,
  Pill,
  Activity,
  CreditCard,
  Users,
  Bell,
  Clock,
  AlertCircle,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Dashboard",
  description: "Access your health information, appointments, messages, and more.",
};

export default function PatientDashboardPage() {
  // Mock data - in production, this would come from Convex
  const upcomingAppointments = [
    {
      id: "1",
      provider: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "2024-11-10",
      time: "2:00 PM",
      location: "Main Campus",
      type: "Follow-up",
    },
    {
      id: "2",
      provider: "Dr. Michael Chen",
      specialty: "Family Medicine",
      date: "2024-11-15",
      time: "10:30 AM",
      location: "Main Campus",
      type: "Annual Physical",
    },
  ];

  const recentMessages = [
    {
      id: "1",
      from: "Dr. Sarah Johnson",
      subject: "Lab Results Available",
      date: "2024-11-03",
      unread: true,
    },
    {
      id: "2",
      from: "Billing Department",
      subject: "Payment Confirmation",
      date: "2024-11-02",
      unread: false,
    },
  ];

  const recentResults = [
    {
      id: "1",
      type: "Blood Work",
      date: "2024-11-01",
      status: "normal",
    },
    {
      id: "2",
      type: "X-Ray - Chest",
      date: "2024-10-28",
      status: "normal",
    },
  ];

  const medications = [
    {
      id: "1",
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      refillsRemaining: 2,
    },
    {
      id: "2",
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      refillsRemaining: 0,
    },
  ];

  const quickActions = [
    {
      title: "Schedule Appointment",
      description: "Book a visit with your provider",
      icon: Calendar,
      href: "/patient-portal/appointments/book",
      color: "bg-medical-blue-100 text-medical-blue-600",
    },
    {
      title: "Message Provider",
      description: "Secure messaging with care team",
      icon: MessageSquare,
      href: "/patient-portal/messages",
      color: "bg-medical-green-100 text-medical-green-600",
    },
    {
      title: "View Records",
      description: "Access your medical records",
      icon: FileText,
      href: "/patient-portal/medical-records",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Request Refill",
      description: "Refill your prescriptions",
      icon: Pill,
      href: "/patient-portal/medications",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-medical-neutral-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl font-bold text-medical-blue-900">
                Welcome Back, John
              </h1>
              <p className="text-gray-600 mt-1">Here's an overview of your health information</p>
            </div>
            <Button variant="outline">
              <Bell className="h-4 w-4" />
              Notifications
              <Badge variant="destructive" className="ml-2">
                2
              </Badge>
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Alerts */}
        <div className="space-y-4 mb-8">
          <Alert variant="info">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>New Lab Results Available</AlertTitle>
            <AlertDescription>
              Your recent blood work results are ready to view.{" "}
              <Link href="/patient-portal/medical-records" className="underline font-medium">
                View Results
              </Link>
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <Clock className="h-4 w-4" />
            <AlertTitle>Prescription Refill Needed</AlertTitle>
            <AlertDescription>
              Metformin has 0 refills remaining.{" "}
              <Link href="/patient-portal/medications" className="underline font-medium">
                Request Refill
              </Link>
            </AlertDescription>
          </Alert>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${action.color} mb-4`}>
                    <action.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-medical-blue-600" />
                    Upcoming Appointments
                  </CardTitle>
                  <Button variant="link" asChild>
                    <Link href="/patient-portal/appointments">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-start justify-between p-4 rounded-lg border border-medical-blue-100 bg-medical-blue-50/50"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-medical-blue-900">
                          {appointment.provider}
                        </div>
                        <div className="text-sm text-gray-600">{appointment.specialty}</div>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="info">{appointment.type}</Badge>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/patient-portal/appointments/book">
                      <Calendar className="h-4 w-4" />
                      Schedule New Appointment
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Test Results */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-medical-green-600" />
                    Recent Test Results
                  </CardTitle>
                  <Button variant="link" asChild>
                    <Link href="/patient-portal/medical-records">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentResults.map((result) => (
                    <div
                      key={result.id}
                      className="flex items-center justify-between p-3 rounded-lg border"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium">{result.type}</div>
                          <div className="text-sm text-gray-600">{result.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-medical-green-600" />
                        <span className="text-sm text-medical-green-700 font-medium capitalize">
                          {result.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - 1 col */}
          <div className="space-y-8">
            {/* Messages */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-medical-blue-600" />
                    Messages
                  </CardTitle>
                  <Badge variant="destructive">1 New</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-3 rounded-lg border cursor-pointer hover:bg-gray-50 ${
                        message.unread ? "bg-medical-blue-50 border-medical-blue-200" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="font-medium text-sm">{message.from}</div>
                        {message.unread && (
                          <Badge variant="info" className="text-xs">
                            New
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-900 mb-1">{message.subject}</div>
                      <div className="text-xs text-gray-600">{message.date}</div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/patient-portal/messages">
                      <MessageSquare className="h-4 w-4" />
                      View All Messages
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Medications */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="h-5 w-5 text-orange-600" />
                    Medications
                  </CardTitle>
                  <Button variant="link" asChild>
                    <Link href="/patient-portal/medications">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {medications.map((med) => (
                    <div key={med.id} className="p-3 rounded-lg border">
                      <div className="font-medium">{med.name}</div>
                      <div className="text-sm text-gray-600">
                        {med.dosage} - {med.frequency}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-600">
                          {med.refillsRemaining} refills left
                        </span>
                        {med.refillsRemaining === 0 && (
                          <Button variant="link" size="sm" className="h-auto p-0">
                            Request Refill
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-medical-green-600" />
                  Health Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Blood Pressure</span>
                      <span className="font-medium">120/80</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-medical-green-500 w-3/4"></div>
                    </div>
                    <span className="text-xs text-medical-green-600 mt-1 inline-block">Normal</span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Weight</span>
                      <span className="font-medium">165 lbs</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-medical-blue-500 w-2/3"></div>
                    </div>
                    <span className="text-xs text-medical-blue-600 mt-1 inline-flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Goal: 160 lbs
                    </span>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/patient-portal/health-tracking">
                      <Activity className="h-4 w-4" />
                      Track Health Data
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
