import React, { useEffect } from 'react';
import { Modal } from './Modal';
import { Movie } from '../types';
import { CharacterGrid } from '@/components/CharacterGrid';
import { useMovieNavigation } from '../hooks/useMovieNavigation';
import { handleKeyboardNavigation } from '../utils/keyboardNavigation';

interface MovieModalProps {
  movie: Movie;
  movies: Movie[];
  onClose: () => void;
}

export const MovieModal = ({ movie, movies, onClose }: MovieModalProps) => {
  const {
    currentMovie,
    handlePrev,
    handleNext,
    prevMovie,
    nextMovie
  } = useMovieNavigation(movie, movies);

  return (
    <>
      <Modal isOpen={true} onClose={onClose}>
        <article
          tabIndex={0}
          onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => handleKeyboardNavigation(e, handlePrev, handleNext)}
          style={{ maxHeight: 'min(95vh, 1061.5px)', display: 'flex', flexDirection: 'column', padding: '0' }}
        >
          {/* Header */}
          <header className="modal-container">
            <button aria-label="Close" rel="prev" onClick={onClose}></button>
            <hgroup>
              <h2>{currentMovie.title}</h2>
              <p>Episode: {currentMovie.episode_id}</p>
            </hgroup>
          </header>

          {/* Scrollable container */}
          <div
            className="modal-container"
            style={{ overflowY: 'auto', flexGrow: 1, paddingBlock: 'var(--pico-block-spacing-vertical)' }}
          >
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
            style={{ flexShrink: 0, display: 'flex', justifyContent: 'space-between', gap: 'var(--pico-grid-column-gap)' }}
          >
            <button onClick={handlePrev} disabled={!prevMovie} style={{ flex: 1, maxWidth: '331px', paddingInline: 0, margin: 0 }}>
              ← {prevMovie?.title}
            </button>

            <button onClick={handleNext} disabled={!nextMovie} style={{ flex: 1, maxWidth: '331px', paddingInline: 0, margin: 0 }}>
              {nextMovie?.title} →
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