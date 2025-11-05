import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, AlertCircle, FileText, RefreshCw } from "lucide-react";

export default function ProviderPrescriptionsPage() {
  const activePrescriptions = [
    {
      id: "RX-2024-001",
      patientName: "Sarah Johnson",
      patientId: "P-10234",
      medication: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      startDate: "Oct 1, 2024",
      refills: 3,
      refillsUsed: 1,
      pharmacy: "Main Street Pharmacy",
      status: "active",
    },
    {
      id: "RX-2024-002",
      patientName: "Michael Chen",
      patientId: "P-10567",
      medication: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily at bedtime",
      startDate: "Sep 15, 2024",
      refills: 5,
      refillsUsed: 2,
      pharmacy: "Healthcare Pharmacy",
      status: "active",
    },
    {
      id: "RX-2024-003",
      patientName: "Emily Rodriguez",
      patientId: "P-10891",
      medication: "Albuterol Inhaler",
      dosage: "90mcg",
      frequency: "As needed for asthma",
      startDate: "Oct 15, 2024",
      refills: 2,
      refillsUsed: 0,
      pharmacy: "Main Street Pharmacy",
      status: "active",
    },
    {
      id: "RX-2024-004",
      patientName: "Lisa Anderson",
      patientId: "P-10678",
      medication: "Levothyroxine",
      dosage: "75mcg",
      frequency: "Once daily in morning",
      startDate: "Aug 1, 2024",
      refills: 6,
      refillsUsed: 3,
      pharmacy: "Downtown Pharmacy",
      status: "active",
    },
  ];

  const refillRequests = [
    {
      id: "RR-2024-001",
      patientName: "Sarah Johnson",
      patientId: "P-10234",
      medication: "Metformin 500mg",
      originalRx: "RX-2024-001",
      requestDate: "Nov 5, 2024",
      reason: "Running low on medication",
      status: "pending",
    },
    {
      id: "RR-2024-002",
      patientName: "David Thompson",
      patientId: "P-10432",
      medication: "Lisinopril 10mg",
      originalRx: "RX-2024-015",
      requestDate: "Nov 4, 2024",
      reason: "Regular refill",
      status: "pending",
    },
  ];

  const recentPrescriptions = [
    {
      id: "RX-2024-010",
      patientName: "David Thompson",
      patientId: "P-10432",
      medication: "Amoxicillin",
      dosage: "500mg",
      frequency: "Three times daily",
      prescribedDate: "Nov 3, 2024",
      duration: "10 days",
      reason: "Bacterial infection",
    },
    {
      id: "RX-2024-011",
      patientName: "Lisa Anderson",
      patientId: "P-10678",
      medication: "Ibuprofen",
      dosage: "400mg",
      frequency: "Every 6 hours as needed",
      prescribedDate: "Nov 2, 2024",
      duration: "As needed",
      reason: "Pain management",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold text-medical-blue-900">
          Prescriptions
        </h1>
        <Button variant="medical">
          <Plus className="h-4 w-4" />
          New Prescription
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList>
          <TabsTrigger value="active">Active Prescriptions</TabsTrigger>
          <TabsTrigger value="refills">
            Refill Requests
            {refillRequests.length > 0 && (
              <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                {refillRequests.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="recent">Recently Prescribed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          {/* Search */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search active prescriptions..." className="pl-10" />
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Total Active</p>
                <p className="text-3xl font-bold text-medical-blue-600">{activePrescriptions.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Refill Requests</p>
                <p className="text-3xl font-bold text-orange-600">{refillRequests.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">This Month</p>
                <p className="text-3xl font-bold text-medical-green-600">12</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Controlled Substances</p>
                <p className="text-3xl font-bold text-purple-600">0</p>
              </CardContent>
            </Card>
          </div>

          {/* Active Prescriptions List */}
          <div className="space-y-4">
            {activePrescriptions.map((rx) => (
              <Card key={rx.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-medical-blue-900">
                          {rx.medication}
                        </h3>
                        <Badge variant="outline">{rx.id}</Badge>
                        <Badge variant="success">Active</Badge>
                        {rx.refills - rx.refillsUsed <= 1 && (
                          <Badge variant="warning" className="flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            Low Refills
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Patient:</strong> {rx.patientName} ({rx.patientId})
                      </p>
                      <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 mb-3">
                        <p>
                          <strong>Dosage:</strong> {rx.dosage}
                        </p>
                        <p>
                          <strong>Frequency:</strong> {rx.frequency}
                        </p>
                        <p>
                          <strong>Start Date:</strong> {rx.startDate}
                        </p>
                        <p>
                          <strong>Refills:</strong> {rx.refills - rx.refillsUsed} of {rx.refills} remaining
                        </p>
                        <p className="md:col-span-2">
                          <strong>Pharmacy:</strong> {rx.pharmacy}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="medical" size="sm">
                        <FileText className="h-4 w-4" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-4 w-4" />
                        Refill
                      </Button>
                      <Button variant="outline" size="sm">
                        View Chart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="refills" className="mt-6">
          {refillRequests.length > 0 ? (
            <>
              <Card className="mb-6 border-orange-200 bg-orange-50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-orange-900 mb-1">
                        {refillRequests.length} Refill Request{refillRequests.length > 1 ? "s" : ""} Pending
                      </p>
                      <p className="text-sm text-orange-800">
                        Please review and approve or deny the pending refill requests below.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {refillRequests.map((request) => (
                  <Card key={request.id} className="border-l-4 border-l-orange-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-medical-blue-900">
                              {request.medication}
                            </h3>
                            <Badge variant="outline">{request.id}</Badge>
                            <Badge variant="warning">Pending Review</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            <strong>Patient:</strong> {request.patientName} ({request.patientId})
                          </p>
                          <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                            <p>
                              <strong>Request Date:</strong> {request.requestDate}
                            </p>
                            <p>
                              <strong>Original Rx:</strong> {request.originalRx}
                            </p>
                            <p className="md:col-span-2">
                              <strong>Reason:</strong> {request.reason}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button variant="medical" size="sm">
                            Approve Refill
                          </Button>
                          <Button variant="outline" size="sm">
                            View Original Rx
                          </Button>
                          <Button variant="outline" size="sm">
                            View Chart
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            Deny Request
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <Card>
              <CardContent className="py-12 text-center text-gray-500">
                No pending refill requests
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="recent" className="mt-6">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search recent prescriptions..." className="pl-10" />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {recentPrescriptions.map((rx) => (
              <Card key={rx.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-medical-blue-900">
                          {rx.medication}
                        </h3>
                        <Badge variant="outline">{rx.id}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Patient:</strong> {rx.patientName} ({rx.patientId})
                      </p>
                      <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 mb-2">
                        <p>
                          <strong>Dosage:</strong> {rx.dosage}
                        </p>
                        <p>
                          <strong>Frequency:</strong> {rx.frequency}
                        </p>
                        <p>
                          <strong>Prescribed:</strong> {rx.prescribedDate}
                        </p>
                        <p>
                          <strong>Duration:</strong> {rx.duration}
                        </p>
                        <p className="md:col-span-2">
                          <strong>Reason:</strong> {rx.reason}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        View Chart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
