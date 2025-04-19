"use client";
// app/components/hero.tsx

import { useEffect, useState } from "react";
import Popup from "./popup";
import Link from "next/link";
import { fetchPosts } from "../utils/posts";

export default function BlogList() {
  const [showPopup, setShowPopup] = useState(false);
  const [posts, setPosts] = useState([]); //posts come uno stato -> array vouto


  useEffect(() => { // arrow o lambda function
    // le pagine client side non possono 
    // essere asincorone, per cui creamo una funzione 
    // asincrona che prenda i dati
    async function loadPosts() {
      const data = await fetchPosts();
      setPosts(data);
    }

    loadPosts();

  }, [])//array delle dipendenze vuoto

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">

          {/*pulsante per mostrare il popup*/}
          <button
            onClick={() => setShowPopup(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow cursor-pointer"
          >
            Add post
          </button>
        </div>

        {/*Se showPopup è true allora mostra il popup*/}
        {showPopup && (
          <Popup onClose={() => setShowPopup(false)} />
        )}

        {/*lista di articoli*/}
        <div className="space-y-10">
          {posts.map((post: any) => (
            <Link
              key={post.id}
              className="cursor-pointer"
              href={`/blog/${post.id}`}
            >
              <article className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition mb-5">
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">{post.title}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {post.content.slice(0, 69)}
                  {post.content.length > 70 && " ..."}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
