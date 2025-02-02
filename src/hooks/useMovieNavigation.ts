import { useState } from 'react';
import { Movie } from '../types';

export const useMovieNavigation = (initialMovie: Movie, movies: Movie[]) => {
  const [currentMovie, setCurrentMovie] = useState(initialMovie);
  const currentIndex = movies.findIndex(m => m.id === currentMovie.id);

  const prevMovie = currentIndex > 0 ? movies[currentIndex - 1] : null;
  const nextMovie = currentIndex < movies.length - 1 ? movies[currentIndex + 1] : null;

  const handlePrev = () => {
    if (prevMovie) {
      setCurrentMovie(prevMovie);
      const params = new URLSearchParams(window.location.search);
      params.set('movie', prevMovie.id);
      window.history.replaceState({}, '', `?${params.toString()}`);
    }
  };

  const handleNext = () => {
    if (nextMovie) {
      setCurrentMovie(nextMovie);
      const params = new URLSearchParams(window.location.search);
      params.set('movie', nextMovie.id);
      window.history.replaceState({}, '', `?${params.toString()}`);
    }
  };

  return {
    currentMovie,
    handlePrev,
    handleNext,
    prevMovie,
    nextMovie
  };
}; 