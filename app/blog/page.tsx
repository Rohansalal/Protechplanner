"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Search,
  TrendingUp,
  Sparkles,
  BookOpen,
  Tag,
} from "lucide-react";

const blogPosts = [
  {
    title: "10 Ways Virtual Assistants Can Transform Your Business Operations",
    excerpt:
      "Discover how virtual assistants can streamline your workflows, reduce costs, and help you focus on strategic growth initiatives.",
    author: "Jennifer Martinez",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Business Growth",
    image: "/business-transformation-virtual-assistant-producti.jpg",
    featured: true,
  },
  {
    title: "The Complete Guide to Outsourcing Customer Service",
    excerpt:
      "Learn best practices for outsourcing customer service to virtual assistants while maintaining quality and customer satisfaction.",
    author: "David Thompson",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Customer Service",
    image: "/customer-service-outsourcing-virtual-support.jpg",
  },
  {
    title: "Maximizing ROI: How to Measure Virtual Assistant Performance",
    excerpt:
      "Key metrics and strategies to track the success of your virtual assistant partnership and ensure maximum return on investment.",
    author: "Sarah Kim",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Performance",
    image: "/roi-measurement-business-analytics-performance-tra.jpg",
  },
  {
    title: "Remote Work Best Practices: Managing Virtual Teams Effectively",
    excerpt:
      "Essential tips for managing virtual assistants and remote teams to ensure productivity, communication, and successful outcomes.",
    author: "Jennifer Martinez",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Management",
    image: "/remote-team-management-virtual-collaboration.jpg",
  },
  {
    title: "Social Media Management: Why You Need a Virtual Assistant",
    excerpt:
      "Explore how virtual assistants can elevate your social media presence with consistent posting, engagement, and strategic content.",
    author: "David Thompson",
    date: "2023-12-20",
    readTime: "4 min read",
    category: "Digital Marketing",
    image: "/social-media-management-virtual-assistant-marketin.jpg",
  },
  {
    title: "Cost-Effective Business Growth: The Virtual Assistant Advantage",
    excerpt:
      "Learn how virtual assistants provide a cost-effective solution for scaling your business without the overhead of full-time employees.",
    author: "Sarah Kim",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "Business Growth",
    image: "/cost-effective-business-growth-virtual-assistant-s.jpg",
  },
];

const categories = [
  "All",
  "Business Growth",
  "Customer Service",
  "Performance",
  "Management",
  "Digital Marketing",
];

// Helper function for consistent date formatting
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#215ACD] via-[#1a49a8] to-[#0F172A]">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Floating Book Icons */}
          <motion.div
            className="absolute top-20 left-[15%] w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <BookOpen className="w-8 h-8 text-white/80" />
          </motion.div>

          <motion.div
            className="absolute top-40 right-[20%] w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Sparkles className="w-7 h-7 text-white/80" />
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="text-white font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Latest Insights & Tips
                </span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Inter']">
              Virtual Assistant{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
              Stay updated with the latest trends, best practices, and insights
              in virtual assistance and business operations.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 bg-white/95 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-lg focus:border-white transition-colors"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-50 sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                  ? "bg-[#215ACD] text-white shadow-lg shadow-[#215ACD]/30"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                <span className="flex items-center gap-2">
                  {category === "All" && <Tag className="w-4 h-4" />}
                  {category}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-[#215ACD]" />
              <h2 className="text-3xl font-bold text-[#414141]">
                Featured Article
              </h2>
            </div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <motion.img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Featured
                  </div>
                </div>

                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#215ACD]/10 text-[#215ACD] px-4 py-1.5 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span suppressHydrationWarning>{formatDate(featuredPost.date)}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-[#414141] mb-4 leading-tight group-hover:text-[#215ACD] transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#215ACD] to-[#1a49a8] flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-[#414141]">
                          {featuredPost.author}
                        </div>
                        <div className="text-sm text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                    </div>

                    <Button className="bg-[#215ACD] hover:bg-[#1a49a8] rounded-full px-6 group">
                      <Link href="#" className="flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-10">
            <BookOpen className="w-6 h-6 text-[#215ACD]" />
            <h2 className="text-3xl font-bold text-[#414141]">
              Latest Articles
            </h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.slice(1).map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#215ACD]/10 text-[#215ACD] px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3 h-3" />
                        <span suppressHydrationWarning>{formatDate(post.date)}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#414141] mb-3 leading-tight group-hover:text-[#215ACD] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full mt-4 group-hover:bg-[#215ACD] group-hover:text-white transition-all"
                      asChild
                    >
                      <Link href="#" className="flex items-center justify-center gap-2">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-400 mb-2">
                No articles found
              </h3>
              <p className="text-slate-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-[#215ACD] to-[#1a49a8] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let our expert virtual assistants help you put these insights into
              action and transform your business operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#215ACD] hover:bg-slate-100 h-14 px-8 rounded-full font-semibold shadow-xl"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 h-14 px-8 rounded-full font-semibold"
                asChild
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}