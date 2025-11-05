import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Plus } from "lucide-react";

export default function HealthTrackingPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold text-medical-blue-900">
          Health Tracking
        </h1>
        <Button variant="medical">
          <Plus className="h-4 w-4" />
          Log New Entry
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-medical-blue-600" />
              Blood Pressure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">120/80</div>
            <p className="text-sm text-gray-600">Last recorded: Today</p>
            <div className="h-32 bg-medical-neutral-100 rounded mt-4 flex items-center justify-center text-gray-500 text-sm">
              Chart placeholder
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-medical-green-600" />
              Weight
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">165 lbs</div>
            <p className="text-sm text-gray-600">Last recorded: Today</p>
            <div className="h-32 bg-medical-neutral-100 rounded mt-4 flex items-center justify-center text-gray-500 text-sm">
              Chart placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
