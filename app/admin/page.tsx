export default function Admin() {
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
        Área Administrativa
      </h1>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginBottom: '1rem' 
      }}>
        <a href="/admin/Book/new" style={{ 
          color: 'white', 
          fontSize: '1.5rem', 
          textDecoration: 'none', 
          border: '1px solid white', 
          padding: '0.5rem 1rem', 
          borderRadius: '0.5rem', 
          marginBottom: '1rem' 
        }}>
          Cadastrar Livros
        </a>
        <a href="/admin/Book" style={{ 
          color: 'white', 
          fontSize: '1.5rem', 
          textDecoration: 'none', 
          border: '1px solid white', 
          padding: '0.5rem 1rem', 
          borderRadius: '0.5rem' 
        }}>
          Listar Livros
        </a>
      </div>
      </div>
  )
}
