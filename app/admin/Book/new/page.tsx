import { sql } from "@vercel/postgres";

export const revalidate = 0

export default function NewBook({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){
    
    const urlImage = searchParams?.url || '';

    async function saveBook(formData: FormData){
        "use server"
        const titulo = formData.get("titulo") as string;
        const autor = formData.get("autor") as string;
        const num_paginas = formData.get("num_paginas") as string;
        await sql`INSERT INTO book (titulo, autor, num_paginas) VALUES(${titulo}, ${autor}, ${num_paginas})`
        console.log("Acessou a função")
    }
    return (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh', 
          backgroundColor: '#3d3d3d' 
        }}>
        <h1 style={{ 
          color: 'white', 
          fontSize: '2rem', 
          marginBottom: '1rem' 
        }}>
          Cadastrar Livros
        </h1>
        <form style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '1rem' 
        }}>
            <input type="text" name="titulo" placeholder="Digite o título do livro"/>
            <input type="text" name="autor" placeholder="Digite o autor do livro"/>
            <input type="text" name="num_paginas" placeholder="Digite o número de páginas do livro"/>
            <button formAction={saveBook} style={{ 
              backgroundColor: '#32CD32', 
              color: 'white', 
              padding: '0.5rem 1rem', 
              borderRadius: '0.5rem', 
              border: 'none', 
              cursor: 'pointer' 
            }}>
              Salvar
            </button>
        </form>
        </div>
    )
}
