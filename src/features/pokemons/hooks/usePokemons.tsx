import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '../api/getPokemons';

export const usePokemons = (offset: number) => {
  return useQuery({
    queryKey: ['pokemons', offset], 
    queryFn: () => getPokemons(offset),
  });
};