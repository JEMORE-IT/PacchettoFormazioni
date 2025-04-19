import { NextResponse } from "next/server";
import { db } from "../../../lib/db";


// Funzione per ottenere tutti i post
export async function GET() { 
  try {
    const result = await db.query("SELECT * FROM posts");
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
  }

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
     const result = await db.query(
      "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
      [body.title, body.content]
    );
  
      // Salva il post in un file o in un database (simulato qui con un array)
      return NextResponse.json({ message: "Post added successfully", post: result.rows[0] },{ status: 201 });
    } catch (error) {
      return NextResponse.json({ error: "Failed to add post" },{ status: 500 });
    }
  }