import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import { POSTS } from "../data/posts"; // <-- make sure this file exists

export default function BlogPreview() {
  const titleRef = useReveal();
  const viewAllRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 ref={titleRef} className="text-3xl font-bold opacity-0">
          Latest Articles
        </h2>

        <Link
          ref={viewAllRef}
          to="/blog"
          className="text-gray-500 opacity-0 hover:text-black transition"
        >
          View All →
        </Link>
      </div>

      {/* Blog Cards */}
      <div
        ref={gridRef}
        className="grid md:grid-cols-2 gap-6 opacity-0"
      >
        {POSTS.map((p, index) => (
          <BlogCard key={p.slug} post={p} index={index} />
        ))}
      </div>

    </section>
  );
}


function BlogCard({ post, index }) {
  const cardRef = useReveal(); // OK to use here (each card is separate component)

  return (
    <div
      ref={cardRef}
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
      className="opacity-0 border rounded-xl p-6 bg-white dark:bg-slate-800
                 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >

      {/* Featured Badge */}
      {post.featured && (
        <span className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500
                         text-white rounded-full inline-block mb-3">
          Featured
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>

      {/* Excerpt */}
      <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm leading-relaxed">
        {post.excerpt}
      </p>

      {/* Tags */}
      {post.tags && (
        <div className="flex gap-2 flex-wrap mt-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-700
                         text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Read Link */}
      <Link
        to={`/blog/${post.slug}`}
        className="text-sm mt-4 block font-medium hover:underline"
      >
        Read →
      </Link>
    </div>
  );
}

