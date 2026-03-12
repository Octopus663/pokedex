// src/App.tsx
import { useState } from 'react';
import { usePokemons } from './features/pokemons/hooks/usePokemons';

function App() {
  const [offset, setOffset] = useState(0);

  const { data, isLoading, isError } = usePokemons(offset);

  if (isLoading) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Завантаження покемонів... ⏳</h2>;
  } else if (isError) {
    return <h2 style={{ textAlign: 'center', color: 'red' }}>Сталася помилка при завантаженні! ❌</h2>;
  }

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Енциклопедія Покемонів</h1>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data?.results.map((pokemon) => (
          <li 
            key={pokemon.name}
            style={{ 
              padding: '15px', 
              borderBottom: '1px solid #eee', 
              textTransform: 'capitalize',
              fontSize: '18px'
            }}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button 
          onClick={() => setOffset((prev) => Math.max(0, prev - 20))}
          disabled={offset === 0}
          style={{ padding: '10px 20px', cursor: offset === 0 ? 'not-allowed' : 'pointer' }}
        >
          Назад
        </button>
        <button 
          onClick={() => setOffset((prev) => prev + 20)}
          disabled={!data?.next}
          style={{ padding: '10px 20px', cursor: !data?.next ? 'not-allowed' : 'pointer' }}
        >
          Вперед
        </button>
      </div>
    </div>
  );
}

export default App;