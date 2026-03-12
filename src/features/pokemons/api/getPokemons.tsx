import axios from 'axios';
import type { PokemonListResponse } from '../types';

export const getPokemons = async (offset = 0): Promise<PokemonListResponse> => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
  return response.data;
};