export interface Movie {
  id: string;
  title: string;
  episode_id: number;
  opening_crawl: string;
  release_date: string;
  url: string;
  characters: string[];
}

export interface MoviesResponse {
  results: Movie[];
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
} 