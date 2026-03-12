import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePokemons } from '../features/pokemons/hooks/usePokemons';

export const HomePage = () => {
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isError } = usePokemons(offset);

  if (isLoading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Завантаження покемонів...</h2>;
  if (isError) return <h2 style={{ textAlign: 'center', color: 'red' }}>Помилка!</h2>;

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Енциклопедія Покемонів</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data?.results.map((pokemon) => (
          <li key={pokemon.name} style={{ borderBottom: '1px solid #eee' }}>
            <Link 
              to={`/pokemon/${pokemon.name}`} 
              style={{ 
                display: 'block', 
                padding: '15px', 
                textTransform: 'capitalize', 
                fontSize: '18px', 
                textDecoration: 'none', 
                color: 'blue' 
              }}
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={() => setOffset((p) => Math.max(0, p - 20))} disabled={offset === 0}>Назад</button>
        <button onClick={() => setOffset((p) => p + 20)} disabled={!data?.next}>Вперед</button>
      </div>
    </div>
  );
};