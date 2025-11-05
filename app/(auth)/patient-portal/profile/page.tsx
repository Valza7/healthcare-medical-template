import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProfilePage() {
  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8">
        Profile & Settings
      </h1>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList>
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Date of Birth</Label>
                <Input type="date" defaultValue="1990-01-01" />
              </div>
              <Button variant="medical">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input type="tel" defaultValue="(555) 123-4567" />
              </div>
              <Button variant="medical">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Communication Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="email" defaultChecked />
                <label htmlFor="email" className="text-sm">
                  Receive appointment reminders via email
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sms" defaultChecked />
                <label htmlFor="sms" className="text-sm">
                  Receive appointment reminders via SMS
                </label>
              </div>
              <Button variant="medical">Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
