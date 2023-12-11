import React, { useState } from 'react';

export default function Admin() {
    const [hoverNew, setHoverNew] = useState(false);
    const [hoverList, setHoverList] = useState(false);

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
          gap: '1rem' 
        }}>
          <a 
            href="/admin/Book/new" 
            style={{ 
              color: hoverNew ? '#32CD32' : 'black', 
              fontSize: '1.5rem', 
              textDecoration: 'none', 
              border: '1px solid black', 
              padding: '0.5rem 1rem', 
              borderRadius: '0.5rem', 
              marginBottom: '1rem',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={() => setHoverNew(true)}
            onMouseLeave={() => setHoverNew(false)}
          >
            Cadastrar Livros
          </a>
          <a 
            href="/admin/Book" 
            style={{ 
              color: hoverList ? '#32CD32' : 'black', 
              fontSize: '1.5rem', 
              textDecoration: 'none', 
              border: '1px solid black', 
              padding: '0.5rem 1rem', 
              borderRadius: '0.5rem',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={() => setHoverList(true)}
            onMouseLeave={() => setHoverList(false)}
          >
            Listar Livros
          </a>
        </div>
        </div>
    )
}
