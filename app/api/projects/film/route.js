import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 🔹 Rota para buscar os projetos (GET)
export async function GET() {
  try {
    const { data, error } = await supabase.from("film_content").select("*");

    if (error) throw error;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 🔹 Rota para inserir novos projetos (POST)
export async function POST(req) {
  try {
    const { videoid, title, description, media, roles } = await req.json();

    if (!videoid || !title || !description) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("film_content")
      .insert([{ videoid, title, description, media, roles }]);

    if (error) throw error;

    return NextResponse.json(
      { message: "Projeto adicionado com sucesso!", data },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
