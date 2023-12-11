// Importa a função sql do pacote @vercel/postgres e a função revalidatePath do pacote next/cache
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

// Exporta uma constante chamada revalidate com valor 0
export const revalidate = 0

// Exporta a função padrão ListBook
export default async function ListBook() {
    // Define uma função assíncrona chamada deleteBook
    async function deleteBook(formData: FormData){
        // Usa o servidor
        "use server"
        // Recupera o valor de id do formData
        const id = formData.get("id") as string;
        // Deleta o livro com o id correspondente da tabela book no banco de dados
        await sql`DELETE from book where id=${id}`
        // Revalida o caminho "/admin/book"
        revalidatePath("/admin/book")
    }
    // Seleciona todos os livros da tabela book no banco de dados
    const { rows } = await sql`SELECT * from book`;
    // Retorna um elemento div com uma tabela que lista os livros
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
              Lista de Livros
            </h1>

            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              border: '1px solid #ccc' 
            }}>
                <thead>
                    <tr> 
                      <td style={{ 
                        border: '1px solid #ccc', 
                        padding: '1rem', 
                        color: 'black' 
                      }}>Título </td> 
                      <td style={{ 
                        border: '1px solid #ccc', 
                        padding: '1rem', 
                        color: 'black' 
                      }}>Autor</td> 
                      <td style={{ 
                        border: '1px solid #ccc', 
                        padding: '1rem', 
                        color: 'black' 
                      }}>Número de Páginas</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Mapeia cada livro para uma linha da tabela
                        rows.map((book) => {
                            return (
                                <tr key={book.id}>
                                  <td style={{ 
                                    border: '1px solid #ccc', 
                                    padding: '1rem', 
                                    color: 'black' 
                                  }}>{book.titulo}</td> 
                                  <td style={{ 
                                    border: '1px solid #ccc', 
                                    padding: '1rem', 
                                    color: 'black' 
                                  }}>{book.autor}</td> 
                                  <td style={{ 
                                    border: '1px solid #ccc', 
                                    padding: '1rem', 
                                    color: 'black' 
                                  }}>{book.num_paginas}</td>
                                  <td style={{ 
                                    border: '1px solid #ccc', 
                                    padding: '1rem', 
                                    color: 'black' 
                                  }}>
                                    <form >
                                      <input type="text" hidden name="id" value={book.id}/>   
                                      <button className="text-red-700" formAction={deleteBook} style={{ 
                                        backgroundColor: '#f44336', 
                                        color: 'white', 
                                        padding: '0.5rem 1rem', 
                                        borderRadius: '0.5rem', 
                                        border: 'none', 
                                        cursor: 'pointer' 
                                      }}>Excluir</button>
                                    </form>
                                  </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
