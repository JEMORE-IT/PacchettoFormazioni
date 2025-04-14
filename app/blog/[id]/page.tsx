"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { deletePostById, fetchPostById, fetchPosts } from "@/app/utils/posts";

const PostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params); // <-- unwrap della Promise con React.use()

  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    async function loadPost() {
      const data = await fetchPostById(id);
      setPost(data);
    }

    loadPost();
  }, [id]);

  const handleDelete = async () => {
    const conferma = confirm("Sei sicuro di voler eliminare questo post?");
    if (conferma) {

      const result = await deletePostById(id);
      if (result) {
        alert("Post eliminato con successo!");
        // puoi ricaricare la lista o redirect
      } else {
        alert("Errore durante l'eliminazione del post.");
      }

      window.location.href = "/"; // redireziona
    }
  };

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600">404 - Articolo non trovato 😢</h2>
          <Link
            href="/blog"
            className="mt-4 inline-block text-blue-500 hover:underline text-sm"
          >
            ← Torna alla blog list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <Link href="/blog" className="text-blue-500 text-sm hover:underline block mb-4">
          ← Torna alla blog list
        </Link>
        <h1 className="text-4xl font-bold text-blue-700 mb-6">{post.title}</h1>
        <div className="text-gray-800 leading-relaxed text-lg mb-6">{post.content}</div>

        {/* Pulsante Elimina */}
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Elimina post
        </button>
      </div>
    </div>
  );
};

export default PostPage;
