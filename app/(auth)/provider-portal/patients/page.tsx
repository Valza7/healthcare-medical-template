import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Calendar, AlertCircle, Phone, Mail } from "lucide-react";

export default function ProviderPatientsPage() {
  const patients = [
    {
      id: "P-10234",
      name: "Sarah Johnson",
      age: 45,
      gender: "Female",
      lastVisit: "Nov 1, 2024",
      nextAppointment: "Nov 15, 2024",
      conditions: ["Type 2 Diabetes", "Hypertension"],
      alerts: ["Medication due for refill"],
      phone: "(555) 234-5678",
      email: "sarah.j@email.com",
    },
    {
      id: "P-10567",
      name: "Michael Chen",
      age: 62,
      gender: "Male",
      lastVisit: "Oct 28, 2024",
      nextAppointment: "Dec 5, 2024",
      conditions: ["High Cholesterol"],
      alerts: [],
      phone: "(555) 345-6789",
      email: "m.chen@email.com",
    },
    {
      id: "P-10891",
      name: "Emily Rodriguez",
      age: 34,
      gender: "Female",
      lastVisit: "Oct 15, 2024",
      nextAppointment: "Nov 10, 2024",
      conditions: ["Asthma"],
      alerts: ["Lab results pending review"],
      phone: "(555) 456-7890",
      email: "emily.r@email.com",
    },
    {
      id: "P-10432",
      name: "David Thompson",
      age: 58,
      gender: "Male",
      lastVisit: "Nov 2, 2024",
      nextAppointment: "Nov 16, 2024",
      conditions: ["Post-surgical recovery"],
      alerts: ["Follow-up required"],
      phone: "(555) 567-8901",
      email: "d.thompson@email.com",
    },
    {
      id: "P-10678",
      name: "Lisa Anderson",
      age: 41,
      gender: "Female",
      lastVisit: "Oct 25, 2024",
      nextAppointment: "Nov 12, 2024",
      conditions: ["Hypothyroidism"],
      alerts: [],
      phone: "(555) 678-9012",
      email: "lisa.a@email.com",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold text-medical-blue-900">
          My Patients
        </h1>
        <Button variant="medical">
          Add New Patient
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, ID, or condition..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Sort</Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Total Patients</p>
            <p className="text-3xl font-bold text-medical-blue-600">{patients.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Active This Month</p>
            <p className="text-3xl font-bold text-medical-green-600">{patients.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Pending Actions</p>
            <p className="text-3xl font-bold text-orange-600">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">New This Month</p>
            <p className="text-3xl font-bold text-purple-600">2</p>
          </CardContent>
        </Card>
      </div>

      {/* Patient List */}
      <div className="space-y-4">
        <h2 className="font-semibold text-xl mb-4">Patient List</h2>
        {patients.map((patient) => (
          <Card key={patient.id} className={patient.alerts.length > 0 ? "border-l-4 border-l-orange-500" : ""}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-medical-blue-900">
                      {patient.name}
                    </h3>
                    <Badge variant="outline">{patient.id}</Badge>
                    {patient.alerts.length > 0 && (
                      <Badge variant="warning" className="flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {patient.alerts.length} Alert{patient.alerts.length > 1 ? "s" : ""}
                      </Badge>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">
                        <strong>Age:</strong> {patient.age} | <strong>Gender:</strong> {patient.gender}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <Phone className="h-3 w-3" />
                        {patient.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <Mail className="h-3 w-3" />
                        {patient.email}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Last Visit:</strong> {patient.lastVisit}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Next Appointment:</strong> {patient.nextAppointment}
                      </p>
                    </div>
                  </div>

                  {patient.conditions.length > 0 && (
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Active Conditions:</p>
                      <div className="flex flex-wrap gap-2">
                        {patient.conditions.map((condition) => (
                          <Badge key={condition} variant="secondary">
                            {condition}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {patient.alerts.length > 0 && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-orange-900 mb-1">Alerts:</p>
                      <ul className="list-disc list-inside text-sm text-orange-800">
                        {patient.alerts.map((alert, idx) => (
                          <li key={idx}>{alert}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 ml-4">
                  <Button variant="medical" size="sm">
                    <FileText className="h-4 w-4" />
                    View Chart
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4" />
                    Schedule
                  </Button>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
