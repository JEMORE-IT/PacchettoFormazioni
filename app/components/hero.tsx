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
      <div className="max-w-xl mx-auto p-6 font-sans">
        <h1 className="text-3xl font-bold mb-6">📘 Blog Minimal</h1>
  
        {posts.map((post) => (
          <div key={post.id} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
  