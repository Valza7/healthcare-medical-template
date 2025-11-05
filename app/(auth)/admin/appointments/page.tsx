import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, Download, Filter, MoreHorizontal, Video, Clock } from "lucide-react";

export default function AdminAppointmentsPage() {
  const upcomingAppointments = [
    {
      id: "APT-2024-001",
      patientName: "Sarah Johnson",
      patientId: "P-10234",
      providerName: "Dr. Smith",
      providerId: "PRV-001",
      date: "Nov 5, 2024",
      time: "9:00 AM",
      duration: "30 min",
      type: "Follow-up",
      location: "Main Campus - Room 201",
      isTelehealth: false,
      status: "confirmed",
    },
    {
      id: "APT-2024-002",
      patientName: "Michael Chen",
      patientId: "P-10567",
      providerName: "Dr. Johnson",
      providerId: "PRV-002",
      date: "Nov 5, 2024",
      time: "9:30 AM",
      duration: "15 min",
      type: "Video Visit",
      location: "Telehealth",
      isTelehealth: true,
      status: "confirmed",
    },
    {
      id: "APT-2024-003",
      patientName: "Emily Rodriguez",
      patientId: "P-10891",
      providerName: "Dr. Williams",
      providerId: "PRV-003",
      date: "Nov 5, 2024",
      time: "10:00 AM",
      duration: "45 min",
      type: "New Patient",
      location: "Main Campus - Room 203",
      isTelehealth: false,
      status: "pending",
    },
    {
      id: "APT-2024-004",
      patientName: "David Thompson",
      patientId: "P-10432",
      providerName: "Dr. Smith",
      providerId: "PRV-001",
      date: "Nov 5, 2024",
      time: "11:00 AM",
      duration: "30 min",
      type: "Follow-up",
      location: "Main Campus - Room 201",
      isTelehealth: false,
      status: "confirmed",
    },
    {
      id: "APT-2024-005",
      patientName: "Lisa Anderson",
      patientId: "P-10678",
      providerName: "Dr. Brown",
      providerId: "PRV-004",
      date: "Nov 5, 2024",
      time: "2:00 PM",
      duration: "30 min",
      type: "Consultation",
      location: "North Campus - Room 102",
      isTelehealth: false,
      status: "confirmed",
    },
  ];

  const pastAppointments = [
    {
      id: "APT-2024-100",
      patientName: "Sarah Johnson",
      patientId: "P-10234",
      providerName: "Dr. Smith",
      date: "Nov 1, 2024",
      time: "9:00 AM",
      type: "Annual Physical",
      status: "completed",
    },
    {
      id: "APT-2024-101",
      patientName: "Michael Chen",
      patientId: "P-10567",
      providerName: "Dr. Johnson",
      date: "Oct 28, 2024",
      time: "10:30 AM",
      type: "Follow-up",
      status: "completed",
    },
    {
      id: "APT-2024-102",
      patientName: "Robert Miller",
      patientId: "P-09876",
      providerName: "Dr. Williams",
      date: "Oct 25, 2024",
      time: "2:00 PM",
      type: "Check-up",
      status: "no_show",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-2">
            Appointment Management
          </h1>
          <p className="text-gray-600">Manage and monitor all appointments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="medical">
            <Calendar className="h-4 w-4" />
            Schedule Appointment
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-5 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Today</p>
            <p className="text-3xl font-bold text-medical-blue-600">{upcomingAppointments.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">This Week</p>
            <p className="text-3xl font-bold text-purple-600">48</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Confirmed</p>
            <p className="text-3xl font-bold text-medical-green-600">
              {upcomingAppointments.filter((a) => a.status === "confirmed").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-3xl font-bold text-orange-600">
              {upcomingAppointments.filter((a) => a.status === "pending").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">No-Shows</p>
            <p className="text-3xl font-bold text-red-600">2</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by patient, provider, or appointment ID..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Appointments Table */}
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-3 font-semibold text-sm">ID</th>
                      <th className="text-left pb-3 font-semibold text-sm">Date & Time</th>
                      <th className="text-left pb-3 font-semibold text-sm">Patient</th>
                      <th className="text-left pb-3 font-semibold text-sm">Provider</th>
                      <th className="text-left pb-3 font-semibold text-sm">Type</th>
                      <th className="text-left pb-3 font-semibold text-sm">Location</th>
                      <th className="text-left pb-3 font-semibold text-sm">Status</th>
                      <th className="text-left pb-3 font-semibold text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingAppointments.map((apt) => (
                      <tr key={apt.id} className="border-b last:border-0">
                        <td className="py-4">
                          <span className="font-mono text-xs">{apt.id}</span>
                        </td>
                        <td className="py-4">
                          <p className="text-sm font-semibold">{apt.date}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Clock className="h-3 w-3" />
                            {apt.time} ({apt.duration})
                          </div>
                        </td>
                        <td className="py-4">
                          <p className="text-sm font-semibold">{apt.patientName}</p>
                          <p className="text-xs text-gray-600">{apt.patientId}</p>
                        </td>
                        <td className="py-4">
                          <p className="text-sm">{apt.providerName}</p>
                          <p className="text-xs text-gray-600">{apt.providerId}</p>
                        </td>
                        <td className="py-4">
                          <Badge variant="outline" className="whitespace-nowrap">
                            {apt.type}
                          </Badge>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-1 text-sm">
                            {apt.isTelehealth && <Video className="h-3 w-3 text-purple-600" />}
                            <span className="text-xs">{apt.location}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          {apt.status === "confirmed" ? (
                            <Badge variant="success">Confirmed</Badge>
                          ) : (
                            <Badge variant="warning">Pending</Badge>
                          )}
                        </td>
                        <td className="py-4">
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600">
                  Showing {upcomingAppointments.length} of {upcomingAppointments.length} appointments
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search past appointments..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-3 font-semibold text-sm">ID</th>
                      <th className="text-left pb-3 font-semibold text-sm">Date & Time</th>
                      <th className="text-left pb-3 font-semibold text-sm">Patient</th>
                      <th className="text-left pb-3 font-semibold text-sm">Provider</th>
                      <th className="text-left pb-3 font-semibold text-sm">Type</th>
                      <th className="text-left pb-3 font-semibold text-sm">Status</th>
                      <th className="text-left pb-3 font-semibold text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastAppointments.map((apt) => (
                      <tr key={apt.id} className="border-b last:border-0">
                        <td className="py-4">
                          <span className="font-mono text-xs">{apt.id}</span>
                        </td>
                        <td className="py-4">
                          <p className="text-sm font-semibold">{apt.date}</p>
                          <p className="text-xs text-gray-600">{apt.time}</p>
                        </td>
                        <td className="py-4">
                          <p className="text-sm font-semibold">{apt.patientName}</p>
                          <p className="text-xs text-gray-600">{apt.patientId}</p>
                        </td>
                        <td className="py-4 text-sm">{apt.providerName}</td>
                        <td className="py-4">
                          <Badge variant="outline">{apt.type}</Badge>
                        </td>
                        <td className="py-4">
                          {apt.status === "completed" ? (
                            <Badge variant="success">Completed</Badge>
                          ) : (
                            <Badge variant="destructive">No Show</Badge>
                          )}
                        </td>
                        <td className="py-4">
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="mt-6">
          <Card>
            <CardContent className="py-12 text-center">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Calendar view integration placeholder</p>
              <p className="text-sm text-gray-400 mt-2">
                Integrate with a calendar library like FullCalendar or react-big-calendar
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
