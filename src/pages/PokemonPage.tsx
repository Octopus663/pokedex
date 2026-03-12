import { useParams, Link } from 'react-router-dom';
import { usePokemon } from '../features/pokemons/hooks/usePokemon';

export const PokemonPage = () => {
  const { name } = useParams<{ name: string }>(); 
  
  const { data: pokemon, isLoading, isError } = usePokemon(name);

  if (isLoading) return <h2 style={{ textAlign: 'center' }}>Шукаємо покемона...</h2>;
  if (isError) return <h2 style={{ textAlign: 'center', color: 'red' }}>Покемон втік!</h2>;
  if (!pokemon) return null;

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <Link to="/" style={{ display: 'block', marginBottom: '20px', color: 'blue', textDecoration: 'none' }}>
        Повернутися до списку
      </Link>
      
      <h1 style={{ textTransform: 'capitalize', fontSize: '32px' }}>{pokemon.name}</h1>
      
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
        style={{ width: '200px', height: '200px', backgroundColor: '#f0f0f0', borderRadius: '50%' }} 
      />
      
      <div style={{ marginTop: '20px', textAlign: 'left', background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <p><strong>Зріст:</strong> {pokemon.height * 10} см</p>
        <p><strong>Вага:</strong> {pokemon.weight / 10} кг</p>
        <h3>Характеристики:</h3>
        <ul>
          {pokemon.stats.map((s) => (
            <li key={s.stat.name} style={{ textTransform: 'capitalize' }}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};