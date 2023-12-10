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
        <div>
        <h1 className="text-white text-center text-4xl">Cadastrar Livros</h1>
            <form>
                <input type="text" name="titulo" placeholder="Digite o título do livro"/><br/><br/>
                <input type="text" name="autor" placeholder="Digite o autor do livro"/> <br/><br/>
                <input type="text" name="num_paginas" placeholder="Digite o número de páginas do livro"/> <br/><br/>
                <br/>
                
                <button  formAction={saveBook} className="text-lime-950">Salvar</button>
            </form>
            </div>

    )
}
