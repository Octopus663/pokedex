import axios from 'axios';
import type { PokemonDetail } from '../types';

export const getPokemonByName = async (name: string): Promise<PokemonDetail> => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
};