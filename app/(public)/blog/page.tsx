import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, Heart, Brain, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Health Library & Blog",
  description: "Expert health information, medical insights, and wellness tips from our healthcare professionals.",
};

export default function BlogPage() {
  const featuredPost = {
    title: "Understanding Heart Health: Prevention and Early Detection",
    excerpt: "Learn about the latest advances in cardiology and how to maintain a healthy heart through lifestyle choices and regular screenings.",
    category: "Cardiology",
    author: "Dr. Sarah Johnson",
    date: "November 1, 2024",
    readTime: "8 min read",
    image: "/images/blog/heart-health.jpg",
  };

  const recentPosts = [
    {
      title: "Managing Diabetes: A Comprehensive Guide",
      excerpt: "Essential information about diabetes management, including diet, exercise, and medication adherence.",
      category: "Endocrinology",
      author: "Dr. David Kim",
      date: "October 28, 2024",
      readTime: "6 min read",
    },
    {
      title: "Mental Health Awareness: Breaking the Stigma",
      excerpt: "Understanding mental health conditions and the importance of seeking professional help.",
      category: "Mental Health",
      author: "Dr. Emily Rodriguez",
      date: "October 25, 2024",
      readTime: "5 min read",
    },
    {
      title: "Pediatric Nutrition: Building Healthy Eating Habits",
      excerpt: "Tips for parents on establishing nutritious eating patterns for children of all ages.",
      category: "Pediatrics",
      author: "Dr. Emily Rodriguez",
      date: "October 22, 2024",
      readTime: "7 min read",
    },
    {
      title: "Preventing Common Sports Injuries",
      excerpt: "How to stay active safely and what to do if you experience a sports-related injury.",
      category: "Orthopedics",
      author: "Dr. James Williams",
      date: "October 19, 2024",
      readTime: "6 min read",
    },
    {
      title: "The Importance of Annual Health Screenings",
      excerpt: "Why preventive care matters and which screenings you should schedule based on your age.",
      category: "Preventive Care",
      author: "Dr. Michael Chen",
      date: "October 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Sleep and Your Health: Getting Quality Rest",
      excerpt: "Understanding the connection between sleep quality and overall health and wellness.",
      category: "Wellness",
      author: "Dr. Priya Patel",
      date: "October 12, 2024",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All Topics",
    "Cardiology",
    "Pediatrics",
    "Mental Health",
    "Wellness",
    "Preventive Care",
    "Nutrition",
    "Orthopedics",
    "Endocrinology",
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-medical-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-medical-blue-900 sm:text-5xl md:text-6xl">
              Health Library & Blog
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              Expert health information and medical insights from our board-certified physicians
              to help you make informed decisions about your health.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search health topics..."
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b bg-white sticky top-0 z-10 shadow-sm">
          <div className="container">
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Topics" ? "default" : "outline"}
                  size="sm"
                  className="flex-shrink-0"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container">
            <div className="mb-8">
              <Badge variant="success">Featured Article</Badge>
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mt-2 mb-4">
                Editor's Pick
              </h2>
            </div>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto bg-medical-neutral-200 flex items-center justify-center">
                  <Heart className="h-24 w-24 text-medical-neutral-400" />
                </div>
                <div className="p-8">
                  <Badge variant="info" className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="font-serif text-2xl font-bold text-medical-blue-900 mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button variant="medical">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 bg-medical-neutral-50">
          <div className="container">
            <h2 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8">
              Recent Articles
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Card key={post.title} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-medical-neutral-200 flex items-center justify-center">
                    <Activity className="h-16 w-16 text-medical-neutral-400" />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500 space-y-1 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date} • {post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 h-auto">
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-16">
          <div className="container">
            <h2 className="font-serif text-3xl font-bold text-medical-blue-900 mb-8 text-center">
              Browse by Topic
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {[
                { icon: Heart, title: "Heart Health", count: 24 },
                { icon: Brain, title: "Mental Wellness", count: 18 },
                { icon: Activity, title: "Fitness & Exercise", count: 15 },
              ].map((topic) => (
                <Card key={topic.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-medical-blue-100">
                          <topic.icon className="h-6 w-6 text-medical-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{topic.title}</CardTitle>
                          <CardDescription>{topic.count} articles</CardDescription>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
