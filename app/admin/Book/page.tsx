import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate = 0

export default async function ListBook() {
    async function deleteBook(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from book where id=${id}`
        revalidatePath("/admin/book")
    }
    const { rows } = await sql`SELECT * from book`;
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
