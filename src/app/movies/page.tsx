import { Movie } from "@/types/movie";
import { getMovies } from "../utils/movies";
import MoviesContent from "../components/MoviesContent";

const Movies = async () => {
  const movies: Movie[] = await getMovies();
  return <MoviesContent movies={movies}></MoviesContent>;
};

export default Movies;
