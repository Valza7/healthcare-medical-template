import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Video, Plus } from "lucide-react";

export default function AppointmentsPage() {
  const upcoming = [
    {
      id: "1",
      provider: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "2024-11-10",
      time: "2:00 PM",
      location: "Main Campus",
      type: "Follow-up",
      isTelehealth: false,
    },
    {
      id: "2",
      provider: "Dr. Michael Chen",
      specialty: "Family Medicine",
      date: "2024-11-15",
      time: "10:30 AM",
      location: "Virtual",
      type: "Annual Physical",
      isTelehealth: true,
    },
  ];

  const past = [
    {
      id: "3",
      provider: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "2024-10-15",
      time: "2:00 PM",
      location: "Main Campus",
      type: "Initial Consultation",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold text-medical-blue-900">
          My Appointments
        </h1>
        <Button variant="medical">
          <Plus className="h-4 w-4" />
          Book New Appointment
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4 mt-6">
          {upcoming.map((apt) => (
            <Card key={apt.id}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{apt.provider}</CardTitle>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{apt.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{apt.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {apt.isTelehealth ? (
                          <>
                            <Video className="h-4 w-4" />
                            <span>Telehealth Visit</span>
                          </>
                        ) : (
                          <>
                            <MapPin className="h-4 w-4" />
                            <span>{apt.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="info">{apt.type}</Badge>
                    <div className="flex gap-2">
                      {apt.isTelehealth && (
                        <Button variant="medical" size="sm">Join Video Call</Button>
                      )}
                      <Button variant="outline" size="sm">Reschedule</Button>
                      <Button variant="outline" size="sm">Cancel</Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="past" className="space-y-4 mt-6">
          {past.map((apt) => (
            <Card key={apt.id}>
              <CardHeader>
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="text-xl">{apt.provider}</CardTitle>
                    <p className="text-sm text-gray-600 mt-2">
                      {apt.date} at {apt.time} • {apt.location}
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
