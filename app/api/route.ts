import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    const newPost = await prisma.post.create({
      data:{
        title:body.title,
        content: body.content
      },
    });

    // Salva il post in un file o in un database (simulato qui con un array)
    return NextResponse.json({ message: "Post added successfully", post: newPost },{ status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add post" },{ status: 500 });
  }
}

// Funzione per ottenere tutti i post
export async function GET() { try {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts, { status: 200 });
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

    // Aggiorna il post nel database
    const updatedPost = await prisma.post.update({
      where: { id: body.id },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return NextResponse.json(
      { message: "Post updated successfully", post: updatedPost },
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

   // Elimina il post dal database
   const deletedPost = await prisma.post.delete({
    where: { id },
  });

    return NextResponse.json(
      { message: "Post deleted successfully", post: deletedPost[0] },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}

