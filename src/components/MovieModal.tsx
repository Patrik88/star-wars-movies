import React, { useState, useEffect, useRef } from 'react';
import { Modal } from './Modal';
import { Movie } from '../types';
import { CharacterGrid } from '@/components/CharacterGrid';

interface MovieModalProps {
  movie: Movie;
  movies: Movie[];
  onClose: () => void;
}

export const MovieModal = ({ movie, movies, onClose }: MovieModalProps) => {
  // Manage the currently displayed movie (for next/prev navigation)
  const [currentMovie, setCurrentMovie] = useState(movie);

  // NOTE: SWR caches data globally by default, so movie data fetched on the home page is automatically available here without refetching.

  // Find the index of the current movie within the list
  const currentIndex = movies.findIndex(m => m.id === currentMovie.id);

  // Determine previous and next movies if available
  const prevMovie = currentIndex > 0 ? movies[currentIndex - 1] : null;
  const nextMovie = currentIndex < movies.length - 1 ? movies[currentIndex + 1] : null;

  // Handlers for navigation buttons
  const handlePrev = () => {
    if (prevMovie) {
      setCurrentMovie(prevMovie);
    }
  };

  const handleNext = () => {
    if (nextMovie) {
      setCurrentMovie(nextMovie);
    }
  };

  // Allow arrow key navigation within the modal
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  // Restore focus to the triggering element when closing the modal
  useEffect(() => {
    const activeElement = document.activeElement as HTMLElement;
    return () => {
      if (activeElement) {
        activeElement.focus();
      }
    };
  }, []);

  return (
    <Modal isOpen={true} onClose={onClose}>
      <article
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* Header */}
        <header>
          <button aria-label="Close" rel="prev" onClick={onClose}></button>
          <hgroup>
            <h2>{currentMovie.title}</h2>
            <p>Episode: {currentMovie.episode_id}</p>
          </hgroup>
        </header>

        {/* Movie Details */}
        <p>{currentMovie.opening_crawl}</p>
        <p>Released: {currentMovie.release_date}</p>

        {/* Characters Section */}
        <section style={{ marginTop: '20px' }}>
          <h3>Characters</h3>
          <CharacterGrid characterUrls={currentMovie.characters} />
        </section>

        {/* Next/Previous Navigation */}
        <footer style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button onClick={handlePrev} disabled={!prevMovie}>
            {prevMovie ? `← ${prevMovie.title}` : 'No Previous'}
          </button>
          <button onClick={handleNext} disabled={!nextMovie}>
            {nextMovie ? `${nextMovie.title} →` : 'No Next'}
          </button>
        </footer>
      </article>
    </Modal>
  );
}; 