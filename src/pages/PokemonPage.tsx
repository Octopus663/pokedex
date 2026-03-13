import { useParams, Link } from 'react-router-dom';
import { usePokemon } from '../features/pokemons/hooks/usePokemon';
import { useFavoritesStore } from '../features/pokemons/store/useFavoritesStore';

export const PokemonPage = () => {
  const { name } = useParams<{ name: string }>();
  const { data: pokemon, isLoading, isError } = usePokemon(name);
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  if (isLoading) return <div className="flex justify-center items-center h-[60vh] animate-pulse">Завантаження...</div>;
  if (isError || !pokemon) return <div className="text-center py-20">Покемона не знайдено</div>;

  const fav = isFavorite(pokemon.name);

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <Link to="/" className="inline-flex items-center text-slate-400 hover:text-red-500 mb-8 transition-colors font-medium">
        ← Повернутися до списку
      </Link>

      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-12 flex flex-col items-center justify-center relative">
            <button 
              onClick={() => toggleFavorite(pokemon.name)}
              className={`absolute top-8 right-8 p-4 rounded-2xl shadow-lg transition-all active:scale-90 ${
                fav ? 'bg-yellow-400 text-white' : 'bg-white text-slate-300 hover:text-slate-400'
              }`}
            >
              ⭐
            </button>
            <img 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} 
              className="w-64 h-64 drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] transition-transform hover:scale-110 duration-500"
            />
            <h1 className="text-5xl font-black text-slate-800 capitalize mt-6">{pokemon.name}</h1>
          </div>

          <div className="p-12">
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-50 p-4 rounded-2xl text-center">
                <span className="block text-xs font-bold text-slate-400 uppercase mb-1">Висота</span>
                <span className="text-xl font-black text-slate-700">{pokemon.height * 10} см</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl text-center">
                <span className="block text-xs font-bold text-slate-400 uppercase mb-1">Вага</span>
                <span className="text-xl font-black text-slate-700">{pokemon.weight / 10} кг</span>
              </div>
            </div>

            <h3 className="text-lg font-black text-slate-800 uppercase tracking-tighter mb-6">Характеристики</h3>
            <div className="space-y-5">
              {pokemon.stats.map((s) => (
                <div key={s.stat.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase">{s.stat.name}</span>
                    <span className="text-xs font-bold text-slate-700">{s.base_stat} / 255</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-500 rounded-full transition-all duration-1000" 
                      style={{ width: `${(s.base_stat / 255) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};