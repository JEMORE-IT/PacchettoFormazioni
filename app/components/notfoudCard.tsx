import Link from "next/link"

export const NotFoundCard = () => {
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
    )
}