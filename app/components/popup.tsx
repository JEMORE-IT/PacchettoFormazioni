"use client";
// app/components/popup.tsx
import { useState } from "react";

type Props = {
  onClose: () => void;
  postId?: string;
};

export default function Popup({ onClose, postId }: Props) {
  // ============================================================================
  // TODO: Understanding Controlled Components with useState
  // ----------------------------------------------------------------------------
  // IN HTML: An <input> maintains its own internal text state in the DOM.
  // IN REACT: We make inputs "Controlled Components" so that React is the
  // "Single Source of Truth".
  //
  // TWO-WAY BINDING:
  // 1. READ: `value={title}` makes the input display whatever is in React state.
  // 2. WRITE: `onChange={(e) => setTitle(e.target.value)}` fires on every keystroke,
  //    calling the setter to update React state, which triggers a re-render.
  //
  // EXERCISE:
  // Declare two string states using useState:
  // - const [title, setTitle] = useState<string>("");
  // - const [content, setContent] = useState<string>("");
  // ============================================================================
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    // ========================================================================
    // TODO: Handling Form Submit & Resetting State
    // 1. Prevent default browser refresh: e.preventDefault()
    // 2. Check if we are editing (if postId exists) or creating a new post.
    // 3. Reset state values back to empty strings: setTitle(""), setContent("").
    // 4. Call onClose() to close the modal.
    // ========================================================================
    e.preventDefault();
    if (postId) {
      alert("Post modificato con successo!");
    } else {
      alert("Post aggiunto con successo!");
    }
    console.log("Titolo:", title);
    console.log("Contenuto:", content);
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 text-blue-500">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full pointer-events-auto">

        {/* Popup Title */}
        <h3 className="text-xl font-semibold mb-4 text-center">
          {postId ? "Modifica post" : "Crea un nuovo post"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title input field */}
          <div>
            <label className="block text-sm font-medium mb-1">Titolo</label>
            {/* ================================================================
                TODO: Connect input to state
                Connect 'value' to title and 'onChange' to (e) => setTitle(e.target.value)
               ================================================================ */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Content input field */}
          <div>
            <label className="block text-sm font-medium mb-1">Contenuto</label>
            {/* ================================================================
                TODO: Connect textarea to state
                Connect 'value' to content and 'onChange' to (e) => setContent(e.target.value)
               ================================================================ */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 h-24 resize-none"
            />
          </div>

          {/* Submit and Close buttons */}
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
