Documentazione: Mini Blog con React (Next.js App Router)
🚀 Obiettivo della Demo

Questa demo mostra un piccolo blog dove:

- Gli articoli sono mostrati in homepage

- Ogni articolo è cliccabile → porta a una pagina dinamica

-   Ci sono pagine statiche come About e Contact

- Tutto è costruito in modo semplice, statico e chiaro

🧱 Struttura del Progetto

    app/
    ├── page.tsx             → Homepage
    ├── about/
    │   └── page.tsx         → Pagina "Chi siamo"
    ├── contact/
    │   └── page.tsx         → Pagina "Contattaci"
    ├── post/
    │   └── [id]/
    │       └── page.tsx     → Pagina articolo dinamico
    components/
    │   |── Hero.tsx         → Componente con la lista articoli
    |   |── Header.tsx       → Componente con Header
    |   └── Footer.tsx       → Componente con Footer
    utils/
    └── posts.ts             → Dati statici degli articoli

🔍 Come Funziona
utils/posts.ts

const posts = [
  { id: 1, title: "Titolo", content: "Contenuto..." },
  ...
];
export default posts;
 ✅ Qui definiamo gli articoli in modo statico. Può essere poi sostituito con un API o un database.

    Hero.tsx (Lista articoli)

    {posts.map((post) => (
      <a href={`/post/${post.id}`} key={post.id}>
        <article>
          <h2>{post.title}</h2>
          <p>{anteprima}</p>
        </article>
      </a>
    ))}

✅ Mostra tutti gli articoli
✅ Usa map() per generare un componente per ogni post    
✅ Mostra solo le prime 20 parole del contenuto con una funzione helper

app/post/[id]/page.tsx (Pagina dinamica)

    export default async function PostPage({ params }: { params: { id: string } }) {
      const post = posts.find(p => p.id === parseInt(params.id));
    }

✅ Questa è una pagina dinamica: il [id] nella cartella corrisponde all'id nell’URL (/post/2)
✅ params.id è passato direttamente da Next.js
✅ Cerchiamo il post giusto e lo mostriamo

app/about/page.tsx

    <h1>Chi siamo</h1>
      <p>Questo è un semplice blog creato con React e Next.js.</p>

✅ Una pagina statica per testare la navigazione multipagina

🎨 Tailwind CSS

Tutti gli stili sono fatti con Tailwind, ad esempio:

    className="text-2xl font-bold text-blue-600"

✅ Consente di scrivere stile direttamente nei componenti ✅ Niente CSS separato, tutto rapido e responsive

