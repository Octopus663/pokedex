import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePokemons } from '../features/pokemons/hooks/usePokemons';
import { useFavoritesStore } from '../features/pokemons/store/useFavoritesStore';

export const HomePage = () => {
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isError } = usePokemons(offset);
  const favorites = useFavoritesStore((state) => state.favorites);

  if (isLoading) return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
    </div>
  );

  if (isError) return <div className="text-center text-red-500 py-20">Помилка завантаження даних...</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl font-black text-slate-800 uppercase tracking-widest">
          Енциклопедія Покемонів
        </h1>
        <div className="text-sm text-slate-500 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
          Знайдено: <span className="font-bold text-slate-800">{data?.count}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.results.map((pokemon) => {
          const isFav = favorites.includes(pokemon.name);
          
          return (
            <Link 
              key={pokemon.name}
              to={`/pokemon/${pokemon.name}`}
              className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col items-center"
            >
              {isFav && (
                <div className="absolute top-4 right-4 text-yellow-400 drop-shadow-sm">⭐</div>
              )}

              <span className="absolute top-4 left-6 text-slate-100 font-black text-4xl group-hover:text-slate-200 transition-colors">
                #
              </span>
              
              <span className="text-xl font-bold capitalize text-slate-700 mt-4 group-hover:text-red-600 transition-colors">
                {pokemon.name}
              </span>
              
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-slate-400 uppercase tracking-tighter">
                View Details
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-8 mt-16">
        <button 
          onClick={() => setOffset((p) => Math.max(0, p - 20))}
          disabled={offset === 0}
          className="px-8 py-3 bg-white text-slate-600 font-bold rounded-2xl shadow-sm border border-slate-200 disabled:opacity-30 hover:bg-slate-50 transition-all active:scale-95"
        >
          ← Назад
        </button>
        <span className="text-slate-400 font-mono text-sm">
          Сторінка {offset / 20 + 1}
        </span>
        <button 
          onClick={() => setOffset((p) => p + 20)}
          disabled={!data?.next}
          className="px-8 py-3 bg-slate-800 text-white font-bold rounded-2xl shadow-lg hover:bg-slate-900 transition-all active:scale-95 disabled:opacity-30"
        >
          Вперед →
        </button>
      </div>
    </div>
  );
};