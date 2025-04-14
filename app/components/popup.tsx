"use client";
// app/components/popup.tsx
import { useState } from "react";
import { addPost, updatePost } from "../utils/posts";

type Props = {
  onClose: () => void;
  postId?: string
};

export default function Popup({ onClose, postId }: Props) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Qui puoi gestire l'invio dei dati al server o qualsiasi altra logica necessaria
    const result = postId ? await updatePost(postId, title, content) : await addPost({ title, content });
    console.log({ result })
    if (result) {
      alert("Operazione andata a buon fine");
      setTitle("");
      setContent("");
      window.location.href = "/blog";
    } else {
      alert("Errore durante l'aggiunta del post.");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 text-blue-500">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full pointer-events-auto">

        {/*Titolo Popup*/}
        <h3 className="text-xl font-semibold mb-4 text-center">Crea un nuovo post</h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/*Campo titolo*/}
          <div>
            <label className="block text-sm font-medium mb-1">Titolo</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Campo contenuto */}
          <div>
            <label className="block text-sm font-medium mb-1">Contenuto</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 h-24 resize-none"
            />
          </div>

          {/* Pulsanti Submit e Close */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Conferma
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Close
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
