export default function Header() {
    return (
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">📘 Blog Minimal</h1>
          <nav className="space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            <a href="/FAQ" className="text-gray-600 hover:text-blue-600 transition">FAQ</a>
            <a href="/our_team" className="text-gray-600 hover:text-blue-600 transition">Our Team</a>
          </nav>
        </div>
      </header>
    );
  }
  
