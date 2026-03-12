import { useQuery } from '@tanstack/react-query';
import { getPokemonByName } from '../api/getPokemonByName';

export const usePokemon = (name: string | undefined) => {
  return useQuery({
    queryKey: ['pokemon', name], 
    queryFn: () => getPokemonByName(name!),
    enabled: !!name,
  });
};