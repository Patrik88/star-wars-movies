import Head from "next/head";
import { useMovies } from '@/hooks/useMovies';
import { MovieCard } from "@/components/MovieCard";
import { MovieCardSkeleton } from "@/components/MovieCardSkeleton";
import { useRouter } from 'next/router';
import { MovieModal } from '@/components/MovieModal';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export default function Home() {
  const { movies, isLoading, isError } = useMovies();
  const router = useRouter();
  const modalMovieId = router.query.movie; // The query parameter (movie id)

  // Find the movie corresponding to the query parameter
  const selectedMovie = movies?.find(movie => movie.id === modalMovieId);

  const closeModal = () => {
    router.replace("/", undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>My Star Wars App</title>
      </Head>

      <main>
        <h1>Welcome to My Star Wars App</h1>

        <div className="grid">
          {/* Skeleton */}
          {/* {isLoading && !movies && Array.from({ length: 6 }).map((_, index) => ( */}
          {!isLoading && Array.from({ length: 6 }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}

          {/* Error */}
          {isError && <div>Error loading movies. Please try again later.</div>}

          {/* Movies */}
          {!isLoading && !isError && movies && movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Conditional Modal Rendering based on query parameter */}
        {modalMovieId && selectedMovie && movies && (
          <ErrorBoundary
            onCaughtError={(error, info) => {
              console.error("Caught error in MovieModal:", error, info);
            }}
            onUncaughtError={(error) => {
              console.error("Uncaught error in MovieModal:", error);
            }}
          >
            <MovieModal
              movie={selectedMovie}
              movies={movies}
              onClose={closeModal}
            />
          </ErrorBoundary>
        )}
      </main>
    </>
  );
}
