// app/components/header.tsx
import Link from "next/link";

export default function Header() {
    return (
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">📘 Blog Minimal</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
            <Link href="/FAQ" className="text-gray-600 hover:text-blue-600 transition">FAQ</Link>
            <Link href="/our_team" className="text-gray-600 hover:text-blue-600 transition">Our Team</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition">Blog</Link>
          </nav>
        </div>
      </header>
    );
  }
  
