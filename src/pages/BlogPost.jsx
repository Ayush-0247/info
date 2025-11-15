import { useParams } from "react-router-dom";

const POSTS = {
  "clean-code": {
    title: "Clean Code Practices",
    content: "Your long article here..."
  },
  "deploying": {
    title: "Deploying on Vercel",
    content: "Article content here..."
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS[slug];

  if (!post) return <h2 className="p-10">Post not found</h2>;

  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
    </section>
  );
}
