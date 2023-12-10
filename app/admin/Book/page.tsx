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
          justifyContent: 'flex-end', 
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
              color: 'black', 
              borderCollapse: 'collapse' 
            }}>
                <thead>
                    <tr> 
                      <td style={{ border: '1px solid black', padding: '0.5rem' }}>Título</td> 
                      <td style={{ border: '1px solid black', padding: '0.5rem' }}>Autor</td> 
                      <td style={{ border: '1px solid black', padding: '0.5rem' }}>Número de Páginas</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((book) => {
                            return (
                                <tr key={book.id}>
                                  <td style={{ border: '1px solid black', padding: '0.5rem' }}>{book.titulo}</td> 
                                  <td style={{ border: '1px solid black', padding: '0.5rem' }}>{book.autor}</td> 
                                  <td style={{ border: '1px solid black', padding: '0.5rem' }}>{book.num_paginas}</td>
                                  <td>
                                    <form>
                                      <input type="text" hidden name="id" value={book.id}/>   
                                      <button formAction={deleteBook} style={{ 
                                        backgroundColor: '#FF0000', 
                                        color: 'white', 
                                        padding: '0.5rem 1rem', 
                                        borderRadius: '0.5rem', 
                                        border: 'none', 
                                        cursor: 'pointer' 
                                      }}>
                                        Excluir
                                      </button>
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
