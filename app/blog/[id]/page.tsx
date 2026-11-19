"use client";

import { use, useState } from "react";
import posts from "@/app/utils/posts";
import Link from "next/link";
import Popup from "@/app/components/popup";

// ============================================================================
// TODO: Dynamic Routes & Route Params in Next.js 15
// ----------------------------------------------------------------------------
// NEXT.JS DYNAMIC ROUTING:
// Any folder named `[id]` becomes a dynamic segment in the URL: `/blog/1`, `/blog/2`...
// In Next.js 15, `params` is a Promise, so in Client Components we unwrap it using
// React's `use()` hook: `const { id } = use(params);`.
//
// EXERCISE:
// 1. Unwrap the 'id' parameter from params.
// 2. Find the corresponding article inside 'posts' using parseInt(id).
// 3. If no post matches the id, display a 404 user-friendly message.
// 4. Render the article title and content.
// 5. Connect the buttons:
//    - "Elimina post": ask for confirmation, alert, and redirect to /blog.
//    - "Modifica post": open the <Popup /> by setting showPopup state to true.
// ============================================================================

const PostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params); // <-- unwrap the Promise with React.use()
  const [showPopup, setShowPopup] = useState(false);
  const post = posts.find((a) => a.id === parseInt(id));

  const handleDelete = () => {
    const conferma = confirm("Sei sicuro di voler eliminare questo post?");
    if (conferma) {
      alert("Post eliminato!"); // simulation
      window.location.href = "/blog"; // redirect
    }
  };

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600">404 - Articolo non trovato 😢</h2>
          <Link
            href="/"
            className="mt-4 inline-block text-blue-500 hover:underline text-sm"
          >
            ← Torna alla homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <Link href="/" className="text-blue-500 text-sm hover:underline block mb-4">
          ← Torna alla homepage
        </Link>
        <h1 className="text-4xl font-bold text-blue-700 mb-6">{post.title}</h1>
        <div className="text-gray-800 leading-relaxed text-lg mb-6">{post.content}</div>

        {/* Delete button */}
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white m-5 px-4 py-2 rounded-lg cursor-pointer"
        >
          Elimina post
        </button>
        {/* Edit button */}
        <button
          onClick={() => setShowPopup(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Modifica post
        </button>
        {/* If showPopup is true, display popup */}
        {showPopup && (
          <Popup onClose={() => setShowPopup(false)} postId={id} />
        )}
      </div>
    </div>
  );
};

export default PostPage;
