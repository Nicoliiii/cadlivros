import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate = 0;

export default async function ListBook() {
  const deleteBook = async (id: string) => {
    await sql`DELETE from book where id=${id}`;
    revalidatePath("/admin/book");
  };

  const { rows } = await sql`SELECT * from book`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl p-8">
        <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">
          Lista de Livros
        </h1>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Título</th>
              <th className="border border-gray-300 p-2">Autor</th>
              <th className="border border-gray-300 p-2">Número de Páginas</th>
              <th className="border border-gray-300 p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((book) => (
              <tr key={book.id}>
                <td className="border border-gray-300 p-2">{book.titulo}</td>
                <td className="border border-gray-300 p-2">{book.autor}</td>
                <td className="border border-gray-300 p-2">{book.num_paginas}</td>
                <td className="border border-gray-300 p-2">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      deleteBook(book.id);
                    }}
                  >
                    <input type="hidden" name="id" value={book.id} />
                    <button
                      type="submit"
                      className="text-red-700"
                    >
                      Excluir
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
