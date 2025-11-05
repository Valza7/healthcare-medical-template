import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Calendar, CheckCircle } from "lucide-react";

export default function MedicalRecordsPage() {
  const labs = [
    { id: "1", type: "Complete Blood Count", date: "Nov 1, 2024", status: "normal", provider: "Dr. Sarah Johnson" },
    { id: "2", type: "Lipid Panel", date: "Nov 1, 2024", status: "normal", provider: "Dr. Sarah Johnson" },
  ];

  const imaging = [
    { id: "1", type: "Chest X-Ray", date: "Oct 28, 2024", status: "normal", provider: "Dr. Sarah Johnson" },
  ];

  const visits = [
    { id: "1", type: "Annual Physical", date: "Oct 15, 2024", provider: "Dr. Michael Chen" },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold text-medical-blue-900">
          Medical Records
        </h1>
        <Button variant="outline">
          <Download className="h-4 w-4" />
          Export Records
        </Button>
      </div>

      <Tabs defaultValue="labs" className="w-full">
        <TabsList>
          <TabsTrigger value="labs">Lab Results</TabsTrigger>
          <TabsTrigger value="imaging">Imaging</TabsTrigger>
          <TabsTrigger value="visits">Visit Summaries</TabsTrigger>
        </TabsList>

        <TabsContent value="labs" className="space-y-4 mt-6">
          {labs.map((lab) => (
            <Card key={lab.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{lab.type}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{lab.date}</span>
                      </div>
                      <span>Ordered by: {lab.provider}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="success">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {lab.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="imaging" className="space-y-4 mt-6">
          {imaging.map((img) => (
            <Card key={img.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{img.type}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{img.date}</span>
                      </div>
                      <span>Ordered by: {img.provider}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="success">{img.status}</Badge>
                    <Button variant="outline" size="sm">View Report</Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="visits" className="space-y-4 mt-6">
          {visits.map((visit) => (
            <Card key={visit.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{visit.type}</CardTitle>
                    <p className="text-sm text-gray-600 mt-2">
                      {visit.date} • {visit.provider}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">View Summary</Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
