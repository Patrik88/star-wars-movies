import useSWR from 'swr';
import { MoviesResponse } from '../types';

const fetcher = (url: string): Promise<MoviesResponse> =>
  fetch(url).then((res) => res.json());

export const useMovies = () => {
  const { data, error } = useSWR<MoviesResponse>(
    'https://swapi.dev/api/films/',
    fetcher
  );

  // Safely copy and sort the movies without mutating the original data
  const sortedMovies = data?.results
    ? [...data.results].sort((a, b) => a.episode_id - b.episode_id)
    : undefined;

  return {
    movies: sortedMovies,
    isLoading: !error && !data,
    isError: error,
  };
};
