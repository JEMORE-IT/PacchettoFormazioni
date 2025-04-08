export default function Hero() {
    const posts = [
      {
        id: 1,
        title: "Ciao mondo!",
        content: "Benvenuto nel mio blog minimalista. Questo è il primo articolo.",
      },
      {
        id: 2,
        title: "Secondo post",
        content: "Questo è un altro semplice articolo. Nulla di interattivo qui!",
      },
      {
        id: 3,
        title: "React è divertente",
        content: "Con pochi componenti si può creare qualcosa di utile e bello.",
      },
    ];
  
    return (
      <section className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">  
          <div className="space-y-10">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-700 leading-relaxed">{post.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  