import { Movie } from "@/types/movie";
import axios from "axios";

const getMovies = async () => {
  let movies = { data: [] };
  movies = await axios.get(
    `http://${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_PORT_NUMBER}/api/movies/`
  );
  return movies.data as Movie[];
};

const getMovie = async (movie_id: string) => {
  let movie = { data: null };
  movie = await axios.get(
    `http://${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_PORT_NUMBER}/api/movies/${movie_id}`
  );
  return movie.data as unknown as Movie;
};

export { getMovies, getMovie };
