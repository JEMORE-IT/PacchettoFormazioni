import { NextResponse } from "next/server";
import {Pool} from "pg";

//Creare una connessione al database PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // URL del database
  ssl: {
    rejectUnauthorized: false, // Disabilita la verifica del certificato SSL
  },
});

// Funzione per aggiungere un post
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validazione dei dati
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

   // Aggiungi il nuovo post
   const result = await pool.query(
    "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
    [body.title, body.content]
  );

    // Salva il post in un file o in un database (simulato qui con un array)
    return NextResponse.json({ message: "Post added successfully", post: result.rows[0] },{ status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add post" },{ status: 500 });
  }
}

// Funzione per ottenere tutti i post
export async function GET() { try {
  const result = await pool.query("SELECT * FROM posts");
  return NextResponse.json(result.rows, { status: 200 });
} catch (error) {
  return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
}
}

// Funzione per modificare un post
export async function PUT(request: Request) {
  try {
    const body = await request.json();

    // Validazione dei dati
    if (!body.id || !body.title || !body.content) {
      return NextResponse.json(
        { error: "ID, title, and content are required" },
        { status: 400 }
      );
    }

     // Aggiorna il post
     const result = await pool.query(
      "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [body.title, body.content, body.id]
    );
    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Post not found" },{ status: 400 });
    }

    return NextResponse.json(
      { message: "Post updated successfully", post: result.rows[0] },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

// Funzione per eliminare un post
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));

    // Validazione dell'ID
    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    // Elimina il post
    const result = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Post deleted successfully", post: result.rows[0] },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}

