import { NextResponse } from "next/server";
import {db} from "../../../../lib/db";



// Funzione per ottenere un post specifico
export async function GET(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const id = Number(params.id);

    // Validazione dell'ID
    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }
    // Ottieni il post
    const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0], { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

// Funzione per modificare un post
export async function PUT(request: Request, context: { params: { id: string } }) {
  try {
    const params =  await context.params;
    const id = Number(params.id);
    const body = await request.json();

    // Validazione dei dati
    if (!id || !body.title || !body.content) {
      return NextResponse.json(
        { error: "ID, title, and content are required" },
        { status: 400 }
      );
    }

     // Aggiorna il post
     const result = await db.query(
      "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [body.title, body.content,id]
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
export async function DELETE(request: Request, context: { params: { id: string } }) {
  try {
    const params = await context.params;
    const id = Number(params.id);

    // Validazione dell'ID
    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    // Elimina il post
    const result = await db.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);

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

