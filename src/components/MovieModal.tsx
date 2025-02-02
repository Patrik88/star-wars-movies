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
    <>
      <Modal isOpen={true} onClose={onClose}>
        <article
          tabIndex={0}
          onKeyDown={handleKeyDown}
          style={{ maxHeight: '95vh', display: 'flex', flexDirection: 'column', padding: '0' }}
        >
          {/* Header */}
          <header className="modal-container">
            <button aria-label="Close" rel="prev" onClick={onClose}></button>
            <hgroup>
              <h2>{currentMovie.title}</h2>
              <p>Episode: {currentMovie.episode_id}</p>
            </hgroup>
          </header>

          {/* Wrap movie details and character section in a scrollable container */}
          <div
            className="modal-container"
            style={{ overflowY: 'auto', flexGrow: 1, paddingBlock: 'var(--pico-block-spacing-vertical)' }}>
            {/* Movie Details */}
            <p>{currentMovie.opening_crawl}</p>
            <p>Released: {currentMovie.release_date}</p>

            {/* Characters Section */}
            <section style={{ marginTop: '20px' }}>
              <h3>Characters</h3>
              <CharacterGrid characterUrls={currentMovie.characters} />
            </section>
          </div>

          {/* Next/Previous Navigation */}
          <footer
            className="modal-container"
            style={{
              flexShrink: 0, display: 'flex', justifyContent: 'space-between',

            }}>
            <button onClick={handlePrev} disabled={!prevMovie}>
              {prevMovie ? `← ${prevMovie.title}` : 'No Previous'}
            </button>
            <button onClick={handleNext} disabled={!nextMovie}>
              {nextMovie ? `${nextMovie.title} →` : 'No Next'}
            </button>
          </footer>
        </article>
      </Modal>

      <style jsx>{`
      .modal-container {
        padding-inline: var(--pico-block-spacing-horizontal);
        padding-block: var(--pico-block-spacing-vertical);
        margin: 0;
      }
    `}</style>
    </>
  );
}; 