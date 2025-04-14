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
// DELETTE ONE
export async function deletePostById(id: string) {
    try {
        const res = await fetch(`/api/blog/${id}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            throw new Error(`Errore durante l'eliminazione del post con ID ${id}`);
        }

        const result = await res.json();
        return result; // contiene messaggio e il post eliminato
    } catch (error) {
        console.error("Errore nella DELETE:", error);
        return null;
    }
}
//ADD
export async function addPost({ title, content }: { title: string; content: string }) {
    try {
        const res = await fetch("/api/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Errore durante l'aggiunta del post");
        }

        const data = await res.json();
        return data; // contiene { message, post }
    } catch (error) {
        console.error("Errore nella POST:", error);
        return null;
    }
}

