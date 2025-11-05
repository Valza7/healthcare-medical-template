import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Plus, Search, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function MessagesPage() {
  const messages = [
    {
      id: "1",
      from: "Dr. Sarah Johnson",
      subject: "Lab Results Available",
      date: "Nov 3, 2024",
      preview: "Your recent blood work results are ready to view...",
      unread: true,
    },
    {
      id: "2",
      from: "Billing Department",
      subject: "Payment Confirmation",
      date: "Nov 2, 2024",
      preview: "Thank you for your payment. Your balance is now...",
      unread: false,
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold text-medical-blue-900">
          Secure Messages
        </h1>
        <Button variant="medical">
          <Plus className="h-4 w-4" />
          New Message
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search messages..." className="pl-10" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 cursor-pointer hover:bg-gray-50 ${
                      msg.unread ? "bg-medical-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div className="font-medium text-sm">{msg.from}</div>
                      {msg.unread && <Badge variant="info" className="text-xs">New</Badge>}
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      {msg.subject}
                    </div>
                    <div className="text-xs text-gray-600 line-clamp-1">{msg.preview}</div>
                    <div className="text-xs text-gray-500 mt-1">{msg.date}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message View */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-1">Lab Results Available</CardTitle>
                  <div className="text-sm text-gray-600">From: Dr. Sarah Johnson</div>
                  <div className="text-xs text-gray-500">Nov 3, 2024 at 10:30 AM</div>
                </div>
                <Badge variant="info">Unread</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none mb-6">
                <p>Your recent blood work results are ready to view in the Medical Records section.</p>
                <p>All values are within normal range. No action needed at this time.</p>
                <p>If you have any questions, please reply to this message.</p>
              </div>
              <Separator className="my-6" />
              <div>
                <div className="font-medium mb-2">Reply</div>
                <Textarea placeholder="Type your message..." className="mb-4" />
                <Button variant="medical">
                  <Send className="h-4 w-4" />
                  Send Reply
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
