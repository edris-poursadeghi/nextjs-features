import { posts } from "@/data/posts";
import { simulateWait } from "@/lib/simulateWait";

export default async function Posts() {
  await simulateWait(2000)
  return (
    <div className="border-2 p-5 rounded-md mb-5">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Latest Posts</h2>
      <div>
        {posts.map((post) => (
          <article key={post.id} className="mb-5">
            <h3 className="text-xl font-semibold text-gray-900">
              {post.title}
            </h3>
            <p className="text-gray-700">{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}


