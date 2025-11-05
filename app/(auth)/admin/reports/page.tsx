import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, TrendingUp, TrendingDown, DollarSign, Users, Calendar, FileText, Activity } from "lucide-react";

export default function AdminReportsPage() {
  const financialMetrics = [
    { label: "Total Revenue (MTD)", value: "$125,450", change: "+12.5%", trend: "up" },
    { label: "Outstanding Payments", value: "$23,890", change: "-5.2%", trend: "down" },
    { label: "Insurance Claims", value: "$89,320", change: "+8.3%", trend: "up" },
    { label: "Average Payment Time", value: "18 days", change: "-3 days", trend: "down" },
  ];

  const patientMetrics = [
    { label: "Total Active Patients", value: "1,248", change: "+5.3%", trend: "up" },
    { label: "New Patients (MTD)", value: "87", change: "+12%", trend: "up" },
    { label: "Patient Retention Rate", value: "94.2%", change: "+2.1%", trend: "up" },
    { label: "Average Visits per Patient", value: "3.4", change: "+0.2", trend: "up" },
  ];

  const appointmentMetrics = [
    { label: "Total Appointments (MTD)", value: "856", change: "+8.7%", trend: "up" },
    { label: "No-Show Rate", value: "5.2%", change: "-1.3%", trend: "down" },
    { label: "Cancellation Rate", value: "8.5%", change: "-2.1%", trend: "down" },
    { label: "Average Wait Time", value: "12 min", change: "-3 min", trend: "down" },
  ];

  const providerMetrics = [
    { label: "Total Providers", value: "24", change: "+2", trend: "up" },
    { label: "Average Patient Satisfaction", value: "4.7/5", change: "+0.2", trend: "up" },
    { label: "Provider Utilization", value: "87%", change: "+5%", trend: "up" },
    { label: "Avg Appointments/Provider", value: "35.7", change: "+2.3", trend: "up" },
  ];

  const recentReports = [
    {
      id: 1,
      name: "Monthly Financial Summary",
      type: "Financial",
      date: "Nov 1, 2024",
      format: "PDF",
    },
    {
      id: 2,
      name: "Patient Demographics Report",
      type: "Patient Analytics",
      date: "Oct 28, 2024",
      format: "Excel",
    },
    {
      id: 3,
      name: "Provider Performance Review",
      type: "Provider Analytics",
      date: "Oct 25, 2024",
      format: "PDF",
    },
    {
      id: 4,
      name: "Appointment Statistics Q3 2024",
      type: "Operations",
      date: "Oct 15, 2024",
      format: "PDF",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-2">
            Reports & Analytics
          </h1>
          <p className="text-gray-600">View performance metrics and generate reports</p>
        </div>
        <Button variant="medical">
          <FileText className="h-4 w-4" />
          Generate Custom Report
        </Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="providers">Providers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-medical-green-600" />
                  <p className="text-sm text-gray-600">Revenue (MTD)</p>
                </div>
                <p className="text-3xl font-bold text-medical-blue-900 mb-1">$125,450</p>
                <div className="flex items-center gap-1 text-sm text-medical-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+12.5%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  <p className="text-sm text-gray-600">Active Patients</p>
                </div>
                <p className="text-3xl font-bold text-medical-blue-900 mb-1">1,248</p>
                <div className="flex items-center gap-1 text-sm text-medical-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+5.3%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-medical-blue-600" />
                  <p className="text-sm text-gray-600">Appointments (MTD)</p>
                </div>
                <p className="text-3xl font-bold text-medical-blue-900 mb-1">856</p>
                <div className="flex items-center gap-1 text-sm text-medical-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+8.7%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-5 w-5 text-orange-600" />
                  <p className="text-sm text-gray-600">Provider Utilization</p>
                </div>
                <p className="text-3xl font-bold text-medical-blue-900 mb-1">87%</p>
                <div className="flex items-center gap-1 text-sm text-medical-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+5%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Placeholder */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-medical-neutral-100 rounded flex items-center justify-center text-gray-500">
                  Revenue chart placeholder
                  <p className="text-sm text-gray-400 ml-2">(Integrate with Recharts)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Appointment Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-medical-neutral-100 rounded flex items-center justify-center text-gray-500">
                  Appointment chart placeholder
                  <p className="text-sm text-gray-400 ml-2">(Integrate with Recharts)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Reports</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-medical-blue-600" />
                      <div>
                        <p className="font-semibold text-sm">{report.name}</p>
                        <p className="text-xs text-gray-600">{report.type} • {report.date}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                      Download {report.format}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {financialMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                  <p className="text-3xl font-bold text-medical-blue-900 mb-2">{metric.value}</p>
                  <div className={`flex items-center gap-1 text-sm ${metric.trend === "up" ? "text-medical-green-600" : "text-red-600"}`}>
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span>{metric.change}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Financial Performance Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-medical-neutral-100 rounded flex items-center justify-center text-gray-500">
                Financial performance chart placeholder
                <p className="text-sm text-gray-400 ml-2">(Integrate with Recharts for line/bar charts)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patients" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {patientMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                  <p className="text-3xl font-bold text-medical-blue-900 mb-2">{metric.value}</p>
                  <div className={`flex items-center gap-1 text-sm ${metric.trend === "up" ? "text-medical-green-600" : "text-red-600"}`}>
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span>{metric.change}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Patient Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-medical-neutral-100 rounded flex items-center justify-center text-gray-500">
                  Patient growth chart placeholder
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-medical-neutral-100 rounded flex items-center justify-center text-gray-500">
                  Demographics pie chart placeholder
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appointments" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {appointmentMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                  <p className="text-3xl font-bold text-medical-blue-900 mb-2">{metric.value}</p>
                  <div className={`flex items-center gap-1 text-sm ${metric.trend === "up" ? "text-medical-green-600" : "text-red-600"}`}>
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span>{metric.change}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Appointment Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-medical-neutral-100 rounded flex items-center justify-center text-gray-500">
                Appointment analytics chart placeholder
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="providers" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {providerMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                  <p className="text-3xl font-bold text-medical-blue-900 mb-2">{metric.value}</p>
                  <div className={`flex items-center gap-1 text-sm ${metric.trend === "up" ? "text-medical-green-600" : "text-red-600"}`}>
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span>{metric.change}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Provider Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-medical-neutral-100 rounded flex items-center justify-center text-gray-500">
                Provider performance comparison chart placeholder
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
