// GET ALL
export async function fetchPosts() {
    try {
        const res = await fetch("/api/blog") // get a blog

        if (!res.ok) { //se va male... 
            console.error("Errore durante la fetch");
        }

        const data = await res.json(); //salvo i dati sottoforma di json
        return data;
    } catch (error) {
        console.error("Errore nella fetch:", error);
        return [];
    }
}
// GET ONE
export async function fetchPostById(id: string) {
    try {
        const res = await fetch(`/api/blog/${id}`);

        if (!res.ok) {
            throw console.log(`Errore durante il recupero del post con ID ${id}`);
        }

        const post = await res.json();
        return post;
    } catch (error) {
        console.log("Errore nella fetch del post:", error);
        return null; // fallback (es: se vuoi gestire l'errore nel componente)
    }
}
