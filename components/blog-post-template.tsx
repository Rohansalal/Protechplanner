"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    Share2,
    BookOpen,
    ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { BlogPost, getRelatedPosts } from "@/lib/blog-data";

interface BlogPostTemplateProps {
    post: BlogPost;
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

export function BlogPostTemplate({ post }: BlogPostTemplateProps) {
    const relatedPosts = getRelatedPosts(post.slug, post.category);

    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#215ACD] to-[#1a49a8] text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-2 text-sm text-white/90">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(post.date)}</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                <span className="font-medium">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="relative -mt-8">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-[400px] object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="prose prose-lg max-w-none"
                    >
                        {/* Introduction */}
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                            {post.content.introduction}
                        </p>

                        {/* Content Sections */}
                        {post.content.sections.map((section, index) => (
                            <div key={index} className="mb-10">
                                <h2 className="text-3xl font-bold text-[#213959] mb-4 mt-12">
                                    {section.heading}
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {section.content}
                                </p>
                            </div>
                        ))}

                        {/* Conclusion */}
                        <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-[#215ACD]">
                            <h2 className="text-2xl font-bold text-[#213959] mb-4">
                                Conclusion
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {post.content.conclusion}
                            </p>
                        </div>
                    </motion.div>

                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Share2 className="w-5 h-5" />
                                <span className="font-medium">Share this article</span>
                            </div>
                            <div className="flex gap-3">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="rounded-full"
                                    onClick={() => {
                                        if (typeof window !== "undefined") {
                                            window.open(
                                                `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                                    post.title
                                                )}&url=${encodeURIComponent(window.location.href)}`,
                                                "_blank"
                                            );
                                        }
                                    }}
                                >
                                    Twitter
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="rounded-full"
                                    onClick={() => {
                                        if (typeof window !== "undefined") {
                                            window.open(
                                                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                                    window.location.href
                                                )}`,
                                                "_blank"
                                            );
                                        }
                                    }}
                                >
                                    LinkedIn
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="rounded-full"
                                    onClick={() => {
                                        if (typeof window !== "undefined") {
                                            window.open(
                                                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                                    window.location.href
                                                )}`,
                                                "_blank"
                                            );
                                        }
                                    }}
                                >
                                    Facebook
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-2 mb-10">
                            <BookOpen className="w-6 h-6 text-[#215ACD]" />
                            <h2 className="text-3xl font-bold text-[#213959]">
                                Related Articles
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-[#215ACD]/10 text-[#215ACD] px-3 py-1 rounded-full text-xs font-semibold">
                                                {relatedPost.category}
                                            </span>
                                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                                <Clock className="w-3 h-3" />
                                                {relatedPost.readTime}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-[#213959] mb-3 leading-tight group-hover:text-[#215ACD] transition-colors line-clamp-2">
                                            {relatedPost.title}
                                        </h3>

                                        <Button
                                            variant="ghost"
                                            className="w-full group-hover:bg-[#215ACD] group-hover:text-white transition-all"
                                            asChild
                                        >
                                            <Link
                                                href={`/blog/${relatedPost.slug}`}
                                                className="flex items-center justify-center gap-2"
                                            >
                                                Read Article
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#215ACD] to-[#1a49a8] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Let our expert virtual assistants help you implement these
                        strategies and transform your business operations.
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
                </div>
            </section>

            <Footer />
        </main>
    );
}
