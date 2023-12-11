// Importa a função sql do pacote @vercel/postgres
import { sql } from "@vercel/postgres";

// Exporta a função padrão Cart
export default async function Cart({
  // A função recebe um objeto como parâmetro que tem uma propriedade params
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  // Seleciona todos os livros da tabela book no banco de dados
  const { rows } = await sql`SELECT * from book `;

  // Retorna um elemento div que lista os livros
  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.titulo}
        </div>
      ))}
    </div>
  );
}
