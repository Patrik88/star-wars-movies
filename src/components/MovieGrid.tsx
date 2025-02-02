import React from 'react';
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from './MovieCard';
import { MovieCardSkeleton } from './MovieCardSkeleton';

export const MovieGrid = () => {
  const { movies, isLoading, isError } = useMovies();
  return (
    <div className="grid">

      {isLoading && !movies && Array.from({ length: 6 }).map((_, index) => (
        <MovieCardSkeleton key={index} />
      ))}

      {isError && <div>Error loading movies. Please try again later.</div>}

      {!isLoading && !isError && movies && movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
