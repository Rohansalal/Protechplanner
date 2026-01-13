import { getBlogPostBySlug } from "@/lib/blog-data";
import { BlogPostTemplate } from "@/components/blog-post-template";

const slug = "remote-work-best-practices-managing-virtual-teams";

export default function BlogPost() {
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return <BlogPostTemplate post={post} />;
}
