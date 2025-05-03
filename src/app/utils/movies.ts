import { Movie } from "@/types/movie";
import axios from "axios";
import { toast } from "react-toastify";

const getMovies = async () => {
  let movies = { data: [] };
  try {
    movies = await axios.get(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_PORT_NUMBER}/api/movies/`
    );
  } catch (error: unknown) {
    toast.error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
  return movies.data as Movie[];
};

const getMovie = async (movie_id: string) => {
  let movie = { data: null };
  try {
    movie = await axios.get(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_PORT_NUMBER}/api/movies/${movie_id}`
    );
  } catch (error: unknown) {
    toast.error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
  return movie.data as unknown as Movie;
};

export { getMovies, getMovie };
