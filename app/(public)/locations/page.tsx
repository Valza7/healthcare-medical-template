import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Calendar, Accessibility, Car, Bus, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Locations",
  description: "Find a HealthCare Medical Practice location near you. Multiple convenient locations to serve you better.",
};

export default function LocationsPage() {
  const locations = [
    {
      name: "Main Campus",
      type: "main" as const,
      address: "123 Medical Center Drive, Suite 100",
      city: "Healthcare City",
      state: "HC",
      zip: "12345",
      phone: "(555) 123-4567",
      fax: "(555) 123-4568",
      hours: {
        weekday: "Monday - Friday: 8:00 AM - 6:00 PM",
        saturday: "Saturday: 9:00 AM - 2:00 PM",
        sunday: "Sunday: Closed",
      },
      services: [
        "Primary Care",
        "Cardiology",
        "Neurology",
        "Pediatrics",
        "Laboratory",
        "Imaging",
        "Pharmacy",
      ],
      features: [
        "On-site Laboratory",
        "On-site Pharmacy",
        "Imaging Center",
        "Wheelchair Accessible",
        "Free Parking",
        "Public Transportation",
      ],
      parking: "Free parking available in the main lot",
      transit: "Bus routes 15, 22, and 45 stop nearby",
    },
    {
      name: "North Location",
      type: "satellite" as const,
      address: "456 Health Plaza, Building B",
      city: "Healthcare City",
      state: "HC",
      zip: "12346",
      phone: "(555) 123-4568",
      fax: "(555) 123-4569",
      hours: {
        weekday: "Monday - Friday: 9:00 AM - 5:00 PM",
        saturday: "Saturday: Closed",
        sunday: "Sunday: Closed",
      },
      services: [
        "Primary Care",
        "Family Medicine",
        "Pediatrics",
        "Laboratory",
      ],
      features: [
        "On-site Laboratory",
        "Wheelchair Accessible",
        "Free Parking",
      ],
      parking: "Free parking in attached garage",
      transit: "Bus route 8 stops in front",
    },
    {
      name: "Westside Clinic",
      type: "satellite" as const,
      address: "789 Wellness Way",
      city: "Healthcare City",
      state: "HC",
      zip: "12347",
      phone: "(555) 123-4569",
      fax: "(555) 123-4570",
      hours: {
        weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
        saturday: "Saturday: 9:00 AM - 1:00 PM",
        sunday: "Sunday: Closed",
      },
      services: [
        "Primary Care",
        "Internal Medicine",
        "Laboratory",
      ],
      features: [
        "Wheelchair Accessible",
        "Free Parking",
        "Public Transportation",
      ],
      parking: "Street parking and lot available",
      transit: "Bus routes 12 and 30",
    },
    {
      name: "Urgent Care Center",
      type: "urgent-care" as const,
      address: "321 Emergency Lane",
      city: "Healthcare City",
      state: "HC",
      zip: "12348",
      phone: "(555) 123-4570",
      fax: "(555) 123-4571",
      hours: {
        weekday: "Monday - Friday: 8:00 AM - 8:00 PM",
        saturday: "Saturday: 9:00 AM - 6:00 PM",
        sunday: "Sunday: 10:00 AM - 4:00 PM",
      },
      services: [
        "Urgent Care",
        "X-Ray",
        "Laboratory",
        "Minor Procedures",
      ],
      features: [
        "Walk-Ins Welcome",
        "Extended Hours",
        "On-site X-Ray",
        "Wheelchair Accessible",
        "Free Parking",
      ],
      parking: "Free parking lot",
      transit: "Bus route 5",
    },
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "main":
        return "default";
      case "urgent-care":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "main":
        return "Main Campus";
      case "urgent-care":
        return "Urgent Care";
      default:
        return "Satellite Office";
    }
  };

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-medical-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-medical-blue-900 sm:text-5xl md:text-6xl">
                Our Locations
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Multiple convenient locations throughout the area to serve you better. Find the location
                nearest you and schedule your appointment today.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              {locations.map((location) => (
                <Card key={location.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl">{location.name}</CardTitle>
                      <Badge variant={getBadgeVariant(location.type)}>
                        {getTypeLabel(location.type)}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Address</div>
                        <div className="text-sm text-gray-600">
                          {location.address}<br />
                          {location.city}, {location.state} {location.zip}
                        </div>
                        <Button variant="link" className="h-auto p-0 mt-1" size="sm">
                          Get Directions
                        </Button>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Contact</div>
                        <div className="text-sm text-gray-600">
                          Phone: {location.phone}<br />
                          Fax: {location.fax}
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-medical-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Hours of Operation</div>
                        <div className="text-sm text-gray-600">
                          {location.hours.weekday}<br />
                          {location.hours.saturday}<br />
                          {location.hours.sunday}
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <div className="font-medium mb-2">Services Available</div>
                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service) => (
                          <Badge key={service} variant="outline">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <div className="font-medium mb-2">Facility Features</div>
                      <div className="grid grid-cols-2 gap-2">
                        {location.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-medical-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Parking & Transit */}
                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                      <div className="flex items-start gap-2">
                        <Car className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-medium text-gray-700">Parking</div>
                          <div className="text-xs text-gray-600">{location.parking}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Bus className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-medium text-gray-700">Public Transit</div>
                          <div className="text-xs text-gray-600">{location.transit}</div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <Button variant="medical" className="flex-1" asChild>
                        <Link href="/appointments">
                          <Calendar className="h-4 w-4" />
                          Book Appointment
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-medical-neutral-50">
          <div className="container">
            <h2 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8 text-center">
              Find Us on the Map
            </h2>
            <div className="aspect-video bg-medical-neutral-300 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-medical-neutral-500" />
                <p className="text-medical-neutral-600">Interactive Map Placeholder</p>
                <p className="text-sm text-medical-neutral-500">
                  Integrate Google Maps or Mapbox to show all locations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <Accessibility className="h-12 w-12 mx-auto mb-4 text-medical-blue-600" />
              <h2 className="font-serif text-3xl font-bold text-medical-blue-900 mb-4">
                Accessibility
              </h2>
              <p className="text-lg text-gray-600">
                All our locations are fully accessible and equipped to serve patients with disabilities
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Physical Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                      <span>Wheelchair accessible entrances and restrooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                      <span>Elevators in multi-story buildings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                      <span>Accessible parking spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                      <span>Wide hallways and doorways</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Communication Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                      <span>Sign language interpretation available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                      <span>Translation services for 10+ languages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                      <span>Large print materials available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-green-600 mt-0.5 flex-shrink-0" />
                      <span>Assistive listening devices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
