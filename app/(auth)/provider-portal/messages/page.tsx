"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, Send, Paperclip, AlertCircle, Clock } from "lucide-react";

export default function ProviderMessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState("1");

  const messages = [
    {
      id: "1",
      patientName: "Sarah Johnson",
      patientId: "P-10234",
      subject: "Question about medication dosage",
      preview: "I've been experiencing some side effects...",
      unread: true,
      urgent: false,
      timestamp: "2 hours ago",
      messages: [
        {
          from: "patient",
          content: "I've been experiencing some side effects from the new medication. Should I continue taking it at the current dosage?",
          timestamp: "Nov 5, 2024 9:30 AM",
        },
      ],
    },
    {
      id: "2",
      patientName: "Michael Chen",
      patientId: "P-10567",
      subject: "Lab results inquiry",
      preview: "Could you explain my recent lab results?",
      unread: true,
      urgent: false,
      timestamp: "5 hours ago",
      messages: [
        {
          from: "patient",
          content: "Could you explain my recent lab results? I see some values that are highlighted.",
          timestamp: "Nov 5, 2024 6:15 AM",
        },
      ],
    },
    {
      id: "3",
      patientName: "Emily Rodriguez",
      patientId: "P-10891",
      subject: "URGENT: Severe allergic reaction",
      preview: "I'm having trouble breathing...",
      unread: true,
      urgent: true,
      timestamp: "10 min ago",
      messages: [
        {
          from: "patient",
          content: "I'm having trouble breathing and my face is swelling. What should I do?",
          timestamp: "Nov 5, 2024 11:05 AM",
        },
      ],
    },
    {
      id: "4",
      patientName: "David Thompson",
      patientId: "P-10432",
      subject: "Post-surgery follow-up",
      preview: "Thank you for the care during my surgery...",
      unread: false,
      urgent: false,
      timestamp: "Yesterday",
      messages: [
        {
          from: "patient",
          content: "Thank you for the care during my surgery. I'm recovering well and wanted to update you on my progress.",
          timestamp: "Nov 4, 2024 3:20 PM",
        },
        {
          from: "provider",
          content: "I'm glad to hear you're recovering well. Please continue with the prescribed care plan and don't hesitate to reach out if you have any concerns.",
          timestamp: "Nov 4, 2024 4:15 PM",
        },
      ],
    },
    {
      id: "5",
      patientName: "Lisa Anderson",
      patientId: "P-10678",
      subject: "Appointment rescheduling",
      preview: "I need to reschedule my appointment...",
      unread: false,
      urgent: false,
      timestamp: "2 days ago",
      messages: [
        {
          from: "patient",
          content: "I need to reschedule my appointment next week due to a work conflict. Are there any available times?",
          timestamp: "Nov 3, 2024 10:00 AM",
        },
        {
          from: "provider",
          content: "Of course. I have availability on Nov 12 at 2:00 PM or Nov 13 at 10:00 AM. Which works better for you?",
          timestamp: "Nov 3, 2024 11:30 AM",
        },
        {
          from: "patient",
          content: "Nov 12 at 2:00 PM would be perfect. Thank you!",
          timestamp: "Nov 3, 2024 11:45 AM",
        },
      ],
    },
  ];

  const selectedMessageData = messages.find((m) => m.id === selectedMessage);

  return (
    <div className="container py-8">
      <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8">
        Messages
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Message List */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Inbox</CardTitle>
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search messages..." className="pl-10" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => setSelectedMessage(message.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedMessage === message.id
                        ? "bg-medical-blue-50 border-2 border-medical-blue-200"
                        : message.unread
                        ? "bg-blue-50 hover:bg-blue-100"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className={`font-semibold text-sm ${message.unread ? "text-medical-blue-900" : "text-gray-700"}`}>
                        {message.patientName}
                      </p>
                      <div className="flex items-center gap-1">
                        {message.unread && (
                          <div className="w-2 h-2 bg-medical-blue-600 rounded-full" />
                        )}
                        {message.urgent && (
                          <AlertCircle className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{message.patientId}</p>
                    <p className={`text-sm mb-1 ${message.unread ? "font-medium" : ""}`}>
                      {message.subject}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-1">{message.preview}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                      <Clock className="h-3 w-3" />
                      {message.timestamp}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message Detail */}
        <div className="md:col-span-2">
          {selectedMessageData ? (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle>{selectedMessageData.subject}</CardTitle>
                      {selectedMessageData.urgent && (
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          URGENT
                        </Badge>
                      )}
                      {selectedMessageData.unread && (
                        <Badge variant="default">Unread</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      Patient: {selectedMessageData.patientName} ({selectedMessageData.patientId})
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Chart
                    </Button>
                    <Button variant="outline" size="sm">
                      Mark as Read
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {selectedMessageData.messages.map((msg, idx) => (
                    <div key={idx}>
                      <div
                        className={`p-4 rounded-lg ${
                          msg.from === "patient"
                            ? "bg-gray-100"
                            : "bg-medical-blue-50 border border-medical-blue-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-sm">
                            {msg.from === "patient" ? selectedMessageData.patientName : "You"}
                          </p>
                          <p className="text-xs text-gray-500">{msg.timestamp}</p>
                        </div>
                        <p className="text-gray-700">{msg.content}</p>
                      </div>
                      {idx < selectedMessageData.messages.length - 1 && (
                        <Separator className="my-4" />
                      )}
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                {/* Reply Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Reply</h3>
                  <Textarea
                    placeholder="Type your message here..."
                    className="min-h-[150px]"
                  />
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <Paperclip className="h-4 w-4" />
                      Attach File
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline">Save Draft</Button>
                      <Button variant="medical">
                        <Send className="h-4 w-4" />
                        Send Reply
                      </Button>
                    </div>
                  </div>
                </div>

                {selectedMessageData.urgent && (
                  <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-900 mb-1">Urgent Message</p>
                        <p className="text-sm text-red-800">
                          This message has been marked as urgent. If this is a medical emergency,
                          please instruct the patient to call 911 or go to the nearest emergency room.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="py-12 text-center text-gray-500">
                Select a message to view
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
