import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText, Download, Filter, Plus, MoreHorizontal, Eye } from "lucide-react";

export default function AdminContentPage() {
  const articles = [
    {
      id: "ART-001",
      title: "Understanding Heart Health: A Comprehensive Guide",
      author: "Dr. Michael Johnson",
      category: "Cardiology",
      status: "published",
      publishDate: "Nov 1, 2024",
      views: 1243,
      featured: true,
    },
    {
      id: "ART-002",
      title: "Childhood Vaccinations: What Parents Need to Know",
      author: "Dr. Emily Williams",
      category: "Pediatrics",
      status: "published",
      publishDate: "Oct 28, 2024",
      views: 2156,
      featured: true,
    },
    {
      id: "ART-003",
      title: "Managing Type 2 Diabetes Through Diet and Exercise",
      author: "Dr. Sarah Smith",
      category: "Endocrinology",
      status: "published",
      publishDate: "Oct 25, 2024",
      views: 1876,
      featured: false,
    },
    {
      id: "ART-004",
      title: "Common Skin Conditions and Their Treatments",
      author: "Dr. Lisa Martinez",
      category: "Dermatology",
      status: "draft",
      publishDate: null,
      views: 0,
      featured: false,
    },
    {
      id: "ART-005",
      title: "Post-Surgical Recovery: Tips for a Smooth Healing Process",
      author: "Dr. James Brown",
      category: "Orthopedics",
      status: "review",
      publishDate: null,
      views: 0,
      featured: false,
    },
  ];

  const faqs = [
    {
      id: "FAQ-001",
      question: "How do I schedule an appointment?",
      category: "Appointments",
      status: "published",
      lastUpdated: "Nov 1, 2024",
    },
    {
      id: "FAQ-002",
      question: "What insurance plans do you accept?",
      category: "Insurance",
      status: "published",
      lastUpdated: "Oct 15, 2024",
    },
    {
      id: "FAQ-003",
      question: "How can I access my medical records?",
      category: "Patient Portal",
      status: "published",
      lastUpdated: "Oct 10, 2024",
    },
    {
      id: "FAQ-004",
      question: "What should I bring to my first appointment?",
      category: "New Patients",
      status: "draft",
      lastUpdated: "Nov 3, 2024",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-medical-blue-900 mb-2">
            Content Management
          </h1>
          <p className="text-gray-600">Manage blog articles, FAQs, and educational content</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="medical">
            <Plus className="h-4 w-4" />
            Create Content
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-5 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Total Articles</p>
            <p className="text-3xl font-bold text-medical-blue-600">{articles.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Published</p>
            <p className="text-3xl font-bold text-medical-green-600">
              {articles.filter((a) => a.status === "published").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">In Review</p>
            <p className="text-3xl font-bold text-orange-600">
              {articles.filter((a) => a.status === "review").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Drafts</p>
            <p className="text-3xl font-bold text-gray-600">
              {articles.filter((a) => a.status === "draft").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Total Views</p>
            <p className="text-3xl font-bold text-purple-600">
              {articles.reduce((sum, a) => sum + a.views, 0)}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="articles" className="w-full">
        <TabsList>
          <TabsTrigger value="articles">Blog Articles</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="mt-6">
          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search articles by title, author, or category..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Articles Table */}
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-3 font-semibold text-sm">ID</th>
                      <th className="text-left pb-3 font-semibold text-sm">Title</th>
                      <th className="text-left pb-3 font-semibold text-sm">Author</th>
                      <th className="text-left pb-3 font-semibold text-sm">Category</th>
                      <th className="text-left pb-3 font-semibold text-sm">Status</th>
                      <th className="text-left pb-3 font-semibold text-sm">Publish Date</th>
                      <th className="text-left pb-3 font-semibold text-sm">Views</th>
                      <th className="text-left pb-3 font-semibold text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map((article) => (
                      <tr key={article.id} className="border-b last:border-0">
                        <td className="py-4">
                          <span className="font-mono text-xs">{article.id}</span>
                        </td>
                        <td className="py-4">
                          <p className="font-semibold text-sm max-w-xs">{article.title}</p>
                          {article.featured && (
                            <Badge variant="info" className="mt-1">Featured</Badge>
                          )}
                        </td>
                        <td className="py-4 text-sm">{article.author}</td>
                        <td className="py-4">
                          <Badge variant="outline">{article.category}</Badge>
                        </td>
                        <td className="py-4">
                          {article.status === "published" ? (
                            <Badge variant="success">Published</Badge>
                          ) : article.status === "review" ? (
                            <Badge variant="warning">In Review</Badge>
                          ) : (
                            <Badge variant="secondary">Draft</Badge>
                          )}
                        </td>
                        <td className="py-4 text-sm">
                          {article.publishDate || <span className="text-gray-400">—</span>}
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-1 text-sm">
                            <Eye className="h-3 w-3 text-gray-500" />
                            {article.views}
                          </div>
                        </td>
                        <td className="py-4">
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600">
                  Showing {articles.length} of {articles.length} articles
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faqs" className="mt-6">
          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search FAQs..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="medical">
                  <Plus className="h-4 w-4" />
                  Add FAQ
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* FAQs Table */}
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-3 font-semibold text-sm">ID</th>
                      <th className="text-left pb-3 font-semibold text-sm">Question</th>
                      <th className="text-left pb-3 font-semibold text-sm">Category</th>
                      <th className="text-left pb-3 font-semibold text-sm">Status</th>
                      <th className="text-left pb-3 font-semibold text-sm">Last Updated</th>
                      <th className="text-left pb-3 font-semibold text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faqs.map((faq) => (
                      <tr key={faq.id} className="border-b last:border-0">
                        <td className="py-4">
                          <span className="font-mono text-xs">{faq.id}</span>
                        </td>
                        <td className="py-4">
                          <p className="text-sm max-w-md">{faq.question}</p>
                        </td>
                        <td className="py-4">
                          <Badge variant="outline">{faq.category}</Badge>
                        </td>
                        <td className="py-4">
                          {faq.status === "published" ? (
                            <Badge variant="success">Published</Badge>
                          ) : (
                            <Badge variant="secondary">Draft</Badge>
                          )}
                        </td>
                        <td className="py-4 text-sm">{faq.lastUpdated}</td>
                        <td className="py-4">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600">
                  Showing {faqs.length} of {faqs.length} FAQs
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
