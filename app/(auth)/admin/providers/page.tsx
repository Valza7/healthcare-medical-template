import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, UserPlus, Download, Filter, MoreHorizontal, Star } from "lucide-react";

export default function AdminProvidersPage() {
  const providers = [
    {
      id: "PRV-001",
      name: "Dr. Sarah Smith",
      specialty: "Family Medicine",
      credentials: "MD, FAAFP",
      email: "dr.smith@healthcaremp.com",
      phone: "(555) 100-0001",
      licenseNumber: "MD-12345",
      npi: "1234567890",
      acceptingPatients: true,
      rating: 4.9,
      totalPatients: 450,
      appointmentsThisMonth: 85,
      status: "active",
    },
    {
      id: "PRV-002",
      name: "Dr. Michael Johnson",
      specialty: "Cardiology",
      credentials: "MD, FACC",
      email: "dr.johnson@healthcaremp.com",
      phone: "(555) 100-0002",
      licenseNumber: "MD-23456",
      npi: "2345678901",
      acceptingPatients: true,
      rating: 4.8,
      totalPatients: 320,
      appointmentsThisMonth: 62,
      status: "active",
    },
    {
      id: "PRV-003",
      name: "Dr. Emily Williams",
      specialty: "Pediatrics",
      credentials: "MD, FAAP",
      email: "dr.williams@healthcaremp.com",
      phone: "(555) 100-0003",
      licenseNumber: "MD-34567",
      npi: "3456789012",
      acceptingPatients: false,
      rating: 4.95,
      totalPatients: 580,
      appointmentsThisMonth: 95,
      status: "active",
    },
    {
      id: "PRV-004",
      name: "Dr. James Brown",
      specialty: "Orthopedic Surgery",
      credentials: "MD, FAAOS",
      email: "dr.brown@healthcaremp.com",
      phone: "(555) 100-0004",
      licenseNumber: "MD-45678",
      npi: "4567890123",
      acceptingPatients: true,
      rating: 4.7,
      totalPatients: 280,
      appointmentsThisMonth: 48,
      status: "active",
    },
    {
      id: "PRV-005",
      name: "Dr. Lisa Martinez",
      specialty: "Dermatology",
      credentials: "MD, FAAD",
      email: "dr.martinez@healthcaremp.com",
      phone: "(555) 100-0005",
      licenseNumber: "MD-56789",
      npi: "5678901234",
      acceptingPatients: true,
      rating: 4.85,
      totalPatients: 410,
      appointmentsThisMonth: 72,
      status: "active",
    },
    {
      id: "PRV-006",
      name: "Dr. Robert Davis",
      specialty: "Internal Medicine",
      credentials: "MD, FACP",
      email: "dr.davis@healthcaremp.com",
      phone: "(555) 100-0006",
      licenseNumber: "MD-67890",
      npi: "6789012345",
      acceptingPatients: false,
      rating: 4.6,
      totalPatients: 190,
      appointmentsThisMonth: 0,
      status: "on_leave",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-2">
            Provider Management
          </h1>
          <p className="text-gray-600">Manage healthcare providers and their credentials</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="medical">
            <UserPlus className="h-4 w-4" />
            Add Provider
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Total Providers</p>
            <p className="text-3xl font-bold text-medical-blue-600">{providers.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Active</p>
            <p className="text-3xl font-bold text-medical-green-600">
              {providers.filter((p) => p.status === "active").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Accepting Patients</p>
            <p className="text-3xl font-bold text-purple-600">
              {providers.filter((p) => p.acceptingPatients).length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">On Leave</p>
            <p className="text-3xl font-bold text-orange-600">
              {providers.filter((p) => p.status === "on_leave").length}
            </p>
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
                placeholder="Search by name, specialty, or credentials..."
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

      {/* Providers Table */}
      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-3 font-semibold text-sm">Provider ID</th>
                  <th className="text-left pb-3 font-semibold text-sm">Name & Specialty</th>
                  <th className="text-left pb-3 font-semibold text-sm">Contact</th>
                  <th className="text-left pb-3 font-semibold text-sm">Credentials</th>
                  <th className="text-left pb-3 font-semibold text-sm">Patients</th>
                  <th className="text-left pb-3 font-semibold text-sm">Rating</th>
                  <th className="text-left pb-3 font-semibold text-sm">Status</th>
                  <th className="text-left pb-3 font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {providers.map((provider) => (
                  <tr key={provider.id} className="border-b last:border-0">
                    <td className="py-4">
                      <span className="font-mono text-sm">{provider.id}</span>
                    </td>
                    <td className="py-4">
                      <p className="font-semibold">{provider.name}</p>
                      <p className="text-xs text-gray-600">{provider.specialty}</p>
                      <p className="text-xs text-gray-600">{provider.credentials}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm">{provider.email}</p>
                      <p className="text-xs text-gray-600">{provider.phone}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-xs text-gray-600">License: {provider.licenseNumber}</p>
                      <p className="text-xs text-gray-600">NPI: {provider.npi}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm font-semibold">{provider.totalPatients}</p>
                      <p className="text-xs text-gray-600">{provider.appointmentsThisMonth} this month</p>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold">{provider.rating}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="space-y-1">
                        {provider.status === "active" ? (
                          <Badge variant="success">Active</Badge>
                        ) : (
                          <Badge variant="warning">On Leave</Badge>
                        )}
                        {provider.acceptingPatients ? (
                          <Badge variant="info" className="block w-fit">Accepting</Badge>
                        ) : (
                          <Badge variant="secondary" className="block w-fit">Not Accepting</Badge>
                        )}
                      </div>
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
              Showing {providers.length} of {providers.length} providers
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
