import Head from "next/head";
import { useMovies } from '@/hooks/useMovies';
import { MovieCard } from "@/components/MovieCard";
import { MovieCardSkeleton } from "@/components/MovieCardSkeleton";
export default function Home() {
  const { movies, isLoading, isError } = useMovies();

  return (
    <>
      <Head>
        <title>My Star Wars App</title>
      </Head>

      <main>
        <h1>Welcome to My Star Wars App</h1>

        <div className="grid">
          {/* Skeleton */}
          {/* {!isLoading && Array.from({ length: 6 }).map((_, index) => ( */}
          {isLoading && !movies && Array.from({ length: 6 }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}

          {/* Error */}
          {isError && <div>Error loading movies. Please try again later.</div>}

          {/* Movies */}
          {!isLoading && !isError && movies && movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </>
  );
}
