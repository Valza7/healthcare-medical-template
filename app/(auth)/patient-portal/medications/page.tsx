import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pill, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function MedicationsPage() {
  const medications = [
    { id: "1", name: "Lisinopril", dosage: "10mg", frequency: "Once daily", refills: 2, prescriber: "Dr. Sarah Johnson" },
    { id: "2", name: "Metformin", dosage: "500mg", frequency: "Twice daily", refills: 0, prescriber: "Dr. David Kim" },
  ];

  return (
    <div className="container py-8">
      <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8">
        My Medications
      </h1>

      {medications.some(m => m.refills === 0) && (
        <Alert variant="warning" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            You have medications that need refills. Request refills below.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        {medications.map((med) => (
          <Card key={med.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{med.name}</CardTitle>
                  <p className="text-gray-600 mt-2">
                    {med.dosage} - {med.frequency}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Prescribed by {med.prescriber}
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <Badge variant={med.refills > 0 ? "success" : "warning"}>
                    {med.refills} refills left
                  </Badge>
                  {med.refills === 0 && (
                    <Button variant="medical" size="sm">Request Refill</Button>
                  )}
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
