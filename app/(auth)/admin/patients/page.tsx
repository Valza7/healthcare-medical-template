import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, UserPlus, Download, Filter, MoreHorizontal } from "lucide-react";

export default function AdminPatientsPage() {
  const patients = [
    {
      id: "P-10234",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "(555) 234-5678",
      dateOfBirth: "01/15/1979",
      age: 45,
      gender: "Female",
      lastVisit: "Nov 1, 2024",
      primaryProvider: "Dr. Smith",
      status: "active",
      insurance: "Blue Cross",
    },
    {
      id: "P-10567",
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "(555) 345-6789",
      dateOfBirth: "03/22/1962",
      age: 62,
      gender: "Male",
      lastVisit: "Oct 28, 2024",
      primaryProvider: "Dr. Johnson",
      status: "active",
      insurance: "Medicare",
    },
    {
      id: "P-10891",
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "(555) 456-7890",
      dateOfBirth: "07/10/1990",
      age: 34,
      gender: "Female",
      lastVisit: "Oct 15, 2024",
      primaryProvider: "Dr. Williams",
      status: "active",
      insurance: "Aetna",
    },
    {
      id: "P-10432",
      name: "David Thompson",
      email: "d.thompson@email.com",
      phone: "(555) 567-8901",
      dateOfBirth: "11/05/1966",
      age: 58,
      gender: "Male",
      lastVisit: "Nov 2, 2024",
      primaryProvider: "Dr. Smith",
      status: "active",
      insurance: "United Healthcare",
    },
    {
      id: "P-10678",
      name: "Lisa Anderson",
      email: "lisa.a@email.com",
      phone: "(555) 678-9012",
      dateOfBirth: "05/18/1983",
      age: 41,
      gender: "Female",
      lastVisit: "Oct 25, 2024",
      primaryProvider: "Dr. Brown",
      status: "active",
      insurance: "Cigna",
    },
    {
      id: "P-09876",
      name: "Robert Miller",
      email: "r.miller@email.com",
      phone: "(555) 789-0123",
      dateOfBirth: "09/30/1955",
      age: 69,
      gender: "Male",
      lastVisit: "Sep 15, 2024",
      primaryProvider: "Dr. Johnson",
      status: "inactive",
      insurance: "Medicare",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-2">
            Patient Management
          </h1>
          <p className="text-gray-600">Manage patient records and information</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="medical">
            <UserPlus className="h-4 w-4" />
            Add Patient
          </Button>
        </div>
      </div>

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
            <p className="text-sm text-gray-600 mb-1">Active</p>
            <p className="text-3xl font-bold text-medical-green-600">
              {patients.filter((p) => p.status === "active").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Inactive</p>
            <p className="text-3xl font-bold text-gray-600">
              {patients.filter((p) => p.status === "inactive").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">New This Month</p>
            <p className="text-3xl font-bold text-purple-600">8</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, ID, email, or phone..."
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

      {/* Patients Table */}
      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-3 font-semibold text-sm">Patient ID</th>
                  <th className="text-left pb-3 font-semibold text-sm">Name</th>
                  <th className="text-left pb-3 font-semibold text-sm">Contact</th>
                  <th className="text-left pb-3 font-semibold text-sm">DOB / Age</th>
                  <th className="text-left pb-3 font-semibold text-sm">Gender</th>
                  <th className="text-left pb-3 font-semibold text-sm">Provider</th>
                  <th className="text-left pb-3 font-semibold text-sm">Last Visit</th>
                  <th className="text-left pb-3 font-semibold text-sm">Status</th>
                  <th className="text-left pb-3 font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} className="border-b last:border-0">
                    <td className="py-4">
                      <span className="font-mono text-sm">{patient.id}</span>
                    </td>
                    <td className="py-4">
                      <p className="font-semibold">{patient.name}</p>
                      <p className="text-xs text-gray-600">{patient.insurance}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm">{patient.email}</p>
                      <p className="text-xs text-gray-600">{patient.phone}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm">{patient.dateOfBirth}</p>
                      <p className="text-xs text-gray-600">{patient.age} years</p>
                    </td>
                    <td className="py-4 text-sm">{patient.gender}</td>
                    <td className="py-4 text-sm">{patient.primaryProvider}</td>
                    <td className="py-4 text-sm">{patient.lastVisit}</td>
                    <td className="py-4">
                      {patient.status === "active" ? (
                        <Badge variant="success">Active</Badge>
                      ) : (
                        <Badge variant="secondary">Inactive</Badge>
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
              Showing {patients.length} of {patients.length} patients
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
    </div>
  );
}
