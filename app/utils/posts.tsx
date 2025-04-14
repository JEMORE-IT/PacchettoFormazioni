// utils/posts.tsx
export async function fetchPosts() {
    try {
        const res = await fetch("/api/blog") // get a blog

        if (!res.ok) { //se va male... 
            throw new Error("Errore durante la fetch");
        }

        const data = await res.json(); //salvo i dati sottoforma di json
        return data;
    } catch (error) {
        console.error("Errore nella fetch:", error);
        return [];
    }
}
