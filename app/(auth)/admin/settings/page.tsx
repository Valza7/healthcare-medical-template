import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Shield, Bell, Mail, Database, Globe } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="container py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-2">
          System Settings
        </h1>
        <p className="text-gray-600">Manage system configuration and preferences</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-medical-blue-600" />
                  Organization Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Organization Name</Label>
                    <Input defaultValue="HealthCare Medical Practice" />
                  </div>
                  <div className="space-y-2">
                    <Label>Tax ID / EIN</Label>
                    <Input defaultValue="XX-XXXXXXX" type="password" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input defaultValue="123 Medical Center Drive, Suite 100" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>City</Label>
                    <Input defaultValue="Healthcare City" />
                  </div>
                  <div className="space-y-2">
                    <Label>State</Label>
                    <Input defaultValue="HC" />
                  </div>
                  <div className="space-y-2">
                    <Label>ZIP Code</Label>
                    <Input defaultValue="12345" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input defaultValue="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="info@healthcaremp.com" />
                  </div>
                </div>
                <Button variant="medical">Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                    <div key={day} className="flex items-center gap-4">
                      <div className="w-32 font-medium">{day}</div>
                      <Input className="w-32" defaultValue="8:00 AM" />
                      <span className="text-gray-500">to</span>
                      <Input className="w-32" defaultValue="5:00 PM" />
                    </div>
                  ))}
                  <div className="flex items-center gap-4">
                    <div className="w-32 font-medium">Saturday</div>
                    <Input className="w-32" defaultValue="9:00 AM" />
                    <span className="text-gray-500">to</span>
                    <Input className="w-32" defaultValue="2:00 PM" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 font-medium">Sunday</div>
                    <Badge variant="secondary">Closed</Badge>
                  </div>
                </div>
                <Button variant="medical">Save Hours</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-medical-blue-600" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Authentication</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mfa" defaultChecked />
                      <label htmlFor="mfa" className="text-sm">
                        Require Multi-Factor Authentication (MFA) for all users
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="strong-password" defaultChecked />
                      <label htmlFor="strong-password" className="text-sm">
                        Enforce strong password requirements
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="session-timeout" defaultChecked />
                      <label htmlFor="session-timeout" className="text-sm">
                        Enable automatic session timeout (15 minutes of inactivity)
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Access Control</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rbac" defaultChecked />
                      <label htmlFor="rbac" className="text-sm">
                        Enable Role-Based Access Control (RBAC)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="audit-log" defaultChecked />
                      <label htmlFor="audit-log" className="text-sm">
                        Log all PHI access for HIPAA compliance
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ip-whitelist" />
                      <label htmlFor="ip-whitelist" className="text-sm">
                        Enable IP whitelisting for admin access
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Data Protection</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="encryption" defaultChecked />
                      <label htmlFor="encryption" className="text-sm">
                        Encrypt PHI data at rest and in transit
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="backup" defaultChecked />
                      <label htmlFor="backup" className="text-sm">
                        Enable automatic encrypted backups (daily at 2:00 AM)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="data-retention" defaultChecked />
                      <label htmlFor="data-retention" className="text-sm">
                        Enforce data retention policies (7 years for medical records)
                      </label>
                    </div>
                  </div>
                </div>

                <Button variant="medical">Save Security Settings</Button>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-orange-900 mb-1">Security Recommendations</p>
                    <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside">
                      <li>Ensure all staff complete HIPAA security training annually</li>
                      <li>Review access logs regularly for suspicious activity</li>
                      <li>Keep all systems and software up to date with security patches</li>
                      <li>Conduct security audits quarterly</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-medical-blue-600" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="appt-confirm" defaultChecked />
                      <label htmlFor="appt-confirm" className="text-sm">
                        Send appointment confirmation emails
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="appt-reminder" defaultChecked />
                      <label htmlFor="appt-reminder" className="text-sm">
                        Send appointment reminders (24 hours before)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="test-results" defaultChecked />
                      <label htmlFor="test-results" className="text-sm">
                        Notify patients when test results are available
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="billing" defaultChecked />
                      <label htmlFor="billing" className="text-sm">
                        Send billing statements and payment reminders
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">SMS Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sms-reminder" defaultChecked />
                      <label htmlFor="sms-reminder" className="text-sm">
                        Send SMS appointment reminders
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sms-confirm" />
                      <label htmlFor="sms-confirm" className="text-sm">
                        Send SMS appointment confirmations
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Admin Alerts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="alert-security" defaultChecked />
                      <label htmlFor="alert-security" className="text-sm">
                        Security incidents and suspicious activity
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="alert-system" defaultChecked />
                      <label htmlFor="alert-system" className="text-sm">
                        System errors and downtime
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="alert-backup" defaultChecked />
                      <label htmlFor="alert-backup" className="text-sm">
                        Backup failures
                      </label>
                    </div>
                  </div>
                </div>

                <Button variant="medical">Save Notification Settings</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-medical-blue-600" />
                  Third-Party Integrations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">Clerk Authentication</h3>
                      <p className="text-sm text-gray-600">User authentication and management</p>
                      <Badge variant="success" className="mt-2">Connected</Badge>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">Convex Database</h3>
                      <p className="text-sm text-gray-600">Real-time database and backend</p>
                      <Badge variant="success" className="mt-2">Connected</Badge>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">Stripe Payment Processing</h3>
                      <p className="text-sm text-gray-600">Accept online payments and billing</p>
                      <Badge variant="secondary" className="mt-2">Not Connected</Badge>
                    </div>
                    <Button variant="medical">Connect</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">Twilio SMS</h3>
                      <p className="text-sm text-gray-600">Send SMS notifications and reminders</p>
                      <Badge variant="secondary" className="mt-2">Not Connected</Badge>
                    </div>
                    <Button variant="medical">Connect</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">SendGrid Email</h3>
                      <p className="text-sm text-gray-600">Transactional and marketing emails</p>
                      <Badge variant="secondary" className="mt-2">Not Connected</Badge>
                    </div>
                    <Button variant="medical">Connect</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">Zoom Telehealth</h3>
                      <p className="text-sm text-gray-600">Video consultation integration</p>
                      <Badge variant="secondary" className="mt-2">Not Connected</Badge>
                    </div>
                    <Button variant="medical">Connect</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-medical-blue-600" />
                  HIPAA Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-medical-blue-50 border border-medical-blue-200 rounded-lg p-4">
                  <p className="text-sm text-medical-blue-900">
                    This template provides a HIPAA-aware architecture foundation. Full HIPAA compliance requires
                    additional measures including signed BAAs, documented policies, staff training, and regular audits.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Compliance Checklist</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="comp-baa" />
                      <label htmlFor="comp-baa" className="text-sm">
                        Signed Business Associate Agreements (BAAs) with all third-party vendors
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="comp-policies" />
                      <label htmlFor="comp-policies" className="text-sm">
                        Documented privacy and security policies and procedures
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="comp-training" />
                      <label htmlFor="comp-training" className="text-sm">
                        Annual HIPAA training completed for all staff
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="comp-risk" />
                      <label htmlFor="comp-risk" className="text-sm">
                        Risk assessment completed and documented
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="comp-breach" />
                      <label htmlFor="comp-breach" className="text-sm">
                        Breach notification procedures documented and tested
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="comp-audit" />
                      <label htmlFor="comp-audit" className="text-sm">
                        Regular security audits scheduled (quarterly)
                      </label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Audit Log Settings</h3>
                  <div className="space-y-2">
                    <Label>Audit Log Retention Period</Label>
                    <Input defaultValue="7 years" />
                    <p className="text-xs text-gray-600">
                      HIPAA requires audit logs to be retained for at least 6 years
                    </p>
                  </div>
                </div>

                <Button variant="medical">Save Compliance Settings</Button>
              </CardContent>
            </Card>

            <Card className="border-medical-blue-200 bg-medical-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-medical-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-medical-blue-900 mb-1">Need Compliance Help?</p>
                    <p className="text-sm text-medical-blue-800 mb-3">
                      Consult with a healthcare compliance attorney or HIPAA consultant to ensure your
                      practice meets all regulatory requirements.
                    </p>
                    <Button variant="outline" size="sm">
                      View HIPAA Compliance Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
