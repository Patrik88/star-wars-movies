import { Movie } from "../types";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <article key={movie.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ flex: 1 }}>
        <hgroup>
          <h2>{movie.title}</h2>
          <p>Episode {movie.episode_id}</p>
        </hgroup>

        <hr />

        <p>{movie.opening_crawl.substring(0, 150)}...</p>
      </div>

      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="outline">View Details</button>

        <small style={{ flex: 1, textAlign: 'center', color: 'var(--pico-muted-color)' }}>
          <span>Released: </span>
          <time dateTime={movie.release_date}>{movie.release_date}</time>
        </small>
      </footer>
    </article>
  );
};
