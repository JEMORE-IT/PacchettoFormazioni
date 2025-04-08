import posts from "../utils/posts";

export default function Hero() {
    return (
      <section className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">  
          <div className="space-y-10">
            {posts.map((post) => (
              <a
                key={post.id}
                className="cursor-pointer"
                href={`/post/${post.id}`}
              >
                <article className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition mb-5">
                  <h2 className="text-2xl font-semibold text-blue-500 mb-2">{post.title}</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {post.content.slice(0, 69)}
                    {post.content.length > 70 && " ..."}
                  </p>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  