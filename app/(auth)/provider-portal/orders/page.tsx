import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Plus, AlertCircle } from "lucide-react";

export default function ProviderOrdersPage() {
  const labOrders = [
    {
      id: "L-2024-001",
      patientName: "Sarah Johnson",
      patientId: "P-10234",
      testType: "Comprehensive Metabolic Panel",
      orderDate: "Nov 1, 2024",
      status: "completed",
      resultDate: "Nov 3, 2024",
      abnormal: false,
    },
    {
      id: "L-2024-002",
      patientName: "Michael Chen",
      patientId: "P-10567",
      testType: "Lipid Panel",
      orderDate: "Oct 28, 2024",
      status: "completed",
      resultDate: "Oct 30, 2024",
      abnormal: true,
    },
    {
      id: "L-2024-003",
      patientName: "Emily Rodriguez",
      patientId: "P-10891",
      testType: "CBC with Differential",
      orderDate: "Nov 4, 2024",
      status: "pending",
      resultDate: null,
      abnormal: false,
    },
    {
      id: "L-2024-004",
      patientName: "Lisa Anderson",
      patientId: "P-10678",
      testType: "Thyroid Function Panel",
      orderDate: "Oct 25, 2024",
      status: "completed",
      resultDate: "Oct 27, 2024",
      abnormal: false,
    },
  ];

  const imagingOrders = [
    {
      id: "I-2024-001",
      patientName: "David Thompson",
      patientId: "P-10432",
      studyType: "Chest X-Ray",
      orderDate: "Nov 2, 2024",
      status: "completed",
      resultDate: "Nov 2, 2024",
      priority: "routine",
    },
    {
      id: "I-2024-002",
      patientName: "Sarah Johnson",
      patientId: "P-10234",
      studyType: "Abdominal Ultrasound",
      orderDate: "Oct 30, 2024",
      status: "scheduled",
      scheduledDate: "Nov 8, 2024",
      priority: "routine",
    },
    {
      id: "I-2024-003",
      patientName: "Emily Rodriguez",
      patientId: "P-10891",
      studyType: "MRI Brain",
      orderDate: "Nov 1, 2024",
      status: "pending",
      priority: "urgent",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold text-medical-blue-900">
          Orders & Results
        </h1>
        <Button variant="medical">
          <Plus className="h-4 w-4" />
          New Order
        </Button>
      </div>

      <Tabs defaultValue="labs" className="w-full">
        <TabsList>
          <TabsTrigger value="labs">Lab Orders</TabsTrigger>
          <TabsTrigger value="imaging">Imaging Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="labs" className="mt-6">
          {/* Search */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search lab orders..." className="pl-10" />
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                <p className="text-3xl font-bold text-medical-blue-600">{labOrders.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-3xl font-bold text-orange-600">
                  {labOrders.filter((o) => o.status === "pending").length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-3xl font-bold text-medical-green-600">
                  {labOrders.filter((o) => o.status === "completed").length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Abnormal Results</p>
                <p className="text-3xl font-bold text-red-600">
                  {labOrders.filter((o) => o.abnormal).length}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Lab Orders List */}
          <div className="space-y-4">
            {labOrders.map((order) => (
              <Card key={order.id} className={order.abnormal ? "border-l-4 border-l-red-500" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-medical-blue-900">
                          {order.testType}
                        </h3>
                        <Badge variant="outline">{order.id}</Badge>
                        {order.status === "completed" ? (
                          <Badge variant="success">Completed</Badge>
                        ) : (
                          <Badge variant="warning">Pending</Badge>
                        )}
                        {order.abnormal && (
                          <Badge variant="destructive" className="flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            Abnormal
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Patient:</strong> {order.patientName} ({order.patientId})
                      </p>
                      <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                        <p>
                          <strong>Order Date:</strong> {order.orderDate}
                        </p>
                        {order.resultDate && (
                          <p>
                            <strong>Result Date:</strong> {order.resultDate}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {order.status === "completed" && (
                        <>
                          <Button variant="medical" size="sm">
                            <FileText className="h-4 w-4" />
                            View Results
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </>
                      )}
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

        <TabsContent value="imaging" className="mt-6">
          {/* Search */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search imaging orders..." className="pl-10" />
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                <p className="text-3xl font-bold text-medical-blue-600">{imagingOrders.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-3xl font-bold text-orange-600">
                  {imagingOrders.filter((o) => o.status === "pending").length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Scheduled</p>
                <p className="text-3xl font-bold text-purple-600">
                  {imagingOrders.filter((o) => o.status === "scheduled").length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-3xl font-bold text-medical-green-600">
                  {imagingOrders.filter((o) => o.status === "completed").length}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Imaging Orders List */}
          <div className="space-y-4">
            {imagingOrders.map((order) => (
              <Card key={order.id} className={order.priority === "urgent" ? "border-l-4 border-l-orange-500" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-medical-blue-900">
                          {order.studyType}
                        </h3>
                        <Badge variant="outline">{order.id}</Badge>
                        {order.status === "completed" && (
                          <Badge variant="success">Completed</Badge>
                        )}
                        {order.status === "scheduled" && (
                          <Badge variant="info">Scheduled</Badge>
                        )}
                        {order.status === "pending" && (
                          <Badge variant="warning">Pending</Badge>
                        )}
                        {order.priority === "urgent" && (
                          <Badge variant="destructive">Urgent</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Patient:</strong> {order.patientName} ({order.patientId})
                      </p>
                      <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                        <p>
                          <strong>Order Date:</strong> {order.orderDate}
                        </p>
                        {order.resultDate && (
                          <p>
                            <strong>Result Date:</strong> {order.resultDate}
                          </p>
                        )}
                        {order.scheduledDate && (
                          <p>
                            <strong>Scheduled:</strong> {order.scheduledDate}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {order.status === "completed" && (
                        <>
                          <Button variant="medical" size="sm">
                            <FileText className="h-4 w-4" />
                            View Images
                          </Button>
                          <Button variant="outline" size="sm">
                            View Report
                          </Button>
                        </>
                      )}
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
