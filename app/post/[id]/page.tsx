import posts from "@/app/utils/posts";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const {id} = await params;

  const post = posts.find((a) => a.id === parseInt(id));

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600">404 - Articolo non trovato 😢</h2>
          <a
            href="/"
            className="mt-4 inline-block text-blue-500 hover:underline text-sm"
          >
            ← Torna alla homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <a href="/" className="text-blue-500 text-sm hover:underline block mb-4">
          ← Torna alla homepage
        </a>
        <h1 className="text-4xl font-bold text-blue-700 mb-6">{post.title}</h1>
        <div className="text-gray-800 leading-relaxed text-lg">{post.content}</div>
      </div>
    </div>
  );
};

export default PostPage;
