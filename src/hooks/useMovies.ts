import useSWR from 'swr';
import { MoviesResponse, Movie } from '../types';

const fetcher = (url: string): Promise<MoviesResponse> =>
  fetch(url).then((res) => res.json());

export const useMovies = () => {
  const swrOptions = {
    dedupingInterval: 60000,
    revalidateOnFocus: false,
    revalidateIfStale: false
  };

  const { data, error } = useSWR<MoviesResponse>(
    'https://swapi.dev/api/films/',
    fetcher,
    swrOptions
  );

  // Transform movies to include an id field (extracted from the URL)
  const sortedMovies: Movie[] | undefined = data?.results
    ? [...data.results]
        .map(movie => ({
          ...movie,
          // Extract the last non-empty segment (if url exists) or fall back to episode_id
          id: movie.url ? movie.url.split('/').filter(Boolean).pop()! : movie.episode_id.toString(),
        }))
        .sort((a, b) => a.episode_id - b.episode_id)
    : undefined;

  return {
    movies: sortedMovies,
    isLoading: !error && !data,
    isError: error,
  };
};
