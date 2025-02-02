export interface Movie {
  id: string;
  title: string;
  episode_id: number;
  opening_crawl: string;
  release_date: string;
  url: string;
}

export interface MoviesResponse {
  results: Movie[];
} 