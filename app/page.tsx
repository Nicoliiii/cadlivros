export default function Home() {
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
        Aplicação de Livros
      </h1>
      <a href="/admin" style={{ 
        color: 'white', 
        fontSize: '1.5rem', 
        textDecoration: 'none', 
        border: '1px solid white', 
        padding: '0.5rem 1rem', 
        borderRadius: '0.5rem' 
      }}>
        CLIQUE AQUI PARA ENTRAR NO SISTEMA
      </a>
    </div>
  )
}
