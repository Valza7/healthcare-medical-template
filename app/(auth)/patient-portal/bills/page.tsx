import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download } from "lucide-react";

export default function BillsPage() {
  const bills = [
    { id: "1", date: "Oct 15, 2024", description: "Annual Physical", amount: 150, status: "paid" },
    { id: "2", date: "Nov 1, 2024", description: "Lab Work", amount: 75, status: "pending" },
  ];

  return (
    <div className="container py-8">
      <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8">
        Bills & Payments
      </h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Current Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-medical-blue-900 mb-4">$75.00</div>
          <Button variant="medical">
            <CreditCard className="h-4 w-4" />
            Make Payment
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Billing History</h2>
        {bills.map((bill) => (
          <Card key={bill.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{bill.description}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{bill.date}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-xl font-bold">${bill.amount}</div>
                  <Badge variant={bill.status === "paid" ? "success" : "warning"}>
                    {bill.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
