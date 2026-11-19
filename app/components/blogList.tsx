"use client";
// app/components/blogList.tsx
import ArticleCard from "./articleCard";
import { useState } from "react";
import posts from "../utils/posts";
import Popup from "./popup";
import Link from "next/link";

export default function BlogList() {
  // ============================================================================
  // TODO: Understanding useState in React
  // ----------------------------------------------------------------------------
  // WHY NOT A NORMAL VARIABLE?
  // If we wrote: `let showPopup = false;` and on click `showPopup = true;`,
  // JavaScript would change the variable, BUT React would NOT know it changed,
  // so the screen would never update (no re-render)!
  //
  // HOW useState WORKS:
  // `const [stateValue, setStateFunction] = useState(initialValue);`
  // 1. `stateValue`: the reactive value React tracks during renders.
  // 2. `setStateFunction`: calling this updates the value AND tells React to
  //    re-render this component with the new value.
  //
  // EXERCISE:
  // Declare the boolean state to control the popup visibility (initially false):
  // const [showPopup, setShowPopup] = useState(false);
  // ============================================================================

  const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* ====================================================================
            TODO: Triggering state change on user click
            1. Create a button "Add post".
            2. Attach an onClick event listener: `onClick={() => setShowPopup(true)}`
            3. Notice how clicking triggers the re-render through setStateFunction!
           ==================================================================== */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow cursor-pointer"
          >
            Add post
          </button>
        </div>

        {/* ====================================================================
            TODO: Conditional Rendering & Child-to-Parent Communication
            1. Use short-circuit evaluation: `{showPopup && <Popup ... />}`.
            2. Pass `onClose={() => setShowPopup(false)}` as a prop to <Popup />.
               This callback enables the child (Popup) to tell the parent (BlogList)
               to close itself by setting state back to false!
           ==================================================================== */}
        {showPopup && (
          <Popup onClose={() => setShowPopup(false)} />
        )}

        <div className="space-y-10">
          {/* ====================================================================
            TODO: Displaying the List of Articles
            Goal: Show the articles on screen using data mapping.
            1. Import 'posts' from '../utils/posts'.
            2. Use posts.map((post) => ...) to render each article card component.
            3. Wrap each article in `<Link href={`/blog/${post.id}`}>` for navigation.
            4. Remember   to pass a unique `key={post.id}` to the root element inside map.
            5. Display `post.title` and a snippet of `post.content` (e.g. slice(0, 70)).
           ==================================================================== */}

          {posts.map((post) => (
            <Link
              key={post.id}
              href={`blog/${post.id}`}
            >
              <ArticleCard title={post.title} content={post.content} />
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
