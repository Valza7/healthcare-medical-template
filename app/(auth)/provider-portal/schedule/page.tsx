import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProviderSchedulePage() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  const appointments = [
    {
      id: "1",
      time: "9:00 AM",
      duration: "30 min",
      patient: "Sarah Johnson",
      patientId: "P-10234",
      type: "Follow-up",
      location: "Room 201",
      reason: "Diabetes management",
      isTelehealth: false,
    },
    {
      id: "2",
      time: "9:30 AM",
      duration: "15 min",
      patient: "Michael Chen",
      patientId: "P-10567",
      type: "Video Visit",
      location: "Telehealth",
      reason: "Prescription refill consultation",
      isTelehealth: true,
    },
    {
      id: "3",
      time: "10:00 AM",
      duration: "45 min",
      patient: "Emily Rodriguez",
      patientId: "P-10891",
      type: "New Patient",
      location: "Room 203",
      reason: "Annual physical examination",
      isTelehealth: false,
    },
    {
      id: "4",
      time: "11:00 AM",
      duration: "30 min",
      patient: "David Thompson",
      patientId: "P-10432",
      type: "Follow-up",
      location: "Room 201",
      reason: "Post-surgical check",
      isTelehealth: false,
    },
    {
      id: "5",
      time: "2:00 PM",
      duration: "30 min",
      patient: "Lisa Anderson",
      patientId: "P-10678",
      type: "Consultation",
      location: "Room 202",
      reason: "Lab results review",
      isTelehealth: false,
    },
  ];

  const stats = [
    { label: "Total Appointments", value: "8", color: "text-medical-blue-600" },
    { label: "Completed", value: "0", color: "text-medical-green-600" },
    { label: "Remaining", value: "8", color: "text-orange-600" },
    { label: "Telehealth", value: "2", color: "text-purple-600" },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-2">
            My Schedule
          </h1>
          <p className="text-gray-600">{today}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4" />
            Previous Day
          </Button>
          <Button variant="outline" size="sm">
            Today
          </Button>
          <Button variant="outline" size="sm">
            Next Day
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-medical-blue-600" />
            Today's Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((apt) => (
              <Card key={apt.id} className="border-l-4 border-l-medical-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="font-semibold text-lg">{apt.time}</span>
                          <span className="text-sm text-gray-600">({apt.duration})</span>
                        </div>
                        <Badge variant={apt.isTelehealth ? "default" : "outline"}>
                          {apt.type}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-medical-blue-900 mb-1">
                        {apt.patient}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Patient ID: {apt.patientId}</p>
                      <p className="text-gray-700 mb-3">{apt.reason}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        {apt.isTelehealth ? (
                          <>
                            <Video className="h-4 w-4" />
                            <span>{apt.location}</span>
                          </>
                        ) : (
                          <>
                            <MapPin className="h-4 w-4" />
                            <span>{apt.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="medical" size="sm">
                        View Chart
                      </Button>
                      {apt.isTelehealth && (
                        <Button variant="outline" size="sm">
                          <Video className="h-4 w-4" />
                          Start Video
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
