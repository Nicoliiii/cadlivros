// Importa a função sql do pacote @vercel/postgres
import { sql } from "@vercel/postgres";

// Exporta uma constante chamada revalidate com valor 0
export const revalidate = 0

// Exporta a função padrão NewBook
export default function NewBook({
    // A função recebe um objeto como parâmetro que pode ter uma propriedade searchParams
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){
    
    // Define a constante urlImage. Se searchParams existir e tiver uma propriedade url, urlImage será igual a url. Caso contrário, será uma string vazia.
    const urlImage = searchParams?.url || '';

    // Define uma função assíncrona chamada saveBook
    async function saveBook(formData: FormData){
        // Usa o servidor
        "use server"
        // Recupera os valores de titulo, autor e num_paginas do formData
        const titulo = formData.get("titulo") as string;
        const autor = formData.get("autor") as string;
        const num_paginas = formData.get("num_paginas") as string;
        // Insere esses valores em uma tabela book no banco de dados
        await sql`INSERT INTO book (titulo, autor, num_paginas) VALUES(${titulo}, ${autor}, ${num_paginas})`
        // Registra a mensagem "Acessou a função" no console
        console.log("Acessou a função")
    }
    // Retorna um elemento div com um formulário para cadastrar livros
    return (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh', 
          backgroundColor: 'white' 
        }}>
        <h1 style={{ 
          color: 'black', 
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
            <input type="text" name="titulo" placeholder="Digite o título do livro" style={{ 
              color: 'black', 
              fontSize: '1rem', 
              padding: '0.5rem', 
              borderRadius: '0.5rem', 
              border: '1px solid black', 
              marginBottom: '1rem' 
            }}/>
            <input type="text" name="autor" placeholder="Digite o autor do livro" style={{ 
              color: 'black', 
              fontSize: '1rem', 
              padding: '0.5rem', 
              borderRadius: '0.5rem', 
              border: '1px solid black', 
              marginBottom: '1rem' 
            }}/>
            <input type="text" name="num_paginas" placeholder="Digite o número de páginas do livro" style={{ 
              color: 'black', 
              fontSize: '1rem', 
              padding: '0.5rem', 
              borderRadius: '0.5rem', 
              border: '1px solid black', 
              marginBottom: '1rem' 
            }}/>
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
